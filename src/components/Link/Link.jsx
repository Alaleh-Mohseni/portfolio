function Link({
  href,
  children,
  className = '',
  variant = 'default',
  external = false,
  ...props
}) {
  const isExternal = external || href?.startsWith('http')
  const baseStyles = 'transition-all duration-300 ease-in-out cursor-pointer'

  const variants = {
    none: '',
    default: 'hover:opacity-70',
    accent: 'text-[var(--accent)] hover:opacity-80 font-medium',
    muted: 'text-[var(--muted-foreground)] hover:text-[var(--foreground)]',
    underline: 'text-[var(--accent)] hover:underline font-medium',
  }

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.default} ${className}`

  return (
    <a
      href={href}
      className={combinedClasses}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...props}
    >
      {children}
    </a>
  )
}

export default Link
