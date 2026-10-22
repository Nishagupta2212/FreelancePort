import { profile } from '../data/portfolio'
import { Icon } from './Icon'
import { SectionHeading } from './SectionHeading'

const highlights = [
  { icon: 'graduation', label: profile.education.degree, detail: `${profile.education.school} · ${profile.education.years}` },
  { icon: 'mapPin', label: 'Based in India', detail: 'Working remotely with clients anywhere' },
  { icon: 'sparkle', label: 'Interests', detail: 'Web apps, React interfaces, applied ML' },
] as const

export function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container about-grid">
        <SectionHeading id="about-title" eyebrow="About me" title="Early in my career, serious about the craft." />

        <div className="about-body reveal">
          <p>
            I'm a 2026 B.Tech graduate in Information Technology from Chandigarh University. Over the last
            few years I've built full-stack web apps with React, Node.js and Firebase, and machine-learning
            projects in Python — from a team task manager to a diabetes risk predictor.
          </p>
          <p>
            I like to break a problem into small, testable pieces, understand who will use the result, and
            keep the code readable for the next person. I'm now looking for freelance projects, internships
            and junior roles where I can contribute to meaningful software and keep learning from real work.
          </p>

          <ul className="about-highlights">
            {highlights.map((item) => (
              <li key={item.label}>
                <span className="icon-tile" aria-hidden="true">
                  <Icon name={item.icon} size={20} />
                </span>
                <span>
                  <strong>{item.label}</strong>
                  <small>{item.detail}</small>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
