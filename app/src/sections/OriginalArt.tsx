// ORIGINAL ART. Matt's sketchbook, polished into sticker-ready art.
// Each piece: the original pencil sketch plus three polished versions.

import { Link } from 'react-router'

const versionLabels = ['Retro Sunset', 'Flat Vector', 'Vintage Stamp']

const artworks = [
  {
    id: 'pairs',
    title: "Dump 'Em in Pairs, Not Parks",
    sketch: '/images/sketch-pairs.webp',
    blurb:
      "The flagship. Matt out front with the ear muffs and the shotgun, ducks cupping in on both sides, and a certain someone flashing the field. His head covers the evidence.",
    tag: 'The flagship',
  },
  {
    id: 'karens',
    title: 'Concerned Care ’en Club',
    sketch: '/images/sketch-karens.webp',
    blurb:
      'Three ducks. Three real concerned haircuts. Zero tolerance for park-dumpers. The official seal of the See Something, Say Something brigade.',
    tag: 'Club Seal',
  },
  {
    id: 'nomo',
    title: "Don't Dump No Mo'",
    sketch: '/images/sketch-nomo.webp',
    blurb:
      "An open-water memorial for the domestics that deserved better. The heart of the whole mission, drawn in one take on a yellow legal pad.",
    tag: 'The Mission Piece',
  },
  {
    id: '3s',
    title: "3's Company",
    sketch: '/images/sketch-3s.webp',
    blurb:
      'One big buck on the hood, a doe front and back, all tied down proper, compound bow arched overhead. Venison Visitors Club on the string.',
    tag: 'Venison Visitors Club',
  },
  {
    id: 'predator',
    title: "Tejas Baja Blastin'",
    sketch: '/images/sketch-predator.webp',
    blurb:
      'The Predator Line debut. An ATV catching air off a dirt hill, coyote in the sights, and a pile of yotes riding the back rack.',
    tag: 'Predator Line',
  },
]

export default function OriginalArt() {
  return (
    <section id="original-art" className="bg-cream/85 py-20 pt-32 backdrop-blur-[2px] sm:py-28 sm:pt-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-14 text-center">
          <p className="font-western text-xl text-flame">From the sketchbook of Matt Daddy Dallas</p>
          <h2 className="mt-2 font-display text-4xl uppercase headline-shadow sm:text-6xl">
            Original <span className="text-flame">Art</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-semibold text-ink/75">
            Every design starts as pencil on paper, sketched and signed by Matt. Then we clean it
            up for stickers and print. Three versions of each. Tell us which one you like.
          </p>
        </div>

        <div className="space-y-16">
          {artworks.map((a, idx) => (
            <article
              key={a.id}
              className={`grid items-center gap-8 lg:grid-cols-12 ${
                idx % 2 === 1 ? '' : ''
              }`}
            >
              {/* Sketch polaroid */}
              <div className={`lg:col-span-4 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div
                  className={`relative mx-auto max-w-xs rounded-lg border-[3px] border-ink bg-white p-3 pb-12 shadow-[8px_8px_0_#2d2926] ${
                    idx % 2 === 1 ? 'rotate-2' : '-rotate-2'
                  } transition-transform duration-300 hover:rotate-0`}
                >
                  <img
                    src={a.sketch}
                    alt={`Matt's original pencil sketch of ${a.title}`}
                    loading="lazy"
                    className="aspect-square w-full rounded-sm object-cover"
                  />
                  <p className="absolute bottom-3 left-0 w-full text-center font-western text-sm text-ink/70">
                    the original sketch · oct 1 '26
                  </p>
                  <span className="absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 -rotate-2 rounded-sm bg-butter/80 shadow-sm" />
                </div>
                <div className="mt-6 text-center lg:text-left">
                  <span className="inline-block -rotate-2 rounded-full border-2 border-ink bg-sun px-3 py-1 font-display text-[11px] uppercase">
                    {a.tag}
                  </span>
                  <h3 className="mt-3 font-display text-2xl uppercase">{a.title}</h3>
                  <p className="mt-2 text-sm font-semibold text-ink/70">{a.blurb}</p>
                </div>
              </div>

              {/* 3 polished versions */}
              <div className={`lg:col-span-8 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="grid grid-cols-3 gap-3 sm:gap-5">
                  {[1, 2, 3].map((v) => (
                    <figure
                      key={v}
                      className="group relative overflow-hidden rounded-3xl border-[3px] border-ink bg-butter/40 halftone p-2 shadow-[8px_8px_0_#2d2926] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[8px_8px_0_#2d2926]"
                    >
                      <img
                        src={a.id === 'karens' && v === 1 ? '/images/art-caren-badge.webp' : `/images/art-${a.id}-${v}.webp`}
                        alt={`${a.title}, version ${v} (${versionLabels[v - 1]})`}
                        loading="lazy"
                        className="aspect-square w-full object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2"
                      />
                      <figcaption className="pb-1 text-center font-display text-[10px] uppercase text-ink/60 sm:text-xs">
                        v{v} · {versionLabels[v - 1]}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-16 max-w-xl text-center text-sm font-bold text-ink/60">
          Stickers are in{' '}
          <Link to="/store" className="text-flame underline">The Duck Blind</Link> now. Hats,
          shirts, and prints are coming.
        </p>
      </div>
    </section>
  )
}
