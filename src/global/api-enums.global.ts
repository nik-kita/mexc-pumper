/* eslint-disable no-shadow */
// TODO fix eslint for enums
export enum OrderStateEnum {
  NEW = 'New order, waiting to be filled',
  FILLED = 'Order fully filled',
  PARTIALLY_FILLED = 'Order partially filled',
  CANCELED = 'Order canceled',
  PARTIALLY_CANCELED = 'Order filled partially, and then the rest of the order is canceled'
}

export enum OrderTypeEnum {
  LIMIT_ORDER = 'Limit price order',
  POST_ONLY = 'Post only maker order',
  IMMEDIATE_OR_CANCEL = 'Immediate or cancel',
}

export enum TradeTypeEnum {
  BID = 'Buy',
  ASK = 'Sell'
}
