import BlobButton from '@/components/BlobButton'

function daysToSeason(): { days: number; inSeason: boolean } {
  const now = new Date()
  const year = now.getFullYear()
  const start = new Date(year, 2, 1) // March 1
  const end = new Date(year, 5, 1) // June 1
  if (now >= start && now < end) return { days: 0, inSeason: true }
  const target = now < start ? start : new Date(year + 1, 2, 1)
  return { days: Math.ceil((target.getTime() - now.getTime()) / 86400000), inSeason: false }
}

export default function DumpingSeason() {
  const { days, inSeason } = daysToSeason()

  return (
    <section className="border-b-[3px] border-ink bg-flame/90 py-16 text-cream backdrop-blur-[2px] sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="font-western text-xl text-sun">Campaign spotlight</p>
          <h2 className="mt-2 font-display text-4xl uppercase headline-shadow sm:text-5xl">
            Spring is <span className="text-coral">dumping season</span>
          </h2>

          <div className="mt-6 flex items-center gap-4">
            <span className="flex h-24 w-24 items-center justify-center rounded-2xl border-[3px] border-ink bg-dusk font-display text-5xl text-cream shadow-[5px_5px_0_rgba(45,41,38,0.6)] sm:h-28 sm:w-28 sm:text-6xl">
              {inSeason ? 'NOW' : days}
            </span>
            <span className="font-display text-sm uppercase leading-snug tracking-wide text-ink/85">
              {inSeason ? (
                <>
                  Dumping season
                  <br />
                  is on
                </>
              ) : (
                <>
                  Days until
                  <br />
                  March 1
                </>
              )}
            </span>
          </div>

          <p className="mt-6 max-w-lg text-lg font-semibold text-ink/80">
            Easter ducklings grow up fast, and by May a lot of them are at the city pond. Our
            biggest push runs March through May. If you see one, tell us. If you have one you
            can't keep, we'll help you place it.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <BlobButton href="/report" color="sun">
              Report a Dumped Duck
            </BlobButton>
            <BlobButton href="/rehome" color="cream">
              Can't Keep Your Duck?
            </BlobButton>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border-[3px] border-ink shadow-[8px_8px_0_rgba(45,41,38,0.6)]">
          <img
            src="/images/mascots-chains.webp"
            alt="A mallard drake and two hens in gold chains standing by a pond"
            loading="lazy"
            className="h-72 w-full object-cover sm:h-96"
          />
        </div>
      </div>
    </section>
  )
}
