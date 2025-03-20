import { useMemo } from 'react'
import { cn } from '../../utils/cn'
import useStockStore from './store/useStockStore'
import { calcPercentChange } from '../../utils/tools'

type Props = { symbol: string }
export const StockTile = ({ symbol }: Props) => {
  const stock = useStockStore((state) => state.stocks[symbol])

  const percentChange = useMemo(() => {
    if (stock?.openPrice && stock?.lastPrice) {
      return calcPercentChange(stock.openPrice, stock.lastPrice)
    }
    return 0
  }, [stock?.lastPrice])

  return (
    <div
      className={cn(
        'cursor-pointer rounded-sm bg-bh-lgray text-black flex justify-around items-center gap-1 w-20 h-fit p-1  ',
        {
          'bg-green-100': percentChange > 0.1,
          'bg-red-100': percentChange < -0.1,
          'bg-green-300': percentChange > 2,
          'bg-red-300': percentChange < -2,
          'bg-green-500': percentChange > 3,
          'bg-red-500': percentChange < -3,
        }
      )}>
      <span className="font-bold text-xs">{symbol}</span>
      {stock && stock.lastPrice && (
        <div className="flex flex-col text-xxs font-bold w-16">
          <span className="self-end">{stock.lastPrice > 0 ? stock.lastPrice.toFixed(2) : '000.00'}</span>
          <span className="self-end">{percentChange != 0 ? percentChange.toFixed(1) : '0.0'}%</span>
        </div>
      )}
    </div>
  )
}
