const { Telegraf, Markup } = require('telegraf');
const { start, vacancies, about } = require('./controllers/command');

const bot = new Telegraf('6997313003:AAE89uPIv4W9BoJVwegBLSoagozlXHG5HzY');


bot.action('vacancy-intro', (ctx) => {
    vacancies(ctx);
})

bot.action('back-to-menu', (ctx) => {
    start(ctx);
})

bot.action('about-button', (ctx) => {
    about(ctx);
})



bot.start(start);


bot.launch();