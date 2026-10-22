import { services } from '../data/portfolio'
import { Icon } from './Icon'
import { SectionHeading } from './SectionHeading'

export function Services() {
  return (
    <section id="services" className="section section-alt" aria-labelledby="services-title">
      <div className="container">
        <SectionHeading
          id="services-title"
          eyebrow="What I can help with"
          title="Focused, well-scoped work I can deliver."
          intro="A good fit for small businesses, students, founders and teams who need dependable help with the web."
        />

        <div className="services-grid">
          {services.map((service) => (
            <article className="card service-card reveal" key={service.title}>
              <span className="icon-tile" aria-hidden="true">
                <Icon name={service.icon} size={20} />
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
