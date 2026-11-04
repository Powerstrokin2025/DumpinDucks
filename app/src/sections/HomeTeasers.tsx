// Homepage doorway cards. Point folks at the mission, the facts, and the lifestyle.

import { Link } from 'react-router'

type Card = {
  title: string
  blurb: string
  img: string
  alt: string
  href: string
  cta: string
  contain?: boolean
}

const learn: Card[] = [
  {
    title: 'About Us',
    blurb: "Who we are, why pet ducks keep showing up at park ponds, and what we're doing about it.",
    img: '/images/mallards-sunset.webp',
    alt: 'Wild mallards flying over a wetland at golden hour',
    href: '/about',
    cta: 'Why We Exist',
  },
  {
    title: 'Duck Facts',
    blurb: 'Real duck facts, plus answers to the questions people actually ask us.',
    img: '/images/art-nomo-2.webp',
    alt: "Don't Dump No Mo' badge artwork of ducks on open water at dusk",
    href: '/facts',
    cta: 'Learn Something',
    contain: true,
  },
  {
    title: 'Lifestyle',
    blurb: 'The hunting side of the flock. The Predator Line, season dates, and the Concerned Care ’en Club.',
    img: '/images/art-predator-1.webp',
    alt: "Tejas Baja Blastin' artwork of an ATV jumping a hill with coyotes",
    href: '/lifestyle',
    cta: 'Get Outside',
    contain: true,
  },
]

function CardGrid({ cards }: { cards: Card[] }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      {cards.map((c) => (
        <Link
          key={c.href}
          to={c.href}
          className="group flex flex-col overflow-hidden rounded-3xl border-[3px] border-ink bg-white shadow-[6px_6px_0_#2d2926] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[10px_10px_0_#2d2926]"
        >
          <div className="relative h-52 overflow-hidden border-b-[3px] border-ink bg-butter/40 halftone">
            <img
              src={c.img}
              alt={c.alt}
              loading="lazy"
              className={`h-full w-full transition-transform duration-500 group-hover:scale-105 ${
                c.contain ? 'object-contain p-5' : 'object-cover'
              }`}
            />
          </div>
          <div className="flex flex-1 flex-col p-6">
            <h3 className="font-display text-xl uppercase">{c.title}</h3>
            <p className="mt-2 flex-1 text-sm font-semibold text-ink/70">{c.blurb}</p>
            <span className="mt-4 inline-block self-start rounded-full border-2 border-ink bg-sun px-5 py-2 font-display text-xs uppercase shadow-[3px_3px_0_#2d2926] transition-colors group-hover:bg-flame group-hover:text-cream">
              {c.cta} →
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default function HomeTeasers() {
  return (
    <section className="bg-cream/85 py-20 backdrop-blur-[2px] sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <p className="font-western text-xl text-dusk">Get to know us</p>
          <h2 className="mt-2 font-display text-4xl uppercase headline-shadow sm:text-5xl">
            Start <span className="text-flame">Here</span>
          </h2>
        </div>
        <CardGrid cards={learn} />
      </div>
    </section>
  )
}
