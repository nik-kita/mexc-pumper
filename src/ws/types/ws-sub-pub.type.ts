import { WsMethodEnum, WsChannelEnum } from './ws.enum';

export type T_WS_CHANNEL_ANSWER<TAnswer, ChannelName> = {
  channel: ChannelName,
  data: TAnswer,
  ts: number, // timestamp
}
type TSendWrapper<TParams, MethodName> = {
  method: MethodName,
  data: TParams,
}
export type T_SEND_PING = {
  method: WsMethodEnum.PING,
}
export type T_PONG_ANSWER = Omit<T_WS_CHANNEL_ANSWER<number, WsChannelEnum.PONG>, 'ts'>;
export type T_TICKERS_SUB = TSendWrapper<{}, WsMethodEnum.SUB_TICKERS>;
export type T_TICKERS_UNSUB = TSendWrapper<{}, WsMethodEnum.UNSUB_TICKERS>
export type TTickerAnswerItem = {
  symbol: string, // the name of the contract
  lastPrice: number, // decimal, the last price
  volume24: number, // decimal, 24 hours trading volume, according to the statistics count
  riseFallRate: number, // decimal, rise/fall rate
  fairPrice: number, // decimal fair price
}
export type T_TICKERS_ANSWER = T_WS_CHANNEL_ANSWER<TTickerAnswerItem, WsChannelEnum.PUSH_TICKERS>;
export type TTickerSubParam = {
  symbol: string,
}
export type T_TICKER_SUB = TSendWrapper<TTickerSubParam, WsMethodEnum.SUB_TICKER>;
export type T_TICKER_UNSUB = TSendWrapper<TTickerSubParam, WsMethodEnum.UNSUB_TICKER>;
export type TTransactionSubParam = TTickerSubParam;
export type T_TRANSACTION_SUB = TSendWrapper<TTransactionSubParam, WsMethodEnum.SUB_DEAL>;
export type T_TRANSACTION_UNSUB = TSendWrapper<TTransactionSubParam, WsMethodEnum.UNSUB_DEAL>;
export type TTransactionAnswerItem = {
  p: number, // decimal, transaction price
  v: number, // decimal, volume
  T: number, // int, transaction direction,1:purchase,2:sell
  O: number, // int, open position?, 1: Yes,2: No, vol is the additional position when O is 1
  M: number, // int, Is it auto-transact ? 1: Yes,2: No
  t: number, // long, transaction time
}
export type T_TRANSACTION_ANSWER = T_WS_CHANNEL_ANSWER<TTransactionAnswerItem, WsChannelEnum.PUSH_DEAL> & { symbol: string };

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

export type T_SEND_LOGIN = TSendWrapper<TLoginParamSub, WsMethodEnum.LOGIN>;

export type T_LOGIN_ANSWER = T_WS_CHANNEL_ANSWER<'success', WsChannelEnum.RS_LOGIN>;

// TODO complete all private channels

export type T_WS_SUBSCRIPTION = T_SEND_PING
  | T_TICKERS_SUB
  | T_TICKERS_SUB
  | T_TICKERS_UNSUB
  | T_TICKER_SUB
  | T_TRANSACTION_SUB
  | T_TRANSACTION_UNSUB
  | T_SEND_LOGIN
