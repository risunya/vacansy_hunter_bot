const { Bot } = require('grammy');
require('dotenv').config({path: './config/.env'});
const { start, vacancies, about, vacanciesNext, vacanciesPrev, backtostart } = require('./controllers/command');
const { helpMenu } = require('./utils/buttons');

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
    await start(ctx);
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

bot.hears('Вернуться в меню',  async (ctx) => {
    await vacancies(ctx);
})

bot.on('message:text', async (ctx) => {
    await ctx.react('🤔');
    await ctx.reply('К сожалению, я не понимаю вас. Пожалуйста, воспользуйтесь коммандами бота. ', {
    parse_mode: 'HTML',
    reply_markup: helpMenu
    })

})

bot.start(start);

