import Promitter from '@nik-kita/promitter';
import Ws, { WebSocket } from 'ws';
import { PubSubResolver } from './pub-sub-resolver';
import { T_WS_CHANNEL_ANSWER } from './types/ws-sub-pub.type';
import { WS_CONNECTION_ADDRESS } from './types/ws.enum';

export class MexSocket {
    private constructor(
        private ws: WebSocket,
        private promitter: Promitter,
        private pubSubResolver: PubSubResolver,
    ) {
        this.promitter.on('close', () => {
            this.ws.close();
        });
    }

    public static async open() {
        const promitter = new Promitter();
        const ws = new Ws(WS_CONNECTION_ADDRESS)
            .on('open', () => {
                promitter.emit('open');
            }).on('close', () => {
                promitter.emit('close');
            }).on('error', () => {
                promitter.emit('error');
            })
            .on('message', (data: unknown) => {
                const message = JSON.parse(String(data)) as T_WS_CHANNEL_ANSWER<any, any>;
                promitter.emit(message.channel, message);
            });

        const pubSubResolver = new PubSubResolver(promitter, ws);
        const mex = new MexSocket(
            ws,
            promitter,
            pubSubResolver,
        );

        await promitter.wait('open');

        return mex;
    }

    public async close() {
        return this.promitter.emitAndWaitComplete('close');
    }

    public subscribe = this.pubSubResolver;
}
