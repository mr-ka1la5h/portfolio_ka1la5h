const fs = require('fs');
let c = fs.readFileSync('src/app/page.tsx', 'utf8');

c = c.replace('class="text-sky-400 whitespace-nowrap drop-shadow-md"', 'class="text-sky-400 drop-shadow-md"');
c = c.replace('class="whitespace-nowrap">thanks', '>thanks');

fs.writeFileSync('src/app/page.tsx', c);
