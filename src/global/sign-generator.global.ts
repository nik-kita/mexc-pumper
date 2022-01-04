import Crypto from 'crypto';
import Qs from 'qs';

export class SignGenerator {
    constructor(private timestamp: string) {}

    private processingQueryString(query?: object) {
        if (!query) return '';

        return Qs.stringify(query);
    }

    public sign(data: {
    query?: object,
    body?: object,
  }) {
        const stringToSign = `${process.env.ACCESS_KEY}${this.timestamp}${this.processingQueryString(data.query)}${data.body || ''}`;

        return this.processingSignature(stringToSign);
    }

    private processingSignature(stringToSign: string) {
        return Crypto.createHmac('sha256', process.env.SECRET_KEY as string).update(stringToSign).digest('hex');
    }
}
