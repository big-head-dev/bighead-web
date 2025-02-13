import { useState, useMemo, useEffect } from 'react'
import { fyShuffle } from '../../utils/random'
import { Card, CardComponent } from './Card'
import { StatusBarComponent } from './StatusBar'

type Props = {
  content: string[]
}
const MemoryGame = ({ content }: Props) => {
  const levelMultipler = content.length % 2 > 0 ? 3 : 2

  const [level, setLevel] = useState(1)
  const [numMoves, setNumMoves] = useState(0)
  const [cards, setCards] = useState<Card[]>([])

  const flippedCardIds = useMemo(() => cards.filter((card) => card.flipped).map((card) => card.id), [cards])
  const matchedCardIds = useMemo(() => cards.filter((card) => card.matched).map((card) => card.id), [cards])
  const gameWon = useMemo(() => matchedCardIds.length === cards.length, [matchedCardIds, cards])

  useEffect(() => {
    initializeGame()
  }, [level])

  useEffect(() => {
    if (flippedCardIds.length >= 2) {
      setNumMoves((prevMoves) => prevMoves + 1)
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
    console.log('matchedCardIds', matchedCardIds)
  }, [flippedCardIds])

  const initializeGame = () => {
    //reset the game
    setNumMoves(0)

    //grab the number of content for the current level
    const contentForLevel = [
      ...fyShuffle(content.slice(0, level * levelMultipler)), //grab the first n content for the level
    ]

    //create the content for the cards
    const shuffledContent = [...contentForLevel, ...contentForLevel].sort(() => Math.random() - 0.5)

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

  const handleChangeLevel = (value: number) => {
    setLevel((prevLevel) => {
      if (prevLevel + value <= 0) return 1 //never go below level 1
      if ((prevLevel + value) * levelMultipler > content.length) return prevLevel //never go above the multiplier of content available
      return prevLevel + value
    })
  }

  const handleCardFlip = (id: number) => {
    setCards((prevCards) => prevCards.map((card) => (card.id === id ? { ...card, flipped: true } : card)))
  }

  return (
    <div className="memory-game">
      <StatusBarComponent
        title={'Memory Game #3'}
        currentLevel={level}
        numOfMoves={numMoves}
        onChangeLevel={handleChangeLevel}
      />
      <div className="game-board">
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
