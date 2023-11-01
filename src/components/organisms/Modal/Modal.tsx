import { FC } from 'react'
import { createPortal } from 'react-dom'

interface IModalProps {
  onClose: () => void
  children: React.ReactNode
}

export const Modal: FC<IModalProps> = ({ onClose, children }) => {
  const modalRoot = document.getElementById('modal-root')

  if (!modalRoot) {
    return null
  }

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-49">
      <div onClick={onClose} className="fixed inset-0 bg-black opacity-50"></div>
      <div className="d-flex flex-col bg-white z-50 rounded">{children}</div>
    </div>,
    modalRoot
  )
}
