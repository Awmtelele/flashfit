import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Sun, Sunset, Moon, Clock } from 'lucide-react'

const schedule = [
  {
    days: 'Monday – Saturday',
    sessions: [
      { time: '6:00 AM – 10:00 AM', label: 'Morning Session', icon: Sun },
      { time: '2:30 PM – 10:00 PM', label: 'Evening Session', icon: Sunset },
    ],
  },
]

export default function TimingsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="timings" ref={ref} className="py-24 md:py-32 px-6 bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px gold-line opacity-20" />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 60% at 50% 50%, rgba(201,162,39,0.03) 0%, transparent 70%)' }}
      />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-label mb-4"
          >
            Hours
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-none"
          >
            WE'RE{' '}
            <span style={{
              background: 'linear-gradient(135deg, #C9A227, #FFD700)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              OPEN
            </span>
          </motion.h2>
        </div>

        {/* Schedule Card */}
        {schedule.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-glass gold-border rounded-sm overflow-hidden"
          >
            {/* Days header */}
            <div className="px-8 py-5 border-b border-gold-DEFAULT/10 flex items-center gap-4">
              <Clock className="text-gold-DEFAULT" size={18} />
              <h3 className="font-semibold text-white text-sm md:text-base tracking-wide">{item.days}</h3>
            </div>

            {/* Time sessions */}
            <div className="divide-y divide-white/5">
              {item.sessions.map((session, j) => {
                const Icon = session.icon
                return (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + j * 0.15 }}
                    className="timing-card flex items-center justify-between px-8 py-6 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-sm flex items-center justify-center"
                        style={{ background: 'rgba(201,162,39,0.08)', border: '1px solid rgba(201,162,39,0.12)' }}>
                        <Icon className="text-gold-DEFAULT/70 group-hover:text-gold-DEFAULT transition-colors" size={18} />
                      </div>
                      <div>
                        <p className="text-white/40 text-xs uppercase tracking-widest mb-1">{session.label}</p>
                        <p className="font-display text-2xl md:text-3xl text-white group-hover:text-gold-DEFAULT transition-colors tracking-wide">
                          {session.time}
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <div className="w-2 h-2 rounded-full bg-gold-DEFAULT/40 group-hover:bg-gold-DEFAULT transition-colors"
                        style={{ boxShadow: '0 0 10px rgba(201,162,39,0.5)' }}
                      />
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Sunday closed note */}
            <div className="px-8 py-4 bg-white/[0.01] flex items-center gap-3">
              <Moon className="text-white/20" size={14} />
              <p className="text-white/30 text-xs tracking-widest uppercase">Closed on Sundays</p>
            </div>
          </motion.div>
        ))}

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center text-white/25 text-xs tracking-widest uppercase mt-8"
        >
          Hours may vary on public holidays
        </motion.p>
      </div>
    </section>
  )
}
