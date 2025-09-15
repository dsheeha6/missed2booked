"use client";
import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow = "Why instant text-back works",
  title = "Win more jobs with faster follow-up",
  sub = "Missed calls are normal. The first fast response usually gets the business."
}: { eyebrow?: string; title?: string; sub?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      className="mx-auto max-w-3xl text-center"
    >
      <p className="text-xs font-medium tracking-widest text-primary/70 uppercase">{eyebrow}</p>
      <h2 className="mt-2 text-2xl md:text-3xl font-semibold">{title}</h2>
      <p className="mt-3 text-sm md:text-base text-muted-foreground">{sub}</p>
    </motion.div>
  );
}


