import { createContext, useContext } from 'react'

interface ModalContextValue {
  openModal: (id: string) => void
  closeModal: (id: string) => void
  isModalOpen: (id: string) => boolean
}

const ModalContext = createContext<ModalContextValue | undefined>(undefined)

export const useModalContext = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModalContext must be used within a ModalProvider')
  }
  return context
}

export { ModalContext }
