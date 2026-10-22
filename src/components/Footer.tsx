import { navLinks, profile } from '../data/portfolio'
import { Icon } from './Icon'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a className="brand" href="#home">
            <span className="brand-mark" aria-hidden="true">NK</span>
            <span className="brand-name">{profile.name}</span>
          </a>
          <p>Junior software developer building web applications and exploring AI/ML.</p>
        </div>

        <nav aria-label="Footer">
          <ul className="footer-links">
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-social">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Icon name="github" size={20} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Icon name="linkedin" size={18} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <Icon name="mail" size={20} />
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p>Built with React &amp; TypeScript.</p>
      </div>
    </footer>
  )
}
