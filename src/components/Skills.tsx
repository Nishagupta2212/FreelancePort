import { foundations, skillGroups } from '../data/portfolio'
import { Icon } from './Icon'
import { SectionHeading } from './SectionHeading'

export function Skills() {
  return (
    <section id="skills" className="section section-alt" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          id="skills-title"
          eyebrow="Skills"
          title="Tools I've used to build real projects."
          intro="Learned through coursework and applied in the projects below."
        />

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="card skill-card reveal" key={group.title}>
              <div className="skill-card-head">
                <span className="icon-tile" aria-hidden="true">
                  <Icon name={group.icon} size={20} />
                </span>
                <h3>{group.title}</h3>
              </div>
              <ul className="badge-list" aria-label={group.title}>
                {group.skills.map((skill) => (
                  <li className="badge" key={skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="foundations reveal">
          <span>Core concepts</span>
          <ul className="badge-list" aria-label="Core concepts">
            {foundations.map((item) => (
              <li className="badge badge-ghost" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
