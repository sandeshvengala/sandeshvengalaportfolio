function renderLanguageLogo(code) {
  switch (code) {
    case 'IN': // India (Telugu, Hindi)
      return (
        <svg className="h-5 w-5 mr-1" viewBox="0 0 24 24">
          <rect width="24" height="24" rx="4" fill="#FF9933" />
          <rect y="8" width="24" height="8" fill="#fff" />
          <rect y="16" width="24" height="8" fill="#138808" />
          <circle cx="12" cy="12" r="2.5" fill="#008" />
        </svg>
      );
    case 'GB': // UK (English)
      return (
        <svg className="h-5 w-5 mr-1" viewBox="0 0 24 24">
          <rect width="24" height="24" rx="4" fill="#00247d" />
          <path d="M0 0L24 24M24 0L0 24" stroke="#fff" strokeWidth="3" />
          <path d="M0 0L24 24M24 0L0 24" stroke="#cf142b" strokeWidth="1.5" />
          <rect x="10" width="4" height="24" fill="#fff" />
          <rect y="10" width="24" height="4" fill="#fff" />
          <rect x="11" width="2" height="24" fill="#cf142b" />
          <rect y="11" width="24" height="2" fill="#cf142b" />
        </svg>
      );
    default:
      return null;
  }
}
const skillMeter = [
  { label: 'Full Stack Development', value: 85 },
  { label: 'Photography', value: 95 },
  { label: 'Graphic Design', value: 88 },
  { label: 'Content Creation', value: 80 }
];
const skillTags = [
  'Full Stack Development',
  'Bootstrap',
  'n8n',
  'Meta Business Suite',
  'Photoshop',
  'Premiere Pro',
  'Git',
  'MS Office'
];
import { motion } from 'framer-motion';
import InteractiveCard from '../components/InteractiveCard';

const revealTransition = { duration: 0.55, ease: 'easeOut' };

const education = [
  {
    title: 'Bachelor of Engineering - Computer Science and Design',
    detail: 'Sree Chaitanya College of Engineering, Karimnagar.',
    period: 'Expected 2027'
  },
  {
    title: 'Intermediate (10+2) - MPC',
    detail: 'Sree Chaitanya Junior College, Karimnagar. CGPA: 81.5',
    period: 'Completed May 2023'
  },
  {
    title: 'SSC - Secondary School Certificate',
    detail: 'Telangana State Model School, Sircilla. CGPA: 9.2',
    period: 'Completed May 2021'
  }
];

const experience = [
  {
    role: 'The Student Spot - Student Community Platform',
    period: 'Current (In Progress)',
    detail: 'Building a multi-functional platform for students with authentication, organized resources, modern UX, scalable routing, and AI-assistant planning.',
    highlights: [
      'Implemented responsive frontend modules using React and Tailwind CSS.',
      'Designed scalable platform structure with focus on usability and growth.',
      'Integrated planning for smart assistant support and workflow automation.'
    ]
  },
      {
      role: 'MERN Stack Intern',
      period: 'careerx.club',
      detail: 'Worked on MERN stack projects by building full-stack features with React, Node.js, Express, and MongoDB, while following practical development workflows.',
      highlights: [
        'Built reusable frontend components and connected them with backend APIs.',
        'Implemented CRUD operations and integrated MongoDB data models.',
        'Practiced end-to-end feature delivery, debugging, and code optimization.'
      ]
    },
  //{
    //role: 'WhatsApp Automation Bot',
    //period: 'Project',
    //detail: 'Designed automated workflows using n8n, APIs, and AI integration for real-time //communication use cases.',
    //highlights: [
      //'Built workflow automations to reduce manual responses.',
      //'Connected services through API-driven nodes and routing.',
      //'Tested conversational behavior for practical support scenarios.'
    //]
  //}
];




function renderSkillIcon(skill) {
  switch (skill) {
    case 'Full Stack Development':
      return (
        <svg className="h-4 w-4 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M8 20v-4h8v4" />
          <path d="M12 16v-4" />
        </svg>
      );
    case 'Bootstrap':
      return (
        <svg className="h-4 w-4 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
          <rect width="24" height="24" rx="4" fill="#7952B3" />
          <text x="6" y="17" fontSize="11" fill="#fff" fontFamily="Arial" fontWeight="bold">B</text>
        </svg>
      );
    case 'Meta Business Suite':
      return (
        <svg className="h-4 w-4 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <ellipse cx="12" cy="12" rx="9" ry="6" />
          <path d="M7 12c1-2 3-2 5 0s4 2 5 0" />
        </svg>
      );
    case 'N8N':
      return (
        <svg className="h-4 w-4 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l4 2" />
        </svg>
      );
    case 'Photoshop':
      return (
        <svg className="h-4 w-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
          <rect width="24" height="24" rx="4" fill="#001E36" />
          <text x="3.5" y="17" fontSize="11" fill="#00C8FF" fontFamily="Arial" fontWeight="bold">Ps</text>
        </svg>
      );
    case 'Premiere Pro':
      return (
        <svg className="h-4 w-4 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
          <rect width="24" height="24" rx="4" fill="#2D0036" />
          <text x="2.5" y="17" fontSize="11" fill="#EA77FF" fontFamily="Arial" fontWeight="bold">Pr</text>
        </svg>
      );
    case 'Git':
      return (
        <svg className="h-4 w-4 text-orange-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M21 7l-4-4-4 4m8 0v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );
    case 'MS Office':
      return (
        <svg className="h-4 w-4 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="4" y="4" width="16" height="16" rx="3" />
          <path d="M8 4v16" />
        </svg>
      );
    default:
      return null;
  }
}

const softSkills = ['Fast Learner', 'Effective Communication', 'Team Work', 'Strategic Thinking', 'Adaptability', 'Problem Solving', 'Time Management', 'Creativity'];

const languageSkills = [
  { code: 'IN', label: 'Telugu', value: 100 },
  { code: 'GB', label: 'English', value: 80 },
  { code: 'IN', label: 'Hindi', value: 60 }
];

const achievements = [
  'Completed Web Development Certification and Internship at ODCET Technologies (E-Cell, IIT Hyderabad).',
  'State-Level Chess Player (Government recognized) with strong strategic and analytical thinking.',
  'Built practical projects that combine development, design, and automation for real-world use cases.'
];



export default function Resume() {
  return (
    <section className="relative mx-auto max-w-6xl overflow-hidden px-4 py-12">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute -left-28 top-0 h-80 w-80 rounded-full bg-yellow-400/10 blur-3xl" />
        <div className="absolute -right-24 top-1/3 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      <div className="space-y-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={revealTransition}
          className="flex items-end gap-4"
        >
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-accent">My Journey</p>
            <h2 className="font-display text-4xl font-bold md:text-5xl">
              My <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Resume</span>
            </h2>
          </div>
          <div className="mb-2 h-px flex-1 bg-gradient-to-r from-accent/35 to-transparent" />
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <InteractiveCard
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={revealTransition}
            className="rounded-2xl bg-card border border-border p-7 shadow-card backdrop-blur-sm lg:p-8"
          >
            <div className="mb-7 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 text-ink shadow-lg shadow-yellow-500/20">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 10 12 5 2 10l10 5 10-5Z" />
                  <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                </svg>
              </div>
              <h3 className="font-display text-3xl font-bold">
                My <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Education</span>
              </h3>
              <div className="h-px flex-1 bg-gradient-to-r from-accent/25 to-transparent" />
            </div>

            <div className="relative">
              <div className="absolute bottom-3 left-[7px] top-3 w-px bg-gradient-to-b from-accent/55 via-accent/25 to-transparent" />
              <div className="space-y-5">
                {education.map((item, index) => (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ ...revealTransition, delay: index * 0.06 }}
                    className="group relative pl-8"
                  >
                    <div className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-[3px] border-accent bg-white transition-all duration-300 group-hover:scale-110 group-hover:bg-accent dark:bg-ink" />
                    <div className="rounded-xl border border-border/50 bg-secondary/30 p-4 transition-all duration-300 hover:border-primary/30 hover:bg-secondary/50">
                      <span className="mb-2 inline-block rounded-full bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent">
                        {item.period}
                      </span>
                      <h4 className="font-display text-xl font-bold">{item.title}</h4>
                      {item.detail.includes('CGPA:') ? (
                        <>
                          <p className="mt-1 text-sm text-ink/75 dark:text-paper/75">
                            {item.detail.split('CGPA:')[0].trim()}
                          </p>
                          <p className="text-sm text-ink/75 dark:text-paper/75 font-semibold">
                            CGPA: {item.detail.split('CGPA:')[1].trim()}
                          </p>
                        </>
                      ) : (
                        <p className="mt-1 text-sm text-ink/75 dark:text-paper/75">{item.detail}</p>
                      )}
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </InteractiveCard>

          <InteractiveCard
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ ...revealTransition, delay: 0.06 }}
            className="rounded-2xl bg-card border border-border p-7 shadow-card backdrop-blur-sm lg:p-8"
          >
            <div className="mb-7 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 text-ink shadow-lg shadow-yellow-500/20">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                </svg>
              </div>
              <h3 className="font-display text-3xl font-bold">
                Work <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Experience</span>
              </h3>
              <div className="h-px flex-1 bg-gradient-to-r from-accent/25 to-transparent" />
            </div>

            <div className="relative">
              <div className="absolute bottom-3 left-[7px] top-3 w-px bg-gradient-to-b from-accent/55 via-accent/25 to-transparent" />
              <div className="space-y-5">
                {experience.map((item, index) => (
                  <motion.article
                    key={item.role}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ ...revealTransition, delay: index * 0.06 }}
                    className="group relative pl-8"
                  >
                    <div className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-[3px] border-accent bg-white transition-all duration-300 group-hover:scale-110 group-hover:bg-accent dark:bg-ink" />
                    <div className="rounded-xl border border-border/50 bg-secondary/30 p-4 transition-all duration-300 hover:border-primary/30 hover:bg-secondary/50">
                      <span className="mb-2 inline-block rounded-full bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent">
                        {item.period}
                      </span>
                      <h4 className="font-display text-xl font-bold">{item.role}</h4>
                      <p className="mt-1 text-sm text-ink/75 dark:text-paper/75">{item.detail}</p>
                      <ul className="mt-3 space-y-2">
                        {item.highlights.slice(0, 2).map((point, pointIndex) => (
                          <motion.li
                            key={point}
                            initial={{ opacity: 0, x: -8 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ ...revealTransition, delay: pointIndex * 0.04 }}
                            className="flex items-start gap-2.5 text-sm text-ink/75 dark:text-paper/75"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                            <span>{point}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </InteractiveCard>
        </div>

        <InteractiveCard
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...revealTransition, delay: 0.08 }}
          className="rounded-2xl bg-card border border-border p-7 shadow-card backdrop-blur-sm lg:p-8"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-accent">Skills & Technologies</p>

          <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Progress Bars */}
            <div className="space-y-5">
              {skillMeter.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...revealTransition, delay: index * 0.05 }}
                >
                  <div className="mb-1.5 flex items-center justify-between text-sm">
                    <span className="font-semibold text-foreground/90">{item.label}</span>
                    <span className="font-semibold text-orange-400">{item.value}%</span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-foreground/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.08, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-orange-500"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Skill Chips */}
            <div className="flex flex-wrap gap-2 items-start">
              {skillTags.map((value, valueIndex) => (
                <motion.span
                  key={value}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ ...revealTransition, delay: valueIndex * 0.02 }}
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-transparent px-3 py-1.5 text-xs font-semibold text-foreground/90 dark:text-paper/90"
                >
                  {renderSkillIcon(value)}
                  {value}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-8 border-t border-border/50 pt-8 sm:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={revealTransition}
            >
              <h4 className="mb-4 flex items-center gap-2 text-lg font-heading font-bold text-foreground">
                <svg className="h-5 w-5 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                Soft Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((value, valueIndex) => (
                  <motion.span
                    key={value}
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ ...revealTransition, delay: valueIndex * 0.02 }}
                    className="rounded-full border border-border bg-transparent px-4 py-2 text-sm font-semibold text-foreground/90"
                  >
                    {value}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...revealTransition, delay: 0.04 }}
            >
              <h4 className="mb-4 flex items-center gap-2 text-lg font-heading font-bold text-foreground">
                <svg className="lucide lucide-globe w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20" />
                  <path d="M12 2a15.3 15.3 0 0 1 0 20a15.3 15.3 0 0 1 0-20" />
                </svg>
                Languages
              </h4>
              <div className="space-y-3">
                {languageSkills.map((language, index) => (
                  <motion.div
                    key={language.label}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ ...revealTransition, delay: index * 0.04 }}
                    className="flex items-center gap-4"
                  >
                    <span className="flex items-center w-8">
                      {renderLanguageLogo(language.code)}
                      <span className="text-sm font-bold text-foreground/85">{language.code}</span>
                    </span>
                    <span className="w-16 text-sm font-heading font-semibold text-foreground">{language.label}</span>
                    <div className="h-2.5 min-w-[120px] flex-1 overflow-hidden rounded-full bg-foreground/10">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${language.value}%` }}
                        transition={{ duration: 1.1, delay: 0.25 + index * 0.12, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500"
                      />
                    </div>
                    <span className="w-10 text-right text-xs font-bold text-orange-400">{language.value}%</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </InteractiveCard>

        <InteractiveCard
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...revealTransition, delay: 0.1 }}
          className="rounded-2xl bg-card border border-border p-7 shadow-card backdrop-blur-sm lg:p-8"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-accent">Achievements</p>
          <ul className="space-y-2.5">
            {achievements.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ ...revealTransition, delay: index * 0.05 }}
                className="flex items-start gap-2.5 text-sm text-ink/80 dark:text-paper/80"
              >
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </InteractiveCard>
      </div>
    </section>
  );
}
