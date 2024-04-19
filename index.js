const { Bot } = require('grammy');
require('dotenv').config({path: './config/.env'});
const { start, vacancies, about, vacanciesNext, vacanciesPrev, backtostart } = require('./controllers/command');

const bot = new Bot(process.env.BOT_TOKEN);

bot.api.setMyCommands([
    {
        command: 'start',
        description: 'Начать общение с ботом',
    },
    {
        command: 'faq',
        description: 'Часто задаваемые вопросы',
    }, 
    {
        command: 'support',
        description: 'Получить помощь',
    }
])


bot.command('start', async(ctx) => {
    start(ctx);
})

bot.callbackQuery('vacancy-intro', (ctx) => {
    vacancies(ctx);
})

bot.callbackQuery('right-controller', (ctx) => {
    vacanciesNext(ctx);
})

bot.callbackQuery('left-controller', (ctx) => {
    vacanciesPrev(ctx);
})

bot.callbackQuery('back-to-menu', (ctx) => {
    backtostart(ctx);
})

bot.callbackQuery('about-button', (ctx) => {
    about(ctx);
})

bot.on('message', async(ctx) => {
    await ctx.react('👍')
    await ctx.reply('Я не понимаю вас :(')
})

bot.start(start);

