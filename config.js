import db from "./db.json"

export const MY_SEO = {
  title: db.title,
  description: db.description,
  openGraph: {
    type: 'website',
    url: 'https://aluraquiz-nanatsu.victorborges97.vercel.app/',
    title: db.title,
    description: db.description,
    image: db.bg,
    icon: db.icon
  }
};