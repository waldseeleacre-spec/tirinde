interface CTAButtonProps {
  label: string
  microcopy: string
  href?: string
  size?: 'md' | 'lg'
}

export function CTAButton({ label, microcopy, href = '#offer', size = 'lg' }: CTAButtonProps) {
  const paddingClass = size === 'lg' ? 'px-8 py-4' : 'px-6 py-3'
  const textClass = size === 'lg' ? 'text-base sm:text-lg' : 'text-sm sm:text-base'

  return (
    <div className="flex flex-col items-center gap-3">
      <a
        href={href}
        className={[
          'inline-block w-full max-w-sm sm:max-w-md text-center',
          paddingClass,
          'rounded-full font-semibold tracking-wide transition-all duration-200',
          textClass,
          'shadow-lg hover:shadow-xl active:scale-[0.98]',
        ].join(' ')}
        style={{
          background: 'linear-gradient(135deg, #C8955F 0%, #a0733d 100%)',
          color: '#1C3830',
          fontFamily: 'Cinzel, serif',
          letterSpacing: '0.05em',
        }}
      >
        {label}
      </a>
      <p
        className="text-xs sm:text-sm text-center opacity-60 tracking-wide"
        style={{ fontFamily: 'Inter, sans-serif', color: '#E8E0C9' }}
      >
        {microcopy}
      </p>
    </div>
  )
}
