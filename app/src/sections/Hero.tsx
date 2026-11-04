import BlobButton from '@/components/BlobButton'

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[92vh] items-end overflow-hidden">
      {/* The hero is the fixed site background (Matt's lake photo). The
          overlays shade it for text and fade it into the section below */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/20 to-dawn/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-flame/20 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-24 pb-16 sm:px-6 sm:pb-24">
        <p className="mb-4 inline-block -rotate-2 rounded-full border-[3px] border-ink bg-sun px-5 py-1.5 font-display text-sm tracking-widest text-ink uppercase shadow-[4px_4px_0_#2d2926]">
          Texas Duck Conservation Crew
        </p>

        <h1 className="max-w-4xl font-display text-5xl leading-[0.95] text-cream uppercase sm:text-7xl lg:text-8xl">
          Don't dump{' '}
          <span className="text-sun text-stroke-cream headline-shadow">'em in</span>{' '}
          parks.
        </h1>

        <p className="mt-6 max-w-xl text-lg font-semibold text-cream/95 sm:text-xl">
          Every spring, thousands of pet ducks get left at park ponds in Texas. They can't fly
          and they can't feed themselves, so most of them don't make it. We're a crew of hunters
          and duck people trying to stop that.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <BlobButton href="/report" color="sun">
            Report a Dumped Duck
          </BlobButton>
          <BlobButton href="/about" color="cream">
            Why We Do This
          </BlobButton>
        </div>
      </div>
    </section>
  )
}
