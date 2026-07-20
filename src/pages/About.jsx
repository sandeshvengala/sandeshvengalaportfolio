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
  'Graphic Designer',
  'Video Editor',
  'Photography',
  'Videography',
  'Social Media Editor',
  'Content Creator',
  'Community Builder'
];

function renderFocusIcon(item) {
  if (item === 'Graphic Designer') {
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

  if (item === 'Video Editor') {
    return (
      <svg className="h-4 w-4 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="3" y="5" width="15" height="14" rx="2" />
        <polygon points="10 9 15 12 10 15" />
        <path d="M18 9l3-2v10l-3-2" />
      </svg>
    );
  }

  if (item === 'Photography') {
    return (
      <svg className="h-4 w-4 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
        <circle cx="12" cy="13" r="3" />
      </svg>
    );
  }

  if (item === 'Videography') {
    return (
      <svg className="h-4 w-4 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="3" y="6" width="13" height="12" rx="2" />
        <polygon points="16 10 21 7 21 17 16 14" />
      </svg>
    );
  }

  if (item === 'Social Media Editor') {
    return (
      <svg className="h-4 w-4 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 9h8M8 13h5" />
      </svg>
    );
  }

  if (item === 'Content Creator') {
    return (
      <svg className="h-4 w-4 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 7h8M8 11h8M8 15h5" />
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
      <circle cx="12" cy="12" r="10" />
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
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">Creative Portfolio</p>
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            About <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Sandesh</span>
          </h2>
        </div>
        <div className="mb-2 h-px flex-1 bg-gradient-to-r from-accent/40 to-transparent" />
      </motion.div>

      <div className="mb-10 flex flex-wrap gap-3">
        {focusAreas.map((item, index) => (
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
      🎥
    </div>

    <p className="text-lg leading-relaxed text-ink/80 dark:text-paper/80">
      I am a passionate visual creator specializing in graphic design,
      photography, videography, video editing, and content creation.
      Through Sandesh Visuals, I transform ideas into compelling visual
      stories that capture attention, build brand identity, and create
      meaningful connections with audiences across digital platforms.
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
      🚀
    </div>

    <p className="text-lg leading-relaxed text-ink/80 dark:text-paper/80">
      From social media campaigns and cinematic videos to branding,
      commercial shoots, product photography, and promotional content,
      every project is crafted with creativity, strategy, and attention
      to detail. My goal is simple—to help businesses, creators, and
      personal brands stand out with visuals that leave a lasting impact.
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
      What I
      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
        {" "}Create
      </span>
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

      <h4 className="mb-3 font-display text-2xl font-bold text-ink dark:text-paper">
        Photography & Videography
      </h4>

      <p className="text-lg leading-relaxed text-ink/80 dark:text-paper/80">
        Every frame is captured with purpose. From portraits and events to
        products and commercial shoots, I focus on storytelling through
        composition, lighting, movement, and cinematic visuals that
        connect with people and elevate brands.
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

      <h4 className="mb-3 font-display text-2xl font-bold text-ink dark:text-paper">
        Design & Content Creation
      </h4>

      <p className="text-lg leading-relaxed text-ink/80 dark:text-paper/80">
        From brand identities and social media creatives to reels,
        advertisements, thumbnails, and promotional campaigns, I design
        content that is visually engaging, strategically crafted, and
        built to make brands memorable in today's digital world.
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
      My{" "}
      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
        Creative Journey
      </span>
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
    Alongside building <strong className="text-ink dark:text-paper">Sandesh Visuals</strong>,
    I contribute to <strong className="text-ink dark:text-paper">The Student Spot</strong>
    as a <strong className="text-ink dark:text-paper">Community Builder, Graphic Designer, and Social Media Manager</strong>.
    I create impactful visual content, design brand assets, manage social media campaigns,
    and help build a thriving student-to-founder ecosystem.
  </motion.p>

  <motion.p
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ ...revealTransition, delay: 0.09 }}
    className="leading-relaxed text-ink/80 dark:text-paper/80"
  >
    These experiences have strengthened my ability to combine creativity,
    branding, storytelling, and community engagement. Whether working on
    commercial projects through Sandesh Visuals or creating campaigns for
    The Student Spot, my focus is always on delivering visuals that
    inspire, connect, and create lasting impact.
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
        <p className="min-w-[100px] font-display text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          <CountUp end={150} suffix="+" />
        </p>

        <p className="text-sm leading-tight text-ink/65 dark:text-paper/65">
          Creative Projects
        </p>
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
        <p className="min-w-[100px] font-display text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          <CountUp end={50} suffix="+" />
        </p>

        <p className="text-sm leading-tight text-ink/65 dark:text-paper/65">
          Happy Clients
        </p>
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
        <p className="min-w-[100px] font-display text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          <CountUp end={6} suffix="+" />
        </p>

        <p className="text-sm leading-tight text-ink/65 dark:text-paper/65">
          Creative Services
        </p>
      </motion.div>
    </div>
  </div>
</motion.div>

        <motion.p
  initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={revealTransition}
  className="mb-5 font-display text-lg font-semibold text-ink dark:text-paper"
>
  Every project at Sandesh Visuals follows a creative process designed to
  deliver impactful, high-quality visuals.
</motion.p>

<div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

  <InteractiveCard
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={revealTransition}
    className="rounded-2xl border border-ink/10 bg-white/80 p-5 transition-all duration-300 hover:border-accent/40 hover:shadow-card dark:border-paper/10 dark:bg-ink/35"
  >
    <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-[40px] bg-accent/[0.03]" />
    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
      💡
    </div>

    <p className="mb-1 font-display text-lg font-semibold text-ink dark:text-paper">
      Creative Strategy
    </p>

    <p className="text-sm text-ink/70 dark:text-paper/70">
      Understanding your goals, audience, and brand identity before creating visuals.
    </p>
  </InteractiveCard>

  <InteractiveCard
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ ...revealTransition, delay: 0.04 }}
    className="rounded-2xl border border-ink/10 bg-white/80 p-5 transition-all duration-300 hover:border-accent/40 hover:shadow-card dark:border-paper/10 dark:bg-ink/35"
  >
    <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-[40px] bg-accent/[0.03]" />
    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
      📸
    </div>

    <p className="mb-1 font-display text-lg font-semibold text-ink dark:text-paper">
      Production
    </p>

    <p className="text-sm text-ink/70 dark:text-paper/70">
      Professional photography and videography with attention to lighting, composition, and storytelling.
    </p>
  </InteractiveCard>

  <InteractiveCard
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ ...revealTransition, delay: 0.08 }}
    className="rounded-2xl border border-ink/10 bg-white/80 p-5 transition-all duration-300 hover:border-accent/40 hover:shadow-card dark:border-paper/10 dark:bg-ink/35"
  >
    <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-[40px] bg-accent/[0.03]" />
    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
      🎬
    </div>

    <p className="mb-1 font-display text-lg font-semibold text-ink dark:text-paper">
      Editing & Post Production
    </p>

    <p className="text-sm text-ink/70 dark:text-paper/70">
      Color grading, motion graphics, sound design, and premium editing that brings every project to life.
    </p>
  </InteractiveCard>

  <InteractiveCard
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ ...revealTransition, delay: 0.12 }}
    className="rounded-2xl border border-ink/10 bg-white/80 p-5 transition-all duration-300 hover:border-accent/40 hover:shadow-card dark:border-paper/10 dark:bg-ink/35"
  >
    <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-[40px] bg-accent/[0.03]" />
    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
      🎨
    </div>

    <p className="mb-1 font-display text-lg font-semibold text-ink dark:text-paper">
      Brand Design
    </p>

    <p className="text-sm text-ink/70 dark:text-paper/70">
      Designing logos, posters, social media creatives, thumbnails, and visual identities that stand out.
    </p>
  </InteractiveCard>

  <InteractiveCard
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ ...revealTransition, delay: 0.16 }}
    className="rounded-2xl border border-ink/10 bg-white/80 p-5 transition-all duration-300 hover:border-accent/40 hover:shadow-card dark:border-paper/10 dark:bg-ink/35"
  >
    <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-[40px] bg-accent/[0.03]" />
    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
      📱
    </div>

    <p className="mb-1 font-display text-lg font-semibold text-ink dark:text-paper">
      Social Media Content
    </p>

    <p className="text-sm text-ink/70 dark:text-paper/70">
      Creating engaging reels, campaigns, and content optimized for Instagram, YouTube, LinkedIn, and beyond.
    </p>
  </InteractiveCard>

  <InteractiveCard
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ ...revealTransition, delay: 0.20 }}
    className="rounded-2xl border border-ink/10 bg-white/80 p-5 transition-all duration-300 hover:border-accent/40 hover:shadow-card dark:border-paper/10 dark:bg-ink/35"
  >
    <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-[40px] bg-accent/[0.03]" />
    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
      🚀
    </div>

    <p className="mb-1 font-display text-lg font-semibold text-ink dark:text-paper">
      Final Delivery
    </p>

    <p className="text-sm text-ink/70 dark:text-paper/70">
      Delivering polished, platform-ready creative assets that help brands grow and make a lasting impression.
    </p>
  </InteractiveCard>

</div>
      
      {/* Optional Quote Section
<div className="relative overflow-hidden rounded-2xl border border-accent/25 bg-gradient-to-br from-accent/5 via-white/70 to-yellow-500/5 p-10 dark:via-ink/35">
  <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-accent/10 blur-2xl" />
  <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-yellow-500/10 blur-2xl" />

  <p className="mb-4 text-4xl text-accent/25">&ldquo;</p>

  <p className="max-w-3xl text-xl italic leading-relaxed text-ink dark:text-paper lg:text-2xl">
    Great visuals don't just capture attention—they tell stories,
    build trust, and inspire people to take action.
  </p>

  <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500" />
</div>
*/}

<motion.div
  initial={{ opacity: 0, y: 16 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ ...revealTransition, delay: 0.06 }}
  className="mt-12"
>
  <motion.p
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={revealTransition}
    className="mb-8 text-lg font-semibold leading-relaxed text-ink dark:text-paper"
  >
    Every project is an opportunity to create something meaningful.
    Whether it's a brand identity, cinematic film, social media
    campaign, or commercial shoot, my goal is to transform ideas into
    visuals that connect, inspire, and leave a lasting impression.
  </motion.p>

  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

    <InteractiveCard
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={revealTransition}
      className="rounded-2xl border border-ink/10 bg-white/80 p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-card dark:border-paper/10 dark:bg-ink/35"
    >
      <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-[40px] bg-accent/[0.02]" />

      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
        🎨
      </div>

      <p className="mb-2 font-semibold text-ink dark:text-paper">
        Creative Design
      </p>

      <p className="text-sm text-ink/70 dark:text-paper/70">
        Crafting bold visuals, brand identities, posters, and digital
        creatives that help businesses stand out.
      </p>
    </InteractiveCard>

    <InteractiveCard
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ ...revealTransition, delay: 0.05 }}
      className="rounded-2xl border border-ink/10 bg-white/80 p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-card dark:border-paper/10 dark:bg-ink/35"
    >
      <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-[40px] bg-accent/[0.02]" />

      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
        🎥
      </div>

      <p className="mb-2 font-semibold text-ink dark:text-paper">
        Cinematic Storytelling
      </p>

      <p className="text-sm text-ink/70 dark:text-paper/70">
        Producing professional photography, videography, and edited
        content that captures emotion and tells memorable stories.
      </p>
    </InteractiveCard>

    <InteractiveCard
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ ...revealTransition, delay: 0.10 }}
      className="rounded-2xl border border-ink/10 bg-white/80 p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-card dark:border-paper/10 dark:bg-ink/35"
    >
      <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-[40px] bg-accent/[0.02]" />

      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
        🚀
      </div>

      <p className="mb-2 font-semibold text-ink dark:text-paper">
        Building Brands
      </p>

      <p className="text-sm text-ink/70 dark:text-paper/70">
        Helping businesses and creators grow through strategic visual
        content, branding, and engaging digital experiences.
      </p>
    </InteractiveCard>

  </div>
</motion.div>
    </section>
  );
}
