import {
  XCircleIcon,
  CheckCircleIcon,
  ExclamationCircleIcon
} from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react'
import { useApp } from '../../context/AppContext'

export default function AlertComponent({ type, title, content }) {
  const [isVisible, setIsVisible] = useState(true)

  const { setAlertMessage } = useApp()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setAlertMessage()
    }, 5000) // 5000 milisegundos = 5 segundos

    return () => clearTimeout(timer)
  }, [])

  const alertStyles = {
    success: {
      bgColor: 'bg-green-100',
      titleTextColor: 'text-green-800',
      contentTextColor: 'text-green-700',
      iconColor: 'text-green-600',
      Icon: CheckCircleIcon
    },
    error: {
      bgColor: 'bg-red-100',
      titleTextColor: 'text-red-800',
      contentTextColor: 'text-red-700',
      iconColor: 'text-red-600',
      Icon: XCircleIcon
    },
    warning: {
      bgColor: 'bg-yellow-100',
      titleTextColor: 'text-yellow-800',
      contentTextColor: 'text-yellow-700',
      iconColor: 'text-yellow-600',
      Icon: ExclamationCircleIcon
    }
  }

  const { bgColor, titleTextColor, contentTextColor, iconColor, Icon } =
    alertStyles[type] || alertStyles.error

  return (
    <>
      {isVisible && (
        <div
          className={`absolute top-14 right-0 m-4 rounded-md p-4 z-50 ${bgColor}`}>
          <div className='flex'>
            <div className='flex-shrink-0'>
              <Icon className={`h-6 w-6 ${iconColor}`} aria-hidden='true' />
            </div>
            <div className='ml-3'>
              <h3 className={`text-sm font-bold ${titleTextColor}`}>{title}</h3>
              <div className={`mt-2 text-sm ${contentTextColor}`}>
                <p>{content}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
