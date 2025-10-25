import React, { useMemo, useState } from 'react'
import Modal from './Modal'

const electricBlue = '#7DF9FF'
const cyanHover = '#00FFFF'
const textGray = '#A9A9A9'
const cardBg = '#1E1E1E'

function SectionHeader({ title, id }) {
  return (
    <h2 id={id} className="col-span-12 mb-8 text-left" style={{ fontFamily: 'Montserrat, ui-sans-serif, system-ui', fontSize: '36px', color: electricBlue }}>
      {title}
    </h2>
  )
}

function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-12 items-center gap-8 px-4 sm:px-6 lg:px-8">
        <SectionHeader title="About Me" />
        <div className="col-span-12 flex justify-center md:col-span-4 md:justify-start">
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop"
            alt="Headshot"
            className="h-48 w-48 rounded-full object-cover shadow-[0_0_0_4px_rgba(125,249,255,0.2)]"
          />
        </div>
        <div className="col-span-12 md:col-span-8">
          <p className="leading-relaxed" style={{ color: textGray, fontFamily: 'Open Sans, ui-sans-serif, system-ui', fontSize: '16px' }}>
            I am a multidisciplinary developer and designer focusing on intelligent user interfaces. My work spans AI-driven
            applications, data visualization, and immersive web experiences. I create systems that are intuitive, accessible,
            and delightfully futuristic.
          </p>
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const projects = useMemo(
    () => [
      {
        id: 'p1',
        title: 'AI-Powered Music Generator',
        thumb:
          'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop',
        media: [
          { type: 'image', src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop' },
        ],
        description:
          'A generative system that composes music using transformer models, featuring real-time parameter controls and MIDI export.',
      },
      {
        id: 'p2',
        title: 'Decentralized Social Platform',
        thumb:
          'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop',
        media: [
          { type: 'image', src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop' },
          { type: 'video', src: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
        ],
        description:
          'A privacy-first, token-incentivized social network with on-chain identity and content provenance.',
      },
      {
        id: 'p3',
        title: 'Interactive Data Visualization Tool',
        thumb:
          'https://images.unsplash.com/photo-1551281044-8a5d2f8d6a12?q=80&w=1200&auto=format&fit=crop',
        media: [
          { type: 'image', src: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1200&auto=format&fit=crop' },
        ],
        description:
          'A WebGL-powered analytics platform for real-time exploration of large datasets with collaborative features.',
      },
    ],
    []
  )

  const [active, setActive] = useState(null)

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6 px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Projects" />
        {projects.map((p) => (
          <button
            key={p.id}
            onClick={() => setActive(p)}
            className="group col-span-12 relative overflow-hidden rounded-xl bg-[#1E1E1E] sm:col-span-6 lg:col-span-4"
          >
            <img src={p.thumb} alt={p.title} className="h-56 w-full object-cover" />
            <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/60" />
            <div className="absolute inset-x-0 bottom-0 p-4">
              <h3 className="font-bold" style={{ color: electricBlue, fontFamily: 'Open Sans, ui-sans-serif, system-ui', fontSize: '18px' }}>
                {p.title}
              </h3>
            </div>
          </button>
        ))}
      </div>

      <Modal open={!!active} onClose={() => setActive(null)}>
        {active && (
          <div className="space-y-5">
            <h3 className="text-2xl font-bold" style={{ color: electricBlue, fontFamily: 'Montserrat, ui-sans-serif, system-ui' }}>
              {active.title}
            </h3>
            <p style={{ color: textGray, fontFamily: 'Open Sans, ui-sans-serif, system-ui', fontSize: '16px' }}>{active.description}</p>
            <div className="grid grid-cols-12 gap-4">
              {active.media.map((m, i) => (
                <div key={i} className="col-span-12">
                  {m.type === 'image' && <img src={m.src} alt="media" className="w-full rounded-lg" />}
                  {m.type === 'video' && (
                    <div className="aspect-video w-full overflow-hidden rounded-lg bg-black/40">
                      <iframe
                        className="h-full w-full"
                        src={m.src}
                        title="Demo video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}

function SkillsExperience() {
  const skills = [
    { name: 'Python', level: 90 },
    { name: 'JavaScript', level: 88 },
    { name: 'UI/UX Design', level: 80 },
    { name: 'Machine Learning', level: 75 },
  ]

  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-8 px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Skills & Experience" />
        <div className="col-span-12 space-y-6 lg:col-span-6">
          {skills.map((s) => (
            <div key={s.name}>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm" style={{ color: textGray }}>{s.name}</span>
                <span className="text-sm" style={{ color: electricBlue }}>{s.level}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full" style={{ backgroundColor: cardBg }}>
                <div
                  className="h-full rounded-full bg-[#7DF9FF] transition-[width] duration-700 ease-out hover:bg-[#00FFFF]"
                  style={{ width: `${s.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-12 lg:col-span-6">
          <div className="grid grid-cols-12 gap-4">
            {skills.map((s, i) => (
              <div key={i} className="col-span-6 md:col-span-4">
                <div className="group rounded-xl border border-[#1E1E1E] bg-[#1A1A1A] p-4 text-center transition-colors hover:border-[#00FFFF]">
                  <span className="font-semibold" style={{ color: electricBlue }}>{s.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function EducationBlogs() {
  const education = [
    {
      title: "Master's in Computer Science, MIT",
      date: '2018 – 2020',
      desc: 'Focus on Human-Computer Interaction and Machine Learning.',
    },
    {
      title: "Bachelor's in Software Engineering, Stanford",
      date: '2014 – 2018',
      desc: 'Concentration in Systems and Design.',
    },
  ]

  const blogs = [
    { title: 'The Future of AI in Design', date: 'Aug 2024', desc: 'Exploring the intersection of AI and creative workflows.' },
    { title: 'Building Scalable Web Applications', date: 'Jun 2024', desc: 'Patterns and practices for resilient systems.' },
    { title: 'The Importance of User-Centered Design', date: 'May 2024', desc: 'Why designing for people leads to better products.' },
  ]

  return (
    <section id="education" className="relative py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-8 px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Education & Blogs" />
        <div className="col-span-12 space-y-4 lg:col-span-6">
          {education.map((e, i) => (
            <div key={i} className="rounded-xl border border-[#2a2a2a] bg-[#1E1E1E] p-5">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-white" style={{ fontFamily: 'Open Sans, ui-sans-serif, system-ui' }}>
                  {e.title}
                </h3>
                <span className="text-sm" style={{ color: electricBlue }}>{e.date}</span>
              </div>
              <p className="mt-2 text-sm" style={{ color: textGray }}>{e.desc}</p>
            </div>
          ))}
        </div>

        <div id="blogs" className="col-span-12 space-y-4 lg:col-span-6">
          {blogs.map((b, i) => (
            <article key={i} className="rounded-xl border border-[#2a2a2a] bg-[#1E1E1E] p-5 transition-transform hover:-translate-y-0.5">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-white" style={{ fontFamily: 'Open Sans, ui-sans-serif, system-ui' }}>
                  {b.title}
                </h3>
                <span className="text-sm" style={{ color: electricBlue }}>{b.date}</span>
              </div>
              <p className="mt-2 text-sm" style={{ color: textGray }}>{b.desc}</p>
              <div className="mt-4">
                <a
                  href="#"
                  className="inline-block rounded-lg px-4 py-2 text-sm font-semibold text-black transition-colors"
                  style={{ backgroundColor: electricBlue }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = cyanHover)}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = electricBlue)}
                >
                  Read more
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function PortfolioSections() {
  return (
    <main>
      <About />
      <Projects />
      <SkillsExperience />
      <EducationBlogs />
    </main>
  )
}
