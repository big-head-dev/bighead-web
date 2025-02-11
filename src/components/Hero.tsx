import astroFrontImg from '/astro-looking-forward.png'
type HeroProps = {}
export const Hero = ({}: HeroProps) => {
  return (
    <div className="w-dvw min-h-screen max-h-dvh relative flex justify-center items-top">
      <img
        src={astroFrontImg}
        alt="astronaut close up"
        className="rotate-180 -z-50 h-full w-full max-w-[1000px] object-top"
      />
    </div>
  )
}
