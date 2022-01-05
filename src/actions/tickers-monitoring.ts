/* eslint-disable no-param-reassign */
import { RedisPublisher } from '../common/redis/redis-publisher';
import { TTickerAnswerItem, T_TICKERS_ANSWER } from '../ws/types/ws-sub-pub.type';

export type TUpdatedCoin = TTickerAnswerItem & {
  firstPrice: number,
  agio: number,
}

function calculateAgio(startPrice: number, lastPrice: number): number {
    return 100 - ((startPrice * 100) / lastPrice);
}

export class TickersMonitoring {
    monitoring({ data }: T_TICKERS_ANSWER) {
        (data as unknown as TUpdatedCoin[]).forEach((coin) => {
            RedisPublisher.exists(coin.symbol)
                .then((isFirstTime) => {
                    if (!isFirstTime) {
                        RedisPublisher
                            .set(
                                coin.symbol,
                                JSON.stringify(coin),
                                'ex',
                                15,
                            );
                    } else {
                        RedisPublisher.get(coin.symbol).then((c) => {
                            console.log(JSON.stringify(c));
                        });
                    }
                });
        });
    }
}
