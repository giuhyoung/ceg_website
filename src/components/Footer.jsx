function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>© {new Date().getFullYear()} CEG. All rights reserved.</p>
        <p>Vite + React + Tailwind CSS 기반으로 재구성된 반응형 홍보 페이지</p>
      </div>
    </footer>
  )
}

export default Footer
