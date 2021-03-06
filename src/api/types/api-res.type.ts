import { OrderStateEnum, OrderTypeEnum, TradeTypeEnum } from './api-props.enum';

export type T_CODE_RES = {
  code: number,
}

type TResWrapper<TRes> = {
  code: number,
  data: TRes,
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

export type T_MARKET_DEPTH_RES = TResWrapper<TMarketData>;

export type TLatestDeal = {
  trade_time: number, // long, deal time
  trade_price: string, // deal price
  trade_quantity: string, // volume
  trade_type: TradeTypeEnum, // trade type
}

export type T_LATEST_DEALS_RES = TResWrapper<TLatestDeal[]>;

// TODO GET /open/api/v2/market/kline
export type TCandlestickData = [
  number, // time, start time, string of 10 digits stands for seconds since Unit epoch
  string, // open, opening price
  string, // close, closing price
  string, // high, highest price
  string, // low, lowest price
  string, // vol, volume
  string // amount, trading volume in the pricing currency
]
// TODO GET /open/api/v2/market/coin/list

// TODO GET /open/api/v2/account/info
export type TCurrencyBalance = {
  [key: string]: {
    frozen: string,
    available: string,
  }
}

export type T_BALANCE_RES = TResWrapper<TCurrencyBalance[]>;

export type T_API_SYMBOLS_RES = TResWrapper<string[]>;

export type T_PLACE_ORDER_RES = TResWrapper<string>; // new order id

export type T_CANCEL_ORDER_RES = TResWrapper<[key: string][]>;

// TODO POST /open/api/v2/order/place_batch
// response when requesting with client_order_id
export type TOpenOrderWithOrderId = {
  data: Record<string, string>
}
// TODO POST /open/api/v2/order/place_batch
// response when requesting without client_order_id
export type TOpenOrderWithoutOrderId = {
  data: string[]
}

export type TOpenOrder = {
  symbol: string, // symbol name
  id: string, // order id
  price: string, // order price
  quantity: string, // order quantity
  remain_quantity: string, // remaining quantity
  remain_amount: string, // remaining volume
  create_time: string, // order create time
  state: OrderStateEnum, // order state
  type: OrderTypeEnum, //  order type
  client_order_id: string, // client order id
}

export type T_OPEN_ORDERS_RES = TResWrapper<TOpenOrder>;

// TODO GET /open/api/v2/order/list

// TODO GET /open/api/v2/order/query
export type TQueryOrders = {
  data: [
    {
      symbol: string, // symbol name
      id: string, // order id
      price: string, // order price
      quantity: string, // order quantity
      deal_quantity: string, // deal quantity
      deal_amount: string, // volume
      create_time: string, // order create time
      state: string, // order state
      type: string, // order type
      client_order_id: string, // client order id
    }
  ]
}

// TODO GET /open/api/v2/order/deals
export type TDealsHistory = {
  symbol: string, // symbol name
  order_id: string, // order id
  trade_type: string, // trade type
  quantity: string, // deal quantity
  price: string, // deal price
  amount: string, // volume
  fee: string, // deal fee
  fee_currency: string, // fee currency
  is_taker: boolean, // taker order or not
  create_time: string// deal time
}

// TODO GET /open/api/v2/order/deal_detail
export type TDealsDetail ={
  symbol: string, // symbol name
  order_id: string, // order id
  trade_type: string, // trade type
  quantity: string, // deal quantity
  price: string, // deal price
  amount: string, // volume
  fee: string, // deal fee
  fee_currency: string, // fee currency
  is_taker: boolean, // taker order or not
  create_time: string// deal time
}

export type TCancelOrder = {
  msg: 'success' | string,
  order: string,
  client_order_id?: string,
}

export type T_CANCEL_ORDERS_RES = TResWrapper<TCancelOrder[]>;
