import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto grid max-w-7xl grid-cols-12 items-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="col-span-12 text-sm md:col-span-6" style={{ color: '#A9A9A9' }}>
          © {new Date().getFullYear()} Future Black Portfolio
        </div>
        <div className="col-span-12 mt-4 text-left md:col-span-6 md:mt-0 md:text-right">
          <a href="#home" className="rounded-md px-4 py-2 font-medium" style={{ backgroundColor: '#7DF9FF', color: '#121212' }} onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#00FFFF')} onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#7DF9FF')}>
            Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}
