import { useState } from 'react'

const facts = [
  {
    title: 'Ducks sleep with one eye open',
    fact:
      'Ducks can sleep with half their brain awake, one side resting while the other watches for trouble. The ducks on the edge of the flock stand guard, then they rotate.',
    wink: 'Built-in night watch.',
  },
  {
    title: 'A mallard can hit 55 mph',
    fact:
      'In level flight a mallard cruises at 40 to 55 mph, and faster with a tailwind. That is why you lead them.',
    wink: 'Lead the bird.',
  },
  {
    title: 'Drakes don\u2019t quack',
    fact:
      'That classic quack is the hens. Male mallards make a quiet, raspy sound instead. The females do the talking and the drakes stand around looking good with the green heads.',
    wink: 'We don\u2019t make the rules. Nature did.',
  },
  {
    title: 'The ruddy duck is... gifted',
    fact:
      'The ruddy duck drake is known in the bird world for a corkscrew-shaped appendage longer than his whole body. Yes, that is why the wine stopper looks like that. No, we are not taking questions.',
    wink: 'Nature\u2019s party trick.',
  },
  {
    title: 'Waterproof is a lifestyle',
    fact:
      'Ducks spend hours working oil from a gland near the tail into their feathers. That is what makes water roll right off, and where the saying comes from.',
    wink: 'Let it roll.',
  },
  {
    title: 'Coots aren\u2019t even ducks',
    fact:
      'The American coot isn\u2019t a duck at all. It\u2019s a rail, with lobed toes instead of webbed feet, and it runs across the water to take off. It hangs out with ducks and most people never notice.',
    wink: 'Not a duck. Still welcome.',
  },
]

export default function DuckFacts() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="duck-facts" className="relative bg-cream/85 py-20 pt-32 backdrop-blur-[2px] sm:py-28 sm:pt-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-14 text-center">
          <p className="font-western text-xl text-flame">Duck facts</p>
          <h2 className="mt-2 font-display text-4xl uppercase text-ink sm:text-6xl">
            Duck <span className="text-flame">Facts</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-semibold text-ink/70">
            Real facts about real ducks. Tap a card to open it. Questions people ask us are further down the page.
          </p>
        </div>

        <div className="grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {facts.map((f, i) => {
            const isOpen = open === i
            return (
              <button
                key={f.title}
                onClick={() => setOpen(isOpen ? null : i)}
                className={`flex flex-col rounded-3xl border-[3px] border-ink p-6 text-left shadow-[6px_6px_0_#2d2926] transition-all duration-300 hover:-translate-y-1 ${
                  isOpen ? 'bg-butter' : 'bg-white/60'
                } ${i % 3 === 1 ? 'lg:-rotate-1' : i % 3 === 2 ? 'lg:rotate-1' : ''}`}
              >
                <div className="flex w-full items-start justify-between gap-3">
                  <h3 className="font-display text-lg leading-snug uppercase">{f.title}</h3>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-ink font-display transition-transform duration-300 ${
                      isOpen ? 'rotate-45 bg-flame text-cream' : 'bg-sun'
                    }`}
                  >
                    +
                  </span>
                </div>
                <div
                  className={`grid w-full transition-all duration-300 ${
                    isOpen ? 'mt-3 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm font-semibold text-ink/80">{f.fact}</p>
                    <p className="mt-3 inline-block rounded-full bg-dusk px-3 py-1 font-display text-xs text-cream uppercase">
                      {f.wink}
                    </p>
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        <p className="mt-10 text-center text-sm font-bold tracking-wide text-ink/50 uppercase">
          Tap a card to read it.
        </p>
      </div>
    </section>
  )
}
