import { useEffect } from 'react'
import { useSearchParams } from 'react-router'
import BlobButton from '@/components/BlobButton'
import { LINKS } from '@/config'

const subNav = [
  { label: 'Predator Line', id: 'predator' },
  { label: 'Education', id: 'education' },
  { label: 'Care ’en Club', id: 'karens' },
]

export default function Lifestyle() {
  const [params] = useSearchParams()

  // Support /lifestyle?section=predator deep links
  useEffect(() => {
    const s = params.get('section')
    if (s) {
      const t = setTimeout(() => {
        document.getElementById(s)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 150)
      return () => clearTimeout(t)
    }
  }, [params])

  return (
    <section id="lifestyle" className="bg-butter/90 py-20 pt-32 text-ink backdrop-blur-[2px] sm:py-28 sm:pt-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <p className="font-western text-xl text-dusk">The hunting side</p>
          <h2 className="mt-2 font-display text-4xl uppercase headline-shadow sm:text-6xl">
            <span className="text-flame">Lifestyle</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-semibold text-ink/80">
            The other half of the flock. We hunt, we run dogs, and we grew up on dirt roads and
            decoy spreads out of DFW.
          </p>
        </div>

        {/* In-page sub-nav */}
        <div className="mb-14 flex flex-wrap justify-center gap-3">
          {subNav.map((s) => (
            <button
              key={s.id}
              onClick={() =>
                document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
              className="rounded-full border-[3px] border-ink bg-cream px-5 py-2 font-display text-xs text-cream uppercase shadow-[3px_3px_0_rgba(0,0,0,0.4)] transition-all hover:-translate-y-0.5 hover:bg-sun hover:text-ink sm:text-sm"
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Predator Line */}
        <div id="predator" className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2">
          <div className="relative mx-auto w-full max-w-md">
            <div className="rounded-3xl border-[3px] border-ink bg-cream p-6 shadow-[10px_10px_0_rgba(0,0,0,0.35)] halftone">
              <img
                src="/images/art-predator-1.webp"
                alt="Tejas Baja Blastin' artwork: an ATV jumping a hill, hunter aiming at a coyote, pile of coyotes on the back rack"
                loading="lazy"
                className="w-full object-contain transition-transform duration-500 hover:scale-105 hover:-rotate-2"
              />
            </div>
            <span className="absolute -top-4 -right-3 rotate-3 rounded-full border-[3px] border-ink bg-flame px-4 py-2 font-display text-xs text-cream uppercase shadow-[3px_3px_0_#2d2926]">
              Predator Line
            </span>
          </div>
          <div>
            <h3 className="font-display text-3xl uppercase sm:text-4xl">
              Tejas Baja <span className="text-sun">Blastin'</span>
            </h3>
            <p className="mt-4 text-lg font-semibold text-ink/80">
              The first piece in the Predator Line. An ATV catching air off a dirt hill, a coyote
              in the sights, and a pile of yotes strapped to the back rack.
            </p>
            <p className="mt-4 text-lg font-semibold text-ink/80">
              Stickers are in the store now. Shirts and koozies are coming. If your place has a
              coyote problem and a sense of humor, you're our people.
            </p>
          </div>
        </div>

        {/* Education */}
        <div id="education" className="mt-20 scroll-mt-28">
          <div className="mb-8 text-center">
            <h3 className="font-display text-3xl uppercase sm:text-4xl">
              Education <span className="text-butter">Corner</span>
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-base font-semibold text-ink/75">
              The jokes are ours. The dates and rules are Texas Parks and Wildlife's.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border-[3px] border-ink bg-creamdeep p-6 transition-transform duration-300 hover:-translate-y-1">
              <h4 className="font-display text-xl text-dusk uppercase">Respect the Season</h4>
              <p className="mt-3 text-sm font-semibold text-ink/75">
                Not sure what's in season? Check before you go. Texas Parks and Wildlife posts
                every season, limit, and zone.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <BlobButton href={LINKS.tpwdSeasons} external color="dusk" className="px-5 py-2.5 text-sm">
                  TPWD Season Dates
                </BlobButton>
                <BlobButton href={LINKS.tpwdHome} external color="cream" className="px-5 py-2.5 text-sm">
                  tpwd.texas.gov
                </BlobButton>
              </div>
            </div>

            <div className="rounded-3xl border-[3px] border-ink bg-creamdeep p-6 transition-transform duration-300 hover:-translate-y-1">
              <h4 className="font-display text-xl text-dusk uppercase">The Duck Stamp Flex</h4>
              <p className="mt-3 text-sm font-semibold text-ink/75">
                Since 1934 the Federal Duck Stamp has raised over a billion dollars for wetland
                conservation. Hunters have been paying for the habitat longer than most
                conservation groups have existed.
              </p>
              <div className="mt-5">
                <BlobButton href={LINKS.duckStamp} external color="dusk" className="px-5 py-2.5 text-sm">
                  About the Duck Stamp
                </BlobButton>
              </div>
            </div>
          </div>
        </div>

        {/* Care 'en Club */}
        <div id="karens" className="mt-20 scroll-mt-28">
          <div className="grid items-center gap-10 rounded-3xl border-[3px] border-ink bg-cream p-8 text-ink shadow-[10px_10px_0_rgba(0,0,0,0.35)] lg:grid-cols-3">
            <div className="mx-auto w-full max-w-[220px]">
              <img
                src="/images/art-caren-badge.webp"
                alt="Concerned Care ’en Club badge: three ducks with concerned-citizen haircuts"
                loading="lazy"
                className="w-full object-contain transition-transform duration-500 hover:rotate-6"
              />
            </div>
            <div className="lg:col-span-2">
              <p className="font-western text-lg text-flame">Concerned Care ’en Club</p>
              <h3 className="mt-1 font-display text-2xl uppercase sm:text-3xl">
                See Something? Say Something.
              </h3>
              <p className="mt-3 text-base font-semibold text-ink/75">
                See someone leaving a pet duck at the park? Send us a report and we'll try to get
                the bird picked up. See someone shooting out of season or over the limit? That's
                a game warden call. Operation Game Thief takes tips around the clock at{' '}
                <a href={`tel:${LINKS.ogtPhone}`} className="text-flame underline">
                  {LINKS.ogtPhoneDisplay}
                </a>
                .
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <BlobButton href="/report" color="flame" className="px-5 py-2.5 text-sm">
                  Report a Dumped Duck
                </BlobButton>
                <BlobButton href={LINKS.ogt} external color="cream" className="px-5 py-2.5 text-sm">
                  Operation Game Thief
                </BlobButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
