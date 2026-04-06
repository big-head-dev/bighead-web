import { ReactNode, useCallback, useState } from 'react'
import { ModalContext } from './context'

type Props = { children: ReactNode }
export const ModalProvider = ({ children }: Props) => {
  const [openModals, setOpenModals] = useState<Set<string>>(new Set())

  const openModal = useCallback((modalKey: string) => {
    setOpenModals((prev) => new Set(prev).add(modalKey))
  }, [])

  const closeModal = useCallback((modalKey: string) => {
    setOpenModals((prev) => {
      const next = new Set(prev)
      next.delete(modalKey)
      return next
    })
  }, [])

  const isModalOpen = useCallback((modalKey: string) => openModals.has(modalKey), [openModals])

  return (
    <ModalContext.Provider value={{ openModal, closeModal, isModalOpen }}>
      {children}
    </ModalContext.Provider>
  )
}
