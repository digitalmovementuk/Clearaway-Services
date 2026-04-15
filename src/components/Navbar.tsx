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

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/Clearaway-Asbestos-Services-Ltd-106150131954705' },
  { label: 'Instagram', href: 'https://www.instagram.com/clearawayasbestosservicesltd/?hl=en-gb' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/clearaway-services-ltd' },
  { label: 'X', href: 'https://twitter.com/ClearawayukLtd' },
]

function SocialIcon({ label }: { label: string }) {
  if (label === 'Facebook') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[17px] w-[17px] fill-current">
        <path d="M13.5 21v-7.36h2.47L16.34 10H13.5V8.24c0-1.05.31-1.77 1.82-1.77H16.5V3.2c-.21-.03-.95-.09-2.14-.09-2.96 0-4.86 1.79-4.86 5.1V10H7v3.64h2.5V21h4Z" />
      </svg>
    )
  }

  if (label === 'Instagram') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[17px] w-[17px] fill-none stroke-current" strokeWidth="1.8">
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
        <circle cx="12" cy="12" r="4.1" />
        <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    )
  }

  if (label === 'LinkedIn') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[17px] w-[17px] fill-current">
        <path d="M6.54 8.4a1.53 1.53 0 1 1 0-3.06 1.53 1.53 0 0 1 0 3.06ZM5.2 20.2h2.67v-9H5.2v9ZM10.02 11.2v9h2.66v-4.73c0-2.64 3.4-2.86 3.4 0v4.73h2.67v-5.65c0-4.4-4.89-4.24-6.07-2.08V11.2h-2.66Z" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[16px] w-[16px] fill-current">
      <path d="M18.9 4H21l-4.6 5.26L21.8 20h-4.95l-3.88-6.64L7.16 20H5l4.93-5.64L4.2 4h5.08l3.5 6.04L18.9 4Zm-1.73 14.52h1.16L8.66 5.4H7.42l9.75 13.12Z" />
    </svg>
  )
}

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
          ? 'border-b border-white/65 bg-white/[0.8] shadow-[0_12px_34px_rgba(9,3,77,0.12)] backdrop-blur-2xl'
          : 'bg-white/[0.92]'
      }`}
      data-testid="site-navbar"
      data-scrolled={scrolled}
    >
      <div className="section-shell flex min-h-[68px] items-center justify-between gap-3">
        <a href="#top" className="flex min-h-11 items-center gap-3.5 text-clearaway-navy no-underline">
          <span className="grid h-11 w-11 place-items-center rounded-[8px] bg-white/[0.9] shadow-[0_10px_24px_rgba(9,3,77,0.08)] ring-1 ring-white/80 backdrop-blur-sm">
            <img className="h-8 w-8 object-contain" src={logo} alt="Clearaway Services Ltd" width="269" height="222" />
          </span>
          <span className="hidden leading-none sm:block">
            <span className="block text-[15px] font-black leading-[1.1] text-clearaway-navy">Clearaway Services</span>
            <span className="mt-1 block text-[11px] font-semibold uppercase leading-4 text-clearaway-greenDark/90">
              Asbestos · Strip-Out · Demolition
            </span>
          </span>
        </a>

        <nav
          className="hidden items-center gap-1 rounded-full bg-white/[0.74] p-1 ring-1 ring-clearaway-line/75 shadow-[0_8px_22px_rgba(9,3,77,0.06)] lg:flex"
          aria-label="Primary navigation"
        >
          {links.map((link) => (
            <a
              key={link.href}
              className="rounded-full px-3 py-2 text-sm font-semibold leading-5 text-slate-800 no-underline transition-colors duration-300 hover:bg-clearaway-mist hover:text-clearaway-blue"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2.5 lg:flex">
          <div
            className="flex items-center gap-1 rounded-full bg-white/[0.86] px-1.5 py-1 ring-1 ring-clearaway-line/75 shadow-[0_8px_22px_rgba(9,3,77,0.06)]"
            aria-label="Social links"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full text-clearaway-navy transition-colors duration-300 hover:bg-clearaway-mist hover:text-clearaway-blue"
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                title={link.label}
              >
                <SocialIcon label={link.label} />
              </a>
            ))}
          </div>
          <a className="btn-secondary px-3 py-2 text-sm" href="tel:02089414433">
            <Phone aria-hidden="true" size={16} /> 020 8941 4433
          </a>
          <a className="btn-primary px-4 py-2 text-sm" href="#contact">
            Get a quote
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <div
            className="flex items-center gap-1 rounded-full bg-white/[0.92] px-1.5 py-1 ring-1 ring-clearaway-line/80 shadow-[0_8px_18px_rgba(9,3,77,0.06)]"
            aria-label="Social links"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-clearaway-navy transition-colors duration-300 hover:bg-clearaway-mist hover:text-clearaway-blue"
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                title={link.label}
              >
                <SocialIcon label={link.label} />
              </a>
            ))}
          </div>
          <button
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[8px] border border-clearaway-line bg-white text-clearaway-blue"
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            <Menu aria-hidden="true" size={24} />
          </button>
        </div>
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
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-[8px] bg-white shadow-[0_8px_22px_rgba(9,3,77,0.06)] ring-1 ring-clearaway-line/80">
                    <img className="h-9 w-9 object-contain" src={logo} alt="Clearaway Services Ltd" width="269" height="222" />
                  </span>
                  <div>
                    <span className="block text-base font-black leading-5 text-clearaway-navy">Clearaway Services</span>
                    <span className="mt-1 block text-[11px] font-semibold uppercase leading-4 text-clearaway-greenDark/90">
                      Asbestos · Strip-Out · Demolition
                    </span>
                  </div>
                </div>
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
              <div className="mt-6 flex flex-wrap gap-2 border-t border-clearaway-line pt-6" aria-label="Social links">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    className="inline-flex h-11 min-w-11 items-center justify-center rounded-full border border-clearaway-line bg-white px-3 text-clearaway-navy no-underline transition-colors duration-300 hover:border-clearaway-cyan hover:text-clearaway-blue"
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label}
                    onClick={() => setOpen(false)}
                  >
                    <SocialIcon label={link.label} />
                  </a>
                ))}
              </div>
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
