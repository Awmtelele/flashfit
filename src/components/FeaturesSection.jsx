import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Dumbbell, Heart, Zap, User } from 'lucide-react'

const features = [
  {
    icon: Dumbbell,
    title: 'Strength Training',
    description: 'State-of-the-art free weights, power racks, and machines for maximum muscle development and functional strength.',
    gradient: 'from-amber-900/30 to-transparent',
  },
  {
    icon: Heart,
    title: 'Cardio Zone',
    description: 'Premium cardio equipment to elevate your endurance, burn fat efficiently, and improve cardiovascular health.',
    gradient: 'from-red-900/20 to-transparent',
  },
  {
    icon: Zap,
    title: 'Sports Recovery Room',
    description: 'Dedicated recovery space with specialized equipment for post-workout restoration and injury prevention.',
    gradient: 'from-yellow-900/25 to-transparent',
  },
  {
    icon: User,
    title: 'Personal Training',
    description: 'Expert coaches dedicated to your goals. Custom programs, form correction, and accountability built into every session.',
    gradient: 'from-emerald-900/20 to-transparent',
  },
]

export default function FeaturesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="features" ref={ref} className="py-24 md:py-32 px-6 bg-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px gold-line opacity-20" />
        <div className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,162,39,0.03) 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-label mb-4"
          >
            Facilities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-none"
          >
            BUILT TO{' '}
            <span style={{
              background: 'linear-gradient(135deg, #C9A227, #FFD700)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              PERFORM
            </span>
          </motion.h2>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.4, 0, 0.2, 1] }}
                className="feature-card p-7 rounded-sm group cursor-default"
              >
                {/* Icon */}
                <div className="mb-6 relative">
                  <div className="w-14 h-14 rounded-sm flex items-center justify-center"
                    style={{ background: 'rgba(201,162,39,0.08)', border: '1px solid rgba(201,162,39,0.15)' }}>
                    <Icon
                      className="text-gold-DEFAULT transition-all duration-300 group-hover:scale-110"
                      size={24}
                    />
                  </div>
                  {/* Glow behind icon */}
                  <div className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: 'radial-gradient(circle at center, rgba(201,162,39,0.2) 0%, transparent 70%)' }}
                  />
                </div>

                {/* Number */}
                <p className="font-display text-4xl text-white/08 mb-2 transition-colors duration-300 group-hover:text-gold-DEFAULT/20">
                  0{i + 1}
                </p>

                {/* Title */}
                <h3 className="font-semibold text-white text-base mb-3 group-hover:text-gold-DEFAULT transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-white/50 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Bottom accent */}
                <div className="mt-6 w-0 h-px group-hover:w-full transition-all duration-500"
                  style={{ background: 'linear-gradient(90deg, #C9A227, transparent)' }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
