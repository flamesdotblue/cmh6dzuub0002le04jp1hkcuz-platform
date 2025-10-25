import React, { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#blogs', label: 'Blogs' },
]

export default function Nav() {
  const [visible, setVisible] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 60)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-xl border border-[#1E1E1E] bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/30">
          <nav className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="font-bold tracking-widest text-[#7DF9FF]">FUTURE BLACK</a>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((o) => !o)}
              className="sm:hidden p-2 rounded-md border border-[#1E1E1E] text-[#7DF9FF] hover:text-[#00FFFF] hover:border-[#00FFFF]"
            >
              <Menu size={22} />
            </button>
            <ul className="hidden sm:flex gap-8 text-[16px]">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-[#A9A9A9] hover:text-[#7DF9FF] transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          {open && (
            <ul className="sm:hidden grid gap-2 px-4 pb-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    onClick={() => setOpen(false)}
                    href={l.href}
                    className="block rounded-lg px-3 py-2 text-[#A9A9A9] hover:text-black hover:bg-[#7DF9FF] transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <button
                onClick={() => setOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-[#7DF9FF] px-4 py-2 font-semibold text-black transition-colors hover:bg-[#00FFFF]"
              >
                <X size={16} /> Close
              </button>
            </ul>
          )}
        </div>
      </div>
    </header>
  )
}
