const fs = require('fs');
let c = fs.readFileSync('src/app/page.tsx', 'utf8');

const oldBlock = `              {/* Internship 1 */}
              <motion.div variants={fadeUp} className="relative pl-8 md:pl-12">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-sky-500 ring-4 ring-neutral-50 dark:ring-black"></div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">[Role Title]</h3>
                  <span className="text-sm font-medium text-sky-700 dark:text-sky-300/80">[Start Date] - [End Date]</span>
                </div>
                <p className="text-lg text-neutral-700 dark:text-neutral-300">[Company Name]</p>
                <p className="text-sky-700 dark:text-sky-300/80 text-xs mb-2 mt-0.5">[Location / Remote]</p>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                  [Describe your responsibilities, the technologies you used, and what you achieved during your time here.]
                </p>
              </motion.div>

              {/* Internship 2 */}
              <motion.div variants={fadeUp} className="relative pl-8 md:pl-12">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-sky-600 ring-4 ring-neutral-50 dark:ring-black"></div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">[Role Title]</h3>
                  <span className="text-sm font-medium text-sky-700 dark:text-sky-300/80">[Start Date] - [End Date]</span>
                </div>
                <p className="text-lg text-neutral-700 dark:text-neutral-300">[Company Name]</p>
                <p className="text-sky-700 dark:text-sky-300/80 text-xs mb-2 mt-0.5">[Location / Remote]</p>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                  [Describe your responsibilities, the technologies you used, and what you achieved during your time here.]
                </p>
              </motion.div>`;

const newBlock = `              {/* Internship 1 */}
              <motion.div variants={fadeUp} className="relative pl-8 md:pl-12">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-sky-500 ring-4 ring-neutral-50 dark:ring-black"></div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">Student Intern</h3>
                  <span className="text-sm font-medium text-sky-700 dark:text-sky-300/80">June 2025 (1 month)</span>
                </div>
                <p className="text-lg text-neutral-700 dark:text-neutral-300">Godel Technologies LLP</p>
                <p className="text-sky-700 dark:text-sky-300/80 text-xs mb-2 mt-0.5">Remote</p>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                  Noticed the inability of popular LLMs like ChatGPT, Gemini, and Claude to identify multiple people or perform context switching for multiple people (like in conversations), and built a stylometry plugin software as a result.
                </p>
              </motion.div>`;

c = c.replace(oldBlock, newBlock);
fs.writeFileSync('src/app/page.tsx', c);
