const fs = require('fs');
let c = fs.readFileSync('src/app/page.tsx', 'utf8');

const oldBlock = `              {[
                { name: "Skill 1", icon: "🎨" },
                { name: "Skill 2", icon: "📊" },
                { name: "Skill 3", icon: "🌐" },
                { name: "Skill 4", icon: "⚙️" },
                { name: "Skill 5", icon: "📱" },
                { name: "Skill 6", icon: "🔒" },
                { name: "Skill 7", icon: "☁️" },
                { name: "Skill 8", icon: "💡" },
              ].map((skill, index) => (`;

const newBlock = `              {[
                { name: "Programming Fundamentals", icon: "💻" },
                { name: "Database Management", icon: "🗄️" },
                { name: "Web Designing", icon: "🎨" },
                { name: "PC Building", icon: "🖥️" },
                { name: "Game Modding", icon: "🎮" },
                { name: "Karate", icon: "🥋" },
                { name: "Keyboard", icon: "🎹" },
              ].map((skill, index) => (`;

c = c.replace(oldBlock, newBlock);
fs.writeFileSync('src/app/page.tsx', c);
