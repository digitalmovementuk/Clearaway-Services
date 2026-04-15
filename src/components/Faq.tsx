const faqs = [
  {
    question: 'Can Clearaway handle asbestos and strip-out together?',
    answer:
      'Yes. Their services cover asbestos surveys, removal and soft strip-out, so projects can move from investigation through clearance and preparation with fewer handovers.',
  },
  {
    question: 'Which areas do they cover?',
    answer:
      'Clearaway is based in Long Ditton and Chessington, with coverage across Surrey, London and the wider South East, including many nearby towns listed on their current website.',
  },
  {
    question: 'Do they work outside normal hours?',
    answer:
      'The current website states that services are available 24 hours a day, seven days a week, which can help with restricted access, noise windows or live sites.',
  },
  {
    question: 'What asbestos testing services are available?',
    answer:
      'Their air testing service includes background sampling, leak sampling, reassurance sampling, personal monitoring and four-stage clearance testing.',
  },
  {
    question: 'What should I include in an enquiry?',
    answer:
      'Share the site location, property type, suspected materials, project deadline, access restrictions and whether a survey or removal plan is already in place.',
  },
  {
    question: 'Can they advise if asbestos is only suspected?',
    answer:
      'Yes. The website lists asbestos sampling, testing and surveys, including management surveys and refurbishment or demolition surveys.',
  },
]

export default function Faq() {
  return (
    <div className="grid gap-3" data-testid="faq-list">
      {faqs.map((faq) => (
        <details
          key={faq.question}
          className="group rounded-[8px] border border-clearaway-line bg-white p-5 shadow-[0_10px_30px_rgba(9,3,77,0.06)]"
        >
          <summary className="cursor-pointer list-none text-lg font-bold leading-7 text-clearaway-navy marker:hidden">
            <span className="flex items-center justify-between gap-4">
              {faq.question}
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[6px] bg-clearaway-mist text-clearaway-blue group-open:rotate-45">
                +
              </span>
            </span>
          </summary>
          <p className="mt-3 text-base leading-7 text-slate-600">{faq.answer}</p>
        </details>
      ))}
    </div>
  )
}
