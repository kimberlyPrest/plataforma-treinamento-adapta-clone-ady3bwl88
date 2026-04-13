import { Link } from 'react-router-dom'

export const LandingHero = () => {
  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-sm shadow-slate-900/5 border-none">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto font-headline tracking-tight">
          <div className="text-2xl font-bold tracking-tighter text-slate-900 dark:text-slate-50">
            Letterino
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              className="text-slate-900 dark:text-white font-semibold border-b-2 border-yellow-400 pb-1"
              href="#"
            >
              Courses
            </a>
            <a
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              href="#"
            >
              Workshops
            </a>
            <a
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              href="#"
            >
              Mentoring
            </a>
            <a
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              href="#"
            >
              Agenda
            </a>
            <a
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              href="#"
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
              className="bg-gradient-to-br from-landing-primary to-landing-primary-container text-landing-on-primary-container font-bold px-6 py-2.5 rounded-xl hover:opacity-80 transition-all duration-300 scale-95 active:scale-90"
            >
              Join Class
            </Link>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 z-10">
            <div className="wax-seal mb-6">Manifesto Letterino</div>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight text-landing-on-surface mb-8">
              A COMUNICAÇÃO É A ESSÊNCIA DO{' '}
              <span className="text-landing-primary italic">
                DESENVOLVIMENTO HUMANO
              </span>
            </h1>
            <p className="text-xl text-landing-secondary max-w-xl mb-10 leading-relaxed">
              Letterino Santoro transforma o ato de comunicar em uma jornada de
              maestria e autenticidade. Descubra o poder da palavra no Digital
              Atelier.
            </p>
            <div className="flex gap-4">
              <Link
                to="/signup"
                className="bg-landing-primary text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-landing-primary/20 hover:opacity-90 transition-all"
              >
                Explorar Cursos
              </Link>
              <a
                href="#"
                className="bg-landing-surface-container-highest text-landing-on-surface px-8 py-4 rounded-xl font-bold hover:bg-landing-surface-container-high transition-all"
              >
                Nossa Mentoria
              </a>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-landing-primary-container/30 rounded-full blur-3xl"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                alt="professional man speaking with confidence"
                className="w-full aspect-[4/5] object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-t0Kbb5ETM7A_DODewdGewJao7CJG00klfFONhTb3sc8Az3qy8kR7_Ahnb0nVmt3rNmLObSRGA3xXAONuLSgHrwKVlvBB6ZkPpbTrlqJf2ZB7kNaqM0Wq9UtfEpRnsqHWY--_Z5yMOjz5D47NSWM3NXvZprEafKXt8p3JGgLe78aTuWCquAO8a-Ki-mmy9WZSIt-dDEL2DLZH6Z9chYd91eho3OvewoPiv5IWOtdRRpYkMstpACbfn4aEj51m99c-5w5asWwfH5hd"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-landing-primary rounded-full flex items-center justify-center text-white">
                  <span className="material-symbols-outlined">
                    auto_awesome
                  </span>
                </div>
                <div>
                  <div className="font-headline font-bold text-lg">
                    +15 Anos
                  </div>
                  <div className="text-sm text-landing-secondary">
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
