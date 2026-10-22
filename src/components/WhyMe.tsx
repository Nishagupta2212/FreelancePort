import { workPrinciples } from '../data/portfolio'
import { Icon } from './Icon'
import { SectionHeading } from './SectionHeading'

const principleIcons = ['message', 'target', 'list', 'sparkle', 'flag'] as const

export function WhyMe() {
  return (
    <section id="why" className="section" aria-labelledby="why-title">
      <div className="container why-grid">
        <div className="why-intro">
          <SectionHeading
            id="why-title"
            eyebrow="Why work with me"
            title="Reliable, transparent and easy to work with."
            intro="I'm at the start of my career, so I put extra care into communication and getting the details right."
          />
          <a className="btn btn-primary reveal" href="#contact">
            Let's Work Together <Icon name="arrowUpRight" size={16} />
          </a>
        </div>

        <ol className="principles">
          {workPrinciples.map((item, index) => (
            <li className="reveal" key={item.title}>
              <span className="icon-tile" aria-hidden="true">
                <Icon name={principleIcons[index % principleIcons.length]} size={20} />
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
