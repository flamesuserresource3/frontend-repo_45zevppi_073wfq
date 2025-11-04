import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import AngleControls from './components/AngleControls';
import ThemeShowcase from './components/ThemeShowcase';

export default function App() {
  const [theme, setTheme] = useState('dark');

  const themeVars = useMemo(() => {
    switch (theme) {
      case 'crimson':
        return {
          ring: 'ring-red-500/30',
          accent: 'from-red-600/40 to-fuchsia-600/20',
        };
      case 'electric':
        return {
          ring: 'ring-cyan-400/30',
          accent: 'from-cyan-500/40 to-blue-600/20',
        };
      default:
        return {
          ring: 'ring-white/20',
          accent: 'from-white/10 to-white/0',
        };
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar theme={theme} onChangeTheme={setTheme} />

      {/* Hero 3D scene */}
      <div className={`relative ${themeVars.ring}`}>
        <Hero3D />

        {/* Subtle themed glow */}
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-x-0 -bottom-10 h-40 blur-2xl bg-gradient-to-b ${themeVars.accent}`}
        />
      </div>

      {/* Angle presets */}
      <AngleControls />

      {/* Theme showcase grid */}
      <ThemeShowcase theme={theme} />

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-white/60 text-sm">
          © {new Date().getFullYear()} VeloX Showroom. Built for interactive 3D exploration.
        </div>
      </footer>
    </div>
  );
}
