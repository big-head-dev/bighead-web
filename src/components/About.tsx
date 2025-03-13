import astroFrontImg from '/astro-looking-forward.webp'

type Props = {}
export const About = ({}: Props) => {
  return (
    <section className="w-sm md:w-3xl mx-auto mt-15 md:mt-24 md:text-lg bg-bh-lblue/20 rounded-2xl p-5">
      <h2 className="text-3xl md:text-4xl">Who Am I?</h2>
      <img
        src={astroFrontImg}
        alt="astronaut"
        className="rounded-full w-50 shadow-xl shadow-bh-dblue not-md:hidden md:float-left md:m-3"
      />
      <div>
        <p>
          I'm a long time software developer with team lead, member, and solo dev experience. Over my two
          decades of design and development, I've consistently onboarded quickly onto existing efforts and led
          greenfield application development.
        </p>
        <p>
          I excel at translating business requirements to application design and development across the full
          stack. Productive as a pre-Covid remote developer working across any company's local time-zone.
        </p>
        <p>Current “dev hobbies” include game development, 3D modeling and 3D printing.</p>
      </div>
    </section>
  )
}
