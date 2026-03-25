import { motion } from 'framer-motion'
import { Instagram, MapPin, Clock } from 'lucide-react'
import { asset } from '../utils/asset'

export default function Footer() {
  return (
    <footer className="bg-dark-100 border-t border-white/5 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <img
              src={asset('/assets/logo.png')}
              alt="Flashfit"
              className="h-14 w-auto object-contain mb-4"
              loading="lazy"
            />
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Flashfit Gym & Sports Recovery Room — Where performance meets purpose.
            </p>
            <p className="text-white/25 text-xs tracking-widest uppercase mt-3">by @lzchhangte</p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white/50 text-xs uppercase tracking-widest mb-5">Navigate</h4>
            <div className="flex flex-col gap-3">
              {['About', 'Facilities', 'Plans', 'Timings', 'Location'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const id = link === 'Plans' ? 'pricing' : link.toLowerCase()
                    document.querySelector(`#${id}`)?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="text-white/50 hover:text-gold-DEFAULT text-sm text-left transition-colors duration-300 w-fit"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white/50 text-xs uppercase tracking-widest mb-5">Contact</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-gold-DEFAULT mt-0.5 flex-shrink-0" size={14} />
                <p className="text-white/50 text-sm leading-relaxed">
                  2nd &amp; 3rd Floor, Servamus Plaza,
                  <br />Ramhlun North, Aizawl
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="text-gold-DEFAULT flex-shrink-0" size={14} />
                <p className="text-white/50 text-sm">
                  Mon–Sat: 6AM–10AM, 2:30PM–10PM
                </p>
              </div>
              <motion.a
                href="https://instagram.com/flashfitbylzchhangte"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/50 hover:text-gold-DEFAULT transition-colors duration-300 group w-fit"
                whileHover={{ x: 4 }}
              >
                <Instagram className="group-hover:text-gold-DEFAULT flex-shrink-0" size={14} />
                <span className="text-sm">@flashfitbylzchhangte</span>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="gold-line opacity-20 mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs tracking-wide">
            © {new Date().getFullYear()} Flashfit Gym & Sports Recovery Room. All rights reserved.
          </p>
          <p className="text-white/15 text-xs tracking-widest uppercase">
            Grind With Purpose
          </p>
        </div>
      </div>
    </footer>
  )
}
