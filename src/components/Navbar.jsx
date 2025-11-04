import React from 'react';
import { Car, Palette } from 'lucide-react';

const themes = [
  { key: 'dark', label: 'Dark' },
  { key: 'crimson', label: 'Crimson' },
  { key: 'electric', label: 'Electric' },
];

export default function Navbar({ theme, onChangeTheme }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
            <Car className="h-5 w-5 text-white" />
          </div>
          <span className="font-semibold text-white tracking-wide">VeloX Showroom</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1 rounded-lg bg-white/5 p-1 border border-white/10">
            {themes.map((t) => (
              <button
                key={t.key}
                onClick={() => onChangeTheme(t.key)}
                className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                  theme === t.key ? 'bg-white/20 text-white' : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
          <button
            onClick={() => {
              const currentIndex = themes.findIndex((t) => t.key === theme);
              const next = themes[(currentIndex + 1) % themes.length].key;
              onChangeTheme(next);
            }}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/10 hover:bg-white/15 border border-white/10 text-white text-sm"
          >
            <Palette className="h-4 w-4" />
            Theme
          </button>
        </div>
      </div>
    </header>
  );
}
