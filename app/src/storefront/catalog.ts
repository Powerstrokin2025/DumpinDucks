// STOREFRONT CATALOG. One source of truth for The Duck Blind (/store).
// Everything is pre-order for now. Each product button opens a pre-filled
// email to Matt (see preorderMailto in config.ts).
//
// To add a product later: add an entry below with its image in
// public/images/ (export as .webp, about 1600px on the long side).

export type Category = 'art' | 'barware'

export interface Product {
  id: string
  cat: Category
  name: string
  blurb: string
  price: number // dollars
  unit: string // "/ sticker", "/ stopper"
  img: string
  alt: string
  tag?: string
}

export const CATEGORIES: { id: Category | 'all'; label: string }[] = [
  { id: 'all', label: 'Everything' },
  { id: 'barware', label: 'Barware' },
  { id: 'art', label: 'Stickers' },
]

export const PRODUCTS: Product[] = [
  // ---- Barware ----
  {
    id: 'winestopper',
    cat: 'barware',
    name: 'Ruddy Duck Wine Stopper',
    blurb:
      'A hand-finished ruddy duck with a chestnut body and baby-blue bill, tail up, perched on a chrome stopper. Seals the bottle and judges your pour.',
    price: 22,
    unit: '/ stopper',
    img: '/images/product-winestopper.webp',
    alt: 'Ruddy duck wine stopper with a chestnut duck and blue bill atop a green wine bottle',
  },

  // ---- Stickers ----
  {
    id: 'art-pairs',
    cat: 'art',
    name: "Dump 'Em in Pairs Sticker",
    blurb: 'The flagship. Vinyl, weatherproof, cooler-ready.',
    price: 6,
    unit: '/ sticker',
    img: '/images/art-pairs-1.webp',
    alt: "Dump 'Em in Pairs sticker artwork with a hunter and two ducks",
  },
  {
    id: 'art-caren',
    cat: 'art',
    name: "Concerned Care ’en Club Sticker",
    blurb: 'The official seal of the See Something, Say Something crowd.',
    price: 6,
    unit: '/ sticker',
    img: '/images/art-caren-badge.webp',
    alt: 'Concerned Care ’en Club badge artwork with three ducks in blonde bob haircuts',
  },
  {
    id: 'art-nomo',
    cat: 'art',
    name: "Don't Dump No Mo' Sticker",
    blurb: 'The heart of the whole mission, in vinyl.',
    price: 6,
    unit: '/ sticker',
    img: '/images/art-nomo-1.webp',
    alt: "Don't Dump No Mo' memorial artwork",
  },
  {
    id: 'art-3s',
    cat: 'art',
    name: "3's Company Sticker",
    blurb: 'One big buck on the hood, compound bow overhead. Venison Visitors Club.',
    price: 6,
    unit: '/ sticker',
    img: '/images/art-3s-1.webp',
    alt: "3's Company artwork with a buck tied to a hood and a compound bow",
  },
  {
    id: 'art-predator',
    cat: 'art',
    name: "Tejas Baja Blastin' Sticker",
    blurb: "The Predator Line debut. ATV catching air, yotes riding the rack.",
    price: 6,
    unit: '/ sticker',
    img: '/images/art-predator-1.webp',
    alt: "Tejas Baja Blastin' artwork of an ATV jumping a hill with coyotes",
    tag: 'Predator Line',
  },
]
