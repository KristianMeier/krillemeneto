import clsx from 'clsx'

export const Bounded = ({
  as: Comp = 'div',
  size = 'base',
  className,
  children,
}) => {
  return (
    <Comp className={clsx('bounded-padding', className)}>
      <div
        className={clsx(
          'bounded-full-width-center',
          size === 'small' && 'bounded-small',
          size === 'base' && 'bounded-base',
          size === 'wide' && 'bounded-wide',
          size === 'widest' && 'bounded-widest'
        )}
      >
        {children}
      </div>
    </Comp>
  )
}
