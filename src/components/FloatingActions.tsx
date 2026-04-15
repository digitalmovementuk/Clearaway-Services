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
        className="fixed right-4 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_30px_rgba(37,211,102,0.35)] ring-2 ring-white sm:right-6"
        style={{ bottom: 'calc(82px + env(safe-area-inset-bottom))' }}
        data-testid="whatsapp-button"
        animate={reduceMotion ? undefined : { scale: [1, 1.04, 1] }}
        transition={reduceMotion ? undefined : { duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <MessageCircle aria-hidden="true" size={27} />
      </motion.a>

      <motion.div
        className="fixed inset-x-0 bottom-0 z-30 border-t border-white/[0.45] bg-clearaway-navy/[0.94] px-4 py-3 text-white backdrop-blur-lg"
        style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))' }}
        initial={false}
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 24, pointerEvents: visible ? 'auto' : 'none' }}
        transition={{ duration: 0.3 }}
        aria-hidden={!visible}
        data-testid="bottom-cta"
      >
        <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-semibold leading-5 sm:text-base">
            Need asbestos removal, testing or strip-out support?
          </p>
          <a className="btn-primary shrink-0 bg-clearaway-blue" href="#contact">
            <Phone aria-hidden="true" size={17} /> Request a quote
          </a>
        </div>
      </motion.div>
    </aside>
  )
}
