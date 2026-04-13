import { LandingLayout } from '@/components/landing/LandingLayout'
import {
  TonalCard,
  WaxSeal,
  SatinLink,
  TertiaryLink,
} from '@/components/landing/ui/DesignSystem'
import { Calendar, Clock, MapPin, Users } from 'lucide-react'

const WORKSHOPS = [
  {
    id: 1,
    title: 'Comunicação Executiva Avançada',
    date: '15 a 17 de Maio',
    time: '09:00 - 18:00',
    location: 'Digital Atelier, São Paulo (Híbrido)',
    spots: 12,
    description:
      'Um mergulho profundo nas técnicas de retórica para C-levels. Aprenda a estruturar discursos que inspiram confiança e engajam conselhos administrativos.',
    status: 'Vagas Abertas',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBK4ECi_nh4tEa-zd4jncXByu-XlNbiiK33FNr75zddUf3D0qlhDRR3GtFbx1yCtJFGigZLvqylZzbkaR3kUEhtJKKirGlrxPydKbAIXMbBq4EwkqsLooqBYixOMG086Z2sbOSTxAfSVd2YYCB3uSj3AKRH3Htlm46FwZP5n83rKZ1BAZS5TuWd8TEeCkBNwNssko8-pdlnCERmYyng-M5QQMOZEGaFfOBlkO-_8Pdh3GxSwrA5hitA9AI1XxzguZ5iRtRWG2B-FDsC',
  },
  {
    id: 2,
    title: 'A Arte de Persuadir',
    date: '10 de Junho',
    time: '14:00 - 19:00',
    location: 'Online ao Vivo',
    spots: 25,
    description:
      'Oficina prática sobre como utilizar gatilhos emocionais e estruturação lógica para apresentar ideias de forma irrecusável em reuniões de negócios.',
    status: 'Últimas Vagas',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCp9MQEU1akvg-GdPeiZby7qD6Z5cQOQfXXUlIkmYLk9IkJ6W20VFKIMo-_epm80-75Jctf5ntyAqxQhikB1gWqID0DysEVHFdXw1qkp4D20DYc71ZHq4zP4JWxRtITwPliLhf1aH4ofAOHRU6tqF3HQW4_eps9nnB895NyXaayRHD3iRfONSECWKXXvfO4jQtDujmTvkngayP8Qa93f9rRqjmvNE_rxX4d3UfK02VTCitQeXYW-fWG3BDbqWSH2Jc_7AEUl8R2zGPG',
  },
  {
    id: 3,
    title: 'Escrita Criativa para Líderes',
    date: '05 de Julho',
    time: '09:00 - 13:00',
    location: 'Online ao Vivo',
    spots: 30,
    description:
      'Transforme memorandos e comunicados internos em peças de liderança. Como escrever com a mesma clareza e emoção de quem fala com o coração.',
    status: 'Lista de Espera',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBBxcnu2nWf6AU_NJkHFTKGv_FbhGGXSXgoRYIyxcMTtk_moyHW22CGX9Jb1xCltMsmbEImRIf7Ohpul-e1o0A92m4s4Ak1BSP-F4Un7qp-IhGXHfO4A_SYbsbLIDHGq8QuHHfpzOV7AhzTCwRXFRbnToRxSiTiqmVDxDrmD86xEExuWjsFZ2d9S0Up6I8jZt2aoQGPPcHaTzQrIr2W9ifxvuJ5t_yuEh-iiYL5fLD39BzYpTMmu7hyi2TP2j2aK9eCfv1F6N2ORP5y',
  },
]

const Workshops = () => {
  return (
    <LandingLayout>
      <div className="bg-landing-surface min-h-screen">
        {/* Header/Hero for Workshops */}
        <section className="pt-32 pb-16 px-8 relative">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <WaxSeal className="mb-6">Agenda Oficial</WaxSeal>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-landing-on-surface mb-6 tracking-tight">
              A Arte em{' '}
              <span className="text-landing-primary italic">Prática</span>.
            </h1>
            <p className="text-xl text-landing-secondary max-w-2xl mx-auto leading-relaxed">
              Imersões presenciais e experiências digitais ao vivo para quem
              deseja elevar sua comunicação ao patamar da excelência editorial.
            </p>
          </div>
        </section>

        {/* List of Workshops using Tonal Layering */}
        <section className="pb-32 px-8">
          <div className="max-w-5xl mx-auto space-y-8">
            {WORKSHOPS.map((workshop) => (
              <TonalCard
                key={workshop.id}
                level={2}
                className="group relative border border-landing-outline-variant/15 shadow-[0_12px_32px_rgba(9,28,52,0.06)] overflow-hidden flex flex-col md:flex-row gap-8 items-start md:items-center hover:bg-landing-surface-container-high transition-colors duration-500"
              >
                {/* No dividers. Using whitespace and hover effects for separation as per spec */}
                <div className="w-full md:w-72 aspect-[4/3] rounded-xl overflow-hidden shrink-0 shadow-[0_12px_32px_rgba(9,28,52,0.06)]">
                  <img
                    src={workshop.image}
                    alt={workshop.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="flex-grow flex flex-col justify-between w-full">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <WaxSeal className="!bg-landing-surface-container !text-landing-on-surface-variant group-hover:!bg-white">
                      {workshop.status}
                    </WaxSeal>
                    <div className="flex items-center gap-4 text-sm font-medium text-landing-secondary">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" /> {workshop.date}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" /> {workshop.time}
                      </div>
                    </div>
                  </div>

                  <h2 className="font-headline text-3xl font-bold text-landing-on-surface mb-3 tracking-tight">
                    {workshop.title}
                  </h2>

                  <p className="text-landing-secondary leading-relaxed mb-6 max-w-2xl">
                    {workshop.description}
                  </p>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-4 mt-auto">
                    <div className="flex flex-col gap-2 text-sm text-landing-secondary">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-landing-primary" />{' '}
                        {workshop.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-landing-primary" />{' '}
                        Turmas reduzidas: {workshop.spots} vagas
                      </div>
                    </div>

                    <SatinLink
                      to={`/signup?workshop=${workshop.id}`}
                      className="w-full sm:w-auto px-6 py-3 text-sm"
                    >
                      Reservar Vaga
                    </SatinLink>
                  </div>
                </div>
              </TonalCard>
            ))}
          </div>
        </section>

        {/* Private Mentoring Teaser */}
        <section className="py-20 px-8 bg-landing-surface-container-low border-t border-landing-outline-variant/15">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-headline text-3xl font-bold text-landing-on-surface mb-6">
              Busca um acompanhamento exclusivo?
            </h2>
            <p className="text-lg text-landing-secondary mb-10 leading-relaxed">
              O Digital Atelier também oferece sessões de mentoria 1:1, focadas
              na sua marca pessoal e desafios específicos de oratória executiva.
            </p>
            <TertiaryLink to="/mentoring">
              Explorar Mentoria Individual
            </TertiaryLink>
          </div>
        </section>
      </div>
    </LandingLayout>
  )
}

export default Workshops
