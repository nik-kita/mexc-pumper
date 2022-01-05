/* eslint-disable no-param-reassign */
import { RedisDriverChannel } from '../common/redis/driver-channel.redis';
import { RedisPublisher } from '../common/redis/redis-publisher';
import { RedisSubscriber } from '../common/redis/redis-subscriber';
import { TTickerAnswerItem, T_TICKERS_ANSWER } from '../ws/types/ws-sub-pub.type';

export type TUpdatedCoin = TTickerAnswerItem & {
  firstPrice: number,
  agio: number,
}

let pause = false;

const { channel, command } = RedisDriverChannel;
// function calculateAgio(startPrice: number, lastPrice: number): number {
//     return 100 - ((startPrice * 100) / lastPrice);
// }

RedisSubscriber.subscribe(channel);
RedisPublisher.on('message', (_command) => {
    console.log('_command', _command);

    if (_command === command.pause) pause = true;
    if (_command === command.continue) pause = false;
});

export class TickersMonitoring {
    monitoring({ data }: T_TICKERS_ANSWER) {
        if (pause) return;
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
