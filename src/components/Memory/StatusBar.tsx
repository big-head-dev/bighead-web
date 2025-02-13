type Props = {
  title: string
  currentLevel: number
  numOfMoves: number
  onChangeLevel: (change: number) => void
}

export const StatusBarComponent = ({ title, currentLevel, numOfMoves, onChangeLevel }: Props) => {
  return (
    <div>
      <h2>{title}</h2>
      <div className="level">
        Level {currentLevel} <button onClick={() => onChangeLevel(1)}>⬆️</button>
        <button onClick={() => onChangeLevel(-1)}>⬇️</button>
      </div>
      <div className="moves">Moves: {numOfMoves}</div>
    </div>
  )
}
