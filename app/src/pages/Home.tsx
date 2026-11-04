import Nav from '@/sections/Nav'
import Hero from '@/sections/Hero'
import HomeTeasers from '@/sections/HomeTeasers'
import DumpingSeason from '@/sections/DumpingSeason'
import Mascots from '@/sections/Mascots'
import Footer from '@/sections/Footer'
import BlobButton from '@/components/BlobButton'
import usePageTitle from '@/hooks/usePageTitle'

const pillars = [
  {
    title: "Don't dump 'em in parks",
    body: "A pet duck at a park pond can't fly, can't find food, and can't get away from a dog or a coyote. If you can't keep yours, re-home it.",
  },
  {
    title: 'Respect the season',
    body: 'Legal, in-season hunting pays for the habitat. The Federal Duck Stamp alone has put over a billion dollars into wetlands.',
  },
  {
    title: "Letting it go isn't freeing it",
    body: "A farm-raised duck doesn't know how to be wild. Turning one loose feels kind in the moment and ends badly every time.",
  },
]

export default function Home() {
  usePageTitle()
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />

      {/* Why we exist */}
      <section className="bg-dawn/90 py-20 text-ink backdrop-blur-[2px] sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="font-western text-xl text-dusk">The whole reason we're here</p>
              <h2 className="mt-2 font-display text-4xl uppercase headline-shadow sm:text-5xl">
                Why We <span className="text-flame">Exist</span>
              </h2>
              <p className="mt-4 text-lg font-semibold text-ink/80">
                Every Easter, people buy ducklings. By summer the ducklings are full-grown,
                loud, and messy, and a lot of them end up at the nearest park pond. The owners
                figure the duck will be fine with the wild ones. It won't. Domestic ducks were
                bred to be heavy and flightless. They can't migrate, they can't forage, and they
                can't escape a predator.
              </p>
              <p className="mt-4 text-lg font-semibold text-ink/80">
                Dumpin' Ducks is a group of Texas hunters and duck owners who got tired of
                watching it happen. We teach people what a duck actually needs before they buy
                one, we help owners re-home the ones they can't keep, and we put what the store
                earns back into duck rescue and wetland conservation.
              </p>
              <div className="mt-7">
                <BlobButton href="/about" color="dusk">
                  More About Us
                </BlobButton>
              </div>
            </div>
            <div className="grid gap-4">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className="rounded-2xl border-[3px] border-ink bg-cream p-5 transition-transform duration-300 hover:-translate-y-1"
                >
                  <h3 className="font-display text-lg text-dusk uppercase">{p.title}</h3>
                  <p className="mt-1.5 text-sm font-semibold text-ink/75">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <DumpingSeason />
      <HomeTeasers />
      <Mascots />

      <Footer />
    </div>
  )
}
