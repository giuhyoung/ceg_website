function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'left',
  compact = false,
  theme = 'light',
}) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''
  const spacingTitle = compact ? 'mt-3' : 'mt-4'
  const spacingDescription = compact ? 'mt-3' : 'mt-4'
  const isDark = theme === 'dark'

  const eyebrowStyles = isDark
    ? 'border-sky-400/30 bg-sky-400/10 text-sky-200'
    : 'border-sky-200/80 bg-sky-50 text-sky-700'

  const titleStyles = isDark ? 'text-white' : 'text-slate-950'
  const descriptionStyles = isDark ? 'text-slate-300' : 'text-slate-600'

  return (
    <div className={`max-w-2xl ${alignment}`}>
      <span
        className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] ${eyebrowStyles}`}
      >
        {eyebrow}
      </span>
      <h2
        className={`${spacingTitle} text-3xl font-semibold tracking-tight sm:text-4xl ${titleStyles}`}
      >
        {title}
      </h2>
      <p className={`${spacingDescription} text-base leading-7 sm:text-lg ${descriptionStyles}`}>
        {description}
      </p>
    </div>
  )
}

export default SectionTitle
