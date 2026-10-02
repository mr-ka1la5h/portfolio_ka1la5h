const fs = require('fs');
let c = fs.readFileSync('src/app/page.tsx', 'utf8');

c = c.replace('<motion.h2 variants={fadeUp} className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mb-12 text-center md:text-left">What I\'ve been Building Lately</motion.h2>', '');

fs.writeFileSync('src/app/page.tsx', c);
