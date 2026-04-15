import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Ben Smith',
    date: '6 months ago',
    quote:
      'Graham has organised two jobs for me, both of which ran smoothly and on time. Clive and the team are really great, they completed the work in the agreed time and left the site spotless.',
  },
  {
    name: 'Lilly Hooper',
    date: '9 months ago',
    quote:
      'I used Clearaway Asbestos recently for an asbestos garage removal in my home. The staff were really friendly and professional and put me at ease the whole time they were working.',
  },
  {
    name: 'Anastasia Pillar',
    date: '9 months ago',
    quote:
      'Clearaway Asbestos did a brilliant job coming out to survey our old garage roof for asbestos. They were professional and we were impressed with the job they did replacing the garage roof.',
  },
  {
    name: 'Sharon Chinn',
    date: '21 hours ago',
    quote:
      'Graham and his team done an excellent job of removing and replacing my asbestos garage roof and I wouldn’t hesitate in recommending them.',
  },
  {
    name: 'Char Field',
    date: 'a day ago',
    quote: 'Graham and his staff done a great job of removing my concrete and asbestos garage thank you.',
  },
  {
    name: 'Graham Pearce',
    date: '2 weeks ago',
    quote: '5-star rating.',
  },
]

type TestimonialCarouselProps = {
  variant?: 'default' | 'hero'
}

export default function TestimonialCarousel({ variant = 'default' }: TestimonialCarouselProps) {
  const [index, setIndex] = useState(0)
  const current = testimonials[index]
  const isHero = variant === 'hero'

  const goTo = (direction: 1 | -1) => {
    setIndex((value) => (value + direction + testimonials.length) % testimonials.length)
  }

  return (
    <div
      className={
        isHero
          ? 'rounded-[8px] border border-white/16 bg-black/30 p-5 text-white shadow-[0_20px_54px_rgba(9,3,77,0.22)] backdrop-blur-md sm:p-7'
          : 'rounded-[8px] border border-clearaway-line bg-white p-5 shadow-clean sm:p-7'
      }
      aria-roledescription="carousel"
      aria-label={isHero ? 'Hero Google reviews carousel' : 'Google reviews carousel'}
      data-testid="testimonial-carousel"
      onTouchStart={(event) => {
        event.currentTarget.dataset.touchStart = String(event.changedTouches[0].clientX)
      }}
      onTouchEnd={(event) => {
        const start = Number(event.currentTarget.dataset.touchStart || 0)
        const end = event.changedTouches[0].clientX
        if (Math.abs(start - end) > 45) goTo(start > end ? 1 : -1)
      }}
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className={`text-sm font-bold uppercase leading-5 ${isHero ? 'text-white/82' : 'text-clearaway-cyanDark'}`}>
            Google reviews
          </p>
          <div className={`mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm leading-6 ${isHero ? 'text-white/72' : 'text-slate-600'}`}>
            <span>Google rating</span>
            <span className={`font-bold ${isHero ? 'text-white' : 'text-clearaway-navy'}`}>5.0</span>
            <span className={isHero ? 'text-white/72' : 'text-slate-600'}>Based on 6 reviews</span>
          </div>
        </div>
        <div className={`flex items-center gap-1 ${isHero ? 'text-[#ffcc4d]' : 'text-clearaway-greenDark'}`} aria-hidden="true">
          {[0, 1, 2, 3, 4].map((star) => (
            <Star key={star} size={17} aria-hidden="true" fill="currentColor" />
          ))}
        </div>
        <span className="sr-only">Five star testimonial</span>
      </div>
      <div className={`mt-5 flex items-center gap-2 text-[1.75rem] font-extrabold leading-none ${isHero ? 'text-white' : 'text-clearaway-navy'}`}>
        <span className="text-[#4285F4]">G</span>
        <span className="text-[#EA4335]">o</span>
        <span className="text-[#FBBC05]">o</span>
        <span className="text-[#4285F4]">g</span>
        <span className="text-[#34A853]">l</span>
        <span className="text-[#EA4335]">e</span>
      </div>
      <div className={`mt-6 ${isHero ? 'min-h-[182px]' : 'min-h-[138px]'}`} aria-live="polite">
        <blockquote
          className={`font-bold ${
            isHero ? 'text-[1.7rem] leading-[2.25rem] text-white sm:text-[2rem] sm:leading-[2.5rem]' : 'text-2xl leading-9 text-clearaway-navy sm:text-3xl sm:leading-10'
          }`}
        >
          “{current.quote}”
        </blockquote>
        <div className={`mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm leading-6 ${isHero ? 'text-white/72' : 'text-slate-600'}`}>
          <span className={`inline-flex h-11 w-11 items-center justify-center rounded-full font-bold ${isHero ? 'bg-white/12 text-white' : 'bg-clearaway-mist text-clearaway-blue'}`}>
            {current.name
              .split(' ')
              .map((part) => part[0])
              .slice(0, 2)
              .join('')}
          </span>
          <div>
            <p className={`font-bold ${isHero ? 'text-white' : 'text-clearaway-navy'}`}>{current.name}</p>
            <p>{current.date}</p>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <div className="flex gap-2" aria-hidden="true">
          {testimonials.map((testimonial, itemIndex) => (
            <span
              key={testimonial.quote}
              className={`h-2.5 w-2.5 rounded-full ${
                itemIndex === index ? 'bg-clearaway-blue' : 'bg-clearaway-line'
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border ${
              isHero ? 'border-white/18 bg-white text-clearaway-navy' : 'border border-clearaway-line text-clearaway-blue'
            }`}
            type="button"
            aria-label="Previous testimonial"
            onClick={() => goTo(-1)}
          >
            <ChevronLeft aria-hidden="true" />
          </button>
          <button
            className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border ${
              isHero ? 'border-white/18 bg-white text-clearaway-navy' : 'border border-clearaway-line text-clearaway-blue'
            }`}
            type="button"
            aria-label="Next testimonial"
            onClick={() => goTo(1)}
          >
            <ChevronRight aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}
