import { Link } from 'react-router-dom'

export const LandingServices = () => {
  return (
    <section className="py-24 px-8 bg-landing-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-label text-landing-primary font-bold tracking-widest text-sm uppercase mb-4 block">
              Nossas Trilhas
            </span>
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-landing-on-surface">
              Soluções Customizadas
            </h2>
          </div>
          <p className="text-landing-secondary max-w-md">
            Do desenvolvimento técnico à inteligência emocional na oratória.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-2 bg-landing-surface-container-lowest p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-all group">
            <div className="w-16 h-16 bg-landing-primary-container/50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-landing-primary text-3xl">
                school
              </span>
            </div>
            <h3 className="font-headline text-2xl font-bold mb-4">Cursos</h3>
            <p className="text-landing-secondary mb-8 leading-relaxed">
              Programas imersivos para dominar a arte da retórica, escrita
              criativa e comunicação assertiva.
            </p>
            <Link
              to="/signup"
              className="text-landing-primary font-bold inline-flex items-center gap-2 group-hover:gap-4 transition-all"
            >
              Saiba mais{' '}
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
          <div className="md:col-span-2 bg-landing-secondary text-white p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-all relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="font-headline text-2xl font-bold mb-4">
                Palestras
              </h3>
              <p className="text-white/80 mb-8 leading-relaxed">
                Experiências inspiradoras que transformam equipes e impulsionam
                o engajamento corporativo.
              </p>
              <button className="bg-white text-landing-secondary font-bold px-6 py-2 rounded-lg text-sm">
                Contratar
              </button>
            </div>
            <span className="material-symbols-outlined absolute -bottom-10 -right-10 text-[12rem] opacity-10">
              record_voice_over
            </span>
          </div>
          <div className="md:col-span-1 bg-landing-surface-container-lowest p-8 rounded-[2rem] border-b-4 border-landing-primary">
            <div className="w-12 h-12 bg-landing-surface-container rounded-xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-landing-primary">
                psychology
              </span>
            </div>
            <h3 className="font-headline text-xl font-bold mb-3">Mentoring</h3>
            <p className="text-sm text-landing-secondary leading-relaxed">
              Acompanhamento individualizado de alta performance para líderes.
            </p>
          </div>
          <div className="md:col-span-1 bg-landing-primary-container p-8 rounded-[2rem]">
            <div className="w-12 h-12 bg-white/40 rounded-xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-landing-on-primary-container">
                calendar_month
              </span>
            </div>
            <h3 className="font-headline text-xl font-bold mb-3">Agenda</h3>
            <p className="text-sm text-landing-on-primary-container leading-relaxed">
              Confira nossas próximas turmas e workshops presenciais.
            </p>
          </div>
          <div className="md:col-span-2 bg-landing-surface-container-highest p-8 rounded-[2rem] flex flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="font-headline text-xl font-bold mb-2">
                Workshops
              </h3>
              <p className="text-sm text-landing-secondary">
                Oficinas práticas de curta duração para resolver desafios
                pontuais.
              </p>
            </div>
            <div className="flex -space-x-4">
              <div className="w-12 h-12 rounded-full border-4 border-landing-surface-container-highest overflow-hidden">
                <img
                  alt="professional avatar"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBK4ECi_nh4tEa-zd4jncXByu-XlNbiiK33FNr75zddUf3D0qlhDRR3GtFbx1yCtJFGigZLvqylZzbkaR3kUEhtJKKirGlrxPydKbAIXMbBq4EwkqsLooqBYixOMG086Z2sbOSTxAfSVd2YYCB3uSj3AKRH3Htlm46FwZP5n83rKZ1BAZS5TuWd8TEeCkBNwNssko8-pdlnCERmYyng-M5QQMOZEGaFfOBlkO-_8Pdh3GxSwrA5hitA9AI1XxzguZ5iRtRWG2B-FDsC"
                />
              </div>
              <div className="w-12 h-12 rounded-full border-4 border-landing-surface-container-highest bg-landing-primary flex items-center justify-center text-xs text-white font-bold">
                +12
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
