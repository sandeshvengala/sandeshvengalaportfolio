import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import InteractiveCard from '../components/InteractiveCard';
import BackButton from '../components/BackButton';

const revealTransition = { duration: 0.55, ease: 'easeOut' };

function CountUp({ end, suffix = '', duration = 1400 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let animationFrame;
    let startTime;

    const updateValue = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setValue(Math.floor(end * progress));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateValue);
      }
    };

    animationFrame = requestAnimationFrame(updateValue);
    return () => cancelAnimationFrame(animationFrame);
  }, [duration, end, isInView]);

  return (
    <span ref={ref}>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

const focusAreas = [
  'Full Stack Development',
  'Photography & Video',
  'Graphic Design',
  'Community Builder'
];

function renderFocusIcon(item) {
  if (item === 'Full Stack Development') {
    return (
      <svg className="h-4 w-4 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    );
  }

  if (item === 'Photography & Video') {
    return (
      <svg className="h-4 w-4 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
        <circle cx="12" cy="13" r="3" />
      </svg>
    );
  }

  if (item === 'Graphic Design') {
    return (
      <svg className="h-4 w-4 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="13.5" cy="6.5" r="2.5" />
        <circle cx="19" cy="13" r="2" />
        <circle cx="6" cy="12" r="2" />
        <circle cx="10" cy="18" r="2" />
        <path d="M16 21a7 7 0 1 0 0-14h-1" />
      </svg>
    );
  }

  if (item === 'Community Builder') {
    return (
      <svg className="h-4 w-4 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    );
  }

  return (
    <svg className="h-4 w-4 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export default function About() {
  return (
    <section className="relative mx-auto max-w-6xl overflow-hidden px-4 py-12">
      <div className="mb-6 flex items-center justify-between">
        <BackButton />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={revealTransition}
        className="mb-10 flex items-end gap-4"
      >
        <div>
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">Get To Know</p>
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            About <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Me</span>
          </h2>
        </div>
        <div className="mb-2 h-px flex-1 bg-gradient-to-r from-accent/40 to-transparent" />
      </motion.div>

      <div className="mb-10 flex flex-wrap gap-3">
        {focusAreas.slice(0, 4).map((item, index) => (
          <motion.span
            key={item}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...revealTransition, delay: index * 0.06 }}
            className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/70 px-4 py-2 text-sm font-semibold text-ink/90 dark:border-paper/20 dark:bg-ink/35 dark:text-paper"
          >
            {renderFocusIcon(item)}
            {item}
          </motion.span>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <InteractiveCard
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={revealTransition}
          className="rounded-2xl border border-ink/10 bg-white/80 p-7 shadow-card dark:border-paper/10 dark:bg-ink/35"
        >
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
            ⚡
          </div>
          <p className="text-lg leading-relaxed text-ink/80 dark:text-paper/80">
            I am a passionate and versatile developer and designer focused on building modern, user-centric digital
            experiences. With a strong foundation in web development and UI/UX design, I specialize in responsive,
            interactive, and visually appealing applications.
          </p>
        </InteractiveCard>

        <InteractiveCard
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...revealTransition, delay: 0.06 }}
          className="rounded-2xl border border-ink/10 bg-white/80 p-7 shadow-card dark:border-paper/10 dark:bg-ink/35"
        >
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
            ✦
          </div>
          <p className="text-lg leading-relaxed text-ink/80 dark:text-paper/80">
            I am currently developing The Student Spot, a platform aimed at empowering students through resources,
            community engagement, and innovation. Alongside development, I work on graphic design and photography to
            bring a strong visual perspective into every product.
          </p>
        </InteractiveCard>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ ...revealTransition, delay: 0.08 }}
        className="mt-10"
      >
        <div className="mb-6 flex items-center gap-4">
          <div className="h-3 w-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500" />
          <h3 className="font-display text-3xl font-bold md:text-4xl">
            Creative <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">About Me</span>
          </h3>
          <div className="h-px flex-1 bg-gradient-to-r from-accent/40 to-transparent" />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <InteractiveCard
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={revealTransition}
            className="group rounded-2xl border border-ink/10 bg-white/80 p-7 shadow-card transition-all duration-300 hover:border-accent/30 hover:shadow-lg dark:border-paper/10 dark:bg-ink/35"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
              📸
            </div>
            <h4 className="mb-3 font-display text-2xl font-bold text-ink dark:text-paper">Photography</h4>
            <p className="text-lg leading-relaxed text-ink/80 dark:text-paper/80">
              Photography work focuses on real stories, human emotion, and clean composition. Each shoot is designed to
              capture authentic moments with strong visual direction, balanced lighting, and edits that keep the final
              output natural while still premium.
            </p>
          </InteractiveCard>

          <InteractiveCard
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...revealTransition, delay: 0.06 }}
            className="group rounded-2xl border border-ink/10 bg-white/80 p-7 shadow-card transition-all duration-300 hover:border-accent/30 hover:shadow-lg dark:border-paper/10 dark:bg-ink/35"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
              🎨
            </div>
            <h4 className="mb-3 font-display text-2xl font-bold text-ink dark:text-paper">Graphic Design</h4>
            <p className="text-lg leading-relaxed text-ink/80 dark:text-paper/80">
              Graphic design work blends brand clarity with modern aesthetics across social media, campaign visuals,
              posters, and product creatives. The goal is to turn ideas into bold, memorable visuals that communicate
              quickly and create a lasting impression.
            </p>
          </InteractiveCard>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ ...revealTransition, delay: 0.1 }}
        className="relative mt-10"
      >
        <div className="mb-10 flex items-center gap-4">
          <div className="h-3 w-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500" />
          <h3 className="font-display text-3xl font-bold md:text-4xl">
            The <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Student Spot</span>
          </h3>
          <div className="h-px flex-1 bg-gradient-to-r from-accent/40 to-transparent" />
        </div>

        <div className="mb-10 grid gap-6 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={revealTransition}
            className="space-y-4 rounded-2xl border border-ink/10 bg-white/80 p-7 shadow-card dark:border-paper/10 dark:bg-ink/35 lg:col-span-3"
          >
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...revealTransition, delay: 0.03 }}
              className="leading-relaxed text-ink/80 dark:text-paper/80"
            >
              A <strong className="text-ink dark:text-paper">Student-community ecosystem</strong> where I contribute as a <strong className="text-ink dark:text-paper">community builder</strong>, connecting students with opportunities, practical knowledge, and support networks beyond traditional classroom learning.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...revealTransition, delay: 0.09 }}
              className="leading-relaxed text-ink/80 dark:text-paper/80"
            >
              What started as a simple idea is growing into a collaborative network where students, startups, and mentors work together through internships, events, and real-world projects
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 gap-3 lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 26, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.45 }}
              whileHover={{ y: -4, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              transition={{ ...revealTransition, duration: 0.6 }}
              className="flex items-center gap-5 rounded-xl border border-ink/10 bg-white/80 p-5 transition-all duration-300 hover:border-accent/30 dark:border-paper/10 dark:bg-ink/35"
            >
              <p className="min-w-[100px] font-display text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"><CountUp end={20000} suffix="+" /></p>
              <p className="text-sm leading-tight text-ink/65 dark:text-paper/65">Students &amp; Professionals</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 26, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.45 }}
              whileHover={{ y: -4, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              transition={{ ...revealTransition, delay: 0.08, duration: 0.6 }}
              className="flex items-center gap-5 rounded-xl border border-ink/10 bg-white/80 p-5 transition-all duration-300 hover:border-accent/30 dark:border-paper/10 dark:bg-ink/35"
            >
              <p className="min-w-[100px] font-display text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"><CountUp end={100} suffix="+" /></p>
              <p className="text-sm leading-tight text-ink/65 dark:text-paper/65">Partner Companies</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 26, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.45 }}
              whileHover={{ y: -4, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              transition={{ ...revealTransition, delay: 0.16, duration: 0.6 }}
              className="flex items-center gap-5 rounded-xl border border-ink/10 bg-white/80 p-5 transition-all duration-300 hover:border-accent/30 dark:border-paper/10 dark:bg-ink/35"
            >
              <p className="min-w-[100px] font-display text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"><CountUp end={100} suffix="+" /></p>
              <p className="text-sm leading-tight text-ink/65 dark:text-paper/65">Events &amp; Workshops</p>
            </motion.div>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={revealTransition}
          className="mb-5 font-display text-lg font-semibold text-ink dark:text-paper"
        >
          Through this ecosystem we aim to help students:
        </motion.p>

        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <InteractiveCard initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={revealTransition} className="rounded-2xl border border-ink/10 bg-white/80 p-5 transition-all duration-300 hover:border-accent/40 hover:shadow-card dark:border-paper/10 dark:bg-ink/35">
            <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-[40px] bg-accent/[0.03] transition-colors group-hover:bg-accent/[0.06]" />
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white">🎯</div>
            <p className="mb-1 font-display text-lg font-semibold text-ink dark:text-paper">Discover career paths</p>
            <p className="text-sm text-ink/70 dark:text-paper/70">Explore industries and roles that match your strengths</p>
          </InteractiveCard>

          <InteractiveCard initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ...revealTransition, delay: 0.04 }} className="rounded-2xl border border-ink/10 bg-white/80 p-5 transition-all duration-300 hover:border-accent/40 hover:shadow-card dark:border-paper/10 dark:bg-ink/35">
            <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-[40px] bg-accent/[0.03] transition-colors group-hover:bg-accent/[0.06]" />
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white">🛠️</div>
            <p className="mb-1 font-display text-lg font-semibold text-ink dark:text-paper">Build practical skills</p>
            <p className="text-sm text-ink/70 dark:text-paper/70">Hands-on learning beyond traditional academics</p>
          </InteractiveCard>

          <InteractiveCard initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ...revealTransition, delay: 0.08 }} className="rounded-2xl border border-ink/10 bg-white/80 p-5 transition-all duration-300 hover:border-accent/40 hover:shadow-card dark:border-paper/10 dark:bg-ink/35">
            <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-[40px] bg-accent/[0.03] transition-colors group-hover:bg-accent/[0.06]" />
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white">👥</div>
            <p className="mb-1 font-display text-lg font-semibold text-ink dark:text-paper">Connect with mentors</p>
            <p className="text-sm text-ink/70 dark:text-paper/70">Get guidance from founders and professionals</p>
          </InteractiveCard>

          <InteractiveCard initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ...revealTransition, delay: 0.12 }} className="rounded-2xl border border-ink/10 bg-white/80 p-5 transition-all duration-300 hover:border-accent/40 hover:shadow-card dark:border-paper/10 dark:bg-ink/35">
            <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-[40px] bg-accent/[0.03] transition-colors group-hover:bg-accent/[0.06]" />
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white">💼</div>
            <p className="mb-1 font-display text-lg font-semibold text-ink dark:text-paper">Access opportunities</p>
            <p className="text-sm text-ink/70 dark:text-paper/70">Internships, jobs, and freelance work</p>
          </InteractiveCard>

          <InteractiveCard initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ...revealTransition, delay: 0.16 }} className="rounded-2xl border border-ink/10 bg-white/80 p-5 transition-all duration-300 hover:border-accent/40 hover:shadow-card dark:border-paper/10 dark:bg-ink/35">
            <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-[40px] bg-accent/[0.03] transition-colors group-hover:bg-accent/[0.06]" />
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white">🚀</div>
            <p className="mb-1 font-display text-lg font-semibold text-ink dark:text-paper">Explore entrepreneurship</p>
            <p className="text-sm text-ink/70 dark:text-paper/70">Resources to launch and grow your startup</p>
          </InteractiveCard>

          <InteractiveCard initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ...revealTransition, delay: 0.2 }} className="rounded-2xl border border-ink/10 bg-white/80 p-5 transition-all duration-300 hover:border-accent/40 hover:shadow-card dark:border-paper/10 dark:bg-ink/35">
            <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-[40px] bg-accent/[0.03] transition-colors group-hover:bg-accent/[0.06]" />
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white">💡</div>
            <p className="mb-1 font-display text-lg font-semibold text-ink dark:text-paper">Collaborate on projects</p>
            <p className="text-sm text-ink/70 dark:text-paper/70">Team up to build meaningful products</p>
          </InteractiveCard>
        </div>

        {/*
        <div className="relative overflow-hidden rounded-2xl border border-accent/25 bg-gradient-to-br from-accent/5 via-white/70 to-yellow-500/5 p-10 dark:via-ink/35">
          <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-accent/10 blur-2xl" />
          <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-yellow-500/10 blur-2xl" />
          <p className="mb-4 text-4xl text-accent/25">&ldquo;</p>
          <p className="max-w-3xl text-xl italic leading-relaxed text-ink dark:text-paper lg:text-2xl">
            Create a future where students are not just job seekers, but builders, innovators, and founders.
          </p>
          <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500" />
        </div>
        */}

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ...revealTransition, delay: 0.06 }} className="mt-12">
          <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={revealTransition} className="mb-8 text-lg font-semibold leading-relaxed text-ink dark:text-paper">
            I bring together design, development, and community building to create meaningful digital experiences that inspire and connect people.
          </motion.p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <InteractiveCard initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={revealTransition} className="rounded-2xl border border-ink/10 bg-white/80 p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-card dark:border-paper/10 dark:bg-ink/35">
              <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-[40px] bg-accent/[0.02] transition-colors group-hover:bg-accent/[0.06]" />
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                🎨
              </div>
              <p className="mb-2 font-semibold text-ink dark:text-paper">Design-Focused</p>
              <p className="text-sm text-ink/70 dark:text-paper/70">
                Creating beautiful, intuitive interfaces with a focus on user experience and visual storytelling.
              </p>
            </InteractiveCard>

            <InteractiveCard initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ...revealTransition, delay: 0.05 }} className="rounded-2xl border border-ink/10 bg-white/80 p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-card dark:border-paper/10 dark:bg-ink/35">
              <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-[40px] bg-accent/[0.02] transition-colors group-hover:bg-accent/[0.06]" />
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                ⚙️
              </div>
              <p className="mb-2 font-semibold text-ink dark:text-paper">Full-Stack Development</p>
              <p className="text-sm text-ink/70 dark:text-paper/70">
                Building robust, scalable applications using modern technologies and best practices.
              </p>
            </InteractiveCard>

            <InteractiveCard initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ...revealTransition, delay: 0.1 }} className="rounded-2xl border border-ink/10 bg-white/80 p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-card dark:border-paper/10 dark:bg-ink/35">
              <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-[40px] bg-accent/[0.02] transition-colors group-hover:bg-accent/[0.06]" />
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                🤝
              </div>
              <p className="mb-2 font-semibold text-ink dark:text-paper">Community Builder</p>
              <p className="text-sm text-ink/70 dark:text-paper/70">
                Fostering collaboration and growth through meaningful connections and shared learning.
              </p>
            </InteractiveCard>
          </div>
        </motion.div>
      </motion.div>

    </section>
  );
}
