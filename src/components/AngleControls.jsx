import React, { useState } from 'react';
import { Camera, Compass } from 'lucide-react';

const presets = [
  { key: 'front', label: 'Front', hint: 'Rotate to face the front grille.' },
  { key: 'side', label: 'Side', hint: 'Drag to align with the driver-side profile.' },
  { key: 'rear', label: 'Rear', hint: 'Rotate around to reveal the taillights.' },
  { key: 'top', label: 'Top', hint: 'Tilt upward to get an overhead view.' },
];

export default function AngleControls() {
  const [active, setActive] = useState('front');

  return (
    <section id="angles" className="relative bg-gradient-to-b from-black to-black/95 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
            <Camera className="h-4 w-4 text-white" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-white">Angle presets</h2>
            <p className="text-white/70 text-sm">Click a preset, then drag the 3D scene to match it.</p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {presets.map((p) => (
            <button
              key={p.key}
              onClick={() => setActive(p.key)}
              className={`group relative overflow-hidden rounded-lg border transition-colors ${
                active === p.key
                  ? 'border-white/30 bg-white/10'
                  : 'border-white/10 bg-white/5 hover:bg-white/10'
              }`}
            >
              <div className="p-4">
                <div className="flex items-center justify-between text-white">
                  <span className="font-medium">{p.label}</span>
                  <Compass className="h-4 w-4 text-white/70" />
                </div>
                <p className="mt-2 text-xs text-white/70 min-h-[2.5rem]">{p.hint}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-6 text-sm text-white/70">
          Tip: The 3D scene at the top is interactive — drag to orbit and scroll to zoom.
        </div>
      </div>
    </section>
  );
}
