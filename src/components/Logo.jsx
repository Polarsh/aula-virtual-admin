export default function LogoComponent({ size }) {
  return (
    <div>
      <span className='sr-only'>AprendeMed</span>
      <img className={`h-${size} w-auto`} src='/vite.svg' alt='AprendeMed' />
    </div>
  )
}
