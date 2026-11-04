import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import BlobButton from '@/components/BlobButton'
import { contactMailto } from '@/config'

const faqs = [
  {
    q: 'What do y\u2019all actually do about dumped ducks?',
    a: "Three things. We teach people what a duck needs before they buy one. We connect dumped ducks and unwanted ducks with people who will take them. And we put what the store earns into duck rescue and wetland conservation.",
  },
  {
    q: 'I found a dumped duck at my park. Now what?',
    a: "Don't chase it into the water. It can't fly and it tires out fast. Note the location, snap a photo, and send us a report from the Report a Duck page. We'll get you to the nearest rescue.",
  },
  {
    q: 'Are domestic ducks really that helpless?',
    a: "Yes. Domestic breeds like Pekins were bred heavy and flightless. They can't migrate, can't get away from predators, and don't know how to find food. Most don't survive a season at a park pond.",
  },
  {
    q: 'I have a duck I can\u2019t keep. What do I do?',
    a: "Don't let it go. Head to the Can't Keep Your Duck page and tell us about it. We know backyard flocks, farm ponds, and rescues around Texas, and we'll help you find it a home.",
  },
  {
    q: 'Where does the store money go?',
    a: "A cut of every order goes to duck rescue and wetland conservation groups. Want to know which ones, or have one you'd like us to look at? Email us.",
  },
  {
    q: "Do y'all only do Texas?",
    a: "For now, yes. We started in Dallas and cover the whole state. If you're outside Texas and need help, email us anyway and we'll point you somewhere.",
  },
  {
    q: 'Is the 18+ stuff shipped discreetly?',
    a: 'Yes. Anything 18+ ships in plain packaging.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="bg-coral/85 py-20 backdrop-blur-[2px] sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="font-western text-xl text-cream">Things people ask us</p>
          <h2 className="mt-2 font-display text-4xl uppercase headline-shadow text-cream text-stroke sm:text-6xl">
            Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="rounded-3xl border-[3px] border-ink bg-cream px-6 shadow-[6px_6px_0_#2d2926] data-[state=open]:bg-butter"
            >
              <AccordionTrigger className="py-5 text-left font-display text-base uppercase hover:no-underline sm:text-lg">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm font-semibold text-ink/75 sm:text-base">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="mb-4 font-semibold text-cream">
          Didn't find it? Ask us.
          </p>
          <BlobButton href={contactMailto()} color="dusk">
            Email Us
          </BlobButton>
        </div>
      </div>
    </section>
  )
}
