import axios from 'axios';
import dotenv from 'dotenv';
import moment from 'moment';
import Ws from 'ws';
import { BASE_URL, GetEnum } from './api/types/endpoints.enum';
import { SignGenerator } from './global/sign-generator.global';
import { WS_CONNECTION_ADDRESS } from './ws/types/ws.enum';

dotenv.config();

async function main() {
    const timestamp = moment().format('x');
    const signGenerator = new SignGenerator(timestamp);
    const signature = signGenerator.sign({});
    const { data: axiosData } = await axios({
        headers: {
            Signature: signature,
            ApiKey: process.env.ACCESS_KEY as string,
            'Request-Time': timestamp,
            'Content-Type': 'application/json',
        },
        method: 'GET',
        url: `${BASE_URL}${GetEnum.ACCOUNT_INFO}`,
    });
    const { data } = axiosData;

    console.log(data);
    console.log('================================');
    console.log(axiosData);

    const ws = new Ws(WS_CONNECTION_ADDRESS)
        .on('open', () => {
            console.log('open');
            ws.send(JSON.stringify({
                method: 'ping',
            }));
        }).once('message', (message) => {
            console.log(JSON.parse(message.toString()));

            ws.on('message', (message2) => {
                console.log(JSON.parse(message2.toString()));
            }).send(JSON.stringify({
                method: 'login',
                param: {
                    apiKey: process.env.ACCESS_KEY,
                    reqTime: timestamp,
                    signature: new SignGenerator(timestamp).sign({}),
                },
            }));
        });
}

(async () => {
    try {
        main();
    } catch (error) {
        console.log('======================== ERROR ==========================');
        console.log(error);
    }
})();
