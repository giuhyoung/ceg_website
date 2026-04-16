function Header({ navItems }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-3 text-white">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-cyan-300 text-lg font-bold text-slate-950">
              C
            </span>
            <div>
              <p className="text-sm font-semibold tracking-[0.24em] text-sky-300">CEG</p>
              <p className="text-xs text-slate-300">Defense & Wind Strategy</p>
            </div>
          </a>

          <a
            href="#contact"
            className="hidden rounded-full border border-sky-400/30 bg-sky-400/10 px-5 py-2 text-sm font-semibold text-sky-200 transition hover:border-sky-300 hover:bg-sky-400/20 md:inline-flex"
          >
            프로젝트 문의
          </a>
        </div>

        <nav className="mt-4 flex gap-5 overflow-x-auto pb-1 md:mt-0 md:justify-center">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
