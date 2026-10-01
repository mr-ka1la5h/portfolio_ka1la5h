const fs = require('fs');
let c = fs.readFileSync('src/app/page.tsx', 'utf8');

c = c.replace(
  'className="grid grid-cols-2 md:grid-cols-4 gap-6"',
  'className="grid grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto md:mx-0"'
);

c = c.replace(
  'p-6 rounded-2xl border border-neutral-900/10 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:bg-white/10 hover:border-sky-400/30 transition-all duration-300 text-center flex flex-col items-center justify-center gap-3',
  'p-8 md:p-12 rounded-3xl border border-neutral-900/10 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:bg-white/10 hover:border-sky-400/30 transition-all duration-300 text-center flex flex-col items-center justify-center gap-4'
);

c = c.replace(
  '<h3 className="text-xl font-bold text-neutral-900 dark:text-white">{item.lang}</h3>',
  '<h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">{item.lang}</h3>'
);

c = c.replace(
  'rounded-full text-sm font-semibold tracking-wide',
  'rounded-full text-sm md:text-base px-2 py-0.5 md:px-4 md:py-1.5 font-semibold tracking-wide'
);

fs.writeFileSync('src/app/page.tsx', c);
