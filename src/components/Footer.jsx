import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="8" fill="#c97b84"/>
                <path d="M16 8c-4 0-7 3-7 7 0 5 7 9 7 9s7-4 7-9c0-4-3-7-7-7z" fill="white" opacity="0.9"/>
                <circle cx="16" cy="15" r="2.5" fill="#c97b84"/>
              </svg>
              <span className="font-display text-2xl font-semibold">Glamova</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Luxury beauty, rooted in nature. Crafting skincare and cosmetics that celebrate your natural radiance since 2012.
            </p>
            <div className="flex gap-4 mt-6">
              {['fb','tw','ig','yt'].map(s => (
                <div key={s} className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/40 hover:border-rose hover:text-rose transition-colors cursor-pointer text-xs font-bold uppercase">
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-5">Navigate</h4>
            <ul className="space-y-3">
              {[['Home','/'],['About','/about'],['Collections','/services'],['Experts','/doctors'],['Contact','/contact']].map(([l,h]) => (
                <li key={l}><Link to={h} className="text-sm text-white/60 hover:text-white transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-5">Collections</h4>
            <ul className="space-y-3">
              {['Skincare','Lip Color','Foundation','Eye Makeup','Serums & Oils','Gift Sets'].map(s => (
                <li key={s}><span className="text-sm text-white/60 hover:text-white transition-colors cursor-pointer">{s}</span></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-5">Get in Touch</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex gap-3"><span className="text-rose shrink-0 mt-0.5">—</span>8 Beauty Lane, Luxe District</li>
              <li className="flex gap-3"><span className="text-rose shrink-0 mt-0.5">—</span>+1 (800) 452-6968</li>
              <li className="flex gap-3"><span className="text-rose shrink-0 mt-0.5">—</span>hello@glamova.com</li>
              <li className="flex gap-3"><span className="text-rose shrink-0 mt-0.5">—</span>Mon–Sat 9am – 7pm</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-3 text-white/30 text-xs">
          <p>© 2026 Glamova Beauty. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-white transition-colors cursor-pointer">Sustainability</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
