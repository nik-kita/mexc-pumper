/* eslint-disable no-shadow */
export const WS_CONNECTION_ADDRESS = 'wss://contract.mexc.com/ws' as const;

export enum WsChannelEnum {
  PONG = 'pong',
  PUSH_TICKERS = 'push.tickers',
  PUSH_TICKER = 'push.ticker',
  PUSH_DEAL = 'push.deal',
  PUSH_DEPTH = 'push.depth',
  PUSH_KLINE = 'push.kline',
  PUSH_FUNDING_RATE = 'push.funding.rate',
  PUSH_FAIR_PRICE = 'push.fair.price',
  RS_LOGIN = 'rs.login',
  PUSH_PERSONAL_ORDER = 'push.personal.order',
  PUSH_PERSONAL_ASSET = 'push.personal.asset',
  PUSH_PERSONAL_POSITION = 'push.personal.position',
  PUSH_PERSONAL_RISK_LIMIT = 'push.personal.risk.limit',
  PUSH_PERSONAL_ADV_LEVEL = 'push.personal.adv.level',
  RS_SUB_DEAL = 'rs.sub.deal',
  RS_ERROR = 'rs.error'
}

export enum WsMethodEnum {
  PING = 'ping',
  SUB_TICKERS = 'sub.tickers',
  SUB_TICKER = 'sub.ticker',
  UNSUB_TICKER = 'unsub.ticker',
  SUB_DEAL = 'sub.deal',
  UNSUB_DEAL = 'unsub.deal',
  SUB_DEPTH = 'sub.depth',
  SUB_DEPTH_FULL = 'sub.depth.full',
  UNSUB_DEPTH = 'unsub.depth',
  UNSUB_DEPTH_FULL = 'usub.depth.full',
  SUB_KLINE = 'sub.kline',
  UNSUB_KLINE = 'unsub.kline',
  SUB_FINDING_RATE = 'sub.finding.rate',
  UNSUB_FINDIG_RATE = 'unsub.finding.rate',
  SUB_INDEX_PRICE = 'sub.finding.price',
  UNSUB_INDEX_PRICE = 'unsub.index.price',
  SUB_FAIR_PRICE = 'sub.fair.price',
  UNSUB_FAIR_PRICE = 'unsub.fair.price',
  LOGIN = 'login',
}
