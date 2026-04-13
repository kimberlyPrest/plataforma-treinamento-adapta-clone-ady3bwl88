import { useState } from 'react'
import { supabase } from '@/lib/supabase/client'
import { LandingHeader } from '@/components/landing/LandingHeader'
import { LandingFooter } from '@/components/landing/LandingFooter'
import {
  WaxSeal,
  SatinLink,
  SecondaryLink,
  TonalCard,
} from '@/components/landing/ui/DesignSystem'
import {
  ArrowRight,
  UserCheck,
  Target,
  Presentation,
  Loader2,
} from 'lucide-react'
import { useToast } from '@/components/ui/use-toast'

export default function Mentoring() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    const formData = new FormData(e.currentTarget)

    const payload = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string,
      role: formData.get('role') as string,
    }

    const { error } = await supabase
      .from('mentoring_leads' as any)
      .insert(payload)

    setIsSubmitting(false)
    if (error) {
      toast({
        title: 'Erro ao enviar',
        description: 'Tente novamente.',
        variant: 'destructive',
      })
    } else {
      setIsSuccess(true)
    }
  }

  return (
    <div className="bg-landing-surface font-body text-landing-on-surface min-h-screen selection:bg-landing-primary selection:text-landing-primary-container">
      <LandingHeader />
      <main className="pt-32 pb-20">
        <section className="px-8 mb-24 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 z-10">
            <WaxSeal className="mb-6">Mentoring Executivo</WaxSeal>
            <h1 className="font-label text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight mb-8">
              LIDERANÇA PELA{' '}
              <span className="text-landing-primary italic">COMUNICAÇÃO</span>
            </h1>
            <p className="text-xl text-landing-secondary max-w-xl mb-10 leading-relaxed">
              Acompanhamento individualizado de alta performance. Lapide sua
              oratória, reforce sua autoridade e transforme sua presença
              executiva.
            </p>
            <div className="flex gap-4">
              <SatinLink to="#apply">Aplicar para Mentoria</SatinLink>
              <SecondaryLink to="#methodology">A Metodologia</SecondaryLink>
            </div>
          </div>
          <div className="flex-1 relative rounded-[2rem] overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <img
              src="https://img.usecurling.com/p/800/1000?q=executive%20meeting"
              alt="Mentoring"
              className="w-full aspect-[4/5] object-cover"
            />
          </div>
        </section>

        <section
          id="methodology"
          className="py-24 px-8 bg-landing-surface-container-low"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-label text-4xl md:text-5xl font-bold mb-6">
                Para quem é a Mentoria?
              </h2>
              <p className="text-landing-secondary max-w-2xl mx-auto text-lg">
                Desenvolvido para líderes e C-levels que precisam que sua voz
                tenha o mesmo peso de suas decisões.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <TonalCard level={2} className="hover:-translate-y-2">
                <div className="w-14 h-14 bg-landing-primary-container/50 rounded-2xl flex items-center justify-center mb-6">
                  <UserCheck className="text-landing-primary w-7 h-7" />
                </div>
                <h3 className="font-label text-2xl font-bold mb-4">
                  Executivos e C-Levels
                </h3>
                <p className="text-landing-secondary">
                  Prepare-se para apresentações de diretoria e discursos de alto
                  impacto com confiança inabalável.
                </p>
              </TonalCard>
              <TonalCard level={2} className="hover:-translate-y-2">
                <div className="w-14 h-14 bg-landing-surface-container rounded-2xl flex items-center justify-center mb-6">
                  <Target className="text-landing-on-surface w-7 h-7" />
                </div>
                <h3 className="font-label text-2xl font-bold mb-4">
                  Empreendedores
                </h3>
                <p className="text-landing-secondary">
                  Traduza a visão do seu negócio em discursos que engajam
                  investidores, sócios e sua equipe direta.
                </p>
              </TonalCard>
              <TonalCard level={2} className="hover:-translate-y-2">
                <div className="w-14 h-14 bg-landing-surface-container-highest rounded-2xl flex items-center justify-center mb-6">
                  <Presentation className="text-landing-on-surface w-7 h-7" />
                </div>
                <h3 className="font-label text-2xl font-bold mb-4">
                  Porta-Vozes
                </h3>
                <p className="text-landing-secondary">
                  Mídia training avançado para quem representa grandes marcas
                  frente à imprensa e formadores de opinião.
                </p>
              </TonalCard>
            </div>
          </div>
        </section>

        <section id="apply" className="py-20 px-8 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-landing-primary to-landing-primary-container p-10 md:p-16 rounded-[3rem] shadow-2xl flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 text-left">
              <WaxSeal className="bg-white text-landing-primary mb-6 shadow-sm">
                Vagas Limitadas
              </WaxSeal>
              <h2 className="font-label text-4xl md:text-5xl font-extrabold text-landing-on-primary-container mb-6">
                Pronto para o próximo nível?
              </h2>
              <p className="text-landing-on-primary-container/90 text-lg font-medium">
                A Mentoria Executive é exclusiva e sujeita a avaliação de
                perfil. Envie sua aplicação e nossa equipe entrará em contato.
              </p>
            </div>
            <div className="flex-1 w-full">
              {isSuccess ? (
                <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl text-center shadow-lg border border-white/20">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <UserCheck className="text-green-600 w-8 h-8" />
                  </div>
                  <h3 className="font-label text-2xl font-bold mb-2">
                    Aplicação Recebida
                  </h3>
                  <p className="text-landing-secondary">
                    Nossa equipe fará a curadoria e entrará em contato em breve.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-white/20 flex flex-col gap-4"
                >
                  <GhostInput
                    name="name"
                    label="Nome Completo"
                    placeholder="Seu nome"
                    type="text"
                  />
                  <GhostInput
                    name="email"
                    label="E-mail Profissional"
                    placeholder="seu@email.com"
                    type="email"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <GhostInput
                      name="company"
                      label="Empresa"
                      placeholder="Nome da empresa"
                      type="text"
                    />
                    <GhostInput
                      name="role"
                      label="Cargo"
                      placeholder="Seu cargo"
                      type="text"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-4 bg-landing-on-surface text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" /> Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Aplicação <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <LandingFooter />
    </div>
  )
}

function GhostInput({
  name,
  label,
  placeholder,
  type,
}: {
  name: string
  label: string
  placeholder: string
  type: string
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-bold text-landing-on-surface mb-1"
      >
        {label}
      </label>
      <input
        required
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className="w-full bg-landing-surface-container-low border-b-2 border-landing-on-surface/10 focus:border-landing-primary px-4 py-3 rounded-t-xl outline-none transition-colors"
      />
    </div>
  )
}
