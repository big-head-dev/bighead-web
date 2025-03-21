import { createContext, ReactNode, useContext, useState } from 'react'

interface ModalContextProps {
  isHireMeOpen: boolean
  openHireMe: () => void
  closeHireMe: () => void
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined)

type Props = {
  children: ReactNode
}
export const ModalProvider = ({ children }: Props) => {
  const [isHireMeOpen, setHireMeOpen] = useState(false)

  const openHireMe = () => setHireMeOpen(true)
  const closeHireMe = () => setHireMeOpen(false)

  return (
    <ModalContext.Provider value={{ isHireMeOpen, openHireMe, closeHireMe }}>
      {children}
    </ModalContext.Provider>
  )
}

const useModalContext = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModalContext must be used within a ModalProvider')
  }
  return context
}

export const useHireMeModalContext = () => {
  const { isHireMeOpen, openHireMe, closeHireMe } = useModalContext()
  return { isHireMeOpen, openHireMe, closeHireMe }
}
