const { Bot } = require('grammy');
require('dotenv').config({path: './config/.env'});
const { helpMenu } = require('./utils/buttons');
const { start, backtostart } = require('./scenes/start-menu');
const { vacancies, vacanciesNext, vacanciesPrev } = require('./scenes/search-menu');
const { about } = require('./scenes/about-me');
const { faq } = require('./commands/faq');
const { support } = require('./commands/support');
const { clearCommandMessage, clearBotMessage } = require('./services/clear');
const { searchFirstQuestion, searchSecondQuestion } = require('./scenes/search-dialog');

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
    },
    {
        command: 'clear',
        description: 'Полностью удалить историю сообщений',
    }
])
  

bot.command('start', async(ctx) => {
    await start(ctx);
    await clearCommandMessage(ctx);
})

bot.command('faq', async(ctx) => {
    await faq(ctx);
    await clearCommandMessage(ctx);
})

bot.command('support', async(ctx) => {
    await support(ctx);
    await clearCommandMessage(ctx);
})

bot.callbackQuery('vacancy-intro', async(ctx) => {
    searchFirstQuestion(ctx);
    clearBotMessage(ctx);
})

bot.callbackQuery('right-controller', (ctx) => {
    vacanciesNext(ctx);
    clearBotMessage(ctx);
})

bot.callbackQuery('left-controller', (ctx) => {
    vacanciesPrev(ctx);
    clearBotMessage(ctx);
})

bot.callbackQuery('back-to-menu', (ctx) => {
    backtostart(ctx);
    clearBotMessage(ctx);
})

bot.callbackQuery('about-button', (ctx) => {
    about(ctx);
    clearBotMessage(ctx);
})

bot.callbackQuery('first-step', (ctx) => {
    searchSecondQuestion(ctx);
    clearBotMessage(ctx);
})

bot.callbackQuery('second-step', (ctx) => {
    vacancies(ctx);
    clearBotMessage(ctx);
})

bot.hears('Вернуться в меню',  (ctx) => {
    vacancies(ctx);
    clearCommandMessage(ctx);   
})

bot.on('message:text', async (ctx) => {
    await ctx.reply(`
⚠️ _К сожалению, *я не понимаю вас*\\. Пожалуйста, воспользуйтесь *коммандами бота* или *кнопкой ниже*\\._  `,
     {
    parse_mode: 'MarkdownV2',
    reply_markup: helpMenu
    })
    clearCommandMessage(ctx);
})


bot.start();

