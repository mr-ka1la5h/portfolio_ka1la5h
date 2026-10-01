const fs = require('fs');
let c = fs.readFileSync('src/app/page.tsx', 'utf8');

const oldBlock = `                <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                  When I'm not staring at a code editor, you'll probably find me at my local Toastmasters Club. I love public speaking—it challenges me to communicate complex ideas clearly and connects me with amazing people.
                </p>
                <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-start gap-3">
                    <span className="text-sky-700 dark:text-sky-300/80 mt-1">▹</span>
                    <span>[Placeholder: Won the 'Best Speaker' award recently!]</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sky-700 dark:text-sky-300/80 mt-1">▹</span>
                    <span>[Placeholder: I currently help run the club as VP of Public Relations.]</span>
                  </li>
                </ul>`;

const newBlock = `                <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                  Toastmasters has been the ultimate proving ground for building my confidence and communication style. When I take the stage, I focus on humor and active engagement—living the narrative rather than just reciting a script to deliver an immersive experience that genuinely connects with the audience.
                </p>
                <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-start gap-3">
                    <span className="text-sky-700 dark:text-sky-300/80 mt-1">▹</span>
                    <span>Charter Sergeant at Arms, Metanoia SRM Easwari Toastmasters</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sky-700 dark:text-sky-300/80 mt-1">▹</span>
                    <span>Triple Crown Pin Awardee</span>
                  </li>
                </ul>`;

c = c.replace(oldBlock, newBlock);
fs.writeFileSync('src/app/page.tsx', c);
