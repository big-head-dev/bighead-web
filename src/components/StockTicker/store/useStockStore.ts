import { create } from 'zustand'
import { stockSymbols } from '../../../utils/constants'

export interface StockData {
  symbol: string
  openPrice?: number
  lastPrice?: number
}

interface StockState {
  stocks: Record<string, StockData>
  updateStocks: (updates: Partial<Record<string, StockData>>) => void
}

const useStockStore = create<StockState>((set) => ({
  stocks: stockSymbols.reduce((acc, symbol) => {
    acc[symbol] = { symbol }
    return acc
  }, {} as Record<string, StockData>),

  updateStocks: (updates) =>
    set((state) => ({
      stocks: Object.entries(updates).reduce(
        (acc, [symbol, data]) => {
          if (!data) return acc // Skip undefined updates
          const existingStock = acc[symbol] || { symbol }
          return {
            ...acc,
            [symbol]: {
              ...existingStock,
              openPrice: existingStock.openPrice ?? data.lastPrice, // Set openPrice if not already set
              ...data,
            },
          }
        },
        { ...state.stocks }
      ),
    })),
}))

export default useStockStore
