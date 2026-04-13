import { Link } from 'react-router-dom'
import { Verified, Mail, MapPin, Quote } from 'lucide-react'

export const LandingExpertise = () => {
  return (
    <>
      <section className="py-24 px-8 overflow-hidden bg-[#f9f9ff] dark:bg-slate-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="aspect-square rounded-3xl bg-[#f0f3ff] dark:bg-slate-900 p-4 flex flex-col justify-end">
              <div className="text-4xl font-['Plus_Jakarta_Sans'] font-black text-[#6b5f00] mb-2">
                20k+
              </div>
              <div className="text-sm font-bold uppercase tracking-widest text-[#091c34] dark:text-slate-400">
                Alunos
              </div>
            </div>
            <div className="aspect-square rounded-3xl overflow-hidden mt-8 shadow-xl">
              <img
                alt="atelier details"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBxcnu2nWf6AU_NJkHFTKGv_FbhGGXSXgoRYIyxcMTtk_moyHW22CGX9Jb1xCltMsmbEImRIf7Ohpul-e1o0A92m4s4Ak1BSP-F4Un7qp-IhGXHfO4A_SYbsbLIDHGq8QuHHfpzOV7AhzTCwRXFRbnToRxSiTiqmVDxDrmD86xEExuWjsFZ2d9S0Up6I8jZt2aoQGPPcHaTzQrIr2W9ifxvuJ5t_yuEh-iiYL5fLD39BzYpTMmu7hyi2TP2j2aK9eCfv1F6N2ORP5y"
              />
            </div>
            <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
              <img
                alt="modern office"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCp9MQEU1akvg-GdPeiZby7qD6Z5cQOQfXXUlIkmYLk9IkJ6W20VFKIMo-_epm80-75Jctf5ntyAqxQhikB1gWqID0DysEVHFdXw1qkp4D20DYc71ZHq4zP4JWxRtITwPliLhf1aH4ofAOHRU6tqF3HQW4_eps9nnB895NyXaayRHD3iRfONSECWKXXvfO4jQtDujmTvkngayP8Qa93f9rRqjmvNE_rxX4d3UfK02VTCitQeXYW-fWG3BDbqWSH2Jc_7AEUl8R2zGPG"
              />
            </div>
            <div className="aspect-square rounded-3xl bg-[#4e5f7b] p-8 flex flex-col justify-between -mt-8">
              <Quote className="text-white w-10 h-10" />
              <p className="text-white text-sm font-medium leading-relaxed">
                Tradição italiana aliada à inovação digital brasileira.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="font-['Plus_Jakarta_Sans'] text-4xl md:text-5xl font-bold mb-8 text-[#091c34] dark:text-white">
              O Mestre por trás da{' '}
              <span className="text-[#6b5f00] italic">Arte</span>.
            </h2>
            <p className="text-lg text-[#4e5f7b] dark:text-slate-300 mb-6 leading-relaxed">
              Letterino Santoro não apenas ensina a falar; ele lapida a essência
              da expressão. Com uma trajetória marcada pela excelência,
              transformou a comunicação de centenas de executivos e corporações
              globais.
            </p>
            <p className="text-[#4e5f7b] dark:text-slate-300 mb-10 leading-relaxed">
              Sua metodologia exclusiva une técnicas clássicas de retórica com
              as necessidades dinâmicas do mundo contemporâneo, focando sempre
              na clareza, persuasão e conexão humana real.
            </p>
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4">
                <Verified className="text-[#6b5f00] w-6 h-6" />
                <span className="font-bold text-[#091c34] dark:text-white">
                  Especialista em Media Training
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Verified className="text-[#6b5f00] w-6 h-6" />
                <span className="font-bold text-[#091c34] dark:text-white">
                  Consultor Estratégico de Marcas Pessoais
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-8 bg-[#f9f9ff] dark:bg-slate-900">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-bold mb-4 text-[#091c34] dark:text-white">
            Vozes de quem viveu a experiência
          </h2>
          <div className="w-24 h-1 bg-[#6b5f00] mx-auto rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 relative">
            <Quote className="text-[#ffe84e] w-16 h-16 absolute top-4 right-4 opacity-30" />
            <p className="text-[#4e5f7b] dark:text-slate-300 mb-8 italic leading-relaxed">
              "O treinamento com o Letterino mudou completamente minha forma de
              encarar apresentações de diretoria. Hoje minha fala é muito mais
              estratégica e confiante."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700"></div>
              <div>
                <div className="font-bold text-sm text-[#091c34] dark:text-white">
                  Ricardo Mendes
                </div>
                <div className="text-xs text-[#4e5f7b] dark:text-slate-400">
                  Diretor Executivo | TechSolutions
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 relative mt-4 md:-mt-4">
            <Quote className="text-[#ffe84e] w-16 h-16 absolute top-4 right-4 opacity-30" />
            <p className="text-[#4e5f7b] dark:text-slate-300 mb-8 italic leading-relaxed">
              "Metodologia impecável. Consegui desbloquear travas de comunicação
              que me acompanhavam há anos em apenas poucas sessões de mentoria."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700"></div>
              <div>
                <div className="font-bold text-sm text-[#091c34] dark:text-white">
                  Ana Paula Costa
                </div>
                <div className="text-xs text-[#4e5f7b] dark:text-slate-400">
                  Fundadora | AP Mentoring
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 relative">
            <Quote className="text-[#ffe84e] w-16 h-16 absolute top-4 right-4 opacity-30" />
            <p className="text-[#4e5f7b] dark:text-slate-300 mb-8 italic leading-relaxed">
              "A melhor decisão para nossa equipe de vendas. A comunicação
              assertiva impactou diretamente nos nossos resultados de conversão
              este trimestre."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700"></div>
              <div>
                <div className="font-bold text-sm text-[#091c34] dark:text-white">
                  Felipe Rocha
                </div>
                <div className="text-xs text-[#4e5f7b] dark:text-slate-400">
                  VP de Vendas | Global Retail
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 bg-[#f9f9ff] dark:bg-slate-900">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#6b5f00] to-[#ffe84e] p-12 md:p-20 rounded-[3rem] text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-['Plus_Jakarta_Sans'] text-4xl md:text-5xl font-extrabold text-[#746700] mb-6">
              Pronto para elevar sua comunicação?
            </h2>
            <p className="text-[#746700]/80 text-xl mb-12 max-w-2xl mx-auto font-medium">
              As vagas para o próximo workshop "A Arte de Persuadir" estão
              abertas. Reserve seu lugar no Digital Atelier.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Link
                to="/login"
                className="bg-[#746700] text-[#ffe84e] px-10 py-5 rounded-2xl font-black text-lg shadow-xl hover:scale-105 transition-transform"
              >
                Próximas Turmas
              </Link>
              <Link
                to="/login"
                className="text-[#746700] font-bold border-2 border-[#746700]/20 px-10 py-5 rounded-2xl hover:bg-white/10 transition-all"
              >
                Falar com Consultor
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full py-12 bg-slate-900 dark:bg-black">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-12 font-['Plus_Jakarta_Sans'] text-sm tracking-wide">
          <div className="flex flex-col gap-4 items-center md:items-start">
            <img
              src="https://www.letterino.com.br/wp-content/uploads/2020/08/logo-letterino.png"
              alt="Letterino"
              className="h-8 md:h-10 object-contain"
            />
            <p className="text-slate-400 max-w-xs text-center md:text-left">
              © 2024 Letterino Santoro. The Digital Atelier.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-slate-400">
            <a
              className="hover:text-white hover:underline decoration-[#ddc82e] underline-offset-4 transition-all duration-300 uppercase"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="hover:text-white hover:underline decoration-[#ddc82e] underline-offset-4 transition-all duration-300 uppercase"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="hover:text-white hover:underline decoration-[#ddc82e] underline-offset-4 transition-all duration-300 uppercase"
              href="#"
            >
              Contact
            </a>
            <a
              className="hover:text-white hover:underline decoration-[#ddc82e] underline-offset-4 transition-all duration-300 uppercase"
              href="#"
            >
              Instagram
            </a>
            <a
              className="hover:text-white hover:underline decoration-[#ddc82e] underline-offset-4 transition-all duration-300 uppercase"
              href="#"
            >
              LinkedIn
            </a>
          </div>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-[#ddc82e] hover:bg-[#ddc82e] hover:text-slate-900 transition-all cursor-pointer">
              <Mail className="w-5 h-5" />
            </div>
            <div className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-[#ddc82e] hover:bg-[#ddc82e] hover:text-slate-900 transition-all cursor-pointer">
              <MapPin className="w-5 h-5" />
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
