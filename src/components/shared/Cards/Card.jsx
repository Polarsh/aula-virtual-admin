export default function CardComponent({ children, className = 'bg-white' }) {
  return (
    <div
      className={`overflow-hidden ${className} shadow sm:rounded-lg px-4 py-5 sm:p-6`}>
      {children}
    </div>
  )
}
