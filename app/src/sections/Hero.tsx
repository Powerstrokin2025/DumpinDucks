import BlobButton from '@/components/BlobButton'

// Weathered board look for the sign. Two layers of grain over a warm
// cedar base, plus a darker edge so it reads as a real plank.
const plank = {
  backgroundColor: '#c9965f',
  backgroundImage: [
    'repeating-linear-gradient(178deg, rgba(90,55,30,0.18) 0px, rgba(90,55,30,0.18) 1px, transparent 1px, transparent 9px)',
    'repeating-linear-gradient(181deg, rgba(255,240,215,0.10) 0px, rgba(255,240,215,0.10) 2px, transparent 2px, transparent 23px)',
    'radial-gradient(ellipse 9% 5% at 92% 88%, rgba(90,55,30,0.35), transparent 70%)',
    'linear-gradient(180deg, rgba(255,235,205,0.25), rgba(90,55,30,0.18))',
  ].join(', '),
  boxShadow:
    'inset 0 0 0 3px rgba(70,42,22,0.55), inset 0 -10px 18px rgba(70,42,22,0.25), 8px 10px 0 rgba(30,20,12,0.45)',
}

const post = {
  backgroundColor: '#8a5a3b',
  backgroundImage:
    'repeating-linear-gradient(90deg, rgba(40,25,14,0.25) 0px, rgba(40,25,14,0.25) 1px, transparent 1px, transparent 6px)',
}

function Nail({ className }: { className: string }) {
  return (
    <span
      aria-hidden
      className={`absolute h-2 w-2 rounded-full sm:h-3 sm:w-3 ${className}`}
      style={{ background: 'radial-gradient(circle at 35% 35%, #d8d2c8, #6e675e 70%)', boxShadow: '1px 1px 0 rgba(0,0,0,0.35)' }}
    />
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[92vh] items-end overflow-hidden">
      {/* Matt's sunrise, shown clean. Only a soft fade at the very bottom
          so it blends into the next section */}
      <img
        src="/images/matt-lake.webp"
        alt="Sunrise over a Texas lake shore with sea foam and bare trees"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: '70% 45%' }}
      />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-dawn/80" />

      {/* The sign, planted in the sand on the right */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-28 pb-12 sm:px-6 sm:pb-14">
        <div className="relative ml-auto w-full max-w-[210px] rotate-[1.5deg] sm:max-w-sm">
          {/* Stake going down into the sand */}
          <div
            aria-hidden
            className="absolute -bottom-7 left-1/2 h-10 w-3 sm:-bottom-9 sm:h-14 sm:w-4 -translate-x-1/2 rounded-b-sm border-x-2 border-b-2 border-[#3d2716]"
            style={post}
          />
          <div aria-hidden className="absolute -bottom-8 left-1/2 h-2 w-14 sm:-bottom-11 sm:h-3 sm:w-20 -translate-x-1/2 rounded-full bg-black/25 blur-sm" />

          <div className="relative rounded-md px-4 py-4 sm:px-6 sm:py-6" style={plank}>
            <Nail className="top-2 left-2 sm:top-3 sm:left-3" />
            <Nail className="top-2 right-2 sm:top-3 sm:right-3" />
            <Nail className="bottom-2 left-2 sm:bottom-3 sm:left-3" />
            <Nail className="right-2 bottom-2 sm:right-3 sm:bottom-3" />

            <p className="font-western text-[11px] text-[#4a2e1a] sm:text-base">Texas Duck Conservation Crew</p>

            <h1 className="mt-1 font-display text-[1.2rem] leading-[0.95] text-[#2d1d12] uppercase sm:text-[2.1rem]">
              Don't dump <span className="text-dusk">'em in</span> parks.
            </h1>

            <p className="mt-3 hidden text-sm leading-snug font-bold text-[#3a2616] sm:block">
              Every spring, thousands of pet ducks get left at park ponds in Texas. They can't fly
              and they can't feed themselves, so most of them don't make it. We're a crew of
              hunters and duck people trying to stop that.
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-2 sm:mt-4">
              <BlobButton href="/report" color="dusk" className="px-3 py-1.5 text-[10px] whitespace-nowrap sm:px-4 sm:py-2 sm:text-xs">
                <span className="sm:hidden">Report a Duck</span>
                <span className="hidden sm:inline">Report a Dumped Duck</span>
              </BlobButton>
              <BlobButton href="/about" color="cream" className="hidden px-4 py-2 text-xs sm:inline-flex">
                Why We Do This
              </BlobButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
