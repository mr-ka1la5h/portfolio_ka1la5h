const fs = require('fs');
let lines = fs.readFileSync('src/app/page.tsx', 'utf-8').split('\n');

const startIdx = lines.findIndex(l => l.includes('flex flex-col md:flex-row gap-4 md:gap-6 text-sm font-medium'));
let endIdx = -1;
for (let i = startIdx; i < lines.length; i++) {
    if (lines[i].includes('</motion.nav>')) {
        endIdx = i - 1;
        break;
    }
}

if (startIdx !== -1 && endIdx !== -1) {
    const desktopMenu = `        {/* Desktop Menu */}
        <div className="hidden md:flex flex-row items-center gap-6 text-sm font-medium text-emerald-600 dark:text-emerald-300">
          <Link href="#about" className="hover:text-emerald-800 dark:hover:text-emerald-100 transition-colors">My Story</Link>
          <Link href="#education" className="hover:text-emerald-800 dark:hover:text-emerald-100 transition-colors">Education</Link>
          <Link href="#certifications" className="hover:text-emerald-800 dark:hover:text-emerald-100 transition-colors">Certifications</Link>
          <Link href="#projects" className="hover:text-emerald-800 dark:hover:text-emerald-100 transition-colors">My Work</Link>
          <Link href="#internships" className="hover:text-emerald-800 dark:hover:text-emerald-100 transition-colors">Experience</Link>
          <Link href="#outside-the-box" className="hover:text-emerald-800 dark:hover:text-emerald-100 transition-colors">Outside the Box</Link>
          <Link href="#contact" className="hover:text-emerald-800 dark:hover:text-emerald-100 transition-colors">Say Hi</Link>
          <div className="border-l border-neutral-300 dark:border-neutral-800 pl-6 ml-2">
            <button onClick={toggleTheme} className="p-2 rounded-full bg-neutral-200/80 dark:bg-neutral-800/80 text-neutral-900 dark:text-white hover:scale-110 transition-all border border-neutral-300 dark:border-neutral-700 shadow-sm" aria-label="Toggle Theme">
              {mounted && theme === "dark" ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              )}
            </button>
          </div>
        </div>`;

    const mobileMenu = `        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden flex flex-col w-full gap-4 overflow-hidden mt-6 text-sm font-medium text-emerald-600 dark:text-emerald-300"
            >
              <Link href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-emerald-800 dark:hover:text-emerald-100 transition-colors">My Story</Link>
              <Link href="#education" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-emerald-800 dark:hover:text-emerald-100 transition-colors">Education</Link>
              <Link href="#certifications" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-emerald-800 dark:hover:text-emerald-100 transition-colors">Certifications</Link>
              <Link href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-emerald-800 dark:hover:text-emerald-100 transition-colors">My Work</Link>
              <Link href="#internships" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-emerald-800 dark:hover:text-emerald-100 transition-colors">Experience</Link>
              <Link href="#outside-the-box" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-emerald-800 dark:hover:text-emerald-100 transition-colors">Outside the Box</Link>
              <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-emerald-800 dark:hover:text-emerald-100 transition-colors pb-2">Say Hi</Link>
            </motion.div>
          )}
        </AnimatePresence>`;

    lines.splice(startIdx, endIdx - startIdx + 1, desktopMenu, mobileMenu);
    fs.writeFileSync('src/app/page.tsx', lines.join('\n'));
}
