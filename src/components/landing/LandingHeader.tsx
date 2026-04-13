import { Link } from 'react-router-dom'

export const LandingHeader = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 dark:bg-slate-900/70 backdrop-blur-[20px] shadow-[0_12px_32px_rgba(9,28,52,0.06)] border-none">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto font-label tracking-tight">
        <Link to="/" className="flex items-center">
          <img
            src="https://www.letterino.com.br/wp-content/uploads/2020/08/logo-letterino.png"
            alt="Letterino"
            className="h-8 md:h-10 object-contain"
          />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link
            className="text-landing-on-surface dark:text-white font-semibold border-b-2 border-landing-primary pb-1"
            to="/#courses"
          >
            Courses
          </Link>
          <Link
            className="text-landing-secondary dark:text-slate-400 hover:text-landing-primary dark:hover:text-white transition-colors"
            to="/workshops"
          >
            Workshops
          </Link>
          <a
            className="text-landing-secondary dark:text-slate-400 hover:text-landing-primary dark:hover:text-white transition-colors"
            href="/#mentoring"
          >
            Mentoring
          </a>
          <a
            className="text-landing-secondary dark:text-slate-400 hover:text-landing-primary dark:hover:text-white transition-colors"
            href="/#agenda"
          >
            Agenda
          </a>
          <a
            className="text-landing-secondary dark:text-slate-400 hover:text-landing-primary dark:hover:text-white transition-colors"
            href="/#about"
          >
            About
          </a>
        </div>
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="text-landing-secondary dark:text-slate-400 hover:text-landing-on-surface font-medium px-4 py-2 transition-all duration-300"
          >
            Log In
          </Link>
          <Link
            to="/signup"
            className="bg-gradient-to-br from-landing-primary to-landing-primary-container text-landing-on-primary-container font-bold px-6 py-2.5 rounded-xl hover:opacity-90 transition-all duration-300 scale-95 active:scale-90"
          >
            Join Class
          </Link>
        </div>
      </div>
    </nav>
  )
}
