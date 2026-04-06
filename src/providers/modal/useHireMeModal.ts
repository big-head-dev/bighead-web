import { useModalContext } from './context'

export const useHireMeModal = () => {
  const { openModal, closeModal, isModalOpen } = useModalContext()
  return {
    isHireMeOpen: isModalOpen('hireMe'),
    openHireMe: () => openModal('hireMe'),
    closeHireMe: () => closeModal('hireMe'),
  }
}
