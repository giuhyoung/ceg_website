function Header({ navItems }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-3 text-white">
            <img
              src="/ceg-logo.png"
              alt="CEG&+ 로고"
              className="h-11 w-11 rounded-2xl border border-white/10 object-contain"
            />
            <div>
              <p className="text-xs font-medium text-slate-300">
                <span className="text-sky-300">Cre</span>
                <span className="text-red-400">a</span>
                <span className="text-amber-300">c</span>
                <span className="text-sky-300">tive</span>
                <span className="text-slate-300"> Entrepreneur Gesellschaft &+</span>
              </p>
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
