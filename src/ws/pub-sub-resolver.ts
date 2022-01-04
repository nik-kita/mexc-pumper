import Promitter from '@nik-kita/promitter';
import { WebSocket } from 'ws';
import {
    T_PONG_ANSWER, T_SEND_PING, T_TICKERS_ANSWER, T_TICKERS_SUB, T_TICKERS_UNSUB,
} from './types/ws-sub-pub.type';
import { WsChannelEnum, WsMethodEnum } from './types/ws.enum';

export class PubSubResolver {
    constructor(
    private promitter: Promitter,
    private ws: WebSocket,
    ) { /* TODO */ }

    public ['ping'](subscription: T_SEND_PING) {
        this.ws.send(JSON.stringify(subscription));

        return {
            onAnswer: (cb: (answer: T_PONG_ANSWER) => void) => {
                this.ws.send(JSON.stringify(subscription));
                this.promitter.on(WsChannelEnum.PONG, cb);
            },
        };
    }

    public ['sub.tickers']() {
        const subscription: T_TICKERS_SUB = {
            data: {},
            method: WsMethodEnum.SUB_TICKERS,
        };
        return {
            onAnswer: (cb: (answer: T_TICKERS_ANSWER) => void) => {
                this.ws.send(JSON.stringify(subscription));
                this.promitter.on(WsChannelEnum.PUSH_TICKERS, cb);
            },
        };
    }

    public ['unsub.tickers']() {
        const unsubscribe: T_TICKERS_UNSUB = {
            data: {}, method: WsMethodEnum.UNSUB_TICKERS,
        };
        this.ws.send(unsubscribe);
    }

    login() { /* TODO */ }

    ['sub.deal']() { /* TODO */ }

    ['sub.depth']() { /* TODO */ }

    ['sub.depth.full']() { /* TODO */ }

    ['sub.fair.price']() { /* TODO */ }

    ['sub.finding.price']() { /* TODO */ }

    ['sub.finding.rate']() { /* TODO */ }

    ['sub.kline']() { /* TODO */ }

    ['sub.ticker']() { /* TODO */ }

    ['unsub.deal']() { /* TODO */ }

    ['unsub.depth']() { /* TODO */ }

    ['unsub.fair.price']() { /* TODO */ }

    ['unsub.finding.rate']() { /* TODO */ }

    ['unsub.index.price']() { /* TODO */ }

    ['unsub.kline']() { /* TODO */ }

    ['unsub.ticker']() { /* TODO */ }

    ['usub.depth.full']() { /* TODO */ }
}
