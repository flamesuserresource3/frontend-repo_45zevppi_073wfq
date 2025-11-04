import React from 'react';
import { Sparkles } from 'lucide-react';

const specs = [
  {
    title: 'Apex Trim',
    power: '720 hp',
    accel: '0–60 in 2.7s',
    top: '212 mph',
  },
  {
    title: 'Track Pack',
    power: '680 hp',
    accel: '0–60 in 3.0s',
    top: '205 mph',
  },
  {
    title: 'Grand Tourer',
    power: '610 hp',
    accel: '0–60 in 3.4s',
    top: '198 mph',
  },
];

export default function ThemeShowcase({ theme }) {
  const themeStyles = {
    dark: 'from-neutral-900 via-neutral-800 to-black border-white/10',
    crimson: 'from-red-800 via-fuchsia-800 to-black border-red-500/30',
    electric: 'from-cyan-700 via-blue-700 to-black border-cyan-400/30',
  }[theme];

  const glow = {
    dark: 'shadow-[0_0_60px_rgba(255,255,255,0.08)]',
    crimson: 'shadow-[0_0_80px_rgba(244,63,94,0.25)]',
    electric: 'shadow-[0_0_80px_rgba(34,211,238,0.25)]',
  }[theme];

  return (
    <section id="themes" className="relative border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-white">Themes & trims</h2>
            <p className="text-white/70 text-sm">Switch themes in the header to see different moods.</p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {specs.map((s, i) => (
            <article
              key={i}
              className={`relative overflow-hidden rounded-xl border bg-gradient-to-br ${themeStyles} ${glow}`}
            >
              <div className="p-5">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-white font-semibold tracking-wide">{s.title}</h3>
                  <span className="text-white/60 text-xs">Spec sheet</span>
                </div>
                <dl className="mt-4 grid grid-cols-3 gap-3 text-center">
                  <div className="rounded-md bg-black/40 border border-white/10 p-3">
                    <dt className="text-white/60 text-xs">Power</dt>
                    <dd className="text-white font-medium">{s.power}</dd>
                  </div>
                  <div className="rounded-md bg-black/40 border border-white/10 p-3">
                    <dt className="text-white/60 text-xs">0–60</dt>
                    <dd className="text-white font-medium">{s.accel}</dd>
                  </div>
                  <div className="rounded-md bg-black/40 border border-white/10 p-3">
                    <dt className="text-white/60 text-xs">Top speed</dt>
                    <dd className="text-white font-medium">{s.top}</dd>
                  </div>
                </dl>
                <div className="mt-4 text-xs text-white/60">
                  Carbon aero, adaptive damping, active exhaust, and forged wheels included.
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
