const fs = require('fs');
let c = fs.readFileSync('src/app/page.tsx', 'utf8');

const oldBlock = `                <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                  I'm always pushing myself to learn and compete. Here are a few milestones I'm particularly proud of achieving along the way.
                </p>
                <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-start gap-3">
                    <span className="text-sky-700 dark:text-sky-300/80 mt-1">▹</span>
                    <span>[Placeholder: Took 1st place in a University Hackathon—we built an app in 24 hours!]</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sky-700 dark:text-sky-300/80 mt-1">▹</span>
                    <span>[Placeholder: Contributed code to some of my favorite open-source projects.]</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sky-700 dark:text-sky-300/80 mt-1">▹</span>
                    <span>[Placeholder: Got my Cloud Practitioner certification.]</span>
                  </li>
                </ul>`;

const newBlock = `                <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                  Apart from being a public speaker, I'm also an avid social enthusiast. I love dedicating my time to community service and helping organize local initiatives.
                </p>
                <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-start gap-3">
                    <span className="text-sky-700 dark:text-sky-300/80 mt-1">▹</span>
                    <span>Former President, Annettes Club of Alandur</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sky-700 dark:text-sky-300/80 mt-1">▹</span>
                    <span>Former Director of International Services, Rotaract Club of Alandur Incredibles</span>
                  </li>
                </ul>`;

c = c.replace(oldBlock, newBlock);
fs.writeFileSync('src/app/page.tsx', c);
