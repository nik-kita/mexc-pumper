/* eslint-disable no-await-in-loop */
import prompts from 'prompts';
import { RedisDriverChannel } from '../common/redis/driver-channel.redis';
import { RedisPublisher } from '../common/redis/redis-publisher';
import { CONTINUE_EXIT_SELECT, PAUSE_EXIT_SELECT, START_EXIT_SELECT } from './select-constants.cli';

const { channel, command } = RedisDriverChannel;

(async () => {
    const { startOrExit } = await prompts(START_EXIT_SELECT);

    if (startOrExit === RedisDriverChannel.command.exit) {
        await RedisPublisher.publish(channel, command.exit).then(() => {
            RedisPublisher.disconnect();
        });

        return;
    }

    await RedisPublisher.publish(channel, command.start);

    const exitNow = false;

    while (!exitNow) {
        const { pauseOrExit } = await prompts(PAUSE_EXIT_SELECT);

        if (pauseOrExit === RedisDriverChannel.command.exit) {
            await RedisPublisher.publish(channel, command.exit).then(() => {
                RedisPublisher.disconnect();
            });

            return;
        }

        await RedisPublisher.publish(channel, command.pause);

        const { continueOrExit } = await prompts(CONTINUE_EXIT_SELECT);

        if (continueOrExit === RedisDriverChannel.command.exit) {
            await RedisPublisher.publish(channel, command.exit).then(() => {
                RedisPublisher.disconnect();
            });

            return;
        }

        await RedisPublisher.publish(channel, command.continue);
    }
})();
