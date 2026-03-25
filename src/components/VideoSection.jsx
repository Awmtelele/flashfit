import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { asset } from '../utils/asset'

const videos = [
  {
    src: asset('/assets/video1.mp4'),
    label: 'Training in Action',
  },
  {
    src: asset('/assets/video2.mp4'),
    label: 'The Flashfit Experience',
  },
]

export default function VideoSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="videos" ref={ref} className="py-24 md:py-32 px-6 bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px gold-line opacity-20" />

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,162,39,0.03) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-label mb-4"
          >
            See It Live
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-none"
          >
            FEEL THE{' '}
            <span style={{
              background: 'linear-gradient(135deg, #C9A227, #FFD700)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              ENERGY
            </span>
          </motion.h2>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {videos.map((vid, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.4, 0, 0.2, 1] }}
              className="relative rounded-sm overflow-hidden group"
              style={{
                border: '1px solid rgba(255,255,255,0.06)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                aspectRatio: '9/16',
                maxHeight: '70vh',
              }}
            >
              <video
                src={vid.src}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                style={{ filter: 'contrast(1.08) saturate(0.85) brightness(0.92)' }}
              />

              {/* Vignette overlay */}
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)' }}
              />

              {/* Bottom label */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)' }}
              >
                {/* Gold underline accent */}
                <motion.div
                  className="w-8 h-px mb-3"
                  animate={inView ? { width: 32 } : { width: 0 }}
                  style={{ background: 'linear-gradient(90deg, #C9A227, transparent)' }}
                />
                <p className="text-white/70 text-xs uppercase tracking-widest">{vid.label}</p>
              </div>

              {/* Hover gold border */}
              <motion.div
                className="absolute inset-0 pointer-events-none rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ boxShadow: 'inset 0 0 0 1px rgba(201,162,39,0.35)' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
