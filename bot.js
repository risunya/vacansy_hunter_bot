const { Telegraf, Scenes } = require('telegraf');
const { CMD_TEXT } = require('./config/consts');
const { 
    start,
    backMenu 
    } = require('./controllers/command');


const bot = new Telegraf(process.env.BOT_TOKEN);

const stage = new Scenes.Stage([]);

const setupBot = () => {

    bot.use(session({collectionName: 'sessions'}));
    bot.use(stage.middleware());

    bot.use((ctx, next) => {
        console.log(ctx);
        return next()
    });

    bot.start(start);

    bot.hears(CMD_TEXT.menu, backMenu);
    bot.hears(CMD_TEXT.weatherI, );


    return bot;
}

module.exports = {
    setupBot
}
