import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-[#121212]" />

      <div className="relative z-10 mx-auto grid h-full max-w-7xl grid-cols-12 items-center px-4 sm:px-6 lg:px-8">
        <div className="col-span-12 md:col-span-10 lg:col-span-8 pt-28 pb-20">
          <h1 className="font-extrabold tracking-tight text-white" style={{ fontFamily: 'Montserrat, ui-sans-serif, system-ui', fontSize: '72px', lineHeight: 1.05 }}>
            Your Name Here
          </h1>
          <p className="mt-4 italic text-[#7DF9FF]" style={{ fontFamily: 'Montserrat, ui-sans-serif, system-ui', fontSize: '24px' }}>
            Designing tomorrow — today.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="rounded-lg bg-[#7DF9FF] px-6 py-3 font-semibold text-black transition-colors hover:bg-[#00FFFF]">
              View Projects
            </a>
            <a href="#about" className="rounded-lg border border-[#7DF9FF] px-6 py-3 font-semibold text-[#7DF9FF] transition-colors hover:text-black hover:bg-[#00FFFF] hover:border-[#00FFFF]">
              About Me
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest text-[#A9A9A9]">
        Scroll
      </div>
    </section>
  )
}
