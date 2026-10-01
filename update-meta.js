const fs = require('fs');
let c = fs.readFileSync('src/app/layout.tsx', 'utf8');

const oldMeta = `export const metadata: Metadata = {
  title: "My Portfolio | ka1la5h",
  description: "Full Stack Developer portfolio showcasing projects and skills. Available for work and collaboration.",
  keywords: ["Kailashwar Saravanan", "Portfolio", "Full Stack Developer", "Web Developer", "Software Engineer"],
  authors: [{ name: "Kailashwar Saravanan" }],
  openGraph: {
    title: "My Portfolio | ka1la5h",
    description: "Full Stack Developer portfolio showcasing projects and skills.",
    type: "website",
  },
};`;

const newMeta = `export const metadata: Metadata = {
  title: "My Portfolio | ka1la5h",
  description: "Full Stack Developer portfolio showcasing projects and skills. Available for work and collaboration.",
  keywords: ["Kailashwar Saravanan", "Portfolio", "Full Stack Developer", "Web Developer", "Software Engineer"],
  authors: [{ name: "Kailashwar Saravanan" }],
  openGraph: {
    title: "My Portfolio | ka1la5h",
    description: "Full Stack Developer portfolio showcasing projects and skills.",
    type: "website",
  },
  verification: {
    google: "8ArBPxobJec9f8y1wLbNXd2BPQT60rpp_cEK8YMrYKc",
  },
};`;

c = c.replace(oldMeta, newMeta);
fs.writeFileSync('src/app/layout.tsx', c);
