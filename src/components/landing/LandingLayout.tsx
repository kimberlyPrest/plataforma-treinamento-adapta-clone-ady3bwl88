import { ReactNode } from 'react'
import { LandingHeader } from './LandingHeader'
import { LandingFooter } from './LandingFooter'

export const LandingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-landing-surface font-sans text-landing-on-surface min-h-screen flex flex-col">
      <LandingHeader />
      <main className="flex-grow">{children}</main>
      <LandingFooter />
    </div>
  )
}
