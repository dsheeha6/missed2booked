"use client";
import { PROOF_STATS } from "@/constants/stats";

export default function MiniStats() {
  return (
    <section className="py-8">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {PROOF_STATS.map((stat) => (
            <div key={stat.label} className="glass-card p-4 text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-xs font-medium tracking-widest text-primary/70 uppercase mb-1">
                {stat.label}
              </div>
              <div className="text-lg md:text-xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-300">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
