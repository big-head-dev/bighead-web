import { useState, useMemo, useEffect, useCallback } from 'react'
import { fyShuffle } from '../../utils/tools'
import { Card, CardComponent } from './Card'
import { cn } from '../../utils/cn'
import { useHireMeModal } from '../../providers/modal'
import { GameButton } from './GameButton'
import { FLIP_DELAY_MS } from '../../utils/constants'

type Props = {
  className: string
  content: string[]
}
const MemoryGame = ({ className, content }: Props) => {
  const { openHireMe } = useHireMeModal()
  const [cards, setCards] = useState<Card[]>([])

  const flippedCardIds = useMemo(() => cards.filter((card) => card.flipped).map((card) => card.id), [cards])
  const matchedCardIds = useMemo(() => cards.filter((card) => card.matched).map((card) => card.id), [cards])
  const gameWon = matchedCardIds.length > 0 && matchedCardIds.length === cards.length

  const initializeGame = useCallback(() => {
    const shuffledContent = fyShuffle([...content, ...content])
    setCards(shuffledContent.map((c, index) => ({ id: index, content: c, flipped: false, matched: false })))
  }, [content])

  useEffect(() => {
    initializeGame()
  }, [initializeGame])

  useEffect(() => {
    if (flippedCardIds.length >= 2) {
      const [firstCardId, secondCardId] = flippedCardIds
      const firstCard = cards[firstCardId]
      const secondCard = cards[secondCardId]

      if (firstCard.content === secondCard.content) {
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
        }, FLIP_DELAY_MS)
      }
    }
  }, [flippedCardIds, cards])

  const handleCardFlip = (id: number) => {
    setCards((prevCards) => prevCards.map((card) => (card.id === id ? { ...card, flipped: true } : card)))
  }
  const handlePlayAgain = () => initializeGame()

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
          <div className="flex flex-col gap-2">
            <span
              className="text-4xl font-bold text-bh-lgray"
              style={{ textShadow: '1px 1px 2px var(--color-bh-red)' }}>
              You won!
            </span>
            <GameButton onClick={handlePlayAgain}>🚀 Play Again</GameButton>
            <GameButton onClick={openHireMe}>💪 Hire Me</GameButton>
          </div>
        </div>
      )}
    </div>
  )
}

export default MemoryGame
