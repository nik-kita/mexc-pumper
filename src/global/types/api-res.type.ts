export type T_CODE_RES = {
  code: number,
}

export type T_ALL_SYMBOLS_RES = {
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
  code: number,
}

export type T_CURRENT_SYSTEM_TIME = {
  data: number // long, System timestamp, milliseconds since Unix epoch
  code: number,
}

export type T_PING_RES = T_CODE_RES;

export type T_API_DEFAULT_SYMBOL_RES = {
  code: number, // integer Status code
  message: string, // Misdescription (If there has )）
  data: string[], // array of symbols
}

export type T_TICKER_INFORMATION_RES = {
  symbol: string, // symbol name
  volume: string, // deal total amount of this period
  high: string, // the highest price of this period
  low: string, //  the lowest price of this period
  bid: string, // current highest bid price
  ask: string, // current lowest ask price
  open: string, // open price of this period
  last: string, // the latest deal price
  time: string, // timestamp of the latest quote
  change_rate: string, //  price change rate of this period
}

export type TMarketDepthBidAsk = {
  price: string,
  quantity: string,
}

export type TMarketData = {
  asks: TMarketDepthBidAsk[],
  bids: TMarketDepthBidAsk[],
}

export type T_MARKET_DEPTH_RES = {
  code: number,
  data: TMarketData,
}
