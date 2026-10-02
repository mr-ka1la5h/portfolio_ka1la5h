const fs = require('fs');
let c = fs.readFileSync('src/app/page.tsx', 'utf8');

c = c.replace('mb-2 group-hover:text-neutral-700 dark:text-neutral-300 transition-colors">E-Commerce Platform</h3>', 'mb-2 group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">E-Commerce Platform</h3>');
c = c.replace('mb-2 group-hover:text-neutral-700 dark:text-neutral-300 transition-colors">Task Management Dashboard</h3>', 'mb-2 group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">Task Management Dashboard</h3>');

fs.writeFileSync('src/app/page.tsx', c);
