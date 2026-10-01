const fs = require('fs');
let c = fs.readFileSync('src/app/page.tsx', 'utf8');

const oldBlock = `              {/* Secondary Education */}
              <motion.div variants={fadeUp} className="relative pl-8 md:pl-12">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-sky-600 ring-4 ring-neutral-50 dark:ring-black"></div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">Secondary Education</h3>
                  <span className="text-sm font-medium text-sky-700 dark:text-sky-300/80">[Year]</span>
                </div>
                <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-2">[School Name]</p>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                  [Board Name, e.g., CBSE/State Board. Mention your grades or any extracurriculars.]
                </p>
              </motion.div>`;

const newBlock = `              {/* Secondary Education */}
              <motion.div variants={fadeUp} className="relative pl-8 md:pl-12">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-sky-600 ring-4 ring-neutral-50 dark:ring-black"></div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">Secondary Education</h3>
                  <span className="text-sm font-medium text-sky-700 dark:text-sky-300/80">2022</span>
                </div>
                <p className="text-lg text-neutral-700 dark:text-neutral-300">Maharishi Vidya Mandir Senior Secondary School, Mangadu</p>
                <p className="text-sky-700 dark:text-sky-300/80 text-xs mb-2 mt-0.5">Chennai, Tamil Nadu, India</p>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                  CBSE Board • Computer Science Group
                </p>
              </motion.div>`;

c = c.replace(oldBlock, newBlock);
fs.writeFileSync('src/app/page.tsx', c);
