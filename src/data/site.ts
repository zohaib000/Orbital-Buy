export const site = {
  name: "OrbitalBuy",
  domain: "orbitalbuy.com",
  tagline: "Fast, guaranteed-delivery imports, landed on your doorstep.",

  // WhatsApp — digits only, country code first, no + no leading 0.
  whatsapp: "923042900004",
  whatsappDisplay: "+92 304 2900004",

  supportEmail: "moazambilal3@gmail.com",

  // Where the order form (email, WhatsApp, address) gets sent so you have a
  // record of every customer. Sign up free at https://formspree.io, create a
  // form, and paste its endpoint here — looks like https://formspree.io/f/xxxxxxxx
  // Until you replace this, submissions will fail silently and the customer
  // will still be sent to Gumroad, but you won't have a saved copy.
  formEndpoint: "https://formspree.io/f/mrewobba",
};

export type Site = typeof site;
