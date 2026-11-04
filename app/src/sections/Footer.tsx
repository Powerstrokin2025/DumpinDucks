import { Link } from 'react-router'
import { Instagram, Music2, Mail } from 'lucide-react'
import { SITE } from '@/config'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink/95 pt-16 pb-8 text-cream backdrop-blur-[2px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-10 sm:flex-row">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <img src="/images/logo-mascot.webp" alt="" className="h-12 w-12 rounded-full" />
              <span className="font-western text-2xl">
                Dumpin' <span className="text-sun">Ducks</span>
              </span>
            </div>
            <p className="mt-4 text-sm font-semibold text-cream/60">
              A Texas crew of hunters and duck people working to keep pet ducks
              out of park ponds. What the store earns goes back to duck rescue and
              wetland conservation.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-full border-2 border-cream/40 p-2.5 transition-colors hover:border-sun hover:text-sun"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={SITE.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="rounded-full border-2 border-cream/40 p-2.5 transition-colors hover:border-sun hover:text-sun"
              >
                <Music2 className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${SITE.email}`}
                aria-label="Email"
                className="rounded-full border-2 border-cream/40 p-2.5 transition-colors hover:border-sun hover:text-sun"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <nav className="grid grid-cols-2 gap-x-14 gap-y-3 text-sm font-bold">
            {[
              ['About', '/about'],
              ['The Duck Blind', '/store'],
              ['Lifestyle', '/lifestyle'],
              ['Art', '/art'],
              ['Duck Facts', '/facts'],
              ['Report a Duck', '/report'],
              ["Can't Keep Your Duck?", '/rehome'],
              ['Email Us', `mailto:${SITE.email}`],
            ].map(([label, href]) =>
              href.startsWith('/') ? (
                <Link key={href} to={href} className="text-cream/70 transition-colors hover:text-sun">
                  {label}
                </Link>
              ) : (
                <a key={href} href={href} className="text-cream/70 transition-colors hover:text-sun">
                  {label}
                </a>
              ),
            )}
          </nav>
        </div>

        <p className="mt-14 text-center font-display text-[13vw] leading-none text-cream/10 uppercase select-none sm:text-[9rem] lg:text-[11rem]">
          Dumpin' Ducks
        </p>

        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-cream/15 pt-6 text-xs font-semibold text-cream/40 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Dumpin' Ducks LLC · Texas · dumpinducks.com ·{' '}
            <a href={`mailto:${SITE.email}`} className="underline hover:text-sun">{SITE.email}</a>
            {SITE.phone && <> · <a href={`tel:${SITE.phone}`} className="underline hover:text-sun">{SITE.phone}</a></>}
          </p>
          <p>Some products 18+.</p>
        </div>
        <p className="mt-4 text-center text-[11px] font-semibold text-cream/30">
          Dumpin' Ducks LLC supports legal, in-season hunting and donates to duck rescue and
          wetland conservation. Don't dump domestic ducks. Re-home them.
        </p>
      </div>
    </footer>
  )
}
