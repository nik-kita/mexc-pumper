import dotenv from 'dotenv';
import { main } from './main';

dotenv.config();

(async () => {
    try {
        await main();
    } catch (error) {
        console.log('======================== ERROR ==========================');
        console.log(error);
    }
})();
