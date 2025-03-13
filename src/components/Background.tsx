import astroFrontImg from '/astro-looking-forward.webp'
type Props = {}
export const Background = ({}: Props) => {
  return (
    <>
      <div className="absolute top-0 rotate-180 w-full -z-99">
        <img src={astroFrontImg} alt="astronaut close up" className="size-fit opacity-20 mx-auto" />
      </div>
      <div className="fixed bottom-0 w-full overflow-hidden -z-98">
        <div className="flex flex-row items-end justify-between">
          <div
            className="w-[33vw] h-[70vh]"
            style={{
              background:
                'radial-gradient(ellipse at bottom left, rgba(246,132,162,0.20) 0%, rgba(246,132,162,0) 50%)',
            }}
          />
          <div
            className="w-[33vw] h-[60vh]"
            style={{
              background:
                'radial-gradient(ellipse at bottom center, rgba(75, 252, 254,0.30) 0%, rgba(75, 252, 254,0) 50%)',
            }}
          />
          <div
            className="w-[33vw] h-[70vh]"
            style={{
              background:
                'radial-gradient(ellipse at bottom right, rgba(246,132,162,0.30) 0%, rgba(246,132,162,0) 70%)',
            }}
          />
        </div>
      </div>
    </>
  )
}
