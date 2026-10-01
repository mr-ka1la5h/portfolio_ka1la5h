const fs = require('fs');
let c = fs.readFileSync('src/app/page.tsx', 'utf8');

c = c.replace('{ name: "Karate", icon: "🥋" },', '{ name: "Photography", icon: "📸" },');
c = c.replace('{ name: "Keyboard", icon: "🎹" },', '{ name: "Audio & Video Editing", icon: "🎬" },');

fs.writeFileSync('src/app/page.tsx', c);
