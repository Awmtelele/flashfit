import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { X, Play } from 'lucide-react'

// Gallery items using available assets
const galleryItems = [
  { type: 'image', src: '/assets/gallery1.webp', span: 'col-span-1 row-span-2' },
  { type: 'image', src: '/assets/gallery2.webp', span: 'col-span-1 row-span-1' },
  { type: 'video', src: '/assets/video1.mp4', span: 'col-span-1 row-span-1' },
  { type: 'video', src: '/assets/video2.mp4', span: 'col-span-2 row-span-1' },
  { type: 'image', src: '/assets/gallery3.webp', span: 'col-span-1 row-span-1' },
]

function GalleryItem({ item, index, onOpen }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
      className={`gallery-item rounded-sm cursor-pointer ${item.span}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onOpen(item)}
      style={{ minHeight: '200px' }}
    >
      {item.type === 'image' ? (
        <img
          src={item.src}
          alt="Flashfit Gallery"
          className="w-full h-full object-cover"
          loading="lazy"
          style={{
            filter: 'contrast(1.12) saturate(0.8) brightness(0.88)',
          }}
        />
      ) : (
        <div className="relative w-full h-full">
          <video
            src={item.src}
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
            preload="metadata"
            autoPlay={hovered}
            style={{
              filter: 'contrast(1.12) saturate(0.8) brightness(0.88)',
            }}
          />
          {!hovered && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(201,162,39,0.2)', border: '1px solid rgba(201,162,39,0.4)', backdropFilter: 'blur(8px)' }}>
                <Play fill="#C9A227" className="text-gold-DEFAULT ml-1" size={20} />
              </div>
            </div>
          )}
        </div>
      )}

      {/* Hover overlay */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 z-10 flex items-center justify-center"
            style={{ background: 'rgba(0,0,0,0.3)' }}
          >
            <div className="text-center">
              <div className="w-1 h-8 mx-auto"
                style={{ background: 'linear-gradient(to bottom, transparent, #C9A227)' }}
              />
              <p className="text-gold-DEFAULT text-xs uppercase tracking-widest mt-2 font-medium">View</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function GallerySection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [lightboxItem, setLightboxItem] = useState(null)

  return (
    <section id="gallery" ref={ref} className="py-24 md:py-32 px-6 bg-dark-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px gold-line opacity-20" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-label mb-4"
          >
            Gallery
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-none"
          >
            LIFE AT{' '}
            <span style={{
              background: 'linear-gradient(135deg, #C9A227, #FFD700)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              FLASHFIT
            </span>
          </motion.h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[220px] md:auto-rows-[260px]">
          {galleryItems.map((item, i) => (
            <GalleryItem key={i} item={item} index={i} onOpen={setLightboxItem} />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
            onClick={() => setLightboxItem(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="relative max-w-4xl w-full max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxItem(null)}
                className="absolute -top-12 right-0 text-white/60 hover:text-gold-DEFAULT transition-colors z-10"
              >
                <X size={28} />
              </button>
              {lightboxItem.type === 'image' ? (
                <img
                  src={lightboxItem.src}
                  alt="Gallery"
                  className="w-full max-h-[85vh] object-contain rounded-sm"
                  style={{ filter: 'contrast(1.1) saturate(0.85)' }}
                />
              ) : (
                <video
                  src={lightboxItem.src}
                  className="w-full max-h-[85vh] object-contain rounded-sm"
                  controls
                  autoPlay
                  style={{ filter: 'contrast(1.1) saturate(0.85)' }}
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
