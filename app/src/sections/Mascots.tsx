const flock = [
  {
    img: '/images/mascots-chains.webp',
    alt: 'A mallard drake and two hens wearing gold chains standing by a pond',
    title: 'Big Daddy & The Hen Girls',
    role: 'Security and morale',
    body: 'The chain is real. The attitude is earned. They inspect every order and accept payment in peas only.',
  },
  {
    img: '/images/mascots-coop.webp',
    alt: 'Real ducks bathing in a metal tub inside a wooden coop',
    title: 'World Headquarters',
    role: 'Casual Friday at the pond',
    body: 'Where it all happens. Dress code is feathers, meetings are held in the tub, and HR has stopped answering our emails.',
  },
]

export default function Mascots() {
  return (
    <section className="bg-butter/85 py-20 backdrop-blur-[2px] sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-14 text-center">
          <p className="font-western text-xl text-flame">The crew</p>
          <h2 className="mt-2 font-display text-4xl uppercase headline-shadow text-cream text-stroke sm:text-6xl">
            Meet the Mascots
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-semibold text-ink/75">
            Real ducks, real employees, zero productivity. Every order is supervised by this flock.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {flock.map((f, i) => (
            <figure
              key={f.title}
              className={`group ${i % 2 ? 'md:rotate-1' : 'md:-rotate-1'} transition-transform duration-300 hover:rotate-0`}
            >
              <div className="overflow-hidden rounded-3xl border-[3px] border-ink shadow-[8px_8px_0_#2d2926]">
                <img
                  src={f.img}
                  alt={f.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="-mt-6 ml-6 mr-2 rounded-2xl border-[3px] border-ink bg-cream p-5 shadow-[6px_6px_0_#2d2926]">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-western text-2xl">{f.title}</h3>
                  <span className="rounded-full bg-dusk px-3 py-1 font-display text-[11px] text-cream uppercase">
                    {f.role}
                  </span>
                </div>
                <p className="mt-2 text-sm font-semibold text-ink/70">{f.body}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {['Employees: 3 (feathered)', 'HR complaints: pending', 'Quacks per minute: unlimited'].map(
            (chip) => (
              <span
                key={chip}
                className="rounded-full border-[3px] border-ink bg-cream px-5 py-2 font-display text-sm uppercase shadow-[6px_6px_0_#2d2926]"
              >
                {chip}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  )
}
