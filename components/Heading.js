import clsx from 'clsx'

export const Heading = ({
  as: Comp = 'h1',
  size = '4xl',
  children,
  className,
}) => {
  return (
    <Comp
      className={clsx(
        'heading',
        size === '4xl' && 'heading-4xl',
        size === '3xl' && 'heading-3xl',
        size === '2xl' && 'heading-2x',
        size === 'xl' && 'heading-xl',
        className
      )}
    >
      {children}
    </Comp>
  )
}

// font-sans font-semibold tracking-tighter text-slate-800
