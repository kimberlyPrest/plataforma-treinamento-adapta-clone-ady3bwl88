import { Verified, Quote } from 'lucide-react'
import {
  SatinLink,
  SecondaryLink,
  TertiaryLink,
  TonalCard,
} from './ui/DesignSystem'
import { Link } from 'react-router-dom'

export const LandingExpertise = () => {
  return (
    <>
      <section className="py-24 px-8 overflow-hidden bg-landing-surface dark:bg-slate-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="aspect-square rounded-3xl bg-landing-surface-container-low dark:bg-slate-900 p-6 flex flex-col justify-end">
              <div className="text-4xl font-headline font-black text-landing-primary mb-2">
                20k+
              </div>
              <div className="text-sm font-bold uppercase tracking-widest text-landing-on-surface dark:text-slate-400">
                Alunos
              </div>
            </div>
            <div className="aspect-square rounded-3xl overflow-hidden mt-8 shadow-[0_12px_32px_rgba(9,28,52,0.06)]">
              <img
                alt="atelier details"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBxcnu2nWf6AU_NJkHFTKGv_FbhGGXSXgoRYIyxcMTtk_moyHW22CGX9Jb1xCltMsmbEImRIf7Ohpul-e1o0A92m4s4Ak1BSP-F4Un7qp-IhGXHfO4A_SYbsbLIDHGq8QuHHfpzOV7AhzTCwRXFRbnToRxSiTiqmVDxDrmD86xEExuWjsFZ2d9S0Up6I8jZt2aoQGPPcHaTzQrIr2W9ifxvuJ5t_yuEh-iiYL5fLD39BzYpTMmu7hyi2TP2j2aK9eCfv1F6N2ORP5y"
              />
            </div>
            <div className="aspect-square rounded-3xl overflow-hidden shadow-[0_12px_32px_rgba(9,28,52,0.06)]">
              <img
                alt="modern office"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCp9MQEU1akvg-GdPeiZby7qD6Z5cQOQfXXUlIkmYLk9IkJ6W20VFKIMo-_epm80-75Jctf5ntyAqxQhikB1gWqID0DysEVHFdXw1qkp4D20DYc71ZHq4zP4JWxRtITwPliLhf1aH4ofAOHRU6tqF3HQW4_eps9nnB895NyXaayRHD3iRfONSECWKXXvfO4jQtDujmTvkngayP8Qa93f9rRqjmvNE_rxX4d3UfK02VTCitQeXYW-fWG3BDbqWSH2Jc_7AEUl8R2zGPG"
              />
            </div>
            <div className="aspect-square rounded-3xl bg-landing-secondary p-8 flex flex-col justify-between -mt-8">
              <Quote className="text-white w-10 h-10" />
              <p className="text-white text-sm font-medium leading-relaxed">
                Tradição italiana aliada à inovação digital brasileira.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-8 text-landing-on-surface dark:text-white">
              O Mestre por trás da{' '}
              <span className="text-landing-primary italic">Arte</span>.
            </h2>
            <p className="text-lg text-landing-secondary dark:text-slate-300 mb-6 leading-relaxed">
              Letterino Santoro não apenas ensina a falar; ele lapida a essência
              da expressão. Com uma trajetória marcada pela excelência,
              transformou a comunicação de centenas de executivos e corporações
              globais.
            </p>
            <p className="text-landing-secondary dark:text-slate-300 mb-10 leading-relaxed">
              Sua metodologia exclusiva une técnicas clássicas de retórica com
              as necessidades dinâmicas do mundo contemporâneo, focando sempre
              na clareza, persuasão e conexão humana real.
            </p>
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4">
                <Verified className="text-landing-primary w-6 h-6" />
                <span className="font-bold text-landing-on-surface dark:text-white">
                  Especialista em Media Training
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Verified className="text-landing-primary w-6 h-6" />
                <span className="font-bold text-landing-on-surface dark:text-white">
                  Consultor Estratégico de Marcas Pessoais
                </span>
              </div>
            </div>

            <TertiaryLink to="/about">Conheça a história completa</TertiaryLink>
          </div>
        </div>
      </section>

      <section className="py-24 px-8 bg-landing-surface dark:bg-slate-900">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="font-headline text-3xl font-bold mb-4 text-landing-on-surface dark:text-white">
            Vozes de quem viveu a experiência
          </h2>
          <div className="w-24 h-1 bg-landing-primary mx-auto rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <TonalCard
            level={2}
            className="relative border border-landing-outline-variant/15"
          >
            <Quote className="text-landing-primary-container w-16 h-16 absolute top-4 right-4 opacity-30" />
            <p className="text-landing-secondary dark:text-slate-300 mb-8 italic leading-relaxed">
              "O treinamento com o Letterino mudou completamente minha forma de
              encarar apresentações de diretoria. Hoje minha fala é muito mais
              estratégica e confiante."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-landing-surface-container-low dark:bg-slate-700"></div>
              <div>
                <div className="font-bold text-sm text-landing-on-surface dark:text-white">
                  Ricardo Mendes
                </div>
                <div className="text-xs text-landing-secondary dark:text-slate-400">
                  Diretor Executivo | TechSolutions
                </div>
              </div>
            </div>
          </TonalCard>

          <TonalCard
            level={2}
            className="relative border border-landing-outline-variant/15 mt-4 md:-mt-4"
          >
            <Quote className="text-landing-primary-container w-16 h-16 absolute top-4 right-4 opacity-30" />
            <p className="text-landing-secondary dark:text-slate-300 mb-8 italic leading-relaxed">
              "Metodologia impecável. Consegui desbloquear travas de comunicação
              que me acompanhavam há anos em apenas poucas sessões de mentoria."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-landing-surface-container-low dark:bg-slate-700"></div>
              <div>
                <div className="font-bold text-sm text-landing-on-surface dark:text-white">
                  Ana Paula Costa
                </div>
                <div className="text-xs text-landing-secondary dark:text-slate-400">
                  Fundadora | AP Mentoring
                </div>
              </div>
            </div>
          </TonalCard>

          <TonalCard
            level={2}
            className="relative border border-landing-outline-variant/15"
          >
            <Quote className="text-landing-primary-container w-16 h-16 absolute top-4 right-4 opacity-30" />
            <p className="text-landing-secondary dark:text-slate-300 mb-8 italic leading-relaxed">
              "A melhor decisão para nossa equipe de vendas. A comunicação
              assertiva impactou diretamente nos nossos resultados de conversão
              este trimestre."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-landing-surface-container-low dark:bg-slate-700"></div>
              <div>
                <div className="font-bold text-sm text-landing-on-surface dark:text-white">
                  Felipe Rocha
                </div>
                <div className="text-xs text-landing-secondary dark:text-slate-400">
                  VP de Vendas | Global Retail
                </div>
              </div>
            </div>
          </TonalCard>
        </div>
      </section>

      <section className="py-20 px-8 bg-landing-surface dark:bg-slate-900">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-landing-primary to-landing-primary-container p-12 md:p-20 rounded-[3rem] text-center shadow-[0_12px_32px_rgba(9,28,52,0.06)] relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-landing-on-primary-container mb-6">
              Pronto para elevar sua comunicação?
            </h2>
            <p className="text-landing-on-primary-container/80 text-xl mb-12 max-w-2xl mx-auto font-medium">
              As vagas para o próximo workshop "A Arte de Persuadir" estão
              abertas. Reserve seu lugar no Digital Atelier.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <SatinLink
                to="/workshops"
                className="!bg-landing-on-primary-container !text-white !shadow-xl !from-landing-on-primary-container !to-landing-on-primary-container hover:!scale-105"
              >
                Próximas Turmas
              </SatinLink>
              <Link
                to="/login"
                className="text-landing-on-primary-container font-bold border-2 border-landing-on-primary-container/20 px-10 py-5 rounded-xl hover:bg-white/10 transition-all shadow-[0_12px_32px_rgba(9,28,52,0.06)]"
              >
                Falar com Consultor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
