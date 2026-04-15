import {
  ArrowRight,
  BadgeCheck,
  Building2,
  ClipboardCheck,
  Clock3,
  Factory,
  HardHat,
  MapPin,
  Phone,
  Recycle,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import ContactForm from '../components/ContactForm'
import Faq from '../components/Faq'
import FloatingActions from '../components/FloatingActions'
import Navbar from '../components/Navbar'
import Reveal from '../components/Reveal'
import TestimonialCarousel from '../components/TestimonialCarousel'
import airTestingImage from '../assets/images/client-work/air-testing-detail.jpg'
import asbestosSamplingImage from '../assets/images/client-work/asbestos-sampling.jpg'
import brandedRoofImage from '../assets/images/client-work/branded-roof-operative.jpg'
import controlledContainmentImage from '../assets/images/client-work/controlled-containment.jpg'
import demolitionExcavationImage from '../assets/images/client-work/demolition-excavation.jpg'
import exteriorContainmentImage from '../assets/images/client-work/exterior-containment.jpg'
import roofSheetRemovalImage from '../assets/images/client-work/roof-sheet-removal.jpg'
import scaffoldContainmentImage from '../assets/images/client-work/scaffold-containment.jpg'
import hseLogo from '../assets/images/hse-logo.jpg'
import scopesLogo from '../assets/images/scopes-logo.jpg'
import spectraLogo from '../assets/images/spectra-site-logo.png'
import lsslLogo from '../assets/images/lssl.jpg'
import logo from '../assets/images/clearaway-logo.png'
import heroVideo from '../assets/videos/clearaway-hero-web.mp4'

const baseUrl = import.meta.env.BASE_URL
const heroImage = `${baseUrl}hero-clearaway-work-1400.jpg`

const services = [
  {
    title: 'Asbestos Removal',
    description:
      'Careful containment, handling and disposal for commercial premises, industrial estates, demolition sites and outbuildings.',
    benefit: 'Protect people and keep works moving under a controlled plan.',
    icon: ShieldCheck,
    image: roofSheetRemovalImage,
    imageAlt: 'Clearaway operative removing asbestos roof sheeting under controlled conditions',
    imagePosition: 'object-[58%_50%]',
  },
  {
    title: 'Asbestos Surveys',
    description:
      'Management surveys and refurbishment or demolition surveys for buildings where asbestos may be present or disturbed.',
    benefit: 'Get clear reporting before maintenance, fit-out or demolition starts.',
    icon: ClipboardCheck,
    image: asbestosSamplingImage,
    imageAlt: 'Clearaway asbestos sampling work inside a commercial building',
    imagePosition: 'object-[54%_50%]',
  },
  {
    title: 'Air Testing & Monitoring',
    description:
      'Background, leak, reassurance and personal monitoring, plus four-stage clearance testing for reoccupation.',
    benefit: 'Evidence air quality and clearance at the moments that matter.',
    icon: Sparkles,
    image: airTestingImage,
    imageAlt: 'Air monitoring equipment being used to test a suspended ceiling area',
    imagePosition: 'object-[50%_50%]',
  },
  {
    title: 'Soft Strip Out',
    description:
      'Internal strip-outs, tenancy make-goods and dismantling for offices, retail units, warehouses and refurbishments.',
    benefit: 'Prepare spaces for the next phase with less disruption.',
    icon: Building2,
    image: controlledContainmentImage,
    imageAlt: 'Blue containment enclosure prepared for controlled asbestos and strip-out work',
    imagePosition: 'object-[44%_50%]',
  },
  {
    title: 'Demolition & Excavation',
    description:
      'Controlled demolition and excavation support with experienced supervision and practical site management.',
    benefit: 'A safer route through complex or time-sensitive dismantling.',
    icon: HardHat,
    image: demolitionExcavationImage,
    imageAlt: 'Clearaway operative managing demolition and excavation preparation',
    imagePosition: 'object-[35%_50%]',
  },
  {
    title: 'Building & Office Strip Outs',
    description:
      'Removal of partition walls, floor coverings, ceilings, mechanical systems, utilities and plant-room items.',
    benefit: 'One coordinated team for the heavy internal work.',
    icon: Factory,
    image: exteriorContainmentImage,
    imageAlt: 'External blue containment sheeting installed around a property',
    imagePosition: 'object-[50%_50%]',
  },
]

const processSteps = [
  {
    title: 'Tell us what is happening on site',
    text: 'Share the location, building type, timescale, suspected materials and any access limits.',
  },
  {
    title: 'Survey, test or scope the works',
    text: 'Clearaway identifies the right starting point, from sampling and air testing to strip-out planning.',
  },
  {
    title: 'Plan the safe method',
    text: 'The team aligns the work around safety, HSE requirements, site rules, noise windows and waste routes.',
  },
  {
    title: 'Complete, clear and hand back',
    text: 'Works are managed through completion so the next contractor, tenant or project phase can proceed.',
  },
]

const areas = ['London', 'Surrey', 'Chessington', 'Long Ditton', 'Surbiton', 'Kingston upon Thames', 'Epsom', 'Guildford']

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/Clearaway-Asbestos-Services-Ltd-106150131954705' },
  { label: 'Instagram', href: 'https://www.instagram.com/clearawayasbestosservicesltd/?hl=en-gb' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/clearaway-services-ltd' },
  { label: 'X', href: 'https://twitter.com/ClearawayukLtd' },
]

const siteImpressions = [
  {
    src: controlledContainmentImage,
    alt: 'Blue containment enclosure prepared on a residential site',
    label: 'Containment setup',
  },
  {
    src: airTestingImage,
    alt: 'Air testing detail for asbestos monitoring',
    label: 'Air monitoring',
  },
  {
    src: brandedRoofImage,
    alt: 'Clearaway operative working on a roof area in branded protective clothing',
    label: 'Site work',
  },
]

export default function HomePage() {
  return (
    <div id="top" className="bg-white">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <section
          id="hero-section"
          className="relative min-h-[860px] overflow-hidden pt-28 text-white lg:min-h-[780px]"
          data-testid="hero"
        >
          <video
            className="absolute inset-0 h-full w-full object-cover object-center"
            src={heroVideo}
            poster={heroImage}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            data-testid="hero-video"
          />
          <div className="section-shell relative z-10 py-12 lg:py-20">
            <div className="hero-grid">
              <Reveal
                className="mx-auto max-w-4xl rounded-[8px] bg-clearaway-navy/20 p-4 text-center shadow-[0_18px_60px_rgba(9,3,77,0.18)] backdrop-blur-[2px] sm:p-6 lg:mx-0 lg:bg-transparent lg:p-0 lg:text-left lg:shadow-none lg:backdrop-blur-0"
                data-testid="hero-copy"
              >
                <p className="inline-flex rounded-[6px] bg-white/[0.12] px-3 py-2 text-sm font-bold leading-5 text-white ring-1 ring-white/[0.22]">
                  London, Surrey and the South East
                </p>
                <h1
                  className="mt-6 text-4xl font-extrabold leading-[1.12] text-white sm:text-5xl sm:leading-[1.08] lg:text-[4.55rem] lg:leading-[1.02]"
                  style={{ textShadow: '0 10px 32px rgba(9, 3, 77, 0.5)' }}
                >
                  Licensed asbestos removal and strip-out without project drift.
                </h1>
                <p
                  className="mt-6 max-w-[52rem] text-lg leading-8 text-white/[0.96] sm:text-[1.16rem] sm:leading-9 lg:text-[1.3rem] lg:leading-[2.25rem]"
                  style={{ textShadow: '0 8px 26px rgba(9, 3, 77, 0.42)' }}
                >
                  Clearaway Services supports contractors, developers and property managers with asbestos surveys, air
                  testing, safe removal, demolition and soft strip-out work.
                </p>
                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                  <a className="btn-primary bg-clearaway-cyanDark hover:bg-clearaway-blue" href="#contact">
                    Request a quote <ArrowRight aria-hidden="true" size={18} />
                  </a>
                  <a className="btn-secondary border-white/[0.45] bg-white/95 text-clearaway-blue" href="tel:02089414433">
                    <Phone aria-hidden="true" size={18} /> 020 8941 4433
                  </a>
                </div>
                <div className="mt-10 grid gap-4 text-left sm:grid-cols-3">
                  {['15+ years experience stated', 'HSE licensed asbestos work', '24/7 project support stated'].map(
                    (item) => (
                      <div key={item} className="rounded-[8px] border border-white/[0.24] bg-clearaway-navy/28 p-4 backdrop-blur-md">
                        <BadgeCheck aria-hidden="true" className="mb-2 text-clearaway-green" size={22} />
                        <p className="text-sm font-semibold leading-5 text-white lg:text-[1rem] lg:leading-6">{item}</p>
                      </div>
                    ),
                  )}
                </div>
              </Reveal>
              <Reveal className="mx-auto w-full max-w-[500px] lg:mx-0" delay={0.08} data-testid="hero-form">
                <ContactForm label="Hero project enquiry form" />
              </Reveal>
            </div>
            <Reveal className="mx-auto mt-10 w-full max-w-[1080px] lg:mt-12" delay={0.12}>
              <TestimonialCarousel variant="hero" />
            </Reveal>
          </div>
        </section>

        <section className="border-b border-clearaway-line bg-clearaway-mist py-6" aria-label="Trust signals">
          <div className="section-shell grid gap-3 rounded-[8px] border border-clearaway-line bg-white p-3 shadow-[0_14px_36px_rgba(9,3,77,0.06)] sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: ShieldCheck, text: 'HSE licence stated for asbestos works' },
              { icon: Recycle, text: 'Waste carrier licence CBDU105333' },
              { icon: Clock3, text: '24 hours a day, 7 days a week' },
              { icon: BadgeCheck, text: 'Public and employer liability stated up to £10m' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3 rounded-[8px] px-3 py-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[8px] bg-clearaway-mist text-clearaway-blue">
                  <item.icon aria-hidden="true" size={21} />
                </span>
                <p className="text-sm font-bold leading-5 text-clearaway-navy">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 sm:py-24 lg:py-28">
          <div className="section-shell">
            <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
              <Reveal>
                <p className="eyebrow">Control before disruption</p>
                <h2 className="mt-3 text-3xl font-extrabold leading-tight text-clearaway-navy sm:text-[2.55rem] lg:text-[3rem] lg:leading-[1.08]">
                  Refurbishment and demolition work gets expensive when asbestos risk is unclear.
                </h2>
              </Reveal>
              <Reveal delay={0.08}>
                <div className="grid gap-6 text-lg leading-8 text-slate-600 lg:text-[1.16rem] lg:leading-[2rem]">
                  <p>
                    Contractors and property teams need fast answers, safe working methods and clear communication before
                    work starts opening up a building.
                  </p>
                  <p>
                    Clearaway’s current service mix is strongest where asbestos compliance and strip-out planning overlap:
                    surveys, testing, removal, dismantling, waste handling and practical site coordination.
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {siteImpressions.map((item, index) => (
                <Reveal key={item.label} delay={index * 0.04} className="group relative h-64 overflow-hidden rounded-[8px] bg-clearaway-navy shadow-clean">
                  <img
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    src={item.src}
                    alt={item.alt}
                    width="1500"
                    height="1100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-clearaway-navy/82 via-clearaway-navy/12 to-transparent" aria-hidden="true" />
                  <p className="absolute bottom-4 left-4 rounded-[6px] bg-white px-3 py-2 text-sm font-extrabold leading-5 text-clearaway-blue">
                    {item.label}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="bg-clearaway-mist py-20 sm:py-24 lg:py-28">
          <div className="section-shell">
            <Reveal className="max-w-4xl">
              <p className="eyebrow">Services</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-clearaway-navy sm:text-[2.55rem] lg:text-[3rem] lg:leading-[1.08]">
                Specialist asbestos, demolition and soft strip-out services.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600 lg:text-[1.16rem] lg:leading-[2rem]">
                The offer is built around commercial and industrial sites that need safety, speed and compliance to line
                up.
              </p>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => (
                <Reveal
                  key={service.title}
                  delay={index * 0.03}
                  className="group relative overflow-hidden rounded-[8px] border border-clearaway-line bg-white shadow-[0_12px_34px_rgba(9,3,77,0.07)] transition-transform duration-300 hover:-translate-y-1"
                >
                  <span className="absolute inset-x-0 top-0 h-1 bg-clearaway-cyan" aria-hidden="true" />
                  <div className="relative h-48 overflow-hidden bg-clearaway-navy">
                    <img
                      className={`h-full w-full object-cover ${service.imagePosition}`}
                      src={service.image}
                      alt={service.imageAlt}
                      width="1500"
                      height="1100"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-clearaway-navy/75 via-clearaway-navy/10 to-transparent" aria-hidden="true" />
                    <span className="absolute bottom-4 left-4 grid h-12 w-12 place-items-center rounded-[8px] bg-white text-clearaway-blue shadow-[0_12px_28px_rgba(0,0,0,0.18)]">
                      <service.icon aria-hidden="true" size={28} />
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-extrabold leading-7 text-clearaway-navy">{service.title}</h3>
                    <p className="mt-3 text-base leading-7 text-slate-600 lg:text-[1.06rem] lg:leading-[1.9rem]">{service.description}</p>
                    <p className="mt-4 border-l-4 border-clearaway-green pl-3 text-sm font-bold leading-6 text-clearaway-blue">
                      {service.benefit}
                    </p>
                    <a className="mt-5 inline-flex min-h-11 items-center font-bold text-clearaway-blue" href="#contact">
                      Ask about {service.title.toLowerCase()} <ArrowRight aria-hidden="true" className="ml-2" size={17} />
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24 lg:py-28">
          <div className="section-shell grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div className="relative overflow-hidden rounded-[8px] bg-clearaway-navy shadow-clean">
                <img
                  className="h-[520px] w-full object-cover object-[48%_50%]"
                  src={scaffoldContainmentImage}
                  alt="Clearaway scaffold and containment setup on a commercial exterior"
                  width="1800"
                  height="738"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-clearaway-navy/82 via-transparent to-clearaway-navy/10" aria-hidden="true" />
                <div className="absolute bottom-5 left-5 right-5 grid gap-3 sm:grid-cols-3">
                  {['Contain', 'Remove', 'Clear'].map((item) => (
                    <span key={item} className="rounded-[6px] border border-white/20 bg-white/12 px-3 py-2 text-center text-sm font-extrabold leading-5 text-white backdrop-blur">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="eyebrow">One coordinated route</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-clearaway-navy sm:text-[2.55rem] lg:text-[3rem] lg:leading-[1.08]">
                From asbestos survey to safe strip-out and handover.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600 lg:text-[1.16rem] lg:leading-[2rem]">
                Clearaway’s existing positioning highlights a one-stop approach: asbestos survey, asbestos removal and
                soft strip demolition managed through a single contractor.
              </p>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {['Single point of contact', 'Controlled dismantling', 'Recycling where possible', 'Minimal disruption'].map(
                  (item) => (
                    <div key={item} className="rounded-[8px] border border-clearaway-line p-4">
                      <BadgeCheck aria-hidden="true" className="mb-2 text-clearaway-greenDark" />
                      <p className="font-bold leading-6 text-clearaway-navy">{item}</p>
                    </div>
                  ),
                )}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="process" className="bg-clearaway-navy py-20 text-white sm:py-24">
          <div className="section-shell">
            <Reveal className="max-w-3xl">
              <p className="font-bold uppercase leading-5 text-clearaway-cyan">How it works</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-[2.55rem] lg:text-[3rem] lg:leading-[1.08]">
                A practical path from first call to site clearance.
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <Reveal
                  key={step.title}
                  delay={index * 0.05}
                  className="rounded-[8px] border border-white/[0.14] bg-white/[0.08] p-6"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-[6px] bg-clearaway-cyanDark text-lg font-extrabold">
                    {index + 1}
                  </span>
                  <h3 className="mt-5 text-xl font-extrabold leading-7">{step.title}</h3>
                  <p className="mt-3 text-base leading-7 text-white/[0.78] lg:text-[1.04rem] lg:leading-[1.9rem]">{step.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24 lg:py-28">
          <div className="section-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <Reveal>
              <p className="eyebrow">Why Clearaway</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-clearaway-navy sm:text-[2.55rem] lg:text-[3rem] lg:leading-[1.08]">
                Built for live sites, sensitive buildings and strict deadlines.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600 lg:text-[1.16rem] lg:leading-[2rem]">
                The current site places emphasis on trained operatives, CSCS demolition specialist cards, HSE standards,
                risk assessments, recycling and adapting work around site restrictions.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  'Fully trained operatives stated online',
                  'Detailed risk assessments',
                  'Noise and dust control focus',
                  'Environmental approach to waste',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <BadgeCheck aria-hidden="true" className="mt-1 shrink-0 text-clearaway-greenDark" size={22} />
                    <p className="font-semibold leading-7 text-clearaway-ink">{item}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <img
                className="h-full max-h-[560px] w-full rounded-[8px] object-cover shadow-clean"
                src={airTestingImage}
                alt="Air monitoring equipment used during asbestos testing"
                width="1500"
                height="1128"
                loading="lazy"
              />
            </Reveal>
          </div>
        </section>

        <section id="proof" className="bg-clearaway-mist py-20 sm:py-24 lg:py-28">
          <div className="section-shell">
            <Reveal className="max-w-4xl">
              <p className="eyebrow">Proof and reassurance</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-clearaway-navy sm:text-[2.55rem] lg:text-[3rem] lg:leading-[1.08]">
                Public trust cues without unsupported claims.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600 lg:text-[1.16rem] lg:leading-[2rem]">
                The hero section now carries the public Google review excerpts and the live rating summary visible for
                Clearaway Asbestos. This section keeps the rest of the trust picture grounded in public business details
                and source-visible credentials.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  'Google rating shown in the hero is 5.0 based on 6 reviews.',
                  'Reviewer names and excerpts are taken from the visible Google review list.',
                  'Trust logos below reflect sources visible on the existing website.',
                ].map((item) => (
                  <div key={item} className="rounded-[8px] border border-clearaway-line bg-white p-5">
                    <p className="font-semibold leading-7 text-clearaway-navy">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { src: hseLogo, width: 155, height: 125, alt: 'Health and Safety Executive logo' },
                  { src: scopesLogo, width: 203, height: 100, alt: 'Public trust logo from Clearaway website' },
                  { src: spectraLogo, width: 288, height: 70, alt: 'Public trust logo from Clearaway website' },
                  { src: lsslLogo, width: 1181, height: 578, alt: 'Public trust logo from Clearaway website' },
                ].map((trustLogo) => (
                  <div key={trustLogo.src} className="grid min-h-24 place-items-center rounded-[8px] bg-white p-3">
                    <img
                      src={trustLogo.src}
                      alt={trustLogo.alt}
                      width={trustLogo.width}
                      height={trustLogo.height}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="about" className="py-20 sm:py-24 lg:py-28">
          <div className="section-shell grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <img
                className="h-full max-h-[600px] w-full rounded-[8px] object-cover object-[46%_50%] shadow-clean"
                src={brandedRoofImage}
                alt="Clearaway operative working on site in branded protective clothing"
                width="1500"
                height="1016"
                loading="lazy"
              />
            </Reveal>
            <Reveal delay={0.08}>
              <p className="eyebrow">About Clearaway Services</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-clearaway-navy sm:text-[2.55rem] lg:text-[3rem] lg:leading-[1.08]">
                Surrey-based specialists serving London and the South East.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600 lg:text-[1.16rem] lg:leading-[2rem]">
                Clearaway describes itself as an experienced, friendly and professional team for soft building strip-out,
                internal demolition, waste removal and asbestos services.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-600 lg:text-[1.16rem] lg:leading-[2rem]">
                The brand’s strongest message is practical confidence: trained people, compliant processes and a team
                that can help whether the work is a targeted strip-out or a larger commercial programme.
              </p>
              <a className="btn-primary mt-8" href="#contact">
                Talk through your site <ArrowRight aria-hidden="true" size={18} />
              </a>
            </Reveal>
          </div>
        </section>

        <section id="contact" className="bg-clearaway-mist py-20 sm:py-24 lg:py-28">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <Reveal>
              <p className="eyebrow">Contact and service area</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-clearaway-navy sm:text-[2.55rem] lg:text-[3rem] lg:leading-[1.08]">
                Speak to the team about access, asbestos risk and next steps.
              </h2>
              <div className="mt-8 grid gap-4">
                <a className="flex items-center gap-3 rounded-[8px] bg-white p-4 font-bold text-clearaway-blue no-underline" href="tel:02089414433">
                  <Phone aria-hidden="true" /> 020 8941 4433
                </a>
                <a className="flex items-center gap-3 rounded-[8px] bg-white p-4 font-bold text-clearaway-blue no-underline" href="tel:08000246168">
                  <Phone aria-hidden="true" /> 080 0024 6168
                </a>
                <a
                  className="flex items-center gap-3 rounded-[8px] bg-white p-4 font-bold text-clearaway-blue no-underline"
                  href="mailto:info@clearawayservicesltd.co.uk"
                >
                  <ClipboardCheck aria-hidden="true" /> info@clearawayservicesltd.co.uk
                </a>
                <div className="rounded-[8px] bg-white p-4">
                  <div className="flex gap-3">
                    <MapPin aria-hidden="true" className="shrink-0 text-clearaway-blue" />
                    <p className="font-semibold leading-7 text-clearaway-ink">
                      Chessington Business Centre, Chessington, KT9 1SD
                      <br />
                      Ditton House, 59 Fleece Road, Long Ditton, Surbiton, Surrey, KT6 5JR
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {areas.map((area) => (
                  <span key={area} className="rounded-[6px] bg-white px-3 py-2 text-sm font-bold text-clearaway-navy">
                    {area}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <ContactForm label="Contact section project enquiry form" />
            </Reveal>
          </div>
        </section>

        <section id="faq" className="py-20 sm:py-24 lg:py-28">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal>
              <p className="eyebrow">FAQ</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-clearaway-navy sm:text-[2.55rem] lg:text-[3rem] lg:leading-[1.08]">
                Common questions before the first call.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600 lg:text-[1.16rem] lg:leading-[2rem]">
                The safest starting point is a quick conversation about what is known, what is suspected and what the
                next trade needs from the building.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <Faq />
            </Reveal>
          </div>
        </section>

        <section className="bg-clearaway-blue py-14 text-white">
          <div className="section-shell flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-bold uppercase leading-5 text-white/[0.78]">Ready to plan the next step?</p>
              <h2 className="mt-2 text-3xl font-extrabold leading-tight sm:text-[2.55rem] lg:text-[3rem] lg:leading-[1.08]">Get a clear route for your site.</h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a className="btn-secondary border-white bg-white text-clearaway-blue" href="#contact">
                Request a quote
              </a>
              <a className="btn-primary border-clearaway-navy bg-clearaway-navy" href="tel:02089414433">
                Call 020 8941 4433
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#070431] pb-28 pt-14 text-white sm:pb-24">
        <div className="section-shell">
          <div className="grid gap-6 rounded-[8px] border border-white/[0.12] bg-white/[0.045] p-5 shadow-[0_24px_60px_rgba(0,0,0,0.18)] sm:p-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <span className="grid h-16 w-16 shrink-0 place-items-center rounded-[8px] bg-white">
                <img className="h-12 w-12 object-contain" src={logo} alt="Clearaway Services Ltd" />
              </span>
              <div>
                <p className="text-sm font-bold uppercase leading-5 text-clearaway-cyan">Clearaway Services Ltd</p>
                <h2 className="mt-1 text-2xl font-extrabold leading-8">Asbestos, strip-out and demolition support.</h2>
                <p className="mt-2 max-w-2xl text-base leading-7 text-white/[0.72]">
                  A practical route from asbestos risk to safe site handover across London, Surrey and the South East.
                </p>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <a className="btn-primary border-clearaway-cyanDark bg-clearaway-cyanDark" href="#contact">
                Request a quote
              </a>
              <a className="btn-secondary border-white bg-white text-clearaway-blue" href="tel:02089414433">
                Call 020 8941 4433
              </a>
            </div>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-[0.8fr_1fr_1fr_1.15fr]">
            <div>
              <h2 className="text-sm font-extrabold uppercase leading-5 tracking-wide text-white">Trust cues</h2>
              <div className="mt-4 grid gap-2 text-sm leading-6 text-white/[0.72]">
                <p>Company Registration No. 10416600</p>
                <p>Waste Carrier Licence No. CBDU105333</p>
                <p>24/7 service stated online</p>
              </div>
            </div>
            <div>
              <h2 className="text-sm font-extrabold uppercase leading-5 tracking-wide text-white">Explore</h2>
              <nav className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1" aria-label="Footer navigation">
                {['Services', 'Process', 'Proof', 'About', 'FAQ', 'Contact'].map((item) => (
                  <a
                    key={item}
                    className="min-h-11 py-2 text-white/[0.76] no-underline hover:text-white"
                    href={`#${item.toLowerCase()}`}
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
            <div>
              <h2 className="text-sm font-extrabold uppercase leading-5 tracking-wide text-white">Services</h2>
              <div className="mt-3 grid gap-1">
                {services.slice(0, 5).map((service) => (
                  <a
                    key={service.title}
                    className="min-h-11 py-2 text-white/[0.76] no-underline hover:text-white"
                    href="#services"
                  >
                    {service.title}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-sm font-extrabold uppercase leading-5 tracking-wide text-white">Contact</h2>
              <div className="mt-3 grid gap-2 text-white/[0.76]">
                <a className="min-h-11 py-2 text-white/[0.76] no-underline hover:text-white" href="tel:02089414433">
                  020 8941 4433
                </a>
                <a className="min-h-11 py-2 text-white/[0.76] no-underline hover:text-white" href="tel:08000246168">
                  080 0024 6168
                </a>
                <a
                  className="min-h-11 py-2 text-white/[0.76] no-underline hover:text-white"
                  href="mailto:info@clearawayservicesltd.co.uk"
                >
                  info@clearawayservicesltd.co.uk
                </a>
                <p className="leading-7">Chessington Business Centre, Chessington, KT9 1SD</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 border-t border-white/[0.12] pt-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                className="rounded-[6px] border border-white/[0.14] px-3 py-2 text-sm font-bold leading-5 text-white/[0.76] no-underline hover:border-clearaway-cyan hover:text-white"
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3 text-sm leading-6 text-white/[0.62] sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Clearaway Services Ltd.</p>
            <div className="flex gap-4">
              <a className="text-white/[0.62] hover:text-white" href="#top">
                Privacy
              </a>
              <a className="text-white/[0.62] hover:text-white" href="#top">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
      <FloatingActions />
    </div>
  )
}
