import { TickersMonitoring } from './actions/tickers-monitoring';
import { MexSocket } from './ws/mex-socket';

export async function main() {
    const socket = await MexSocket.open();
    socket.subscribe['sub.tickers']().onAnswer(new TickersMonitoring().monitoring);
}
