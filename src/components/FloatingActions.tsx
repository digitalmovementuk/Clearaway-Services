import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { MessageCircle, Phone } from 'lucide-react'

export default function FloatingActions() {
  const [visible, setVisible] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById('hero-section')
      const trigger = hero ? hero.offsetHeight - 80 : 580
      setVisible(window.scrollY > trigger)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <aside aria-label="Quick contact actions">
      <motion.a
        href="https://api.whatsapp.com/send?phone=07768400475"
        target="_blank"
        rel="noreferrer"
        aria-label="Contact us on WhatsApp"
        className="fixed bottom-[104px] right-4 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_30px_rgba(37,211,102,0.35)] ring-2 ring-white transition-transform duration-300 hover:-translate-y-1 sm:bottom-[88px] sm:right-6 sm:h-14 sm:w-14"
        style={{ marginBottom: 'env(safe-area-inset-bottom)' }}
        data-testid="whatsapp-button"
        tabIndex={visible ? 0 : -1}
        aria-hidden={!visible}
        initial={false}
        animate={
          reduceMotion
            ? { opacity: visible ? 1 : 0, y: visible ? 0 : 16, pointerEvents: visible ? 'auto' : 'none' }
            : {
                opacity: visible ? 1 : 0,
                y: visible ? 0 : 16,
                pointerEvents: visible ? 'auto' : 'none',
                scale: visible ? [1, 1.04, 1] : 1,
              }
        }
        transition={reduceMotion ? { duration: 0.3 } : { duration: visible ? 2.4 : 0.3, repeat: visible ? Infinity : 0, ease: 'easeInOut' }}
      >
        <MessageCircle aria-hidden="true" size={25} />
      </motion.a>

      <motion.div
        className="fixed inset-x-0 bottom-0 z-30 border-t border-white/[0.28] bg-clearaway-navy/[0.95] px-3 py-2 text-white shadow-[0_-18px_40px_rgba(9,3,77,0.2)] backdrop-blur-lg sm:px-4 sm:py-3"
        style={{ paddingBottom: 'calc(0.5rem + env(safe-area-inset-bottom))' }}
        initial={false}
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 24, pointerEvents: visible ? 'auto' : 'none' }}
        transition={{ duration: 0.3 }}
        aria-hidden={!visible}
        data-testid="bottom-cta"
      >
        <div className="mx-auto flex w-full max-w-[1180px] items-center justify-between gap-3">
          <p className="min-w-0 text-sm font-semibold leading-5 sm:text-base">
            <span className="block sm:hidden">Need site advice?</span>
            <span className="hidden sm:block">Need asbestos removal, testing or strip-out support?</span>
          </p>
          <a className="btn-primary min-h-11 shrink-0 px-3 py-2 text-sm sm:px-4 sm:text-base" href="#contact">
            <Phone aria-hidden="true" size={16} />
            <span className="hidden xs:inline">Request </span>Quote
          </a>
        </div>
      </motion.div>
    </aside>
  )
}
