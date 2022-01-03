import axios from 'axios';
import dotenv from 'dotenv';
import moment from 'moment';
import { GetEnum } from './api/endpoints.enum';
import { BASE_URL } from './global/constants.global';
import { SignGenerator } from './global/signature/sign-generator.general';

dotenv.config();

/* eslint-disable @typescript-eslint/no-unused-vars */
async function main() {
    const timestamp = moment().format('x');
    const signGenerator = new SignGenerator(timestamp);
    const signature = signGenerator.sign({});
    console.log('signature', signature);
    const { data: axiosData } = await axios({
        headers: {
            Signature: signature,
            ApiKey: process.env.ACCESS_KEY as string,
            'Request-Time': timestamp,
            'Content-Type': 'application/json',
        },
        method: 'GET',
        url: `${BASE_URL}${GetEnum.ACCOUNT_INFO}`,
        // data: this.body,
    });
    const { data } = axiosData;

    console.log('account info:');
    console.log(data);
    console.log('all symbols');

    const { data: allSymbols } = await axios({
        method: 'GET',
        url: `${BASE_URL}${GetEnum.MARKET_TICKER}`,
    });

    console.log(allSymbols.data);
}

(async () => {
    try {
        main();
    } catch (e) {
        console.log('ERROR', e);
    }
})();
