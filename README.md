# Dumpin' Ducks

Website for Dumpin' Ducks LLC: Texas duck conservation, awareness, and merch. Live at **dumpinducks.com**.

The site lives in [`app/`](app/). It's React + TypeScript, built with Vite and styled with Tailwind.

## Run it locally

Needs Node 20.19 or newer.

```sh
cd app
npm ci
npm run dev       # http://localhost:3000
```

Before pushing, check that it builds:

```sh
npm run lint
npm run build     # output goes to app/dist
npm run preview   # serve the built site locally
```

## Deploy (Vercel)

1. In Vercel, **Add New → Project** and import this GitHub repo.
2. Set **Root Directory** to `app`. Everything else comes from `app/vercel.json`.
3. Deploy. Every push to `main` redeploys automatically.
4. Under **Settings → Domains**, add `dumpinducks.com` and `www.dumpinducks.com`, then add the DNS records Vercel shows at your domain registrar.

## Common edits

| What | Where |
| --- | --- |
| Email, phone, social links | `app/src/config.ts` |
| Form delivery (Formspree ID) | `app/src/config.ts`, see the comment above `FORMSPREE_ID` |
| Operation Game Thief link and phone | `app/src/config.ts` |
| Products, prices, photos | `app/src/storefront/catalog.ts` |
| Nav tabs | `app/src/sections/Nav.tsx` |
| Images | `app/public/images/` |

**Adding images:** export as `.webp`, around 1600px on the longest side. Phone photos and PNG exports are often 2 MB or more and slow the site down. The full-size originals are kept in `originals/images/` and aren't deployed.

**Adding a page:** add the route in `app/src/App.tsx` and add its URL to `app/public/sitemap.xml`.

## Orders

Everything in The Duck Blind is pre-order. Each product button opens a pre-filled email to `SITE.email`, and Matt replies with shipping and how to pay. To take cards later, the usual next step is Stripe Checkout run from a Vercel serverless function.

## Forms

The Report a Duck and Can't Keep Your Duck pages post to Formspree, which emails Matt. Until `FORMSPREE_ID` is set in `app/src/config.ts`, the submit button opens the visitor's email app instead. Setup steps are in the comment above that line.
