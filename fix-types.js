const fs = require('fs');
let c = fs.readFileSync('src/app/page.tsx', 'utf8');

c = c.replace('const fadeUp = {', 'const fadeUp: any = {');
c = c.replace('const staggerContainer = {', 'const staggerContainer: any = {');

fs.writeFileSync('src/app/page.tsx', c);
