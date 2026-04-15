import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    quote: 'Really professional and left everything tidy.',
    label: 'Public testimonial on the Clearaway website',
  },
  {
    quote: 'Turned up exactly when he said he would.',
    label: 'Public testimonial on the Clearaway website',
  },
  {
    quote: 'Friendly, polite, and clearly knew what they were doing.',
    label: 'Public testimonial on the Clearaway website',
  },
]

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0)
  const current = testimonials[index]

  const goTo = (direction: 1 | -1) => {
    setIndex((value) => (value + direction + testimonials.length) % testimonials.length)
  }

  return (
    <div
      className="rounded-[8px] border border-clearaway-line bg-white p-5 shadow-clean sm:p-7"
      aria-roledescription="carousel"
      aria-label="Client feedback carousel"
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
        <p className="text-sm font-bold uppercase leading-5 text-clearaway-cyanDark">Client feedback</p>
        <div className="flex items-center gap-1 text-clearaway-greenDark" aria-hidden="true">
          {[0, 1, 2, 3, 4].map((star) => (
            <Star key={star} size={17} aria-hidden="true" fill="currentColor" />
          ))}
        </div>
        <span className="sr-only">Five star testimonial</span>
      </div>
      <div className="mt-6 min-h-[138px]" aria-live="polite">
        <blockquote className="text-2xl font-bold leading-9 text-clearaway-navy sm:text-3xl sm:leading-10">
          “{current.quote}”
        </blockquote>
        <p className="mt-4 text-sm leading-6 text-slate-600">{current.label}</p>
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
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[6px] border border-clearaway-line text-clearaway-blue"
            type="button"
            aria-label="Previous testimonial"
            onClick={() => goTo(-1)}
          >
            <ChevronLeft aria-hidden="true" />
          </button>
          <button
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[6px] border border-clearaway-line text-clearaway-blue"
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
