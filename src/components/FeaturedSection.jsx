import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Award, TrendingUp } from 'lucide-react'

export default function FeaturedSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="featured" ref={ref} className="relative py-24 md:py-36 overflow-hidden bg-dark-100">
      <div className="absolute top-0 left-0 right-0 h-px gold-line opacity-20" />

      {/* Background radial glow (athlete side) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 inset-y-0 w-1/2"
          style={{ background: 'radial-gradient(ellipse at right center, rgba(201,162,39,0.06) 0%, transparent 70%)' }}
        />
        <div className="absolute left-0 inset-y-0 w-1/2"
          style={{ background: 'radial-gradient(ellipse at left center, rgba(0,0,0,0.4) 0%, transparent 60%)' }}
        />
      </div>

      {/* Horizontal gold line through center */}
      <div className="absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2 pointer-events-none md:block hidden"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(201,162,39,0.15), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text content */}
          <div className="order-2 lg:order-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="section-label mb-4"
            >
              Inspired by Excellence
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl leading-none text-white mb-2"
            >
              POWERED BY
              <br />
              <span style={{
                background: 'linear-gradient(135deg, #C9A227 0%, #FFD700 50%, #9A7B0A 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                PASSION
              </span>
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              className="w-20 h-px mb-8 origin-left"
              style={{ background: 'linear-gradient(90deg, #C9A227, transparent)' }}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-white/60 text-base md:text-lg leading-relaxed mb-4"
            >
              Flashfit Gym is built on the spirit of those who refuse to settle.
              Inspired by champions who rise before the world wakes up, who push through
              when it hurts, and who know that greatness is earned in the grind.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-white/60 text-base md:text-lg leading-relaxed mb-10"
            >
              We're honored to share the same spirit as{' '}
              <span className="text-gold-DEFAULT font-semibold">Lallianzuala Chhangte</span>{' '}
              — a name synonymous with speed, dedication, and elite performance on the national stage.
            </motion.p>

            {/* Attributes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col gap-4"
            >
              {[
                { icon: Star, label: 'Elite mindset, everyday' },
                { icon: Award, label: 'Train like a champion' },
                { icon: TrendingUp, label: 'Constant progression' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-sm flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(201,162,39,0.1)', border: '1px solid rgba(201,162,39,0.15)' }}>
                    <Icon className="text-gold-DEFAULT" size={14} />
                  </div>
                  <p className="text-white/70 text-sm">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Athlete image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="order-1 lg:order-2 relative flex justify-center"
          >
            {/* Glow behind athlete */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="w-80 h-80 rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(201,162,39,0.12) 0%, transparent 70%)' }}
              />
            </div>

            {/* Athlete PNG image */}
            <div className="relative">
              {/* Pedestal/platform */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-1"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(201,162,39,0.6), transparent)', filter: 'blur(4px)' }}
              />

              <img
                src="/assets/athlete.png"
                alt="Lallianzuala Chhangte — Inspired by Excellence"
                className="relative z-10 max-h-[500px] object-contain drop-shadow-2xl"
                loading="lazy"
                style={{
                  filter: 'drop-shadow(0 0 40px rgba(201,162,39,0.15)) contrast(1.05)',
                }}
              />

              {/* Name tag */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.9 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-glass-dark gold-border px-5 py-3 rounded-sm text-center whitespace-nowrap z-20"
              >
                <p className="font-display text-gold-DEFAULT text-lg tracking-widest">LALLIANZUALA CHHANGTE</p>
                <p className="text-white/40 text-xs tracking-widest uppercase mt-0.5">Indian Football Star</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
