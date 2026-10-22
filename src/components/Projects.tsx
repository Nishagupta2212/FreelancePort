import { profile, projects, type Project } from '../data/portfolio'
import { Icon } from './Icon'
import { ProjectVisual } from './ProjectVisual'
import { SectionHeading } from './SectionHeading'

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card project-card reveal">
      <div className={`project-visual pv-bg-${project.visual}`} aria-hidden="true">
        <ProjectVisual type={project.visual} />
      </div>

      <div className="project-body">
        <div className="project-meta">
          <span className="project-category">{project.category}</span>
          {project.demo && <span className="live-tag">Live</span>}
        </div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>

        <ul className="feature-list">
          {project.features.map((feature) => (
            <li key={feature}>
              <Icon name="check" size={16} />
              {feature}
            </li>
          ))}
        </ul>

        <ul className="tech-list" aria-label="Technologies used">
          {project.tech.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <div className="project-actions">
          {project.repo && (
            <a className="btn btn-outline btn-sm" href={project.repo} target="_blank" rel="noreferrer">
              <Icon name="github" size={16} /> GitHub
              <span className="sr-only"> repository for {project.name}</span>
            </a>
          )}
          {project.demo && (
            <a className="btn btn-primary btn-sm" href={project.demo} target="_blank" rel="noreferrer">
              Live Demo <Icon name="arrowUpRight" size={16} />
              <span className="sr-only"> of {project.name}</span>
            </a>
          )}
          {project.note && (
            <span className="project-note">
              <Icon name="lock" size={15} /> {project.note}
            </span>
          )}
        </div>
      </div>
    </article>
  )
}

export function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <div className="section-heading-row">
          <SectionHeading
            id="projects-title"
            eyebrow="Featured projects"
            title="Things I've designed, built and shipped."
            intro="Each card links to the real source code. Live demos are listed only where a working deployment exists."
          />
          <a className="text-link reveal" href={profile.github} target="_blank" rel="noreferrer">
            All repositories on GitHub <Icon name="arrowUpRight" size={16} />
          </a>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
