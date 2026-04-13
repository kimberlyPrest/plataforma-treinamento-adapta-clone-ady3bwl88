import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/use-auth'
import { LandingLayout } from '@/components/landing/LandingLayout'
import { LandingHero } from '@/components/landing/LandingHero'
import { LandingServices } from '@/components/landing/LandingServices'
import { LandingExpertise } from '@/components/landing/LandingExpertise'

const Landing = () => {
  const { user, loading } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!loading && user) {
      navigate('/dashboard')
    }
  }, [user, loading, navigate])

  if (loading || user) {
    return (
      <div className="min-h-screen bg-landing-surface flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-landing-primary"></div>
      </div>
    )
  }

  return (
    <LandingLayout>
      <LandingHero />
      <LandingServices />
      <LandingExpertise />
    </LandingLayout>
  )
}

export default Landing
