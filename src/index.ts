import dotenv from 'dotenv';
import { RedisDriverChannel } from './common/redis/driver-channel.redis';
import { RedisSubscriber } from './common/redis/redis-subscriber';
import { main } from './main';

dotenv.config();

(async () => {
    try {
        await new Promise<void>((resolve) => {
            RedisSubscriber.on('message', (_command) => {
                console.log('main message', _command);

                if (_command === RedisDriverChannel.command.start) {
                    resolve();
                }
            });
        });
        await main();
    } catch (error) {
        console.log('======================== ERROR ==========================');
        console.log(error);
    }
})();
