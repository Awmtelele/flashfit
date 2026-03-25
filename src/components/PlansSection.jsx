import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, ChevronLeft, ChevronRight } from 'lucide-react'

const plans = [
  {
    id: 1,
    image: '/assets/gallery1.webp',
    badge: 'Most Popular',
    title: 'Monthly Plan',
    subtitle: 'Full Gym Access',
    price: null,
    priceNote: 'Contact for pricing',
    features: [
      'Unlimited gym access',
      'Strength & cardio zones',
      'Locker room access',
      'Free orientation session',
    ],
    accent: '#C9A227',
  },
  {
    id: 2,
    image: '/assets/gallery2.webp',
    badge: 'Best Value',
    title: 'Quarterly Plan',
    subtitle: '3 Months Membership',
    price: null,
    priceNote: 'Contact for pricing',
    features: [
      'All Monthly Plan benefits',
      'Sports recovery room access',
      'Priority peak-hour access',
      '1 personal training session',
    ],
    accent: '#FFD700',
  },
  {
    id: 3,
    image: '/assets/gallery3.webp',
    badge: 'Premium',
    title: 'Annual Plan',
    subtitle: '12 Months Membership',
    price: null,
    priceNote: 'Contact for pricing',
    features: [
      'All Quarterly Plan benefits',
      'Unlimited recovery room',
      '4 personal training sessions',
      'Exclusive member events',
    ],
    accent: '#C9A227',
  },
  {
    id: 4,
    image: '/assets/gallery1.webp',
    badge: null,
    title: 'Personal Training',
    subtitle: 'One-on-One Sessions',
    price: null,
    priceNote: 'Contact for pricing',
    features: [
      'Custom workout plan',
      'Expert form coaching',
      'Progress tracking',
      'Nutrition guidance',
    ],
    accent: '#9A7B0A',
  },
]

function PlanCard({ plan, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
      className="relative flex-shrink-0 w-[300px] md:w-[340px] snap-center cursor-pointer select-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        animate={{
          scale: hovered ? 1.03 : 1,
          boxShadow: hovered
            ? `0 0 0 1px ${plan.accent}55, 0 30px 80px rgba(0,0,0,0.7), 0 0 60px ${plan.accent}22`
            : '0 0 0 1px rgba(255,255,255,0.06), 0 20px 40px rgba(0,0,0,0.5)',
        }}
        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
        className="relative overflow-hidden rounded-sm h-[480px] md:h-[520px] flex flex-col justify-end"
        style={{ background: '#111' }}
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <motion.img
            src={plan.image}
            alt={plan.title}
            className="w-full h-full object-cover"
            loading="lazy"
            animate={{ scale: hovered ? 1.08 : 1 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            style={{ filter: 'contrast(1.12) saturate(0.7) brightness(0.5)' }}
          />
        </div>

        {/* Gradient overlay — stronger at bottom */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: `linear-gradient(
              to bottom,
              rgba(0,0,0,0.1) 0%,
              rgba(0,0,0,0.3) 40%,
              rgba(0,0,0,0.92) 100%
            )`,
          }}
        />

        {/* Glow border on hover */}
        <motion.div
          className="absolute inset-0 z-10 pointer-events-none rounded-sm"
          animate={{
            opacity: hovered ? 1 : 0,
            boxShadow: `inset 0 0 0 1px ${plan.accent}66`,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Badge */}
        {plan.badge && (
          <div
            className="absolute top-5 left-5 z-20 px-3 py-1 rounded-sm text-[10px] font-bold tracking-widest uppercase"
            style={{
              background: `linear-gradient(135deg, ${plan.accent}, #FFD700)`,
              color: '#0A0A0A',
            }}
          >
            {plan.badge}
          </div>
        )}

        {/* Card content */}
        <div className="relative z-20 p-7">
          {/* Title */}
          <p className="text-white/50 text-xs uppercase tracking-widest mb-1">{plan.subtitle}</p>
          <h3
            className="font-display text-3xl md:text-4xl text-white mb-1 leading-tight"
          >
            {plan.title}
          </h3>

          {/* Animated gold underline */}
          <motion.div
            className="mb-5 h-px"
            animate={{ width: hovered ? '100%' : '2rem' }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            style={{ background: `linear-gradient(90deg, ${plan.accent}, transparent)` }}
          />

          {/* Features */}
          <ul className="flex flex-col gap-2 mb-6">
            {plan.features.map((f) => (
              <li key={f} className="flex items-center gap-2.5 text-white/70 text-sm">
                <Check
                  size={13}
                  className="flex-shrink-0"
                  style={{ color: plan.accent }}
                />
                {f}
              </li>
            ))}
          </ul>

          {/* Price / CTA */}
          <div className="flex items-center justify-between">
            <p className="text-white/35 text-xs tracking-wider">{plan.priceNote}</p>
            <motion.a
              href="#location"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#location')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-sm transition-colors"
              style={{
                border: `1px solid ${plan.accent}55`,
                color: plan.accent,
              }}
              whileHover={{
                backgroundColor: `${plan.accent}18`,
                borderColor: plan.accent,
              }}
            >
              Enquire
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function PlansSection() {
  const ref = useRef(null)
  const trackRef = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  // Drag scroll state
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const onMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.pageX - trackRef.current.offsetLeft)
    setScrollLeft(trackRef.current.scrollLeft)
    trackRef.current.style.cursor = 'grabbing'
  }

  const onMouseLeave = () => {
    setIsDragging(false)
    if (trackRef.current) trackRef.current.style.cursor = 'grab'
  }

  const onMouseUp = () => {
    setIsDragging(false)
    if (trackRef.current) trackRef.current.style.cursor = 'grab'
  }

  const onMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - trackRef.current.offsetLeft
    const walk = (x - startX) * 1.5
    trackRef.current.scrollLeft = scrollLeft - walk
  }

  const scrollBy = (dir) => {
    trackRef.current?.scrollBy({ left: dir * 360, behavior: 'smooth' })
  }

  return (
    <section id="plans" ref={ref} className="py-24 md:py-32 bg-dark-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px gold-line opacity-20" />

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,162,39,0.04) 0%, transparent 70%)',
        }}
      />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex items-end justify-between">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="section-label mb-3"
            >
              Membership
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-none"
            >
              CHOOSE YOUR{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #C9A227, #FFD700)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                PLAN
              </span>
            </motion.h2>
          </div>

          {/* Arrow controls — desktop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="hidden md:flex items-center gap-3 mb-2"
          >
            <button
              onClick={() => scrollBy(-1)}
              className="w-10 h-10 rounded-sm flex items-center justify-center border border-white/10 text-white/50 hover:border-gold-DEFAULT/50 hover:text-gold-DEFAULT transition-all duration-300"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scrollBy(1)}
              className="w-10 h-10 rounded-sm flex items-center justify-center border border-white/10 text-white/50 hover:border-gold-DEFAULT/50 hover:text-gold-DEFAULT transition-all duration-300"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </button>
          </motion.div>
        </div>

        {/* Drag hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-white/25 text-xs tracking-widest uppercase mt-3"
        >
          ← Drag or scroll to explore →
        </motion.p>
      </div>

      {/* Horizontal scroll track */}
      <div
        ref={trackRef}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        className="flex gap-5 overflow-x-auto pb-8 px-6 md:px-[calc((100vw-80rem)/2+1.5rem)]"
        style={{
          scrollSnapType: 'x mandatory',
          cursor: 'grab',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {/* Hide webkit scrollbar */}
        <style>{`
          div::-webkit-scrollbar { display: none; }
        `}</style>

        {plans.map((plan, i) => (
          <PlanCard key={plan.id} plan={plan} index={i} />
        ))}

        {/* End spacer */}
        <div className="flex-shrink-0 w-6" />
      </div>

      {/* Mobile swipe hint dots */}
      <div className="flex justify-center gap-2 mt-6 md:hidden">
        {plans.map((_, i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: i === 0 ? '#C9A227' : 'rgba(255,255,255,0.15)' }}
          />
        ))}
      </div>
    </section>
  )
}
