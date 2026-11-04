import { Link } from 'react-router'
import Nav from '@/sections/Nav'
import Footer from '@/sections/Footer'
import BlobButton from '@/components/BlobButton'
import ContactForm, { type Field } from '@/components/ContactForm'
import { LINKS } from '@/config'
import usePageTitle from '@/hooks/usePageTitle'

const STEPS = [
  {
    title: "Don't chase it into the water",
    body: "Domestic ducks can't fly and they tire out fast. Keep your distance and let it settle.",
  },
  {
    title: 'Note the spot and snap a photo',
    body: 'Park name or address, how many ducks, and anything that looks off. A photo from a distance is plenty.',
  },
  {
    title: 'Send it to us',
    body: "Fill out the form on this page. We'll point you to the nearest rescue or re-homer, or come take a look ourselves if it's close.",
  },
]

const FIELDS: Field[] = [
  { name: 'location', label: 'Park or address', placeholder: 'The pond at Lake Highlands Park', required: true },
  { name: 'city', label: 'City', placeholder: 'Dallas', required: true, half: true },
  { name: 'count', label: 'How many ducks', type: 'select', options: ['1 to 2', '3 to 5', '6 or more'], half: true },
  { name: 'email', label: 'Your email', type: 'email', placeholder: 'So we can follow up', required: true },
  {
    name: 'notes',
    label: 'Anything else',
    type: 'textarea',
    placeholder: 'Colors, behavior, whether one looks hurt, anyone feeding them',
  },
]

export default function ReportPage() {
  usePageTitle('Report a Dumped Duck')

  return (
    <div className="min-h-screen">
      <Nav />

      <section className="bg-dawn/90 pt-32 pb-16 text-ink backdrop-blur-[2px] sm:pt-36 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="font-western text-xl text-dusk">Get involved</p>
          <h1 className="mt-2 font-display text-4xl uppercase headline-shadow sm:text-6xl">
            Found a <span className="text-flame">dumped duck?</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg font-semibold text-ink/80">
            Tell us where it is. We can't catch every duck, but we can get you to the people who
            can.
          </p>
        </div>
      </section>

      <section className="bg-cream/85 py-16 backdrop-blur-[2px] sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
          {/* Left: what to do first */}
          <div>
            <p className="font-western text-xl text-dusk">Before you do anything</p>
            <h2 className="mt-2 font-display text-3xl uppercase headline-shadow sm:text-4xl">
              Three <span className="text-flame">steps</span>
            </h2>
            <ol className="mt-8 grid gap-4">
              {STEPS.map((s, i) => (
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
              <h3 className="font-display text-lg uppercase">Watching someone break the law?</h3>
              <p className="mt-1.5 text-sm font-semibold text-ink/85">
                Shooting out of season, over the limit, or releasing birds into the wild? Don't
                confront anybody. Call Texas Parks and Wildlife's Operation Game Thief line. It's
                staffed around the clock and tips can be anonymous.
              </p>
              <p className="mt-3 font-display text-2xl">
                <a href={`tel:${LINKS.ogtPhone}`} className="hover:underline">
                  {LINKS.ogtPhoneDisplay}
                </a>
              </p>
              <div className="mt-4">
                <BlobButton href={LINKS.ogt} color="dusk" external>
                  Report online
                </BlobButton>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border-[3px] border-ink bg-white p-5 shadow-[5px_5px_0_#2d2926]">
              <h3 className="font-display text-lg uppercase">Have a duck you can't keep?</h3>
              <p className="mt-1.5 text-sm font-semibold text-ink/70">
                Don't let it go at the park. We'll help you find it a home.{' '}
                <Link to="/rehome" className="text-flame underline">
                  Start here.
                </Link>
              </p>
            </div>
          </div>

          {/* Right: the form */}
          <div className="rounded-3xl border-[3px] border-ink bg-white p-6 shadow-[8px_8px_0_#2d2926] sm:p-8">
            <h2 className="font-display text-2xl uppercase">Send a report</h2>
            <p className="mt-2 mb-6 text-sm font-semibold text-ink/60">
              Goes straight to Matt. If you have a photo, reply to his email with it.
            </p>
            <ContactForm
              formName="Dumped duck report"
              fields={FIELDS}
              submitLabel="Send Report"
              thanks="Matt has your report. He'll get back to you with the nearest rescue or next steps."
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
