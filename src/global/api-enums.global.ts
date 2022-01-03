// TODO fix eslint for enums
// eslint-disable-next-line no-shadow
export enum ApiEnum {
  NEW = 'New order, waiting to be filled',
  FILLED = 'Order fully filled',
  PARTIALLY_FILLED = 'Order partially filled',
  CANCELED = 'Order canceled',
  PARTIALLY_CANCELED = 'Order filled partially, and then the rest of the order is canceled'
}
