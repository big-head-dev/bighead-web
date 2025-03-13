import { StockTile } from './StockTile'

type Props = {}
export const StockTicker = ({}: Props) => {
  const stockData = [
    { symbol: 'AAPL', price: 15.0, change: 0.3 },
    { symbol: 'TSLA', price: 28.0, change: 3 },
    { symbol: 'AMZN', price: 34.0, change: -3 },
    { symbol: 'AAPL', price: 15.0, change: 0.3 },
    { symbol: 'TSLA', price: 28.0, change: 3 },
    { symbol: 'AMZN', price: 34.0, change: -3 },
    { symbol: 'AAPL', price: 15.0, change: 0.3 },
    { symbol: 'TSLA', price: 28.0, change: 3 },
    { symbol: 'AMZN', price: 34.0, change: -3 },
    { symbol: 'AAPL', price: 15.0, change: 0.3 },
    { symbol: 'TSLA', price: 28.0, change: 3 },
    { symbol: 'AMZN', price: 34.0, change: -3 },
    { symbol: 'AAPL', price: 15.0, change: 0.3 },
    { symbol: 'TSLA', price: 28.0, change: 3 },
    { symbol: 'AMZN', price: 34.0, change: -3 },
  ]

  return (
    <div className="">
      {stockData.map((stock, i) => (
        <StockTile key={i} symbol={stock.symbol} currentPrice={stock.price} percentChange={stock.change} />
      ))}
    </div>
  )
}
