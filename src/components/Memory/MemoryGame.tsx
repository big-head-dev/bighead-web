import { useState, useMemo, useEffect } from 'react'
import { fyShuffle } from '../../utils/tools'
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

  const playAgainClick = () => {
    initializeGame()
  }

  const hireMeClick = () => {
    //TODO: go to modal form
  }

  return (
    <div className={cn('relative', className)}>
      <div className="grid grid-cols-4 justify-evenly items-center gap-5 p-4 rounded border-2 border-bh-lblue/50">
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
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-bh-dblue/40">
          <div className="flex flex-col gap-2 -rotate-25">
            <span
              className="text-4xl font-bold text-bh-lgray"
              style={{ textShadow: '1px 1px 2px var(--color-bh-red' }}>
              You won!
            </span>
            <button
              className="bg-bh-dgray p-3 rounded-full hover:bg-bh-dgray cursor-pointer"
              onClick={playAgainClick}>
              🚀 Play Again
            </button>
            <button className="bg-bh-dgray p-3 rounded-full cursor-pointer" onClick={hireMeClick}>
              💪 Hire Me
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default MemoryGame
