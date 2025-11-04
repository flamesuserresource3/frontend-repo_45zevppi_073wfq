import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section className="relative w-full min-h-[70vh] sm:min-h-[80vh] lg:min-h-[86vh] overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient & vignette overlays (don\'t block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute inset-0" style={{ boxShadow: 'inset 0 0 160px rgba(0,0,0,0.6)' }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-40">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white drop-shadow-md">
            Experience Performance in 3D
          </h1>
          <p className="mt-4 text-white/80 max-w-xl">
            Explore a sleek, dark-gray sports car with glowing accents. Drag to rotate the scene and discover every
            angle in real-time.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="#angles"
              className="px-5 py-2.5 rounded-md bg-white text-black font-medium hover:bg-white/90 transition-colors"
            >
              View Angles
            </a>
            <a
              href="#themes"
              className="px-5 py-2.5 rounded-md bg-white/10 text-white border border-white/15 hover:bg-white/15 transition-colors"
            >
              Themes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
