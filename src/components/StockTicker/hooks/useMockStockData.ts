import { useEffect } from 'react'
import useStockStore from '../store/useStockStore'
import { stockSymbols } from '../../../utils/constants'

const getNextPrice = (lastPrice?: number): number => {
  if (lastPrice == null) {
    return Math.random() * (300 - 5) + 5
  }

  const change = Math.random() * (lastPrice * 0.01 - 0.01) - 0.01
  const direction = Math.random() < 0.5 ? -1 : 1
  return lastPrice + direction * change
}

export const useMockStockData = () => {
  const updateStocks = useStockStore((state) => state.updateStocks)

  useEffect(() => {
    const update = () => {
      const updates: Partial<Record<string, { symbol: string; lastPrice: number }>> = {}
      const symbolsToUpdate = stockSymbols.sort(() => 0.5 - Math.random()).slice(0, 10)

      symbolsToUpdate.forEach((symbol) => {
        const currentStock = useStockStore.getState().stocks[symbol]
        const lastPrice = currentStock?.lastPrice
        updates[symbol] = { symbol, lastPrice: getNextPrice(lastPrice) }
      })

      updateStocks(updates)
    }

    const interval = setInterval(update, 800)
    return () => clearInterval(interval)
  }, [updateStocks])
}
