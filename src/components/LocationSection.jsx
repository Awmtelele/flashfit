import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Navigation } from 'lucide-react'

export default function LocationSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const mapsUrl = 'https://maps.google.com/?q=Servamus+Plaza+Ramhlun+North+Aizawl'

  return (
    <section id="location" ref={ref} className="py-24 md:py-32 px-6 bg-dark-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px gold-line opacity-20" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-label mb-4"
          >
            Find Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-none"
          >
            OUR{' '}
            <span style={{
              background: 'linear-gradient(135deg, #C9A227, #FFD700)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              LOCATION
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Address Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-glass gold-border rounded-sm p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-sm flex items-center justify-center"
                  style={{ background: 'rgba(201,162,39,0.1)', border: '1px solid rgba(201,162,39,0.2)' }}>
                  <MapPin className="text-gold-DEFAULT" size={18} />
                </div>
                <p className="text-white/50 text-xs uppercase tracking-widest">Address</p>
              </div>

              <h3 className="font-display text-2xl md:text-3xl text-white mb-2">Servamus Plaza</h3>
              <p className="text-white/60 text-base mb-1">2nd &amp; 3rd Floor</p>
              <p className="text-white/60 text-base mb-1">Ramhlun North</p>
              <p className="text-gold-DEFAULT font-medium text-base">Aizawl, Mizoram</p>
            </div>

            <motion.a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-8 text-center text-sm flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Navigation size={14} />
              <span>Get Directions</span>
            </motion.a>
          </motion.div>

          {/* Map embed */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative rounded-sm overflow-hidden gold-border min-h-[280px]"
          >
            <iframe
              title="Flashfit Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.4!2d92.7!3d23.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sServamus+Plaza%2C+Ramhlun+North%2C+Aizawl!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
              className="w-full h-full absolute inset-0"
              style={{
                filter: 'invert(90%) hue-rotate(180deg) saturate(0.3) brightness(0.7)',
                minHeight: '280px',
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Overlay to give cinematic tone */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'rgba(201,162,39,0.05)', border: '1px solid rgba(201,162,39,0.1)' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
