/* eslint-disable no-shadow */
export const BASE_URL = 'https://www.mexc.com';

export enum GetEnum {
  SYMBOLS = '/open/api/v2/market/symbols',
  TIMESTAMP = '/open/api/v2/common/timestamp',
  PING = '/open/api/v2/common/ping',
  API_DEFAULT_SYMBOLS = '/open/api/v2/market/api_default_symbols',
  MARKET_TICKER = '/open/api/v2/market/ticker',
  MARKET_DEPTH = '/open/api/v2/market/depth',
  MARKET_DEALS = '/open/api/v2/market/deals',
  MARKET_KLINE = '/open/api/v2/market/kline',
  MARKET_COIN_LIST = '/open/api/v2/market/coin/list',
  ACCOUNT_INFO = '/open/api/v2/account/info',
  ORDER_OPEN_ORDERS = '/open/api/v2/order/open_orders',
  ORDER_LIST = '/open/api/v2/order/list',
  ORDER_QUERY = '/open/api/v2/order/query',
  ORDER_DEALS = '/open/api/v2/order/deals',
  ORDER_DEAL_DETAIL = '/open/api/v2/order/deal_detail',
}

export enum PostEnum {
  MARKET_API_SYMBOLS = '/open/api/v2/market/api_symbols',
  ORDER_PLACE = '/open/api/v2/order/place',
  ORDER_PLACE_BATCH = '/open/api/v2/order/place_batch'
}

export enum DeleteEnum {
  ORDER_CANCEL = '/open/api/v2/order/cancel',
  ORDER_CANCEL_BY_SYMBOL = '/open/api/v2/order/cancel_by_symbol',
}
