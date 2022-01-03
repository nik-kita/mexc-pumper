export type TAllSymbolsRes = {
  symbol: string, // symbol name
  state: string, // symbol status, whether available for trading
  price_scale: number, // integer, price precision
  quantity_scale: number // integer, quantity precision
  min_amount: string, // minimum amount
  max_amount: string, // maximum amount
  maker_fee_rate: string, // maker fee
  taker_fee_rate: string, // taker fee
  limited: string, // API trading enables marking (Valid values: true, false)
  etf_mark: number, // integer, Etf identification, 0 represents not ETF, and positive and negative integers represent ETF
  symbol_partition: string, // Trading areas, such as the Main
}
