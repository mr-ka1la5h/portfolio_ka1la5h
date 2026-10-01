const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf-8');

const languagesSection = `
        {/* Languages Section */}
        <ScrollSection id="languages" className="border-t border-neutral-200 dark:border-neutral-800/50">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mb-12 text-center md:text-left">Languages I Speak</motion.h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { lang: "Tamil", level: "Native" },
                { lang: "English", level: "Bilingual" },
                { lang: "Hindi", level: "Proficient" },
                { lang: "Japanese", level: "Elementary" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  variants={fadeUp}
                  className="bg-neutral-900/5 dark:bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-neutral-900/10 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:bg-white/10 hover:border-sky-400/30 transition-all duration-300 text-center flex flex-col items-center justify-center gap-3"
                >
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white">{item.lang}</h3>
                  <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900/30 text-sky-800 dark:text-sky-200 border border-sky-500/20 dark:border-sky-500/30 rounded-full text-sm font-semibold tracking-wide">
                    {item.level}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </ScrollSection>
`;

content = content.replace(
  '        {/* Certifications Section */}',
  languagesSection + '\n        {/* Certifications Section */}'
);

fs.writeFileSync('src/app/page.tsx', content);
