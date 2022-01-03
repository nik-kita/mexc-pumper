import axios from 'axios';
import dotenv from 'dotenv';
import moment from 'moment';
import Ws from 'ws';
import { BASE_URL, GetEnum } from './api/types/endpoints.enum';
import { SignGenerator } from './global/sign-generator.global';
import { pause } from './global/utils/pause.util';
import { MexSocket } from './ws/mex-socket';
import { WS_CONNECTION_ADDRESS } from './ws/types/ws.enum';

dotenv.config();

async function main() {
    const socket = await MexSocket.open();
    socket.subscribe({
        method: 'sub.tickers',
        param: {},
    });
    await pause(5000);
    await socket.close();
}

(async () => {
    try {
        main();
    } catch (error) {
        console.log('======================== ERROR ==========================');
        console.log(error);
    }
})();
