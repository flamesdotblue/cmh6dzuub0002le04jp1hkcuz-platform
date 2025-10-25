import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Blogs', href: '#blogs' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled ? 'bg-black/60 backdrop-blur-md' : 'bg-transparent'} `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="text-xl font-semibold tracking-wider" style={{ color: '#7DF9FF' }}>
            Future Black
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm" 
                style={{ color: '#A9A9A9' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#7DF9FF')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#A9A9A9')}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#projects"
              className="px-4 py-2 rounded-md font-medium"
              style={{ backgroundColor: '#7DF9FF', color: '#121212' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#00FFFF')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#7DF9FF')}
            >
              Explore Work
            </a>
          </nav>
          <button aria-label="Open Menu" onClick={() => setOpen(true)} className="md:hidden p-2 rounded" style={{ color: '#7DF9FF' }}>
            <Menu size={24} />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/80" onClick={() => setOpen(false)}></div>
          <div className="absolute right-0 top-0 h-full w-80 bg-[#1E1E1E] shadow-xl p-6 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold" style={{ color: '#7DF9FF' }}>Menu</span>
              <button aria-label="Close Menu" onClick={() => setOpen(false)} className="p-2 rounded" style={{ color: '#7DF9FF' }}>
                <X />
              </button>
            </div>
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-base"
                  style={{ color: '#A9A9A9' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#7DF9FF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#A9A9A9')}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#projects"
                onClick={() => setOpen(false)}
                className="mt-2 px-4 py-2 rounded-md font-medium text-center"
                style={{ backgroundColor: '#7DF9FF', color: '#121212' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#00FFFF')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#7DF9FF')}
              >
                Explore Work
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
