import { Link } from 'react-router-dom'
import { Sparkles } from 'lucide-react'

export const LandingHero = () => {
  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-sm shadow-slate-900/5 border-none">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto font-['Plus_Jakarta_Sans'] tracking-tight">
          <Link to="/" className="flex items-center">
            <img
              src="https://www.letterino.com.br/wp-content/uploads/2020/08/logo-letterino.png"
              alt="Letterino"
              className="h-8 md:h-10 object-contain"
            />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a
              className="text-slate-900 dark:text-white font-semibold border-b-2 border-[#ddc82e] pb-1"
              href="#courses"
            >
              Courses
            </a>
            <a
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              href="#workshops"
            >
              Workshops
            </a>
            <a
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              href="#mentoring"
            >
              Mentoring
            </a>
            <a
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              href="#agenda"
            >
              Agenda
            </a>
            <a
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              href="#about"
            >
              About
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 font-medium px-4 py-2 transition-all duration-300"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="bg-gradient-to-br from-[#6b5f00] to-[#ffe84e] text-[#746700] font-bold px-6 py-2.5 rounded-xl hover:opacity-80 transition-all duration-300 scale-95 active:scale-90"
            >
              Join Class
            </Link>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 px-8 overflow-hidden bg-[#f9f9ff] dark:bg-slate-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 z-10">
            <div className="bg-[#6b5f00] text-[#ffe84e] inline-flex items-center justify-center px-3 py-1 rounded-full font-['Plus_Jakarta_Sans'] font-bold text-xs uppercase tracking-wider mb-6">
              Manifesto Letterino
            </div>
            <h1 className="font-['Plus_Jakarta_Sans'] text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight text-[#091c34] dark:text-white mb-8">
              A COMUNICAÇÃO É A ESSÊNCIA DO{' '}
              <span className="text-[#6b5f00] italic">
                DESENVOLVIMENTO HUMANO
              </span>
            </h1>
            <p className="text-xl text-[#4e5f7b] dark:text-slate-300 max-w-xl mb-10 leading-relaxed">
              Letterino Santoro transforma o ato de comunicar em uma jornada de
              maestria e autenticidade. Descubra o poder da palavra no Digital
              Atelier.
            </p>
            <div className="flex gap-4">
              <Link
                to="/login"
                className="bg-[#6b5f00] text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-primary/20 hover:opacity-90 transition-all"
              >
                Explorar Cursos
              </Link>
              <Link
                to="/login"
                className="bg-[#d5e3ff] dark:bg-slate-800 text-[#091c34] dark:text-white px-8 py-4 rounded-xl font-bold hover:bg-[#dee8ff] dark:hover:bg-slate-700 transition-all"
              >
                Nossa Mentoria
              </Link>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#ffe84e]/30 rounded-full blur-3xl"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                alt="professional man speaking with confidence"
                className="w-full aspect-[4/5] object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-t0Kbb5ETM7A_DODewdGewJao7CJG00klfFONhTb3sc8Az3qy8kR7_Ahnb0nVmt3rNmLObSRGA3xXAONuLSgHrwKVlvBB6ZkPpbTrlqJf2ZB7kNaqM0Wq9UtfEpRnsqHWY--_Z5yMOjz5D47NSWM3NXvZprEafKXt8p3JGgLe78aTuWCquAO8a-Ki-mmy9WZSIt-dDEL2DLZH6Z9chYd91eho3OvewoPiv5IWOtdRRpYkMstpACbfn4aEj51m99c-5w5asWwfH5hd"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#6b5f00] rounded-full flex items-center justify-center text-white">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-['Plus_Jakarta_Sans'] font-bold text-lg text-slate-900">
                    +15 Anos
                  </div>
                  <div className="text-sm text-[#4e5f7b]">
                    Lapidando Talentos
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
