import BlobButton from '@/components/BlobButton'

// Weathered cedar plank. Grain, a darker damp lower edge, and a warm
// wash from the right so it picks up the same sunrise light as the photo.
const plank = {
  backgroundColor: '#b98a5c',
  backgroundImage: [
    // sunrise light hitting the board from behind and to the right
    'linear-gradient(255deg, rgba(255,176,140,0.38) 0%, rgba(255,176,140,0.08) 45%, transparent 70%)',
    // fine grain
    'repeating-linear-gradient(178deg, rgba(80,48,26,0.20) 0px, rgba(80,48,26,0.20) 1px, transparent 1px, transparent 8px)',
    // wider grain bands
    'repeating-linear-gradient(181deg, rgba(255,235,210,0.08) 0px, rgba(255,235,210,0.08) 2px, transparent 2px, transparent 21px)',
    // knot
    'radial-gradient(ellipse 8% 4% at 90% 86%, rgba(70,42,22,0.45), transparent 70%)',
    // damp, darker bottom
    'linear-gradient(180deg, rgba(255,230,200,0.12) 0%, transparent 40%, rgba(60,36,18,0.28) 100%)',
  ].join(', '),
  boxShadow:
    'inset 0 0 0 2px rgba(60,36,18,0.55), inset 0 2px 0 rgba(255,220,190,0.35), inset 0 -8px 14px rgba(50,30,15,0.30), 0 14px 24px rgba(20,12,8,0.30)',
  transform: 'perspective(1000px) rotateY(-9deg) rotate(1deg)',
  transformOrigin: 'bottom center',
}

const postStyle = {
  backgroundColor: '#6f4a30',
  backgroundImage: [
    'linear-gradient(90deg, rgba(255,190,150,0.0) 0%, rgba(255,190,150,0.25) 70%, rgba(30,18,10,0.35) 100%)',
    'repeating-linear-gradient(180deg, rgba(30,18,10,0.25) 0px, rgba(30,18,10,0.25) 1px, transparent 1px, transparent 7px)',
  ].join(', '),
}

function Nail({ className }: { className: string }) {
  return (
    <span
      aria-hidden
      className={`absolute h-2 w-2 rounded-full sm:h-2.5 sm:w-2.5 ${className}`}
      style={{
        background: 'radial-gradient(circle at 35% 35%, #c9b8a6, #5d4636 75%)',
        boxShadow: '0.5px 1px 0 rgba(0,0,0,0.4)',
      }}
    />
  )
}

function Post({ className }: { className: string }) {
  return (
    <span
      aria-hidden
      className={`absolute top-1/2 w-2.5 rounded-sm sm:w-3.5 ${className}`}
      style={postStyle}
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
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-dawn/70" />

      {/* The sign, planted in the sand on the right */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-28 pb-16 sm:px-6 sm:pb-24">
        <div className="relative ml-auto w-full max-w-[210px] sm:mr-8 sm:max-w-sm">
          {/* Shadow the sign casts toward the camera (sun is behind it) */}
          <div
            aria-hidden
            className="absolute -bottom-12 left-[-6%] h-10 w-[112%] rounded-[50%] sm:-bottom-16 sm:h-16"
            style={{
              background: 'radial-gradient(ellipse at 50% 30%, rgba(40,24,20,0.6), rgba(40,24,20,0.25) 55%, transparent 75%)',
              filter: 'blur(6px)',
            }}
          />

          {/* Two posts behind the board, running down into the sand */}
          <Post className="left-[18%] h-[calc(50%+2.75rem)] sm:h-[calc(50%+4rem)]" />
          <Post className="right-[18%] h-[calc(50%+2.5rem)] sm:h-[calc(50%+3.75rem)]" />

          {/* Wet sand and foam piled around the base of the posts */}
          <div
            aria-hidden
            className="absolute -bottom-12 left-[8%] h-7 w-[84%] sm:-bottom-[4.25rem] sm:h-10"
            style={{
              background: [
                'radial-gradient(ellipse 22% 60% at 20% 55%, rgba(236,224,220,0.95), rgba(236,224,220,0) 70%)',
                'radial-gradient(ellipse 20% 55% at 80% 55%, rgba(236,224,220,0.95), rgba(236,224,220,0) 70%)',
                'radial-gradient(ellipse 50% 45% at 50% 70%, rgba(150,120,112,0.55), rgba(150,120,112,0) 75%)',
                'radial-gradient(ellipse 14% 40% at 35% 40%, rgba(255,240,236,0.8), rgba(255,240,236,0) 70%)',
                'radial-gradient(ellipse 14% 40% at 66% 45%, rgba(255,240,236,0.75), rgba(255,240,236,0) 70%)',
              ].join(', '),
              filter: 'blur(1.5px)',
            }}
          />

          <div className="relative rounded-[3px] px-4 py-4 sm:px-6 sm:py-6" style={plank}>
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
