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
      className={`absolute h-3 w-3 rounded-full ${className}`}
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
        <div className="relative ml-auto w-full max-w-[300px] rotate-[1.5deg] sm:max-w-sm">
          {/* Stake going down into the sand */}
          <div
            aria-hidden
            className="absolute -bottom-9 left-1/2 h-14 w-4 -translate-x-1/2 rounded-b-sm border-x-2 border-b-2 border-[#3d2716]"
            style={post}
          />
          <div aria-hidden className="absolute -bottom-11 left-1/2 h-3 w-20 -translate-x-1/2 rounded-full bg-black/25 blur-sm" />

          <div className="relative rounded-md px-5 py-5 sm:px-6 sm:py-6" style={plank}>
            <Nail className="top-3 left-3" />
            <Nail className="top-3 right-3" />
            <Nail className="bottom-3 left-3" />
            <Nail className="right-3 bottom-3" />

            <p className="font-western text-sm text-[#4a2e1a] sm:text-base">Texas Duck Conservation Crew</p>

            <h1 className="mt-1 font-display text-[1.6rem] leading-[0.95] text-[#2d1d12] uppercase sm:text-[2.1rem]">
              Don't dump <span className="text-dusk">'em in</span> parks.
            </h1>

            <p className="mt-3 text-[13px] leading-snug font-bold text-[#3a2616] sm:text-sm">
              Every spring, thousands of pet ducks get left at park ponds in Texas. They can't fly
              and they can't feed themselves, so most of them don't make it. We're a crew of
              hunters and duck people trying to stop that.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <BlobButton href="/report" color="dusk" className="px-4 py-2 text-xs">
                Report a Dumped Duck
              </BlobButton>
              <BlobButton href="/about" color="cream" className="px-4 py-2 text-xs">
                Why We Do This
              </BlobButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
