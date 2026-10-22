import { useState, type FormEvent, type ReactNode } from 'react'
import { profile } from '../data/portfolio'
import { Icon } from './Icon'
import { SectionHeading } from './SectionHeading'

// Optional: set VITE_CONTACT_FORM_ENDPOINT (e.g. a Formspree form URL) to send
// messages directly. Without it, the form opens the visitor's email app instead.
const FORM_ENDPOINT = import.meta.env.VITE_CONTACT_FORM_ENDPOINT as string | undefined

const topics = ['Freelance project', 'Internship', 'Full-time role', 'Something else']

type Fields = { name: string; email: string; topic: string; message: string }
type Errors = Partial<Record<keyof Fields, string>>
type Status = { kind: 'idle' | 'sending' | 'success' | 'error' | 'mailto'; message?: string }

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(fields: Fields): Errors {
  const errors: Errors = {}
  if (fields.name.trim().length < 2) errors.name = 'Please enter your name.'
  if (!EMAIL_PATTERN.test(fields.email.trim())) errors.email = 'Please enter a valid email address.'
  if (fields.message.trim().length < 20) errors.message = 'Please write at least 20 characters about what you need.'
  return errors
}

const emptyFields: Fields = { name: '', email: '', topic: topics[0], message: '' }

export function Contact() {
  const [fields, setFields] = useState<Fields>(emptyFields)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>({ kind: 'idle' })
  const [copied, setCopied] = useState(false)

  const update = (key: keyof Fields) => (value: string) => {
    setFields((current) => ({ ...current, [key]: value }))
    if (errors[key]) setErrors((current) => ({ ...current, [key]: undefined }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validate(fields)
    setErrors(nextErrors)
    const firstInvalid = Object.keys(nextErrors)[0]
    if (firstInvalid) {
      document.getElementById(`contact-${firstInvalid}`)?.focus()
      return
    }

    const subject = `${fields.topic} — enquiry from ${fields.name.trim()}`

    if (!FORM_ENDPOINT) {
      const body = `${fields.message.trim()}\n\n— ${fields.name.trim()}\nReply to: ${fields.email.trim()}`
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      setStatus({
        kind: 'mailto',
        message: `Your email app should now open with this message ready to send. If nothing happened, email me directly at ${profile.email}.`,
      })
      return
    }

    setStatus({ kind: 'sending' })
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...fields, _subject: subject, _replyto: fields.email }),
      })
      if (!response.ok) throw new Error(`Request failed with ${response.status}`)
      setFields(emptyFields)
      setStatus({ kind: 'success', message: "Thanks — your message has been sent. I'll get back to you soon." })
    } catch {
      setStatus({
        kind: 'error',
        message: `Sorry, the message couldn't be sent. Please email me directly at ${profile.email}.`,
      })
    }
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section id="contact" className="section section-alt" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <div className="contact-info">
          <SectionHeading
            id="contact-title"
            eyebrow="Contact"
            title="Have a project in mind? Let's talk."
            intro="Tell me what you're building, your timeline and any links that help. I aim to reply within two working days."
          />

          <ul className="contact-links reveal">
            <li>
              <span className="icon-tile" aria-hidden="true">
                <Icon name="mail" size={20} />
              </span>
              <span>
                <small>Email</small>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </span>
              <button type="button" className="copy-btn" onClick={copyEmail}>
                {copied ? 'Copied' : 'Copy'}
              </button>
            </li>
            <li>
              <span className="icon-tile" aria-hidden="true">
                <Icon name="linkedin" size={18} />
              </span>
              <span>
                <small>LinkedIn</small>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  linkedin.com/in/nisha-kumari22
                </a>
              </span>
            </li>
            <li>
              <span className="icon-tile" aria-hidden="true">
                <Icon name="github" size={20} />
              </span>
              <span>
                <small>GitHub</small>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  github.com/Nishagupta2212
                </a>
              </span>
            </li>
          </ul>
        </div>

        <form className="card contact-form reveal" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <Field id="name" label="Your name" error={errors.name}>
              <input
                id="contact-name"
                name="name"
                autoComplete="name"
                value={fields.name}
                onChange={(e) => update('name')(e.target.value)}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'contact-name-error' : undefined}
                required
              />
            </Field>
            <Field id="email" label="Email address" error={errors.email}>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                value={fields.email}
                onChange={(e) => update('email')(e.target.value)}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'contact-email-error' : undefined}
                required
              />
            </Field>
          </div>

          <Field id="topic" label="What is this about?">
            <select id="contact-topic" name="topic" value={fields.topic} onChange={(e) => update('topic')(e.target.value)}>
              {topics.map((topic) => (
                <option key={topic}>{topic}</option>
              ))}
            </select>
          </Field>

          <Field id="message" label="Message" error={errors.message}>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              placeholder="A short description of the project, timeline and budget range…"
              value={fields.message}
              onChange={(e) => update('message')(e.target.value)}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'contact-message-error' : undefined}
              required
            />
          </Field>

          <button className="btn btn-primary btn-block" type="submit" disabled={status.kind === 'sending'}>
            {status.kind === 'sending' ? 'Sending…' : FORM_ENDPOINT ? 'Send Message' : 'Send via Email'}
            <Icon name="send" size={16} />
          </button>

          <p className="form-hint">
            {FORM_ENDPOINT
              ? 'Your details are only used to reply to your message.'
              : 'This opens your email app with your message pre-filled — nothing is sent until you press send there.'}
          </p>

          <p className={`form-status form-status-${status.kind}`} role="status" aria-live="polite">
            {status.message}
          </p>
        </form>
      </div>
    </section>
  )
}

type FieldProps = { id: string; label: string; error?: string; children: ReactNode }

function Field({ id, label, error, children }: FieldProps) {
  return (
    <div className={`field${error ? ' has-error' : ''}`}>
      <label htmlFor={`contact-${id}`}>{label}</label>
      {children}
      {error && (
        <span className="field-error" id={`contact-${id}-error`}>
          {error}
        </span>
      )}
    </div>
  )
}
