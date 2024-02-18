require('dotenv').config({ path: './config/.env' });

const mongoose = require('mongoose');
const { setupBot } = require('./bot');

(async function() {
    try {
        await mongoose.connect(process.env.DB_TOKEN, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            dbName: 'tgBot'
        });

        await setupBot().launch();
    } catch (error) {
        console.error(error);
    }
})();