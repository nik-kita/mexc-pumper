type TAnswerWrapper<TAnswer, ChannelName> = {
  channel: ChannelName,
  data: TAnswer,
  ts: number, // timestamp
}

type TSubscribeWrapper<TParams, ChannelName> = {
  channel: ChannelName,
  data: TParams,
}

export type T_SEND_PING = {
  method: 'ping',
}

export type T_PONG_ANSWER = {
  channel: 'pong',
  data: number // timestamp
}

export type T_TICKERS_SUB = TSubscribeWrapper<{}, 'sub.tickers'>;

export type T_TICKERS_UNSUB = TSubscribeWrapper<{}, 'unsub.tickers'>

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

export type T_TICKER_SUB = TSubscribeWrapper<TTickerSubParam, 'sub.ticker'>;

export type TTransactionSubParam = TTickerSubParam;

export type T_TRANSACTION_SUB = TSubscribeWrapper<TTransactionSubParam, 'sub.deal'>;

export type T_TRANSACTION_UNSUB = TSubscribeWrapper<TTransactionSubParam, 'unsub.deal'>;
