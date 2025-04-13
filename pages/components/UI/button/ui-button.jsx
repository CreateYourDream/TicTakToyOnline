import clsx from 'clsx'

/**
 * 
 * @param {{
 * children: any,
 * size: 'md' | 'lg',
 * variant: 'primary' | 'outline',
 * }} props
 */


export function UiButton({className, children, size, variant}) {
  const buttonClassName = clsx(
    'transition-colors ease-in duration-200',
    className,
    {
      md: 'py-2 px-6 rounded leading-[17px]',
      lg: 'w-44 py-2 rounded-lg text-2xl'
    }[size],
    {
      primary: 'bg-teal-600 text-white hover:bg-teal-500',
      outline: 'text-teal-600 border border-teal-600 hover:border-teal-500 hover:bg-teal-100'
    }[variant]
  )
  return (
    <button className={buttonClassName}>{children}</button>
  )
}
