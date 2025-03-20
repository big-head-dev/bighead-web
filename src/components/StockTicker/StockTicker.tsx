import { cn } from '../../utils/cn'
import { stockSymbols } from '../../utils/constants'
import { useMockStockData } from './hooks/useMockStockData'
import { StockTile } from './StockTile'

type Props = { className?: string }
export const StockTicker = ({ className }: Props) => {
  useMockStockData()
  return (
    <div
      className={cn(
        'rounded border-2 border-bh-lblue/50 grid grid-cols-4 justify-items-center content-between gap-2 p-2',
        className
      )}>
      {stockSymbols.sort().map((symbol) => (
        <StockTile key={symbol} symbol={symbol} />
      ))}
    </div>
  )
}
