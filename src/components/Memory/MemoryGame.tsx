import { useState, useMemo, useEffect } from 'react'
import { fyShuffle } from '../../utils/random'
import { Card, CardComponent } from './Card'
import { cn } from '../../utils/cn'

type Props = {
  className: string
  content: string[]
}
const MemoryGame = ({ className, content }: Props) => {
  const [cards, setCards] = useState<Card[]>([])

  const flippedCardIds = useMemo(() => cards.filter((card) => card.flipped).map((card) => card.id), [cards])
  const matchedCardIds = useMemo(() => cards.filter((card) => card.matched).map((card) => card.id), [cards])
  const gameWon = useMemo(() => matchedCardIds.length === cards.length, [matchedCardIds, cards])

  useEffect(() => {
    initializeGame()
  }, [])

  useEffect(() => {
    if (flippedCardIds.length >= 2) {
      const [firstCardId, secondCardId] = flippedCardIds
      if (cards[firstCardId].content === cards[secondCardId].content) {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.id === firstCardId || card.id === secondCardId
              ? { ...card, matched: true, flipped: false }
              : card
          )
        )
      } else {
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card) =>
              card.id === firstCardId || card.id === secondCardId ? { ...card, flipped: false } : card
            )
          )
        }, 750)
      }
    }
  }, [flippedCardIds])

  const initializeGame = () => {
    //create the content for the cards
    const shuffledContent = fyShuffle([...content, ...content])

    //assign the cards
    setCards(
      shuffledContent.map((content, index) => ({
        id: index,
        content,
        flipped: false,
        matched: false,
      }))
    )
  }

  const handleCardFlip = (id: number) => {
    setCards((prevCards) => prevCards.map((card) => (card.id === id ? { ...card, flipped: true } : card)))
  }

  return (
    <div className={cn('', className)}>
      <div className="grid grid-cols-4  justify-around items-center gap-5 p-4 rounded-2xl border-1 border-bh-green">
        {cards.map((card) => (
          <CardComponent
            key={card.id}
            card={card}
            canFlip={flippedCardIds.length < 2 && !card.flipped && !card.matched}
            onCardFlip={handleCardFlip}
          />
        ))}
      </div>
      {gameWon && (
        <div className="congratulations">
          Congratulations! You've matched all the cards!{' '}
          <button onClick={initializeGame}>🚀 Play Again</button>
        </div>
      )}
    </div>
  )
}

export default MemoryGame
