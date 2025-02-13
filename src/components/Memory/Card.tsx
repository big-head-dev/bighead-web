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
  return (
    <div
      key={card.id}
      className={`card ${card.flipped ? 'flipped' : ''} ${card.matched ? 'matched' : ''}`}
      onClick={() => canFlip && onCardFlip(card.id)}>
      {card.flipped || card.matched ? card.content : '❓'}
    </div>
  )
}
