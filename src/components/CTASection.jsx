import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Instagram } from 'lucide-react'

export default function CTASection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative py-28 md:py-40 px-6 overflow-hidden bg-dark">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px gold-line opacity-40" />
        {/* Strong gold radial from center */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(201,162,39,0.07) 0%, transparent 70%)' }}
        />
        {/* Side vignettes */}
        <div className="absolute left-0 inset-y-0 w-1/3"
          style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.6), transparent)' }} />
        <div className="absolute right-0 inset-y-0 w-1/3"
          style={{ background: 'linear-gradient(to left, rgba(0,0,0,0.6), transparent)' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-label mb-6"
        >
          Ready?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="font-display text-[clamp(2.5rem,9vw,7rem)] leading-none text-white mb-4"
        >
          START YOUR
          <br />
          <span style={{
            background: 'linear-gradient(135deg, #C9A227 0%, #FFD700 50%, #9A7B0A 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            FITNESS JOURNEY
          </span>
          <br />
          TODAY
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-24 h-px mx-auto mb-8"
          style={{ background: 'linear-gradient(90deg, transparent, #C9A227, transparent)' }}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-white/50 text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed"
        >
          Every champion started somewhere. Take the first step into Flashfit and
          discover what you're truly capable of.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#location"
            onClick={(e) => { e.preventDefault(); document.querySelector('#location')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="btn-gold text-sm md:text-base inline-flex items-center gap-2 min-w-[180px] justify-center"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <span>Join Now</span>
            <ArrowRight size={16} />
          </motion.a>

          <motion.a
            href="https://instagram.com/flashfitbylzchhangte"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold text-sm md:text-base inline-flex items-center gap-2 min-w-[180px] justify-center"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <Instagram size={16} />
            <span>Follow Us</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
