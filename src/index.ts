import dotenv from 'dotenv';
import Ws from 'ws';


dotenv.config();

async function main() {
    const ws = new Ws()
}

(async () => {
    try {
        main();
    } catch (error) {
        console.log('======================== ERROR ==========================');
        console.log(error);
    }
})();
