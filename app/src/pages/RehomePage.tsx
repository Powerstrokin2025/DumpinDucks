import { Link } from 'react-router'
import Nav from '@/sections/Nav'
import Footer from '@/sections/Footer'
import ContactForm, { type Field } from '@/components/ContactForm'
import usePageTitle from '@/hooks/usePageTitle'

const OPTIONS = [
  {
    title: 'Ask us first',
    body: "Fill out the form and tell us about your duck. We know people with ponds, backyard flocks, and farms who are looking for birds. We'll make the introduction.",
  },
  {
    title: 'Ask a local feed store',
    body: "The folks who sold the ducklings usually know who keeps ducks nearby. Most feed stores have a corkboard or a regular who'll take a healthy bird.",
  },
  {
    title: 'Try a waterfowl rescue or farm sanctuary',
    body: 'Rescues fill up fast in spring, so call before you drive. Tell them the breed, age, and whether the duck is healthy.',
  },
]

const NEVER = [
  "Don't release it at a park, lake, or creek. Domestic ducks can't fly, can't forage, and don't last.",
  "Don't drop it off at a stranger's property. That's still dumping.",
  "Don't wait until it's sick. A healthy duck is easy to place. A sick one isn't.",
]

const FIELDS: Field[] = [
  { name: 'name', label: 'Your name', required: true, half: true },
  { name: 'city', label: 'City', placeholder: 'Fort Worth', required: true, half: true },
  { name: 'email', label: 'Your email', type: 'email', required: true },
  {
    name: 'ducks',
    label: 'About the duck',
    type: 'textarea',
    placeholder: 'How many, breed if you know it, age, male or female, and whether they are healthy',
    required: true,
  },
  {
    name: 'why',
    label: 'Why you need to re-home',
    type: 'textarea',
    rows: 3,
    placeholder: 'Moving, HOA, the kids lost interest. No judgment. It helps us find the right fit.',
  },
]

export default function RehomePage() {
  usePageTitle("Can't Keep Your Duck?")

  return (
    <div className="min-h-screen">
      <Nav />

      <section className="bg-dawn/90 pt-32 pb-16 text-ink backdrop-blur-[2px] sm:pt-36 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="font-western text-xl text-dusk">Re-home, don't dump</p>
          <h1 className="mt-2 font-display text-4xl uppercase headline-shadow sm:text-6xl">
            Can't keep <span className="text-flame">your duck?</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg font-semibold text-ink/80">
            It happens. The ducklings were cute, then they grew up. No shame in it. The only wrong
            move is leaving it at the park.
          </p>
        </div>
      </section>

      <section className="bg-cream/85 py-16 backdrop-blur-[2px] sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="font-western text-xl text-dusk">Where a duck can go</p>
            <h2 className="mt-2 font-display text-3xl uppercase headline-shadow sm:text-4xl">
              Three <span className="text-flame">options</span>
            </h2>
            <ol className="mt-8 grid gap-4">
              {OPTIONS.map((s, i) => (
                <li
                  key={s.title}
                  className="flex gap-4 rounded-2xl border-[3px] border-ink bg-white p-5 shadow-[5px_5px_0_#2d2926]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-sun font-display text-lg shadow-[2px_2px_0_#2d2926]">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-base uppercase">{s.title}</h3>
                    <p className="mt-1 text-sm font-semibold text-ink/70">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-6 rounded-2xl border-[3px] border-ink bg-flame p-5 text-cream shadow-[5px_5px_0_#2d2926]">
              <h3 className="font-display text-lg uppercase">What not to do</h3>
              <ul className="mt-2 grid gap-2 text-sm font-semibold text-ink/85">
                {NEVER.map((n) => (
                  <li key={n} className="flex gap-2">
                    <span className="shrink-0">•</span>
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-6 text-sm font-semibold text-ink/60">
              Found a duck somebody else dumped?{' '}
              <Link to="/report" className="text-flame underline">
                Report it here.
              </Link>
            </p>
          </div>

          <div className="rounded-3xl border-[3px] border-ink bg-white p-6 shadow-[8px_8px_0_#2d2926] sm:p-8">
            <h2 className="font-display text-2xl uppercase">Tell us about your duck</h2>
            <p className="mt-2 mb-6 text-sm font-semibold text-ink/60">
              Goes straight to Matt. He'll reply with who's taking birds near you.
            </p>
            <ContactForm
              formName="Re-homing request"
              fields={FIELDS}
              submitLabel="Find My Duck a Home"
              thanks="Matt has your info. Give him a day or two to check with the folks he knows near you."
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
