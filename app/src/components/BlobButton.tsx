import { Link } from 'react-router'
import { cn } from '@/lib/utils'

interface BlobButtonProps {
  href?: string
  onClick?: () => void
  children: React.ReactNode
  color?: 'flame' | 'sun' | 'dusk' | 'cream'
  className?: string
  external?: boolean
  type?: 'button' | 'submit'
}

const fills: Record<string, string> = {
  flame: '#8a5a3b',
  sun: '#f0c66e',
  dusk: '#6b4c7a',
  cream: '#fff6ea',
}

const textColors: Record<string, string> = {
  flame: 'text-cream',
  sun: 'text-ink',
  dusk: 'text-cream',
  cream: 'text-ink',
}

/** Wobbly organic blob path, the brand's signature button shape */
function BlobPath({ fill }: { fill: string }) {
  return (
    <svg
      viewBox="0 0 220 72"
      preserveAspectRatio="none"
      className="absolute inset-0 h-full w-full transition-transform duration-300 group-hover:scale-[1.04] group-hover:rotate-[-1deg]"
      aria-hidden
    >
      <path
        d="M110 4C150 2 196 6 210 22c12 14 8 32-8 40-22 11-58 8-92 8s-70 3-92-8C2 54-2 36 10 22 24 6 70 6 110 4Z"
        fill={fill}
        stroke="#2d2926"
        strokeWidth="3"
      />
    </svg>
  )
}

export default function BlobButton({
  href,
  onClick,
  children,
  color = 'flame',
  className,
  external,
  type = 'button',
}: BlobButtonProps) {
  const inner = (
    <>
      <BlobPath fill={fills[color]} />
      <span
        className={cn(
          'relative z-10 font-display text-sm tracking-wide uppercase sm:text-base',
          textColors[color],
        )}
      >
        {children}
      </span>
    </>
  )

  const cls = cn(
    'group relative inline-flex items-center justify-center px-8 py-4 transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0',
    className,
  )

  // Internal routes go through the router so the page doesn't fully reload
  if (href?.startsWith('/')) {
    return (
      <Link to={href} onClick={onClick} className={cls}>
        {inner}
      </Link>
    )
  }
  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={cls}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {inner}
      </a>
    )
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {inner}
    </button>
  )
}
