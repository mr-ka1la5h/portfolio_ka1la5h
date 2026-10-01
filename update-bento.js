const fs = require('fs');
let c = fs.readFileSync('src/app/page.tsx', 'utf8');

const oldBlock = `                {/* Social Enthusiast Card */}
                <motion.div 
                  variants={fadeUp}
                  className="bg-neutral-900/5 dark:bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-neutral-900/10 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:bg-white/10 hover:border-sky-400/30 transition-all duration-300 flex-1"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-sky-100 dark:bg-sky-900/40 rounded-full flex items-center border border-sky-500/20 justify-center">
                      <span className="text-xl">🌍</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">Community & Social</h3>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Apart from being a public speaker, I'm also an avid social enthusiast. I love dedicating my time to community service and helping organize local initiatives to make a positive impact.
                  </p>
                </motion.div>

                {/* Leadership Roles Card */}
                <motion.div 
                  variants={fadeUp}
                  className="bg-neutral-900/5 dark:bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-neutral-900/10 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:bg-white/10 hover:border-sky-400/30 transition-all duration-300 flex-1"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-sky-100 dark:bg-sky-900/40 rounded-full flex items-center border border-sky-500/20 justify-center">
                      <span className="text-xl">👑</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">Other Leadership Roles</h3>
                  </div>
                  <ul className="space-y-4 text-neutral-600 dark:text-neutral-400">
                    <li className="flex items-start gap-3">
                      <span className="text-sky-700 dark:text-sky-300/80 mt-1">▹</span>
                      <span>Former President, Annettes Club of Alandur</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sky-700 dark:text-sky-300/80 mt-1">▹</span>
                      <span>Former Director of International Services, Rotaract Club of Alandur Incredibles</span>
                    </li>
                  </ul>
                </motion.div>`;

const newBlock = `                {/* Social Enthusiast Card */}
                <motion.div 
                  variants={fadeUp}
                  className="bg-neutral-900/5 dark:bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-neutral-900/10 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:bg-white/10 hover:border-sky-400/30 transition-all duration-300 flex-1"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-sky-100 dark:bg-sky-900/40 rounded-full flex items-center border border-sky-500/20 justify-center">
                      <span className="text-xl">🌍</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">Community & Social</h3>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                    Apart from being a public speaker, I'm also an avid social enthusiast. I love dedicating my time to community service and helping organize local initiatives to make a positive impact.
                  </p>
                  <ul className="space-y-4 text-neutral-600 dark:text-neutral-400">
                    <li className="flex items-start gap-3">
                      <span className="text-sky-700 dark:text-sky-300/80 mt-1">▹</span>
                      <span>Former President, Annettes Club of Alandur</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sky-700 dark:text-sky-300/80 mt-1">▹</span>
                      <span>Former Director of International Services, Rotaract Club of Alandur Incredibles</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Leadership Roles Card */}
                <motion.div 
                  variants={fadeUp}
                  className="bg-neutral-900/5 dark:bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-neutral-900/10 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:bg-white/10 hover:border-sky-400/30 transition-all duration-300 flex-1"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-sky-100 dark:bg-sky-900/40 rounded-full flex items-center border border-sky-500/20 justify-center">
                      <span className="text-xl">👑</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">Other Leadership Roles</h3>
                  </div>
                  <ul className="space-y-4 text-neutral-600 dark:text-neutral-400">
                    <li className="flex items-start gap-3">
                      <span className="text-sky-700 dark:text-sky-300/80 mt-1">▹</span>
                      <span>[Placeholder for another leadership role]</span>
                    </li>
                  </ul>
                </motion.div>`;

c = c.replace(oldBlock, newBlock);
fs.writeFileSync('src/app/page.tsx', c);
