import { calcPercentChange } from '../../../utils/tools'
import useStockStore from './useStockStore'

export const useSortedStockSymbolSelector = () => {
  return useStockStore((state) => {
    return Object.values(state.stocks)
      .filter((stock) => stock.openPrice && stock.lastPrice)
      .sort((a, b) => {
        const hasA = a.openPrice !== undefined && a.lastPrice !== undefined
        const hasB = b.openPrice !== undefined && b.lastPrice !== undefined

        if (!hasA && !hasB) return 0 // Both have no prices, keep original order
        if (!hasA) return 1 // Move `a` to the end
        if (!hasB) return -1 // Move `b` to the end

        return calcPercentChange(a.openPrice!, a.lastPrice!) - calcPercentChange(b.openPrice!, b.lastPrice!)
      })
      .map((stock) => stock.symbol)
  })
}
