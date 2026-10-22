import { profile } from '../data/portfolio'
import { Icon } from './Icon'

export function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="status-pill">
            <span className="status-dot" aria-hidden="true" />
            Available for freelance projects &amp; entry-level roles
          </p>

          <h1 id="hero-title">
            Hi, I'm <span className="gradient-text">{profile.name}.</span>
          </h1>
          <p className="hero-lead">
            I build useful web applications and explore intelligent software solutions.
          </p>
          <p className="hero-sub">
            {profile.roles.join(' · ')}. I turn requirements into clean, responsive and user-friendly
            software — and I pick up new tools quickly when a problem needs them.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View My Projects <Icon name="arrowDown" size={16} />
            </a>
            <a className="btn btn-outline" href="#contact">
              Contact Me
            </a>
          </div>

          <div className="hero-links">
            <a href={profile.github} target="_blank" rel="noreferrer">
              <Icon name="github" size={18} /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Icon name="linkedin" size={17} /> LinkedIn
            </a>
            <a href={profile.resume} download="Nisha_Kumari_Resume.pdf">
              <Icon name="download" size={18} /> Resume (PDF)
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="code-card">
            <div className="code-card-top">
              <span />
              <span />
              <span />
              <b>nisha.ts</b>
            </div>
            <pre>
              <code>
                <span className="tk-key">const</span> developer = {'{'}
                {'\n'}  name: <span className="tk-str">'Nisha Kumari'</span>,
                {'\n'}  degree: <span className="tk-str">'B.Tech IT, 2026'</span>,
                {'\n'}  builds: [<span className="tk-str">'web apps'</span>, <span className="tk-str">'ML models'</span>],
                {'\n'}  stack: [<span className="tk-str">'React'</span>, <span className="tk-str">'Node'</span>, <span className="tk-str">'Python'</span>],
                {'\n'}  openTo: <span className="tk-str">'freelance work'</span>,
                {'\n'}{'}'}
                {'\n'}
                {'\n'}<span className="tk-fn">ship</span>(developer)<span className="caret">▍</span>
              </code>
            </pre>
          </div>
          <div className="float-chip chip-a">
            <Icon name="code" size={16} /> Web development
          </div>
          <div className="float-chip chip-b">
            <Icon name="brain" size={16} /> Machine learning
          </div>
        </div>
      </div>
    </section>
  )
}
