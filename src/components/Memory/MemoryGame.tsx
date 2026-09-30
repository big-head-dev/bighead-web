import { useState, useMemo, useCallback } from 'react'
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
  const [cards, setCards] = useState<Card[]>(() =>
    fyShuffle([...content, ...content]).map((c, index) => ({
      id: index,
      content: c,
      flipped: false,
      matched: false,
    }))
  )

  const flippedCardIds = useMemo(() => cards.filter((card) => card.flipped).map((card) => card.id), [cards])
  const matchedCardIds = useMemo(() => cards.filter((card) => card.matched).map((card) => card.id), [cards])
  const gameWon = matchedCardIds.length > 0 && matchedCardIds.length === cards.length

  const initializeGame = useCallback(() => {
    const shuffledContent = fyShuffle([...content, ...content])
    setCards(shuffledContent.map((c, index) => ({ id: index, content: c, flipped: false, matched: false })))
  }, [content])

  const handleCardFlip = (id: number) => {
    const flippedCards = cards.filter((card) => card.flipped)

    if (flippedCards.length >= 2) {
      return
    }

    const card = cards.find((card) => card.id === id)

    if (!card || card.flipped || card.matched) {
      return
    }

    const updatedCards = cards.map((card) => (card.id === id ? { ...card, flipped: true } : card))

    if (flippedCards.length === 0) {
      setCards(updatedCards)
      return
    }

    const firstCard = flippedCards[0]
    const secondCard = card

    if (firstCard.content === secondCard.content) {
      setCards(
        updatedCards.map((card) =>
          card.id === firstCard.id || card.id === secondCard.id
            ? { ...card, matched: true, flipped: false }
            : card
        )
      )
    } else {
      setCards(updatedCards)

      setTimeout(() => {
        setCards((currentCards) =>
          currentCards.map((card) =>
            card.id === firstCard.id || card.id === secondCard.id ? { ...card, flipped: false } : card
          )
        )
      }, FLIP_DELAY_MS)
    }
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
