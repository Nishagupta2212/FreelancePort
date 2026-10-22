// Small inline icon set (Lucide-style strokes) to avoid an icon dependency.
const paths = {
  arrowUpRight: 'M7 17 17 7M8 7h9v9',
  arrowDown: 'M12 5v14m0 0 6-6m-6 6-6-6',
  download: 'M12 4v11m0 0 4.5-4.5M12 15l-4.5-4.5M5 19h14',
  mail: 'M4 6h16v12H4zM4 7l8 6 8-6',
  menu: 'M4 7h16M4 12h16M4 17h16',
  close: 'M6 6l12 12M18 6 6 18',
  check: 'M5 12.5 10 17l9-10',
  send: 'M21 3 10 14M21 3l-7 18-4-7-7-4z',
  lock: 'M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3',
  code: 'm8 7-5 5 5 5m8-10 5 5-5 5m-3-12-2 14',
  layout: 'M4 4h16v16H4zM4 9h16M9 9v11',
  server: 'M4 4h16v6H4zM4 14h16v6H4zM8 7h.01M8 17h.01',
  database: 'M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zm0 0v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3',
  brain: 'M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 6 0V6a2 2 0 0 0-3-2zm6 0a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-6 0',
  tool: 'M14.5 6.5a4 4 0 0 0-5.3 5.3L4 17l3 3 5.2-5.2a4 4 0 0 0 5.3-5.3l-2.6 2.6-2.4-.6-.6-2.4z',
  monitor: 'M3 4h18v12H3zM8 20h8M12 16v4',
  react: 'M12 12h.01M12 3c2 0 3.5 4 3.5 9s-1.5 9-3.5 9-3.5-4-3.5-9S10 3 12 3zM4.2 7.5c1-1.7 5.3-1 9.6 1.5s7 6 6 7.5-5.3 1-9.6-1.5-7-6-6-7.5zm15.6 0c1 1.7-1.7 5-6 7.5s-8.6 3.2-9.6 1.5 1.7-5 6-7.5 8.6-3.2 9.6-1.5z',
  bug: 'M9 7V5a3 3 0 0 1 6 0v2M7 9h10v5a5 5 0 0 1-10 0zM3 13h4m10 0h4M4 8l3 2m13-2-3 2M4 19l3-2m13 2-3-2M12 9v10',
  plug: 'M9 3v5m6-5v5M6 8h12v3a6 6 0 0 1-12 0zM12 17v4',
  terminal: 'M4 4h16v16H4zM8 9l3 3-3 3m5 0h3',
  message: 'M4 5h16v11H8l-4 4z',
  target: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm0 4a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2z',
  list: 'M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01',
  sparkle: 'M12 3v4m0 10v4M3 12h4m10 0h4M6 6l2.5 2.5m7 7L18 18M6 18l2.5-2.5m7-7L18 6',
  flag: 'M5 21V4h11l-2 4 2 4H5',
  mapPin: 'M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z',
  graduation: 'M2 9l10-5 10 5-10 5zM6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5M22 9v6',
} as const

export type IconName = keyof typeof paths | 'github' | 'linkedin'

type IconProps = { name: IconName; size?: number; className?: string }

export function Icon({ name, size = 18, className }: IconProps) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    'aria-hidden': true,
    focusable: false,
    className,
  }

  if (name === 'github') {
    return (
      <svg {...common} fill="currentColor">
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
      </svg>
    )
  }

  if (name === 'linkedin') {
    return (
      <svg {...common} fill="currentColor">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
      </svg>
    )
  }

  return (
    <svg {...common} fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <path d={paths[name]} />
    </svg>
  )
}
