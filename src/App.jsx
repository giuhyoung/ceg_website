import Footer from './components/Footer'
import Header from './components/Header'
import SectionTitle from './components/SectionTitle'
import {
  capabilities,
  contactInfo,
  heroStats,
  navItems,
  projectRecords,
  processSteps,
  services,
} from './content/siteContent'

function App() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <Header navItems={navItems} />

      <main>
        <section
          id="home"
          className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.18),_transparent_24%),linear-gradient(180deg,_#020617_0%,_#0f172a_58%,_#e2e8f0_58%,_#f8fafc_100%)]"
        >
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-sky-400/10 to-transparent" />
          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
            <div className="relative">
              <span className="inline-flex rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-200 tracking-wider">
                연구 | 국방사업 | 풍력사업
              </span>
              <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                국방분야 4차 산업 혁명에 대한 새로운 도전
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                New Challenges for 4th Industrial Revolution in Military Sector
              </p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                기존 사이트의 핵심 문구와 사업 방향을 유지하면서, 국방사업과 풍력사업 홍보에 적합한
                현대적인 서비스형 랜딩 페이지로 재구성했습니다.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
                >
                  사업 분야 보기
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-sky-300 hover:text-sky-200"
                >
                  문의 정보 확인
                </a>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {heroStats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur"
                  >
                    <p className="text-sm text-slate-400">{item.label}</p>
                    <p className="mt-2 text-base font-semibold text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative lg:pl-8">
              <div className="absolute -inset-4 rounded-[2rem] bg-sky-400/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 shadow-2xl">
                <img
                  src={
                    // TODO: 메인 히어로 이미지를 실제 회사 대표 이미지로 교체하세요.
                    'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=1200&q=80'
                  }
                  alt="국방 및 전략 분석을 상징하는 대체 이미지"
                  className="h-full min-h-[420px] w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-6 sm:p-8">
                  <p className="text-sm font-medium uppercase tracking-[0.3em] text-sky-300">
                    Primary Focus
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-white">
                    국방사업 분석과 풍력사업 대응 전략을 함께 설계합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-slate-50 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionTitle
              eyebrow="Services"
              title="사업 소개"
              description="풍력발전단지 영향 분석, 기술과 전략 구상, 비용/기술성숙도 조사·분석, 복합체계 분석을 중심으로 주요 서비스를 재정리했습니다."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-5 top-5 rounded-full bg-slate-950/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">
                      {service.badge}
                    </span>
                  </div>
                  <div className="p-7">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
                      {service.english}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-slate-600">{service.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="bg-slate-950 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionTitle
              eyebrow="Project Records"
              title="연구수행실적"
              description="국방 체계연구, 정보체계, 해상·육상 풍력 사업에 이르기까지 다양한 프로젝트를 수행해 왔습니다."
              align="center"
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {projectRecords.map((project) => (
                <article
                  key={`${project.period}-${project.title}`}
                  className="flex flex-col rounded-[1.75rem] border border-white/10 bg-white/5 p-6 text-left backdrop-blur"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">
                    {project.period}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-300">
                    {project.description}
                  </p>
                  <p className="mt-4 inline-flex w-fit rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-200">
                    {project.category}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="capabilities" className="bg-white py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <SectionTitle
              eyebrow="Capabilities"
              title="국방사업과 풍력사업을 잇는 실무형 분석 역량"
              description="사업 환경과 기술 구조를 함께 읽어내는 접근을 통해 의사결정에 필요한 인사이트를 정리합니다."
            />

            <div className="grid gap-5 sm:grid-cols-2">
              {capabilities.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-lg font-bold text-sky-700">
                    +
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="bg-slate-950 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionTitle
              eyebrow="Process"
              title="분석에서 실행 지원까지 이어지는 프로젝트 흐름"
              description="실제 제안, 검토, 보고 단계에서 활용할 수 있도록 단계별로 접근합니다."
              align="center"
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-4">
              {processSteps.map((step) => (
                <div
                  key={step.step}
                  className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur"
                >
                  <p className="text-sm font-semibold tracking-[0.3em] text-sky-300">{step.step}</p>
                  <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-slate-100 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="overflow-hidden rounded-[2rem] bg-slate-950 shadow-2xl">
              <div className="grid gap-10 px-6 py-10 sm:px-10 lg:grid-cols-[1fr_0.9fr] lg:px-12 lg:py-14">
                <div>
                  <span className="inline-flex rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-sky-300">
                    Contact
                  </span>
                  <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    {contactInfo.title}
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                    {contactInfo.description}
                  </p>
                </div>

                <div className="grid gap-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                  <div>
                    <p className="text-sm text-slate-400">이메일</p>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="mt-2 inline-block text-lg font-semibold text-white"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">전화</p>
                    <p className="mt-2 text-lg font-semibold text-white">{contactInfo.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">팩스</p>
                    <p className="mt-2 text-lg font-semibold text-white">{contactInfo.fax}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">주소</p>
                    <p className="mt-2 text-lg font-semibold text-white">{contactInfo.address}</p>
                  </div>
                  <p className="rounded-2xl border border-dashed border-sky-400/30 bg-sky-400/10 px-4 py-3 text-sm leading-6 text-sky-100">
                    신용산역 5,6번 출구 방면, 지하2층과 연결되어 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
