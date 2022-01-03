import Crypto from 'crypto';
import dotenv from 'dotenv';
import moment from 'moment';
import Qs from 'qs';

dotenv.config();

export class SignGenerator {
    private SECRET_KEY = process.env.SECRET_KEY as string;

    private ACCESS_KEY = process.env.ACCESS_KEY as string;

    private processingQueryString(query?: object) {
        if (!query) return '';

        return Qs.stringify(query);
    }

    public sign(data: {
    query?: object,
    body?: object,
  }) {
        const stringToSign = `${this.ACCESS_KEY}${this.generateReqTime()}${this.processingQueryString(data.query)}${data.body || ''}`;

        return this.processingSignature(stringToSign);
    }

    private processingSignature(stringToSign: string) {
        return Crypto.createHmac('sha256', this.SECRET_KEY).update(stringToSign).digest('hex');
    }

    private generateReqTime(): string {
        return moment().format('x');
    }
}
