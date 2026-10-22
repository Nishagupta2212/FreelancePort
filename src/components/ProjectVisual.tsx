import type { ProjectVisual as Visual } from '../data/portfolio'

// Decorative, illustrative previews (not screenshots) for each project card.
export function ProjectVisual({ type }: { type: Visual }) {
  switch (type) {
    case 'tasks':
      return (
        <div className="pv pv-tasks">
          {['To do', 'In progress', 'Completed'].map((column, i) => (
            <div className="pv-col" key={column}>
              <b>{column}</b>
              {Array.from({ length: 3 - i }, (_, j) => (
                <span className="pv-task" key={j} />
              ))}
            </div>
          ))}
        </div>
      )
    case 'store':
      return (
        <div className="pv pv-store">
          {['#f59e0b', '#ef4444', '#84cc16', '#f97316'].map((color) => (
            <div className="pv-product" key={color}>
              <i style={{ background: color }} />
              <span />
              <span className="short" />
            </div>
          ))}
        </div>
      )
    case 'model':
      return (
        <div className="pv pv-model">
          <span className="pv-node">8 health<br />inputs</span>
          <span className="pv-arrow">→</span>
          <span className="pv-node pv-node-accent">trained<br />classifier</span>
          <span className="pv-arrow">→</span>
          <span className="pv-node">risk<br />result</span>
        </div>
      )
    case 'auth':
      return (
        <div className="pv pv-auth">
          <div className="pv-form">
            <span className="pv-input" />
            <span className="pv-input" />
            <span className="pv-btn">Sign in</span>
          </div>
          <code>Authorization: Bearer eyJhbGci…</code>
        </div>
      )
    case 'vision':
      return (
        <div className="pv pv-vision">
          <div className="pv-frame">
            <span className="pv-face" />
            <em>mask</em>
          </div>
          <small>webcam · frame-by-frame</small>
        </div>
      )
    case 'contacts':
      return (
        <div className="pv pv-contacts">
          <code>
            1. Add contact{'\n'}2. List contacts{'\n'}3. Search{'\n'}4. Edit / delete
          </code>
        </div>
      )
  }
}
