import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { asset } from '../utils/asset'

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
}

export default function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 px-6 bg-dark-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px gold-line opacity-30" />
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(201,162,39,0.04) 0%, transparent 70%)' }}
        />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(201,162,39,0.03) 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.6 }}
              className="section-label mb-4"
            >
              Our Philosophy
            </motion.p>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl leading-none text-white mb-6"
            >
              BUILT ON
              <br />
              <span style={{
                background: 'linear-gradient(135deg, #C9A227 0%, #FFD700 60%, #9A7B0A 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                DISCIPLINE
              </span>
            </motion.h2>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-16 h-0.5 mb-8"
              style={{ background: 'linear-gradient(90deg, #C9A227, transparent)' }}
            />

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-white/60 text-base md:text-lg leading-relaxed mb-6"
            >
              Flashfit Gym & Sports Recovery Room is more than a gym — it's a performance sanctuary.
              We believe true transformation comes from the perfect balance of intense training
              and smart recovery, guided by discipline and purpose.
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-white/60 text-base md:text-lg leading-relaxed mb-10"
            >
              From strength training to sports recovery, every square foot of Flashfit is
              designed to push your limits — then restore you for the next challenge.
              Train harder. Recover smarter. Rise stronger.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="grid grid-cols-3 gap-6"
            >
              {[
                { value: '24/7', label: 'Energy' },
                { value: '100%', label: 'Dedication' },
                { value: '∞', label: 'Growth' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-3xl md:text-4xl text-gold-DEFAULT mb-1">{stat.value}</p>
                  <p className="text-white/40 text-xs tracking-widest uppercase">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="relative"
          >
            {/* Main image container */}
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden gold-border vignette">
              <img
                src={asset('/assets/gallery1.webp')}
                alt="Flashfit Gym"
                className="w-full h-full object-cover image-cinematic"
                loading="lazy"
              />
              {/* Overlay shimmer */}
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.6) 100%)' }}
              />
            </div>

            {/* Floating accent card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 bg-glass-dark gold-border p-5 rounded-sm"
            >
              <p className="font-display text-3xl text-gold-DEFAULT">STRENGTH</p>
              <p className="text-white/50 text-xs tracking-widest uppercase mt-1">& Recovery</p>
            </motion.div>

            {/* Gold accent square */}
            <div className="absolute -top-4 -right-4 w-20 h-20 border border-gold-DEFAULT/20 rounded-sm" />
            <div className="absolute -top-2 -right-2 w-16 h-16 border border-gold-DEFAULT/10 rounded-sm" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
