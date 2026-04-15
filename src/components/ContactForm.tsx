import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

type ContactFormProps = {
  label?: string
}

export default function ContactForm({ label = 'Project enquiry form' }: ContactFormProps) {
  const [sent, setSent] = useState(false)

  return (
    <form
      className="rounded-[8px] bg-white p-5 text-left shadow-clean ring-1 ring-clearaway-line sm:p-6"
      aria-label={label}
      onSubmit={(event) => {
        event.preventDefault()
        setSent(true)
      }}
    >
      <div className="mb-5">
        <p className="text-sm font-bold uppercase leading-5 text-clearaway-cyanDark">Start with a quick brief</p>
        <h2 className="mt-1 text-2xl font-bold leading-8 text-clearaway-ink">Request a call back</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Send the basics and the team can talk through access, timings and the right route for your site.
        </p>
      </div>

      <div className="grid gap-4">
        <label className="grid gap-1.5 text-sm font-semibold leading-5 text-slate-800">
          Name
          <input
            className="min-h-11 rounded-[6px] border border-slate-300 px-3 py-2 text-base leading-6 text-slate-950"
            name="name"
            autoComplete="name"
            required
          />
        </label>
        <label className="grid gap-1.5 text-sm font-semibold leading-5 text-slate-800">
          Phone
          <input
            className="min-h-11 rounded-[6px] border border-slate-300 px-3 py-2 text-base leading-6 text-slate-950"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
          />
        </label>
        <label className="grid gap-1.5 text-sm font-semibold leading-5 text-slate-800">
          Service needed
          <select
            className="min-h-11 rounded-[6px] border border-slate-300 bg-white px-3 py-2 text-base leading-6 text-slate-950"
            name="service"
            required
            defaultValue=""
          >
            <option value="" disabled>
              Select a service
            </option>
            <option>Asbestos removal</option>
            <option>Asbestos survey</option>
            <option>Air testing</option>
            <option>Demolition or soft strip-out</option>
            <option>Not sure yet</option>
          </select>
        </label>
        <label className="grid gap-1.5 text-sm font-semibold leading-5 text-slate-800">
          Project notes
          <textarea
            className="min-h-24 rounded-[6px] border border-slate-300 px-3 py-2 text-base leading-6 text-slate-950"
            name="message"
            placeholder="Location, property type, deadline or access notes"
          />
        </label>
      </div>

      <button className="btn-primary mt-5 w-full" type="submit">
        Request call back <ArrowRight aria-hidden="true" size={18} />
      </button>
      <p className="mt-3 min-h-6 text-sm leading-6 text-slate-600" aria-live="polite">
        {sent ? 'Thanks. This prototype form is ready for enquiry routing.' : 'Prefer to talk? Call 020 8941 4433.'}
      </p>
    </form>
  )
}
