import { Sparkles } from 'lucide-react'
import { WaxSeal, SatinLink, SecondaryLink } from './ui/DesignSystem'

export const LandingHero = () => {
  return (
    <>
      <section className="relative pt-32 pb-20 px-8 overflow-hidden bg-landing-surface dark:bg-slate-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 z-10">
            <WaxSeal className="mb-6">Manifesto Letterino</WaxSeal>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight text-landing-on-surface dark:text-white mb-8">
              A COMUNICAÇÃO É A ESSÊNCIA DO{' '}
              <span className="text-landing-primary italic">
                DESENVOLVIMENTO HUMANO
              </span>
            </h1>
            <p className="text-xl text-landing-secondary dark:text-slate-300 max-w-xl mb-10 leading-relaxed">
              Letterino Santoro transforma o ato de comunicar em uma jornada de
              maestria e autenticidade. Descubra o poder da palavra no Digital
              Atelier.
            </p>
            <div className="flex gap-4">
              <SatinLink to="/login">Explorar Cursos</SatinLink>
              <SecondaryLink to="/login">Nossa Mentoria</SecondaryLink>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-landing-primary-container/30 rounded-full blur-3xl"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-[0_12px_32px_rgba(9,28,52,0.06)] transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                alt="professional man speaking with confidence"
                className="w-full aspect-[4/5] object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-t0Kbb5ETM7A_DODewdGewJao7CJG00klfFONhTb3sc8Az3qy8kR7_Ahnb0nVmt3rNmLObSRGA3xXAONuLSgHrwKVlvBB6ZkPpbTrlqJf2ZB7kNaqM0Wq9UtfEpRnsqHWY--_Z5yMOjz5D47NSWM3NXvZprEafKXt8p3JGgLe78aTuWCquAO8a-Ki-mmy9WZSIt-dDEL2DLZH6Z9chYd91eho3OvewoPiv5IWOtdRRpYkMstpACbfn4aEj51m99c-5w5asWwfH5hd"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/70 backdrop-blur-[20px] p-6 rounded-2xl shadow-[0_12px_32px_rgba(9,28,52,0.06)] border border-landing-outline-variant/15 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-landing-primary rounded-full flex items-center justify-center text-white">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-headline font-bold text-lg text-landing-on-surface">
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
