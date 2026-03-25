import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Zap, Heart, ShoppingBag, Check, Sparkles } from 'lucide-react'

/* ─── DATA ─────────────────────────────────────────────────────────────── */

const membershipRows = [
  { label: 'Admission Fee', value: '₹1,000', note: 'One-time' },
  { label: 'Monthly Fee', value: '₹1,800', note: 'Per month' },
  { label: 'Daily Fee', value: '₹200', note: 'Drop-in' },
]

const durationPerks = [
  { period: '1 Year', discount: '15% off', perk: 'Recovery Room 4×/month', highlight: true },
  { period: '6 Months', discount: '10% off', perk: 'Recovery Room 3×/month', highlight: false },
  { period: '3 Months', discount: '5% off', perk: 'Recovery Room 2×/month', highlight: false },
  { period: 'Couples', discount: '10% off', perk: 'First 3 months', highlight: false },
]

const specialOffers = [
  { who: 'Senior (45+)', deal: '30% off', note: 'First 3 months' },
  { who: 'NCD Patients', deal: 'Custom Plan', note: 'Tailored fitness program' },
  { who: 'Married Couples', deal: '15% off', note: 'First 3 months' },
  { who: 'Students 16+', deal: '30% off', note: 'Valid student ID required' },
  { who: 'College Students', deal: '20% off', note: 'With college ID' },
  { who: 'Persons w/ Disability', deal: 'FREE', note: 'Full membership', isFree: true },
]

const recoveryServices = [
  {
    name: 'Sauna',
    items: [
      { label: 'Member', price: '₹300' },
      { label: 'Non-member', price: '₹400' },
      { label: 'Double', price: '₹500' },
    ],
  },
  {
    name: 'Ice Bath',
    items: [
      { label: 'Member', price: '₹200' },
      { label: 'Non-member', price: '₹300' },
    ],
  },
  {
    name: 'Recovery Boot',
    items: [
      { label: '30 minutes', price: '₹100' },
    ],
  },
  {
    name: 'Red Light Therapy',
    isHighlight: true,
    items: [
      { label: 'Monthly (15 min × 3/wk)', price: '₹1,000' },
      { label: 'Trial session', price: '₹100' },
    ],
  },
]

const addons = [
  { item: 'Towel', price: '₹40' },
  { item: 'Panties', price: '₹20' },
  { item: 'Bra', price: '₹20' },
  { item: 'Loofah', price: '₹20' },
  { item: 'Gown', price: '₹20' },
  { item: 'Soap', price: '₹10' },
]

/* ─── GLASS CARD WRAPPER ────────────────────────────────────────────────── */

function GlassCard({ children, className = '', highlight = false, delay = 0, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      whileHover={{
        scale: 1.015,
        boxShadow: highlight
          ? '0 0 0 2px rgba(255,200,0,0.9), 0 0 40px rgba(201,162,39,0.4), 0 20px 60px rgba(0,0,0,0.5)'
          : '0 0 0 2px rgba(201,162,39,0.6), 0 0 30px rgba(201,162,39,0.2), 0 8px 40px rgba(0,0,0,0.4)',
      }}
      transition={{
        opacity: { duration: 0.7, delay, ease: [0.4, 0, 0.2, 1] },
        y:       { duration: 0.7, delay, ease: [0.4, 0, 0.2, 1] },
        scale:    { duration: 0.35, ease: 'easeOut' },
        boxShadow:{ duration: 0.35, ease: 'easeOut' },
      }}
      className={`relative rounded-xl overflow-hidden ${className}`}
      style={{
        background: highlight
          ? 'rgba(201,162,39,0.07)'
          : 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: highlight
          ? '1px solid rgba(201,162,39,0.4)'
          : '1px solid rgba(255,255,255,0.07)',
        boxShadow: highlight
          ? '0 0 0 1px rgba(201,162,39,0.15), 0 20px 60px rgba(0,0,0,0.5), 0 0 80px rgba(201,162,39,0.08)'
          : '0 8px 40px rgba(0,0,0,0.4)',
      }}
    >
      {/* Hover glow overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-xl opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          background: highlight
            ? 'radial-gradient(ellipse at top, rgba(201,162,39,0.1) 0%, transparent 70%)'
            : 'radial-gradient(ellipse at top, rgba(255,255,255,0.03) 0%, transparent 70%)',
          boxShadow: highlight
            ? 'inset 0 0 0 1px rgba(201,162,39,0.5)'
            : 'inset 0 0 0 1px rgba(255,255,255,0.12)',
        }}
      />
      {children}
    </motion.div>
  )
}

/* ─── CARD HEADER ───────────────────────────────────────────────────────── */

function CardHeader({ icon: Icon, title, badge, highlight }) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{
            background: highlight ? 'rgba(201,162,39,0.15)' : 'rgba(255,255,255,0.06)',
            border: highlight ? '1px solid rgba(201,162,39,0.3)' : '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <Icon size={18} style={{ color: highlight ? '#FFD700' : 'rgba(255,255,255,0.5)' }} />
        </div>
        <h3 className="font-display text-2xl md:text-3xl text-white tracking-wide">{title}</h3>
      </div>
      {badge && (
        <span
          className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full flex-shrink-0"
          style={{
            background: 'linear-gradient(135deg, #C9A227, #FFD700)',
            color: '#0A0A0A',
            boxShadow: '0 0 20px rgba(201,162,39,0.4)',
          }}
        >
          {badge}
        </span>
      )}
    </div>
  )
}

/* ─── SECTION COMPONENT ─────────────────────────────────────────────────── */

export default function PricingSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="pricing"
      ref={ref}
      className="py-24 md:py-36 px-6 bg-dark relative overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px gold-line opacity-20" />
        <div
          className="absolute -top-40 left-1/4 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(201,162,39,0.06) 0%, transparent 70%)', filter: 'blur(40px)' }}
        />
        <div
          className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(201,162,39,0.04) 0%, transparent 70%)', filter: 'blur(60px)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-label mb-4"
          >
            Transparent Pricing
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-none"
          >
            MEMBERSHIP &{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #C9A227, #FFD700)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              RECOVERY
            </span>
            <br />PRICING
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-20 h-px mx-auto mt-6"
            style={{ background: 'linear-gradient(90deg, transparent, #C9A227, transparent)' }}
          />
        </div>

        {/* ── CARD GRID — horizontal scroll on mobile, 2-col grid on lg ── */}
        {/* Mobile wrapper */}
        <div className="lg:hidden -mx-6 px-6 overflow-x-auto pb-6"
          style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }}
        >
          <style>{`div::-webkit-scrollbar{display:none}`}</style>
          <div className="flex gap-5" style={{ width: 'max-content' }}>
            {[
              <GlassCard key="1" highlight delay={0.1} inView={inView} className="p-6" style={{ width: '82vw', scrollSnapAlign: 'start', flexShrink: 0 }}>
                <CardHeader icon={Star} title="Normal Packages" badge="Most Popular" highlight />
                <div className="space-y-3 mb-6">
                  {membershipRows.map((row) => (
                    <div key={row.label} className="flex items-center justify-between py-3 px-4 rounded-lg"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <div>
                        <p className="text-white text-sm font-medium">{row.label}</p>
                        <p className="text-white/35 text-xs mt-0.5">{row.note}</p>
                      </div>
                      <p className="font-display text-2xl" style={{ color: '#FFD700' }}>{row.value}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs uppercase tracking-widest mb-4" style={{ color: 'rgba(201,162,39,0.6)' }}>Long-term Benefits</p>
                <div className="grid grid-cols-2 gap-3">
                  {durationPerks.map((d) => (
                    <div key={d.period} className="rounded-xl p-4"
                      style={{ background: d.highlight ? 'rgba(201,162,39,0.1)' : 'rgba(255,255,255,0.03)', border: d.highlight ? '1px solid rgba(201,162,39,0.35)' : '1px solid rgba(255,255,255,0.06)' }}>
                      <p className="font-bold text-base mb-0.5" style={{ color: d.highlight ? '#FFD700' : 'rgba(255,255,255,0.85)' }}>{d.discount}</p>
                      <p className="text-white/80 text-xs font-medium">{d.period}</p>
                      <p className="text-white/40 text-xs mt-1">{d.perk}</p>
                    </div>
                  ))}
                </div>
              </GlassCard>,

              <GlassCard key="2" delay={0.1} inView={inView} className="p-6" style={{ width: '82vw', scrollSnapAlign: 'start', flexShrink: 0 }}>
                <CardHeader icon={Heart} title="Special Offers" />
                <div className="space-y-3">
                  {specialOffers.map((o) => (
                    <div key={o.who} className="flex items-center gap-4 py-3 px-4 rounded-xl"
                      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <Check size={14} className="flex-shrink-0" style={{ color: o.isFree ? '#4ade80' : '#C9A227' }} />
                      <div className="flex-1 min-w-0">
                        <p className="text-white/85 text-sm font-medium">{o.who}</p>
                        <p className="text-white/35 text-xs mt-0.5 truncate">{o.note}</p>
                      </div>
                      <span className="text-sm font-bold flex-shrink-0" style={{ color: o.isFree ? '#4ade80' : '#FFD700' }}>{o.deal}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>,

              <GlassCard key="3" delay={0.1} inView={inView} className="p-6" style={{ width: '82vw', scrollSnapAlign: 'start', flexShrink: 0 }}>
                <CardHeader icon={Zap} title="Recovery Room" />
                <div className="grid grid-cols-2 gap-4">
                  {recoveryServices.map((svc) => (
                    <div key={svc.name} className={`rounded-xl p-4 ${svc.isHighlight ? 'col-span-2' : ''}`}
                      style={{ background: svc.isHighlight ? 'rgba(201,162,39,0.07)' : 'rgba(255,255,255,0.03)', border: svc.isHighlight ? '1px solid rgba(201,162,39,0.25)' : '1px solid rgba(255,255,255,0.06)' }}>
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-white font-semibold text-sm">{svc.name}</p>
                        {svc.isHighlight && <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full" style={{ background: 'rgba(201,162,39,0.2)', color: '#FFD700', border: '1px solid rgba(201,162,39,0.3)' }}>Therapy</span>}
                      </div>
                      <div className={svc.isHighlight ? 'grid grid-cols-2 gap-3' : 'space-y-2'}>
                        {svc.items.map((it) => (
                          <div key={it.label} className="flex items-center justify-between">
                            <p className="text-white/45 text-xs">{it.label}</p>
                            <p className="text-sm font-bold" style={{ color: svc.isHighlight ? '#FFD700' : 'rgba(255,255,255,0.85)' }}>{it.price}</p>
                          </div>
                        ))}
                      </div>
                      {svc.isHighlight && <p className="text-white/30 text-xs mt-3 pt-3 border-t border-white/5">15 min/session · 3 sessions/week</p>}
                    </div>
                  ))}
                </div>
              </GlassCard>,

              <GlassCard key="4" delay={0.1} inView={inView} className="p-6" style={{ width: '82vw', scrollSnapAlign: 'start', flexShrink: 0 }}>
                <CardHeader icon={ShoppingBag} title="Disposable Items" />
                <div className="grid grid-cols-2 gap-3">
                  {addons.map((a) => (
                    <div key={a.item} className="flex flex-col items-center justify-center py-5 rounded-xl text-center"
                      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <p className="text-white/60 text-xs mb-2">{a.item}</p>
                      <p className="font-display text-xl text-white/90">{a.price}</p>
                    </div>
                  ))}
                </div>
                <p className="text-white/20 text-xs text-center mt-6 tracking-wide">Available at reception · Prices subject to change</p>
              </GlassCard>,
            ]}
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden lg:grid grid-cols-2 gap-6">
          <GlassCard highlight delay={0.15} inView={inView} className="p-7 md:p-8 lg:row-span-1">
            {/* Most Popular badge handled inside header */}
            <CardHeader icon={Star} title="Normal Packages" badge="Most Popular" highlight />

            {/* Base fees */}
            <div className="space-y-3 mb-7">
              {membershipRows.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between py-3 px-4 rounded-lg"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <div>
                    <p className="text-white text-sm font-medium">{row.label}</p>
                    <p className="text-white/35 text-xs mt-0.5">{row.note}</p>
                  </div>
                  <p
                    className="font-display text-2xl"
                    style={{ color: '#FFD700' }}
                  >
                    {row.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Duration perks */}
            <p
              className="text-xs uppercase tracking-widest mb-4"
              style={{ color: 'rgba(201,162,39,0.6)' }}
            >
              Long-term Benefits
            </p>
            <div className="grid grid-cols-2 gap-3">
              {durationPerks.map((d) => (
                <div
                  key={d.period}
                  className="rounded-xl p-4"
                  style={{
                    background: d.highlight ? 'rgba(201,162,39,0.1)' : 'rgba(255,255,255,0.03)',
                    border: d.highlight ? '1px solid rgba(201,162,39,0.35)' : '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <p
                    className="font-bold text-base mb-0.5"
                    style={{ color: d.highlight ? '#FFD700' : 'rgba(255,255,255,0.85)' }}
                  >
                    {d.discount}
                  </p>
                  <p className="text-white/80 text-xs font-medium">{d.period}</p>
                  <p className="text-white/40 text-xs mt-1">{d.perk}</p>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* ── CARD 2: Special Offers ── */}
          <GlassCard delay={0.25} inView={inView} className="p-7 md:p-8">
            <CardHeader icon={Heart} title="Special Offers" />
            <div className="space-y-3">
              {specialOffers.map((o) => (
                <div
                  key={o.who}
                  className="flex items-center gap-4 py-3 px-4 rounded-xl group"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <Check
                    size={14}
                    className="flex-shrink-0"
                    style={{ color: o.isFree ? '#4ade80' : '#C9A227' }}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-white/85 text-sm font-medium">{o.who}</p>
                    <p className="text-white/35 text-xs mt-0.5 truncate">{o.note}</p>
                  </div>
                  <span
                    className="text-sm font-bold flex-shrink-0"
                    style={{ color: o.isFree ? '#4ade80' : '#FFD700' }}
                  >
                    {o.deal}
                  </span>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* ── CARD 3: Recovery Room ── */}
          <GlassCard delay={0.35} inView={inView} className="p-7 md:p-8">
            <CardHeader icon={Zap} title="Recovery Room" />
            <div className="grid grid-cols-2 gap-4">
              {recoveryServices.map((svc) => (
                <div
                  key={svc.name}
                  className={`rounded-xl p-4 ${svc.isHighlight ? 'col-span-2' : ''}`}
                  style={{
                    background: svc.isHighlight ? 'rgba(201,162,39,0.07)' : 'rgba(255,255,255,0.03)',
                    border: svc.isHighlight ? '1px solid rgba(201,162,39,0.25)' : '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-white font-semibold text-sm">{svc.name}</p>
                    {svc.isHighlight && (
                      <span
                        className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
                        style={{
                          background: 'rgba(201,162,39,0.2)',
                          color: '#FFD700',
                          border: '1px solid rgba(201,162,39,0.3)',
                        }}
                      >
                        Therapy
                      </span>
                    )}
                  </div>
                  <div className={`${svc.isHighlight ? 'grid grid-cols-2 gap-3' : 'space-y-2'}`}>
                    {svc.items.map((it) => (
                      <div key={it.label} className="flex items-center justify-between">
                        <p className="text-white/45 text-xs">{it.label}</p>
                        <p
                          className="text-sm font-bold"
                          style={{ color: svc.isHighlight ? '#FFD700' : 'rgba(255,255,255,0.85)' }}
                        >
                          {it.price}
                        </p>
                      </div>
                    ))}
                  </div>
                  {svc.isHighlight && (
                    <p className="text-white/30 text-xs mt-3 pt-3 border-t border-white/5">
                      15 min/session · 3 sessions/week
                    </p>
                  )}
                </div>
              ))}
            </div>
          </GlassCard>

          {/* ── CARD 4: Disposable Add-ons ── */}
          <GlassCard delay={0.45} inView={inView} className="p-7 md:p-8">
            <CardHeader icon={ShoppingBag} title="Disposable Items" />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {addons.map((a) => (
                <div
                  key={a.item}
                  className="flex flex-col items-center justify-center py-5 rounded-xl text-center"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <p className="text-white/60 text-xs mb-2">{a.item}</p>
                  <p className="font-display text-xl text-white/90">{a.price}</p>
                </div>
              ))}
            </div>
            <p className="text-white/20 text-xs text-center mt-6 tracking-wide">
              Available at reception · Prices subject to change
            </p>
          </GlassCard>
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-white/20 text-xs tracking-widest uppercase mt-10"
        >
          All prices inclusive · Contact us for group or corporate plans
        </motion.p>
      </div>
    </section>
  )
}
