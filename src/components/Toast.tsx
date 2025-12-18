import React, { useEffect } from 'react'

interface ToastProps {
  open: boolean
  onClose?: () => void
  duration?: number
  children?: React.ReactNode
}

const Toast: React.FC<ToastProps> = ({ open, onClose, duration = 2500, children }) => {
  useEffect(() => {
    if (!open) return
    const t = setTimeout(() => onClose && onClose(), duration)
    return () => clearTimeout(t)
  }, [open, duration, onClose])

  if (!open) return null

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed left-1/2 bottom-8 z-50 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-2 rounded-md shadow-md text-sm"
    >
      {children}
    </div>
  )
}

export default Toast
