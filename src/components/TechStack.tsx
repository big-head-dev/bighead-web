import { techStack } from '../utils/constants'
import MemoryGame from './Memory/MemoryGame'

type Props = {}
export const TechStack = ({}: Props) => {
  return (
    <section className="w-sm md:w-3xl mx-auto mt-5 md:mt-10 md:text-lg p-5">
      <div className=" flex flex-col md:flex-row ">
        <div>
          <h2 className="text-3xl md:text-4xl">Experienced in multiple languages and platforms</h2>
          <p>Play the memory game to find out more!</p>
        </div>
        <MemoryGame className="mt-2 md:w-2xl" content={techStack} />
      </div>
    </section>
  )
}
