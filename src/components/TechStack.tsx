import MemoryGame from './Memory/MemoryGame'

type Props = {}
export const TechStack = ({}: Props) => {
  return (
    <section className="w-sm md:w-3xl mx-auto mt-15 md:text-lg p-5 flex flex-col md:flex-row ">
      <div>
        <h2 className="text-3xl md:text-4xl">Experienced in multiple languages and platforms</h2>
        <p>Play the match game to find out more!</p>
      </div>
      <MemoryGame className="mt-2 md:w-2xl" content={['C#', 'TS/JS', 'CSS', 'Go', 'Java', 'C']} />
    </section>
  )
}
