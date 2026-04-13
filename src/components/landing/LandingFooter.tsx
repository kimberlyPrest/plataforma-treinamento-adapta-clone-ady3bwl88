import { Mail, MapPin } from 'lucide-react'

export const LandingFooter = () => {
  return (
    <footer className="w-full py-12 bg-slate-900 dark:bg-black">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-12 font-label text-sm tracking-wide">
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
            className="hover:text-white hover:underline decoration-landing-primary-container underline-offset-4 transition-all duration-300 uppercase"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="hover:text-white hover:underline decoration-landing-primary-container underline-offset-4 transition-all duration-300 uppercase"
            href="#"
          >
            Terms of Service
          </a>
          <a
            className="hover:text-white hover:underline decoration-landing-primary-container underline-offset-4 transition-all duration-300 uppercase"
            href="#"
          >
            Contact
          </a>
          <a
            className="hover:text-white hover:underline decoration-landing-primary-container underline-offset-4 transition-all duration-300 uppercase"
            href="#"
          >
            Instagram
          </a>
          <a
            className="hover:text-white hover:underline decoration-landing-primary-container underline-offset-4 transition-all duration-300 uppercase"
            href="#"
          >
            LinkedIn
          </a>
        </div>
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-landing-primary-container hover:bg-landing-primary-container hover:text-slate-900 transition-all cursor-pointer">
            <Mail className="w-5 h-5" />
          </div>
          <div className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-landing-primary-container hover:bg-landing-primary-container hover:text-slate-900 transition-all cursor-pointer">
            <MapPin className="w-5 h-5" />
          </div>
        </div>
      </div>
    </footer>
  )
}
