import dotenv from 'dotenv';

dotenv.config();

async function main() {

}

(async () => {
    try {
        main();
    } catch (error) {
        console.log('======================== ERROR ==========================');
        console.log(error);
    }
})();
