import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Phone, X } from 'lucide-react'
import logo from '../assets/images/clearaway-logo.png'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Proof', href: '#proof' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/60 bg-white/[0.82] shadow-[0_10px_35px_rgba(9,3,77,0.12)] backdrop-blur-xl'
          : 'bg-white/[0.94]'
      }`}
      data-testid="site-navbar"
      data-scrolled={scrolled}
    >
      <div className="section-shell flex min-h-[76px] items-center justify-between gap-4">
        <a href="#top" className="flex min-h-11 items-center gap-3 text-clearaway-navy no-underline">
          <img className="h-14 w-auto" src={logo} alt="Clearaway Services Ltd" width="269" height="222" />
          <span className="hidden text-sm font-bold leading-5 sm:block">
            <span className="block text-clearaway-greenDark">Demolition, Soft Strip</span>
            <span className="block text-clearaway-blue">& Asbestos Removal</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {links.map((link) => (
            <a
              key={link.href}
              className="text-sm font-semibold leading-5 text-slate-800 no-underline transition-colors duration-300 hover:text-clearaway-blue"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a className="btn-secondary px-4" href="tel:02089414433">
            <Phone aria-hidden="true" size={17} /> Call
          </a>
          <a className="btn-primary px-4" href="#contact">
            Get a quote
          </a>
        </div>

        <button
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[6px] border border-clearaway-line bg-white text-clearaway-blue lg:hidden"
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(true)}
        >
          <Menu aria-hidden="true" size={24} />
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-50 bg-clearaway-navy/[0.42] backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.nav
              id="mobile-menu"
              className="ml-auto flex h-full w-[min(360px,88vw)] flex-col bg-white p-5 shadow-clean"
              aria-label="Mobile navigation"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between">
                <img className="h-14 w-auto" src={logo} alt="Clearaway Services Ltd" width="269" height="222" />
                <button
                  className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[6px] border border-clearaway-line text-clearaway-blue"
                  type="button"
                  aria-label="Close navigation menu"
                  onClick={() => setOpen(false)}
                >
                  <X aria-hidden="true" size={24} />
                </button>
              </div>
              <motion.div
                className="mt-8 grid gap-2"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.05 } },
                }}
              >
                {links.map((link) => (
                  <motion.a
                    key={link.href}
                    className="rounded-[6px] px-3 py-3 text-lg font-bold leading-7 text-clearaway-navy no-underline hover:bg-clearaway-mist"
                    href={link.href}
                    onClick={() => setOpen(false)}
                    variants={{
                      hidden: { opacity: 0, x: 18 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </motion.div>
              <a className="btn-primary mt-8" href="#contact" onClick={() => setOpen(false)}>
                Get a quote
              </a>
              <a className="btn-secondary mt-3" href="tel:02089414433">
                Call 020 8941 4433
              </a>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
