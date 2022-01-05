// TODO GET /open/api/v2/market/kline
export type TCandlestickData = {
  symbol: string, // symbol name
  interval: string, // of minutes:1m, 5m, 15m, 30m, 60m. of hour: 4h,of day: 1d, of month: 1M//
  start_time: number, // long, start time, string of 10 digits stands for the seconds since Unix epoch
  limit: number, // number of records to be returned 1~1000，default to 100
}

// TODO GET /open/api/v2/market/coin/list
export type TGetCurrencyInformation = {
  currency: string, // Crypto currency
}
// TODO GET /open/api/v2/order/list
export type TAllOrders = {
  symbol: string, // symbol name
  start_time?: string, // the default is the last 7 days, and the maximum query is 30 days
  limit?: string, // number of records to be returned, 1~1000，default to 50
  trade_type: string, // order type BID，ASK
  states: string, // state to be quired, NEW：Unfilled ；FILLED：Filled；PARTIALLY_FILLED：Partially filled；CANCELED：Canceled；PARTIALLY_CANCELED：Partially canceled

}

// TODO GET /open/api/v2/order/query
export type TQueryOrders = {
  order_ids: string // order id, batch process is supported. There can be 20 ids in one batch at most

}

// TODO GET /open/api/v2/order/deals
export type TDealsHistory = {
  symbol: string, // symbol name
  limit?: string, // number of records to be returned 1~1000，default to 50
  start_time?: string // start time
}

// TODO POST /open/api/v2/order/place_batch
export type TOpenOrder = {
  symbol: string, // symbol name
  price: string, // order price
  quantity: string, // order quantity
  trade_type:string, // trade type BID，ASK
  order_type: string, // order type LIMIT_ORDER，POST_ONLY，IMMEDIATE_OR_CANCEL
  client_order_id: string, // client order id
}
