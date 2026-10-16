import { motion } from 'framer-motion';

export default function SectionTitle({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">{subtitle}</p>
      <h2 className="font-display text-4xl leading-[0.95] md:text-[3.25rem]">{title}</h2>
      <div className="mt-5 h-px w-24 bg-accent/35" aria-hidden="true" />
    </motion.div>
  );
}
