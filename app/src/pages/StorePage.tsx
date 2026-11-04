import { useState } from 'react'
import { useSearchParams } from 'react-router'
import { Mail, Clock, BadgePercent } from 'lucide-react'
import Nav from '@/sections/Nav'
import Footer from '@/sections/Footer'
import usePageTitle from '@/hooks/usePageTitle'
import { preorderMailto } from '@/config'
import { CATEGORIES, PRODUCTS, type Category, type Product } from '@/storefront/catalog'

const fmt = (n: number) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })

function ProductCard({ p }: { p: Product }) {
  const contain = p.cat === 'art'
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border-[3px] border-ink bg-cream shadow-[6px_6px_0_#2d2926] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[10px_10px_0_#2d2926]">
      <div className="relative aspect-square overflow-hidden border-b-[3px] border-ink bg-white">
        <span className="absolute top-3 left-3 z-10 -rotate-3 rounded-full border-2 border-ink bg-sun px-3 py-1 font-display text-[11px] uppercase">
          Coming soon
        </span>
        {p.tag && (
          <span className="absolute top-3 right-3 z-10 rotate-3 rounded-full border-2 border-ink bg-flame px-3 py-1 font-display text-[11px] text-cream uppercase">
            {p.tag}
          </span>
        )}
        <img
          src={p.img}
          alt={p.alt}
          loading="lazy"
          className={`h-full w-full transition-transform duration-500 group-hover:scale-105 ${
            contain ? 'object-contain p-6' : 'object-cover'
          }`}
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-display text-lg leading-tight uppercase">{p.name}</h3>
          <span className="shrink-0 font-display text-flame">
            {fmt(p.price)}
            {p.unit && <span className="ml-1 text-xs text-ink/50">{p.unit}</span>}
          </span>
        </div>
        <p className="mt-2 flex-1 text-sm font-semibold text-ink/70">{p.blurb}</p>
        <a
          href={preorderMailto(p.name, p.price)}
          className="mt-4 flex items-center justify-center gap-2 self-start rounded-full border-[3px] border-ink bg-sun px-6 py-3 font-display text-sm uppercase shadow-[4px_4px_0_#2d2926] transition-all hover:bg-flame hover:text-cream active:translate-y-0.5 active:shadow-none"
        >
          <Mail className="h-4 w-4" strokeWidth={2.5} />
          Pre-order
        </a>
      </div>
    </article>
  )
}

export default function StorePage() {
  usePageTitle('The Duck Blind')
  const [params, setParams] = useSearchParams()
  const catParam = params.get('cat') as Category | null
  const [cat, setCat] = useState<Category | 'all'>(catParam ?? 'all')

  const pick = (c: Category | 'all') => {
    setCat(c)
    setParams(c === 'all' ? {} : { cat: c }, { replace: true })
  }

  const items = cat === 'all' ? PRODUCTS : PRODUCTS.filter((p) => p.cat === cat)

  return (
    <div className="min-h-screen">
      <Nav />

      {/* Storefront header */}
      <section className="bg-dawn/90 py-16 pt-32 backdrop-blur-[2px] sm:py-20 sm:pt-36">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
          <p className="font-western text-xl text-dusk">Pre-orders open</p>
          <h1 className="mt-2 font-display text-4xl text-ink uppercase headline-shadow sm:text-6xl">
            The Duck Blind
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-semibold text-ink/75">
            Gear that funds the mission. First run ships soon. Put your name on one now and a
            cut of every order goes to duck rescue and wetland conservation.
          </p>
        </div>
      </section>

      {/* Trust strip */}
      <div className="border-y-[3px] border-ink bg-butter/85 backdrop-blur-[2px]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-4 gap-y-3 px-4 py-4 sm:px-6 lg:grid-cols-3">
          {[
            { icon: Clock, text: 'Pre-order now, ships when the first run lands' },
            { icon: Mail, text: 'No payment until your order is confirmed' },
            { icon: BadgePercent, text: 'A cut of every order funds duck rescue' },
          ].map(({ icon: Icon, text }) => (
            <p
              key={text}
              className="flex items-center justify-center gap-2 text-center text-xs font-extrabold tracking-wide text-ink uppercase"
            >
              <Icon className="h-4 w-4 shrink-0 text-flame" strokeWidth={2.5} />
              {text}
            </p>
          ))}
        </div>
      </div>

      {/* Category tabs + grid */}
      <section className="bg-cream/85 py-16 backdrop-blur-[2px] sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 flex flex-wrap justify-center gap-2.5">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => pick(c.id)}
                className={`rounded-full border-2 border-ink px-5 py-2 font-display text-sm uppercase shadow-[3px_3px_0_#2d2926] transition-all active:translate-y-0.5 active:shadow-none ${
                  cat === c.id ? 'bg-flame text-cream' : 'bg-cream text-ink hover:bg-sun'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="grid items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {items.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>

          <p className="mx-auto mt-12 max-w-xl text-center text-sm font-bold text-ink/60">
            More is on the way. Hats, shirts, and art prints are in the works.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
