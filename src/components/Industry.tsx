import { StockTicker } from './StockTicker/StockTicker'

type Props = {}
export const Industry = ({}: Props) => {
  return (
    <section className="w-sm md:w-3xl mx-auto mt-15 md:text-lg p-5">
      <h2 className="text-3xl md:text-4xl">Successful software engineer across industries</h2>
      <div className=" flex flex-col md:flex-row md:justify-between">
        <ul className="flex flex-col gap-2">
          <li>Healthcare</li>
          <li>E-Commerce</li>
          <li>Marketing</li>
          <li>Banking & Finance</li>
          <li>Government & Defense</li>
          <li>Manufacturing</li>
        </ul>
        <StockTicker className="not-md:mt-2 md:w-md" />
      </div>
    </section>
  )
}
