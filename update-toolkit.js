const fs = require('fs');
let c = fs.readFileSync('src/app/page.tsx', 'utf8');

c = c.replace(
  "{['Python', 'HTML', 'MySQL', 'MERN Stack'].map((tech, i) => (",
  "{['Python', 'HTML', 'MySQL', 'MERN Stack', 'Modding Tools'].map((tech, i) => ("
);

c = c.replace(
  'className="px-3 py-1 bg-sky-100 dark:bg-sky-900/30 text-sky-800 dark:text-sky-200 border border-sky-500/20 dark:border-sky-500/30 rounded-full text-sm"',
  'className="px-5 py-2 bg-sky-100 dark:bg-sky-900/30 text-sky-800 dark:text-sky-200 border border-sky-500/20 dark:border-sky-500/30 rounded-full text-base font-medium shadow-sm"'
);

c = c.replace(
  '<h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4 text-center md:text-left">My Toolkit</h3>',
  '<h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6 text-center md:text-left">My Toolkit</h3>'
);

fs.writeFileSync('src/app/page.tsx', c);
