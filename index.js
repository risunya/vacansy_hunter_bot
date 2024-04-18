const { Telegraf, Markup } = require('telegraf');
const { start, vacancies, about, vacanciesNext, vacanciesPrev, backtostart } = require('./controllers/command');

const bot = new Telegraf('6997313003:AAE89uPIv4W9BoJVwegBLSoagozlXHG5HzY');


bot.action('vacancy-intro', (ctx) => {
    vacancies(ctx);
})

bot.action('right-controller', (ctx) => {
    vacanciesNext(ctx);
})

bot.action('left-controller', (ctx) => {
    vacanciesPrev(ctx);
})

bot.action('back-to-menu', (ctx) => {
    backtostart(ctx);
})

bot.action('about-button', (ctx) => {
    about(ctx);
})




bot.start(start);


bot.launch();