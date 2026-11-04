// ============================================================
// DUMPIN' DUCKS: SITE CONFIG
// Contact details and outside links live here. Every email button
// and form on the site reads from this file.
// ============================================================

export const SITE = {
  name: "Dumpin' Ducks",
  city: "Texas",
  email: "matt.morgan@dumpinducks.com",
  phone: "", // leave blank until Matt confirms his public number. The footer hides it when empty.
  instagram: "https://instagram.com/dumpinducks",
  tiktok: "https://tiktok.com/@dumpinducks",
};

// --- Forms ---
// The Report and Re-home forms post to Formspree, which emails Matt.
// Setup (about two minutes):
//   1. Sign up free at https://formspree.io with matt.morgan@dumpinducks.com
//   2. Click "New form", name it "Dumpin' Ducks reports", and copy the form ID
//      from the endpoint it gives you (https://formspree.io/f/XXXXXXXX)
//   3. Paste that ID below and redeploy
// Until an ID is set, the forms fall back to opening the visitor's email app.
export const FORMSPREE_ID = "";

// --- Official resources ---
export const LINKS = {
  tpwdSeasons: "https://tpwd.texas.gov/regulations/outdoor-annual/hunting/seasons",
  tpwdHome: "https://tpwd.texas.gov/",
  // Operation Game Thief: TPWD's 24-hour line for reporting hunting and
  // wildlife violations. Rewards paid for tips that lead to a conviction.
  ogt: "https://tpwd.texas.gov/warden/ogt/",
  ogtPhone: "1-800-792-4263",
  ogtPhoneDisplay: "1-800-792-GAME",
  duckStamp: "https://www.fws.gov/program/federal-duck-stamp",
};

// Pre-order email. The store has no checkout yet, so each product button
// opens a pre-filled email to Matt.
export const preorderMailto = (productName: string, price: number) =>
  `mailto:${SITE.email}?subject=${encodeURIComponent(
    `Pre-order: ${productName}`,
  )}&body=${encodeURIComponent(
    `Hey Matt,\n\nI'd like to pre-order the ${productName} ($${price}).\n\nHow many:\nName:\nShipping address:\n\nThanks!`,
  )}`;

// General contact email
export const contactMailto = (subject?: string) =>
  `mailto:${SITE.email}?subject=${encodeURIComponent(
    subject ?? "Question for Dumpin' Ducks",
  )}`;
