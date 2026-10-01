const fs = require('fs');
let c = fs.readFileSync('src/app/page.tsx', 'utf8');

const map = {
    'bg-black': 'bg-neutral-50 dark:bg-black',
    'text-neutral-200': 'text-neutral-800 dark:text-neutral-200',
    'text-white': 'text-neutral-900 dark:text-white',
    'bg-white/5': 'bg-neutral-900/5 dark:bg-white/5',
    'border-white/10': 'border-neutral-900/10 dark:border-white/10',
    'border-neutral-800/50': 'border-neutral-200 dark:border-neutral-800/50',
    'bg-black/80': 'bg-neutral-50/80 dark:bg-black/80',
    'md:bg-black/20': 'md:bg-neutral-50/50 dark:md:bg-black/20',
    'ring-black': 'ring-neutral-50 dark:ring-black',
    'text-sky-300/80': 'text-sky-700 dark:text-sky-300/80',
    'text-neutral-400': 'text-neutral-600 dark:text-neutral-400',
    'text-neutral-300': 'text-neutral-700 dark:text-neutral-300',
    'text-emerald-300': 'text-emerald-600 dark:text-emerald-300',
    'hover:text-emerald-100': 'hover:text-emerald-800 dark:hover:text-emerald-100',
    'bg-sky-400 text-black': 'bg-sky-500 text-white dark:bg-sky-400 dark:text-black',
    'hover:bg-sky-300': 'hover:bg-sky-600 dark:hover:bg-sky-300',
    'bg-sky-900/30': 'bg-sky-100 dark:bg-sky-900/30',
    'text-sky-200': 'text-sky-800 dark:text-sky-200',
    'border-sky-500/30': 'border-sky-500/20 dark:border-sky-500/30',
    'bg-sky-900/40': 'bg-sky-100 dark:bg-sky-900/40',
    'text-neutral-900': 'text-neutral-100 dark:text-neutral-900',
    'bg-white text-black': 'bg-neutral-800 text-white dark:bg-white dark:text-black',
    'bg-neutral-800': 'bg-neutral-200 dark:bg-neutral-800'
};

for (const [key, value] of Object.entries(map)) {
    const escaped = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    let regex = new RegExp('(?<!dark:)' + escaped + '(?![\\w/.-])', 'g');
    c = c.replace(regex, value);
}

fs.writeFileSync('src/app/page.tsx', c);
