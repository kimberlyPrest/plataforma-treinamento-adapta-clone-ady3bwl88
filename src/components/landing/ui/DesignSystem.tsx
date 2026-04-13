import { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'

export const WaxSeal = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => (
  <div
    className={cn(
      'bg-landing-primary text-landing-primary-container inline-flex items-center justify-center px-3 py-1 rounded-full font-label font-bold text-xs uppercase tracking-wider',
      className,
    )}
  >
    {children}
  </div>
)

export const SatinButton = ({
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) => (
  <button
    className={cn(
      'bg-gradient-to-br from-landing-primary to-landing-primary-container text-landing-on-primary-container font-bold px-8 py-4 rounded-xl shadow-[0_12px_32px_rgba(9,28,52,0.06)] hover:scale-105 transition-transform duration-300',
      className,
    )}
    {...props}
  >
    {children}
  </button>
)

export const SatinLink = ({
  className,
  children,
  to,
}: {
  className?: string
  children: ReactNode
  to: string
}) => (
  <Link
    to={to}
    className={cn(
      'bg-gradient-to-br from-landing-primary to-landing-primary-container text-landing-on-primary-container font-bold px-8 py-4 rounded-xl shadow-[0_12px_32px_rgba(9,28,52,0.06)] hover:scale-105 transition-transform duration-300 inline-flex items-center justify-center',
      className,
    )}
  >
    {children}
  </Link>
)

export const SecondaryButton = ({
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) => (
  <button
    className={cn(
      'bg-landing-surface-container-highest text-landing-on-surface px-8 py-4 rounded-xl font-bold hover:bg-landing-surface-container-high transition-all',
      className,
    )}
    {...props}
  >
    {children}
  </button>
)

export const SecondaryLink = ({
  className,
  children,
  to,
}: {
  className?: string
  children: ReactNode
  to: string
}) => (
  <Link
    to={to}
    className={cn(
      'bg-landing-surface-container-highest text-landing-on-surface px-8 py-4 rounded-xl font-bold hover:bg-landing-surface-container-high transition-all inline-flex items-center justify-center',
      className,
    )}
  >
    {children}
  </Link>
)

export const TertiaryLink = ({
  className,
  children,
  to,
}: {
  className?: string
  children: ReactNode
  to: string
}) => (
  <Link
    to={to}
    className={cn(
      'text-landing-secondary font-bold border-b-2 border-transparent hover:border-landing-primary transition-all pb-1 inline-flex items-center gap-2',
      className,
    )}
  >
    {children}
  </Link>
)

export const TonalCard = ({
  children,
  className,
  level = 1,
}: {
  children: ReactNode
  className?: string
  level?: 0 | 1 | 2
}) => {
  const levels = {
    0: 'bg-landing-surface',
    1: 'bg-landing-surface-container-low',
    2: 'bg-landing-surface-container-lowest',
  }

  return (
    <div
      className={cn(
        levels[level],
        'p-8 rounded-[2rem] transition-all',
        className,
      )}
    >
      {children}
    </div>
  )
}
