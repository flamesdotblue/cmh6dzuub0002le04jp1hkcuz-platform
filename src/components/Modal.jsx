import React, { useEffect } from 'react'

export default function Modal({ open, onClose, children }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose?.()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.8)' }} onClick={onClose} />
      <div className="relative ml-auto h-full w-full sm:w-[680px] md:w-[820px] bg-[#121212] shadow-2xl overflow-y-auto animate-[slideIn_0.35s_ease]">
        <style>
          {`@keyframes slideIn{from{transform:translateX(100%);opacity:.6}to{transform:translateX(0);opacity:1}}`}
        </style>
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#1E1E1E] bg-[#121212] p-4">
          <h3 className="text-lg font-semibold text-[#7DF9FF]">Details</h3>
          <button onClick={onClose} className="rounded-md bg-[#7DF9FF] px-3 py-1 text-sm font-semibold text-black hover:bg-[#00FFFF]">
            Close
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  )
}
