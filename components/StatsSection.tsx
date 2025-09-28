"use client";
import { PROOF_STATS } from "@/constants/stats";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function StatsSection() {
  const brand = process.env.NEXT_PUBLIC_BRAND_NAME || "Missed2Booked";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="why-textback"
      aria-labelledby="why-textback-title"
      className="section-padding bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-purple-900"
      data-section="stats"
    >
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Why instant text-back works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {brand} replies in seconds so you're first in line—before competitors call your lead back.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {PROOF_STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-card p-6 text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="text-xs font-medium tracking-widest text-primary/70 uppercase mb-2">
                {stat.label}
              </div>
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                {stat.sub}
              </div>
              <a
                href={stat.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-gray-500 dark:text-gray-400 hover:text-primary transition-colors underline"
                aria-label={`Source for ${stat.label}`}
              >
                {stat.sourceLabel}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/demo"
                className="btn-primary inline-flex items-center justify-center px-8 py-3 text-lg"
              >
                See it live — text yourself the demo
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/pricing"
                className="btn-secondary inline-flex items-center justify-center px-8 py-3 text-lg"
              >
                Compare plans
              </Link>
            </motion.div>
          </div>
          
          <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            * Always include "Reply STOP to opt out" in SMS and register A2P 10DLC for best deliverability.
          </p>
        </motion.div>
      </div>
    </section>
  );
}