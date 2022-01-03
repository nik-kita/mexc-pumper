type TAnswerWrapper<TAnswer, ChannelName> = {
  channel: ChannelName,
  data: TAnswer,
  ts: number, // timestamp
}

type TSendWrapper<TParams, MethodName> = {
  method: MethodName,
  data: TParams,
}

export type T_SEND_PING = {
  method: 'ping',
}

export type T_PONG_ANSWER = {
  channel: 'pong',
  data: number // timestamp
}

export type T_TICKERS_SUB = TSendWrapper<{}, 'sub.tickers'>;

export type T_TICKERS_UNSUB = TSendWrapper<{}, 'unsub.tickers'>

export type TTickerAnswerItem = {
  symbol: string, // the name of the contract
  lastPrice: number, // decimal, the last price
  volume24: number, // decimal, 24 hours trading volume, according to the statistics count
  riseFallRate: number, // decimal, rise/fall rate
  fairPrice: number, // decimal fair price
}

export type T_TICKERS_ANSWER = TAnswerWrapper<TTickerAnswerItem, 'push.tickers'>;

export type TTickerSubParam = {
  symbol: string,
}

export type T_TICKER_SUB = TSendWrapper<TTickerSubParam, 'sub.ticker'>;

export type TTransactionSubParam = TTickerSubParam;

export type T_TRANSACTION_SUB = TSendWrapper<TTransactionSubParam, 'sub.deal'>;

export type T_TRANSACTION_UNSUB = TSendWrapper<TTransactionSubParam, 'unsub.deal'>;

export type TTransactionAnswerItem = {
  p: number, // decimal, transaction price
  v: number, // decimal, volume
  T: number, // int, transaction direction,1:purchase,2:sell
  O: number, // int, open position?, 1: Yes,2: No, vol is the additional position when O is 1
  M: number, // int, Is it auto-transact ? 1: Yes,2: No
  t: number, // long, transaction time
}

export type T_TRANSACTION_ANSWER = TAnswerWrapper<TTransactionAnswerItem, 'push.deal'> & { symbol: string };

// TODO Depth

// TODO K-line

// TODO Funding rate

// TODO Index price

// TODO Fair price

/**
 * ========================================== PRIVATE CHANNELS ===============================================
 */

export type TLoginParamSub = {
  apiKey: string,
  reqTime: string,
  signature: string,
}

export type T_SEND_LOGIN = TSendWrapper<TLoginParamSub, 'login'>;

export type T_LOGIN_ANSWER = TAnswerWrapper<'success', 'rs.login'>;

// TODO complete all private channels
