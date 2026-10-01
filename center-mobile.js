const fs = require('fs');
let c = fs.readFileSync('src/app/page.tsx', 'utf8');

// Hero centering
c = c.replace(
  'className="flex flex-col gap-6 order-2 lg:order-1"',
  'className="flex flex-col gap-6 order-2 lg:order-1 text-center lg:text-left"'
);

c = c.replace(
  'className="flex flex-col sm:flex-row gap-4 pt-4"',
  'className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start"'
);

// About centering (using md break since it's md:grid-cols-2)
c = c.replace(
  'className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6">A Sneak Peek on Myself',
  'className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6 text-center md:text-left">A Sneak Peek on Myself'
);

c = c.replace(
  'className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg"',
  'className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg text-center md:text-left"'
);

c = c.replace(
  'className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">My Toolkit',
  'className="text-xl font-semibold text-neutral-900 dark:text-white mb-4 text-center md:text-left">My Toolkit'
);

c = c.replace(
  'className="flex flex-wrap gap-2"',
  'className="flex flex-wrap gap-2 justify-center md:justify-start"'
);

// Education Heading
c = c.replace(
  'className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mb-12">My Educational Journey',
  'className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mb-12 text-center md:text-left">My Educational Journey'
);

// Certifications Heading
c = c.replace(
  'className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mb-12">Certifications',
  'className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mb-12 text-center md:text-left">Certifications'
);

// Certifications Content
c = c.replace(
  /<h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">/g,
  '<h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2 text-center md:text-left">'
);
c = c.replace(
  /<p className="text-lg text-sky-600 dark:text-sky-400 font-medium mb-4">/g,
  '<p className="text-lg text-sky-600 dark:text-sky-400 font-medium mb-4 text-center md:text-left">'
);
c = c.replace(
  /<p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">/g,
  '<p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-center md:text-left">'
);

// Projects Heading
c = c.replace(
  'className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mb-12">What I\'ve been Building Lately',
  'className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mb-12 text-center md:text-left">What I\'ve been Building Lately'
);

// Internships Heading
c = c.replace(
  'className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mb-12">Internships & Experience',
  'className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mb-12 text-center md:text-left">Internships & Experience'
);

// Me Outside the Box Heading
c = c.replace(
  'className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mb-12">Me, Outside the Box',
  'className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mb-12 text-center md:text-left">Me, Outside the Box'
);

// Other Skills Heading
c = c.replace(
  'className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mb-12">Other Skills at my Inventory',
  'className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mb-12 text-center md:text-left">Other Skills at my Inventory'
);

// The user said: center the content EXCEPT ... "ne outside the box" (Me outside the box), education, projects, internships.
// Does this mean I should center the content in "Other Skills"? I will center the flex icon items in Other Skills just in case.
// If they are not excluded, center them.
c = c.replace(
  /<div className="flex items-center gap-3">/g,
  '<div className="flex items-center gap-3 justify-center md:justify-start">'
);
c = c.replace(
  /<span className="font-medium text-neutral-800 dark:text-neutral-200">/g,
  '<span className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left">'
);

// Say Hi Heading
c = c.replace(
  'className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6">Say Hi',
  'className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6 text-center md:text-left">Say Hi'
);

fs.writeFileSync('src/app/page.tsx', c);
