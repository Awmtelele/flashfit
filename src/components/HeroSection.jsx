import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { asset } from '../utils/asset'

// Use the trainer video as hero background (cinematic gym footage)
const HERO_VIDEO = asset('/assets/hero.mp4')

export default function HeroSection() {
  const ref = useRef(null)
  const videoRef = useRef(null)
  const [videoLoaded, setVideoLoaded] = useState(false)

  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, 120])
  const opacity = useTransform(scrollY, [0, 500], [1, 0])

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.playbackRate = 0.75
    }
  }, [])

  const scrollDown = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* Video background with parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <video
          ref={videoRef}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={() => setVideoLoaded(true)}
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        {/* Fallback gradient background while video loads */}
        {!videoLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-dark-400 via-dark-200 to-dark-100" />
        )}
      </motion.div>

      {/* Cinematic overlays */}
      <div className="absolute inset-0 z-10 hero-overlay" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/60 via-transparent to-black/30" />
      {/* Vignette */}
      <div className="absolute inset-0 z-10 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)' }}
      />

      {/* Gold accent line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-px gold-line" />

      {/* Hero content */}
      <motion.div
        className="relative z-20 text-center px-6 max-w-5xl mx-auto"
        style={{ opacity }}
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          className="flex justify-center mb-8"
        >
          <img
            src={asset('/assets/logo.png')}
            alt="Flashfit"
            className="h-24 md:h-32 w-auto object-contain drop-shadow-2xl"
            loading="eager"
          />
        </motion.div>

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="section-label mb-4"
        >
          Gym & Sports Recovery Room
        </motion.p>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.6, duration: 1, ease: [0.4, 0, 0.2, 1] }}
          className="font-display text-[clamp(4rem,14vw,10rem)] leading-none tracking-tight mb-2"
        >
          <motion.span
            className="block text-white"
            animate={{ textShadow: [
              '0 0 20px rgba(201,162,39,0.0)',
              '0 0 40px rgba(201,162,39,0.5), 0 0 80px rgba(201,162,39,0.2)',
              '0 0 20px rgba(201,162,39,0.0)',
            ]}}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut', delay: 1.8 }}
          >
            GRIND
          </motion.span>
          <motion.span
            className="block"
            style={{ 
              background: 'linear-gradient(135deg, #C9A227 0%, #FFD700 50%, #9A7B0A 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            animate={{ filter: [
              'drop-shadow(0 0 8px rgba(201,162,39,0.0))',
              'drop-shadow(0 0 30px rgba(255,215,0,0.9)) drop-shadow(0 0 60px rgba(201,162,39,0.5))',
              'drop-shadow(0 0 8px rgba(201,162,39,0.0))',
            ]}}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut', delay: 1.8 }}
          >
            WITH PURPOSE
          </motion.span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-white/60 text-base md:text-lg font-light tracking-widest uppercase mt-4 mb-10"
        >
          Flashfit Gym & Sports Recovery Room
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => document.querySelector('#location')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-gold text-sm md:text-base w-full sm:w-auto min-w-[160px]"
          >
            <span>Join Now</span>
          </button>
          <button
            onClick={() => document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-outline-gold text-sm md:text-base w-full sm:w-auto min-w-[160px]"
          >
            Explore Facilities
          </button>
        </motion.div>

        {/* By line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-8 text-xs text-white/30 tracking-widest uppercase"
        >
          by @lzchhangte
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 group"
        aria-label="Scroll down"
      >
        <span className="text-white/30 text-xs tracking-widest uppercase group-hover:text-gold-DEFAULT transition-colors">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ChevronDown className="text-gold-DEFAULT/60 group-hover:text-gold-DEFAULT transition-colors" size={20} />
        </motion.div>
      </motion.button>
    </section>
  )
}
