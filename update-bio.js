const fs = require('fs');
let c = fs.readFileSync('src/app/page.tsx', 'utf8');

const oldBlock = `              <div className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg text-center md:text-left">
                <p>
                  To put it simply, I'm a software engineer who absolutely loves the web. 
                  When I'm building things, I don't just look at the code—I think about how you, the user, will actually feel while using it.
                </p>
                <p>
                  I try to blend solid technical skills with a good eye for design. For me, it's not enough for an app to just "work"—it needs to feel smooth, look great, and make people's lives a little bit easier.
                </p>
              </div>`;

const newBlock = `              <div className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg text-center md:text-left">
                <p>
                  I am currently pursuing a Bachelor of Technology in Artificial Intelligence and Data Science. Beyond my academic coursework, I am a hardware professional, an active public speaker, and a dedicated social enthusiast.
                </p>
                <p>
                  In my leisure time, I pursue activities that foster comprehensive development: football for full-body engagement, cycling as a healthy method of exploration, animation appreciation for its unique storytelling, and gaming to cultivate patience and perseverance.
                </p>
              </div>`;

c = c.replace(oldBlock, newBlock);
fs.writeFileSync('src/app/page.tsx', c);
