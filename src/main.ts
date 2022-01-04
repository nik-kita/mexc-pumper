import { REDIS } from './common/redis';
import { pause } from './global/utils/pause.util';
import { MexSocket } from './ws/mex-socket';

export async function main() {
    console.log(REDIS.RedisPublisher.status);
    const socket = await MexSocket.open();
    // socket.subscribe['sub.tickers']().onAnswer((answer) => {
    //     console.log(answer.data);
    // });
    // await pause(6000);
    await socket.close();
    await pause(5000);
}
