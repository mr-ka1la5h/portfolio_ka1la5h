const fs = require('fs');
let lines = fs.readFileSync('src/app/page.tsx', 'utf8').split('\n');

const buttonSvg = `{theme === "dark" ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              )}`;

for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('<button onClick={toggleTheme} className="p-2 text-neutral-600 dark:text-emerald-300">')) {
        lines[i] = `            <button onClick={toggleTheme} className="p-2 rounded-full bg-neutral-200/80 dark:bg-neutral-800/80 text-neutral-700 dark:text-emerald-300 hover:scale-110 transition-all border border-neutral-300 dark:border-neutral-700" aria-label="Toggle Theme">`;
        lines[i+1] = buttonSvg;
    }
    
    if (lines[i].includes('<button onClick={toggleTheme} className="hidden md:block p-2 ml-4 text-neutral-600 dark:text-emerald-300 hover:scale-110 transition-transform">')) {
        // Replace it with a container that has a left border divider, then the button.
        lines[i] = `          <div className="hidden md:flex items-center pl-6 ml-2 border-l border-neutral-300 dark:border-neutral-800">`;
        lines[i] += `\n            <button onClick={toggleTheme} className="p-2 rounded-full bg-neutral-200/80 dark:bg-neutral-800/80 text-neutral-700 dark:text-emerald-300 hover:scale-110 transition-all border border-neutral-300 dark:border-neutral-700 shadow-sm" aria-label="Toggle Theme">`;
        lines[i+1] = buttonSvg;
        lines[i+2] = `            </button>\n          </div>`;
    }
}

fs.writeFileSync('src/app/page.tsx', lines.join('\n'));
