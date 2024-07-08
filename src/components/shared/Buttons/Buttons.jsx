const ButtonStyle = {
  Fill: 'fill',
  Outline: 'outline',
  Text: 'text',
  Cancel: 'cancel',
  Submit: 'submit'
}

export default function CustomButton({
  onClick,
  label,
  disabled = false,
  icon: Icon,
  variant = ButtonStyle.Fill
}) {
  const baseStyles =
    'flex items-center disabled:cursor-not-allowed rounded-md px-2.5 py-1.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
  const variants = {
    [ButtonStyle.Fill]:
      'bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600',
    [ButtonStyle.Outline]:
      'bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-50 focus-visible:outline-indigo-600',
    [ButtonStyle.Text]:
      'text-indigo-600 hover:bg-indigo-50 focus-visible:outline-indigo-600',
    [ButtonStyle.Cancel]:
      'bg-red-600 text-white hover:bg-red-500 focus-visible:outline-red-600',
    [ButtonStyle.Submit]:
      'bg-blue-700 text-white hover:bg-blue-600 focus-visible:outline-blue-700'
  }

  return (
    <button
      onClick={onClick}
      type='button'
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]}`}>
      {Icon && <Icon className='h-5 w-5 mr-2' aria-hidden='true' />}
      {label}
    </button>
  )
}

export { ButtonStyle }
