import type { ReactNode } from 'react'

type SectionHeadingProps = {
  id: string
  eyebrow: string
  title: ReactNode
  intro?: ReactNode
}

export function SectionHeading({ id, eyebrow, title, intro }: SectionHeadingProps) {
  return (
    <div className="section-heading reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  )
}
