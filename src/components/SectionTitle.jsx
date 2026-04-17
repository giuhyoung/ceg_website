function SectionTitle({ eyebrow, title, description, align = 'left', compact = false }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''
  const spacingTitle = compact ? 'mt-3' : 'mt-4'
  const spacingDescription = compact ? 'mt-3' : 'mt-4'

  return (
    <div className={`max-w-2xl ${alignment}`}>
      <span className="inline-flex rounded-full border border-sky-200/80 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
        {eyebrow}
      </span>
      <h2 className={`${spacingTitle} text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl`}>
        {title}
      </h2>
      <p className={`${spacingDescription} text-base leading-7 text-slate-600 sm:text-lg`}>
        {description}
      </p>
    </div>
  )
}

export default SectionTitle
