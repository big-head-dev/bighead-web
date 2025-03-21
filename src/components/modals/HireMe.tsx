import { useHireMeModalContext } from '../../providers/ModalProvider'
import { cn } from '../../utils/cn'
import astroImg from '/astro-looking-forward.webp'
import closexImg from '/close-x.svg'

type Props = {}
export const HireMe = ({}: Props) => {
  const { isHireMeOpen, closeHireMe } = useHireMeModalContext()
  if (!isHireMeOpen) return null

  const contactUs = (e: React.MouseEvent) => {
    e.preventDefault()
    const parts = ['mai', 'lto:', 'cont', 'act', String.fromCharCode(64), 'big', 'head.', 'dev']
    window.location.href = `${parts.join('')}`
  }

  return (
    <div
      className={cn('fixed inset-0 bg-black/80 flex justify-center items-center z-100')}
      onClick={closeHireMe}>
      <div
        className="relative bg-bh-lgray text-black rounded-sm shadow-lg w-xs md:w-lg p-5 flex flex-col md:flex-row items-center z-101 "
        onClick={(e) => e.stopPropagation()}>
        <div>
          <span className="text-bh-red text-xl font-bold">Let's talk!</span>
          <p>Scan or tap the QR code to send an email. Thank you for your interest!</p>
        </div>
        <div className="flex flex-col items-center">
          <svg
            onClick={contactUs}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 27 27"
            className="size-30 rounded border-2 border-bh-lblue cursor-pointer">
            <rect width="100%" height="100%" fill="#ffffff00" />
            <path d="M1 1h1v1H1zm1 0h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm2 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm5 0h1v1h-1zm2 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM1 2h1v1H1zm6 0h1v1H7zm3 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm6 0h1v1h-1zM1 3h1v1H1zm2 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm2 0h1v1H7zm3 0h1v1h-1zm3 0h1v1h-1zm2 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm2 0h1v1h-1zM1 4h1v1H1zm2 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm2 0h1v1H7zm7 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm2 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm2 0h1v1h-1zM1 5h1v1H1zm2 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm2 0h1v1H7zm2 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm2 0h1v1h-1zM1 6h1v1H1zm6 0h1v1H7zm2 0h1v1H9zm2 0h1v1h-1zm1 0h1v1h-1zm2 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm6 0h1v1h-1zM1 7h1v1H1zm1 0h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm2 0h1v1H9zm2 0h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM11 8h1v1h-1zm1 0h1v1h-1zm5 0h1v1h-1zM2 9h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm1 0h1v1h-1zm7 0h1v1h-1zm1 0h1v1h-1zm4 0h1v1h-1zM1 10h1v1H1zm1 0h1v1H2zm1 0h1v1H3zm2 0h1v1H5zm4 0h1v1H9zm2 0h1v1h-1zm2 0h1v1h-1zm1 0h1v1h-1zm6 0h1v1h-1zm3 0h1v1h-1zM1 11h1v1H1zm2 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm2 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm3 0h1v1h-1zm2 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm5 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM3 12h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm3 0h1v1H9zm2 0h1v1h-1zm1 0h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm5 0h1v1h-1zM1 13h1v1H1zm2 0h1v1H3zm1 0h1v1H4zm3 0h1v1H7zm3 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm2 0h1v1h-1zm1 0h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1zm1 0h1v1h-1zM1 14h1v1H1zm3 0h1v1H4zm2 0h1v1H6zm2 0h1v1H8zm2 0h1v1h-1zm1 0h1v1h-1zm2 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm3 0h1v1h-1zM1 15h1v1H1zm3 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm4 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm2 0h1v1h-1zm1 0h1v1h-1zM1 16h1v1H1zm2 0h1v1H3zm5 0h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1zm6 0h1v1h-1zM1 17h1v1H1zm6 0h1v1H7zm1 0h1v1H8zm2 0h1v1h-1zm1 0h1v1h-1zm4 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm2 0h1v1h-1zM9 18h1v1H9zm1 0h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1zm1 0h1v1h-1zm4 0h1v1h-1zm1 0h1v1h-1zM1 19h1v1H1zm1 0h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm2 0h1v1H9zm4 0h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zM1 20h1v1H1zm6 0h1v1H7zm2 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm6 0h1v1h-1zm4 0h1v1h-1zm3 0h1v1h-1zM1 21h1v1H1zm2 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm2 0h1v1H7zm2 0h1v1H9zm2 0h1v1h-1zm1 0h1v1h-1zm2 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm2 0h1v1h-1zM1 22h1v1H1zm2 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm2 0h1v1H7zm2 0h1v1H9zm4 0h1v1h-1zm5 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm2 0h1v1h-1zm1 0h1v1h-1zM1 23h1v1H1zm2 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm2 0h1v1H7zm2 0h1v1H9zm1 0h1v1h-1zm2 0h1v1h-1zm3 0h1v1h-1zm5 0h1v1h-1zm3 0h1v1h-1zm2 0h1v1h-1zM1 24h1v1H1zm6 0h1v1H7zm2 0h1v1H9zm1 0h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm8 0h1v1h-1zM1 25h1v1H1zm1 0h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm4 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm4 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1z" />
          </svg>
        </div>
        <img
          src={astroImg}
          alt="astronaut"
          className="absolute overflow-hidden bottom-5 -right-2.5 md:top-0 md:right-36 h-16 -rotate-90 md:rotate-180"
        />
        <button
          className="absolute top-0 left-0 m-1 rounded border-1 border-bh-dgray/50 size-4"
          onClick={closeHireMe}>
          <img src={closexImg} alt="" />
        </button>
      </div>
    </div>
  )
}
