import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Facilities', href: '#features' },
  { label: 'Plans', href: '#pricing' },
  { label: 'Timings', href: '#timings' },
  { label: 'Location', href: '#location' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'nav-scrolled py-3' : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          >
            <img
              src="/assets/logo.png"
              alt="Flashfit Logo"
              className="h-16 w-auto object-contain"
              loading="eager"
            />
          </motion.a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3 }}
                onClick={() => handleNavClick(link.href)}
                className="text-white/70 hover:text-gold-DEFAULT text-sm font-medium tracking-wide transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-DEFAULT transition-all duration-300 group-hover:w-full" />
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              onClick={() => handleNavClick('#location')}
              className="btn-gold text-xs py-2.5 px-6"
            >
              <span>Join Now</span>
            </motion.button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed top-[68px] left-0 right-0 z-40 bg-[#0a0a0a] border-b border-gold-DEFAULT/10"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-white/80 hover:text-gold-DEFAULT text-base font-medium tracking-wide text-left py-2 border-b border-white/5 transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
              <button
                onClick={() => handleNavClick('#location')}
                className="btn-gold mt-2 text-center text-sm"
              >
                <span>Join Now</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
