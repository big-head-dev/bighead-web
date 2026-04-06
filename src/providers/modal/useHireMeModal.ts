import { useModalContext } from './context'

export const useHireMeModal = () => {
  const { openModal, closeModal, isModalOpen } = useModalContext()
  return {
    isOpen: isModalOpen('hireMe'),
    open: () => openModal('hireMe'),
    close: () => closeModal('hireMe'),
  }
}
