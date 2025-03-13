import { cn } from '../../utils/cn'

export interface Card {
  id: number
  content: string
  flipped: boolean
  matched: boolean
}

type Props = {
  card: Card
  canFlip: boolean
  onCardFlip: (cardId: number) => void
}

export const CardComponent = ({ card, canFlip, onCardFlip }: Props) => {
  const cardStyling = cn(
    'flex justify-center items-center rounded-1 drop-shadow-lg bg-bh-lgray w-14 h-18 cursor-pointer transition-transform',
    {
      'duration-300 rotate-y-180 bg-bh-lblue': card.flipped,
      'duration-0 transform-none bg-bh-green': card.matched,
    }
  )
  const cardTextStyling = cn('md:text-2xl', {
    // 'md:text-4xl': !card.flipped && !card.matched,
    'rotate-y-180': card.flipped,
  })
  return (
    <div key={card.id} className={cardStyling} onClick={() => canFlip && onCardFlip(card.id)}>
      <div className={cardTextStyling}>{card.flipped || card.matched ? card.content : '❓'}</div>
    </div>
  )
}
