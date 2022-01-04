import Redis, { RedisOptions } from 'ioredis';

const options: RedisOptions = {
    port: 6379,
    host: '127.0.0.1',
    db: 7,
};

export const REDIS = {
    RedisPublisher: new Redis(options),
    RedisSubscriber: new Redis(options),
};
