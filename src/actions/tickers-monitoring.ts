/* eslint-disable no-param-reassign */
import { REDIS } from '../common/redis';
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
            REDIS.RedisPublisher.exists(coin.symbol)
                .then((isFirstTime) => {
                    if (!isFirstTime) {
                        REDIS.RedisPublisher
                            .set(
                                coin.symbol,
                                JSON.stringify(coin),
                                'ex',
                                15,
                            );
                    } else {
                        REDIS.RedisPublisher.get(coin.symbol).then((c) => {
                            console.log(JSON.stringify(c));
                        });
                    }
                });
        });
    }
}
