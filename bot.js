const { Telegraf } = require('telegraf');
const { start } = require('./controllers/command');

const bot = new Telegraf(process.env.BOT_TOKEN);

const setupBot = () => {

    bot.use((ctx, next) => {
        console.log(ctx);
        return next()
    });

    bot.start(start)

    return bot;

}

module.exports = {
    setupBot
}
