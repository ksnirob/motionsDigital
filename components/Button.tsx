import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'default' | 'large'
}

export default function Button({
  children,
  variant = 'primary',
  size = 'default',
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-full relative overflow-hidden group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent-500 focus-visible:ring-offset-[var(--bg-primary)]'

  const variantStyles: Record<ButtonProps['variant'], string> = {
    primary:
      'bg-black text-white shadow-[0_18px_35px_rgba(15,23,42,0.3)] hover:shadow-[0_24px_45px_rgba(15,23,42,0.35)]',
    secondary:
      'bg-white text-black border border-slate-200 hover:border-black/30 hover:bg-black/5',
    ghost: 'bg-transparent text-black border border-transparent hover:border-black/20 hover:bg-black/5',
  }

  const sizeStyles = {
    default: 'px-7 py-3 text-sm tracking-wide',
    large: 'px-10 py-4 text-base tracking-wide',
  }

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`} {...props}>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <span className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-white/40 blur-xl" />
    </button>
  )
}

