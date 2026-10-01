const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf-8');

const startMarker = 'Certifications</motion.h2>';
const endMarker = '{/* Projects Section */}';

const startIdx = content.indexOf(startMarker) + startMarker.length;
const endIdx = content.indexOf(endMarker);

if (startIdx > -1 && endIdx > -1) {
    const newGrid = `
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[
                { name: "MongoDB Basics for Students", org: "MongoDB Skills Check", year: "", icon: "🍃" },
                { name: "Introduction to Generative AI", org: "AWS Educate", year: "2026", icon: "🧠" },
                { name: "Introduction to Data Science", org: "AWS Educate", year: "2026", icon: "📊" },
                { name: "Machine Learning Foundations", org: "AWS Educate", year: "2026", icon: "🤖" },
                { name: "Blockchain and its Applications", org: "NPTEL", year: "2026", icon: "🔗" },
                { name: "Human Computer Interaction (In English)", org: "NPTEL", year: "2026", icon: "🖥️" },
                { name: "Introduction to Modern AI", org: "Cisco Networking Academy", year: "2025", icon: "🌐" },
                { name: "Elements of AI", org: "University of Helsinki", year: "", icon: "💡" },
                { name: "Parichaya to Praveshika (5 levels)", org: "Dakshina Bharat Hindi Prachar Sabha", year: "", icon: "📜" }
              ].map((cert, index) => (
                <motion.div 
                  key={index}
                  variants={fadeUp}
                  className="bg-neutral-900/5 dark:bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-neutral-900/10 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:bg-white/10 hover:border-sky-400/30 transition-all duration-300 flex flex-col"
                >
                  <div className="text-3xl mb-4 text-sky-500 text-center md:text-left">{cert.icon}</div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4 text-center md:text-left">{cert.name}</h3>
                  <p className="text-sm text-sky-600 dark:text-sky-400 font-medium mt-auto text-center md:text-left">
                    {cert.org} {cert.year && <span className="text-neutral-500 dark:text-neutral-500 border-l border-neutral-400/50 pl-2 ml-2">{cert.year}</span>}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </ScrollSection>

        `;
    const part1 = content.slice(0, startIdx);
    const part2 = content.slice(endIdx);
    content = part1 + newGrid + part2;
    fs.writeFileSync('src/app/page.tsx', content);
}
