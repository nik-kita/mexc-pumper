import Ws, { WebSocket } from 'ws';
import Promitter from '@nik-kita/promitter';
import { WsMethodEnum, WS_CONNECTION_ADDRESS } from './types/ws.enum';
import { T_WS_CHANNEL_ANSWER } from './types/ws-sub-pub.type';

export class MexSocket {
    private ORIGINAL_WS_CLIENT!: WebSocket;

    private pr = new Promitter();

    private constructor() {}

    public static async open() {
        const mex = new MexSocket();

        mex.ORIGINAL_WS_CLIENT = new Ws(WS_CONNECTION_ADDRESS)
            .on('open', () => {
                mex.pr.emit('open');
            }).on('close', () => {
                mex.pr.emit('close');
            }).on('error', () => {
                mex.pr.emit('error');
            })
            .on('message', (data: unknown) => {
                const message = JSON.parse(String(data)) as T_WS_CHANNEL_ANSWER<any, any>;
                mex.pr.emit(message.channel, message);
            });

        await mex.pr.wait('open');

        return mex;
    }

    public subscribe(data: any) {
        this.ORIGINAL_WS_CLIENT.send(JSON.stringify(data));
        this.pr.on('push.tickers', (message) => {
            console.log(message);
        });
    }
}
