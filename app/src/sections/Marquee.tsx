import { cn } from '@/lib/utils'

interface MarqueeProps {
  items: string[]
  className?: string
  reverse?: boolean
}

export default function Marquee({ items, className, reverse }: MarqueeProps) {
  const row = [...items, ...items, ...items]
  return (
    <div
      className={cn(
        'relative overflow-hidden border-y-[3px] border-ink py-3 select-none',
        className,
      )}
    >
      <div
        className={cn(
          'flex w-max animate-marquee items-center gap-8 whitespace-nowrap',
          reverse && '[animation-direction:reverse]',
        )}
      >
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center gap-8" aria-hidden={half === 1}>
            {row.map((item, i) => (
              <span
                key={`${half}-${i}`}
                className="flex items-center gap-8 font-display text-lg tracking-wide uppercase"
              >
                {item}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" />
                </svg>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
