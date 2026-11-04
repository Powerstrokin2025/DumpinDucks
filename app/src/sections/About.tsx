import BlobButton from '@/components/BlobButton'
import { contactMailto } from '@/config'

const pillars = [
  {
    title: "Don't dump 'em in parks",
    body: 'Every spring, people buy ducklings. By summer they’re full-grown and a lot of them end up at the city park. Domestic ducks can’t fly, can’t forage, and can’t outrun a dog. A park pond isn’t a retirement plan for a pet duck. It’s where it dies.',
  },
  {
    title: 'Re-home, don’t abandon',
    body: 'Got a duck you can’t keep? There are people who want it. Backyard flocks, farm ponds, feed-store regulars, sanctuaries. We help you find them so the duck ends up somewhere it can live.',
  },
  {
    title: 'Hunting funds the habitat',
    body: 'Legal, in-season hunting is conservation. Since 1934 the Federal Duck Stamp has raised over a billion dollars for wetlands. We come at this from both sides: the blind and the backyard.',
  },
]

export default function About() {
  return (
    <section id="about" className="bg-dawn/90 py-20 pt-32 text-ink backdrop-blur-[2px] sm:py-28 sm:pt-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="font-western text-xl text-dusk">Okay, quick serious moment</p>
            <h2 className="mt-2 font-display text-4xl uppercase headline-shadow sm:text-6xl">
              About <span className="text-flame">Us</span>
            </h2>
            <p className="mt-6 text-lg font-semibold text-ink/80">
              We keep it funny around here, gold chains and all. But the thing that got us started
              isn't funny. People buy domestic ducks and leave them at parks when the novelty wears
              off. Those ducks aren't wild. They can't fly away, they can't feed themselves, and
              most of them don't last the summer.
            </p>
            <p className="mt-4 text-lg font-semibold text-ink/80">
              So that's the job. Teach people what a duck needs before they buy one. Help owners
              re-home the ones they can't keep. Put what the store earns into duck rescue and
              wetland conservation.
            </p>
            <div className="mt-8">
              <BlobButton href={contactMailto()} color="dusk">
                Email Us
              </BlobButton>
            </div>
          </div>

          <div className="relative">
            <img
              src="/images/mallards-sunset.webp"
              alt="Wild mallards flying over a wetland at golden hour"
              className="w-full rotate-2 rounded-3xl border-[3px] border-ink object-cover shadow-[10px_10px_0_rgba(0,0,0,0.35)] transition-transform duration-500 hover:rotate-0"
            />
            <span className="absolute -bottom-4 -left-4 -rotate-3 rounded-full border-[3px] border-ink bg-sun px-4 py-2 font-display text-xs text-ink uppercase shadow-[3px_3px_0_#2d2926]">
              Wild ducks fly. Pet ducks get dumped.
            </span>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`rounded-3xl border-[3px] border-ink bg-cream p-6 transition-transform duration-300 hover:-translate-y-1 ${
                i === 1 ? 'md:-rotate-1' : i === 2 ? 'md:rotate-1' : ''
              }`}
            >
              <h3 className="font-display text-xl text-dusk uppercase">{p.title}</h3>
              <p className="mt-3 text-sm font-semibold text-ink/75">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
