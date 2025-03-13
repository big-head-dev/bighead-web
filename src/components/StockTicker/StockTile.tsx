type Props = {
  symbol: string
  exchange?: string
  name?: string
  currentPrice: number
  percentChange: number
}
export const StockTile = ({ symbol, percentChange }: Props) => {
  return (
    <div className="cursor-pointer p-1 rounded-sm bg-bh-dgray text-white flex justify-center items-center">
      <span className="font-bold text-xs">{symbol}</span>
      <span className="text-xxs">{percentChange.toFixed(2)}</span>
    </div>
  )
}
