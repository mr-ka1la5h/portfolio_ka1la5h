const fs = require('fs');
let c = fs.readFileSync('src/app/page.tsx', 'utf8');

const quote1 = `
        {/* Quote Break 1 */}
        <ScrollSection className="py-12 border-t border-neutral-200 dark:border-neutral-800/50">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center px-4 max-w-3xl mx-auto py-12 bg-neutral-900/5 dark:bg-white/5 backdrop-blur-xl rounded-3xl border border-neutral-900/10 dark:border-white/10 shadow-sm"
          >
            <p className="text-xl md:text-2xl font-light italic text-neutral-700 dark:text-neutral-300 leading-relaxed">
              "First, solve the problem. Then, write the code."
            </p>
            <p className="mt-4 text-sm font-semibold text-emerald-600 dark:text-emerald-400 tracking-widest uppercase">
              – John Johnson
            </p>
          </motion.div>
        </ScrollSection>
`;

const quote2 = `
        {/* Quote Break 2 */}
        <ScrollSection className="py-12 border-t border-neutral-200 dark:border-neutral-800/50">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center px-4 max-w-3xl mx-auto py-12 bg-neutral-900/5 dark:bg-white/5 backdrop-blur-xl rounded-3xl border border-neutral-900/10 dark:border-white/10 shadow-sm"
          >
            <p className="text-xl md:text-2xl font-light italic text-neutral-700 dark:text-neutral-300 leading-relaxed">
              "Talk is cheap. Show me the code."
            </p>
            <p className="mt-4 text-sm font-semibold text-emerald-600 dark:text-emerald-400 tracking-widest uppercase">
              – Linus Torvalds
            </p>
          </motion.div>
        </ScrollSection>
`;

const quote3 = `
        {/* Quote Break 3 */}
        <ScrollSection className="py-12 border-t border-neutral-200 dark:border-neutral-800/50">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center px-4 max-w-3xl mx-auto py-12 bg-neutral-900/5 dark:bg-white/5 backdrop-blur-xl rounded-3xl border border-neutral-900/10 dark:border-white/10 shadow-sm"
          >
            <p className="text-xl md:text-2xl font-light italic text-neutral-700 dark:text-neutral-300 leading-relaxed">
              "Simplicity is the soul of efficiency."
            </p>
            <p className="mt-4 text-sm font-semibold text-emerald-600 dark:text-emerald-400 tracking-widest uppercase">
              – Austin Freeman
            </p>
          </motion.div>
        </ScrollSection>
`;

c = c.replace(
  '{/* Education Section */}', 
  quote1 + '\n        {/* Education Section */}'
);

c = c.replace(
  '{/* Projects Section */}',
  quote2 + '\n        {/* Projects Section */}'
);

c = c.replace(
  '{/* Contact Section */}',
  quote3 + '\n        {/* Contact Section */}'
);

fs.writeFileSync('src/app/page.tsx', c);
