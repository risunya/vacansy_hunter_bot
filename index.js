const { Bot } = require('grammy');
require('dotenv').config({path: './config/.env'});
const { helpMenu } = require('./utils/buttons');
const { start, backtostart } = require('./scenes/start-menu');
const { vacancies } = require('./scenes/search-menu');
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
  
let city = '1';
let expirience = '';
let pagenumber = "";    

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

bot.callbackQuery('right-controller', (ctx, city,expirience,pagenumber) => {
    vacancies(ctx, city,expirience,pagenumber + 1);
})

bot.callbackQuery('left-controller', (ctx, city,expirience,pagenumber) => {
    vacancies(ctx, city,expirience,pagenumber - 1);
})

bot.callbackQuery('back-to-menu', (ctx) => {
    backtostart(ctx);
    clearBotMessage(ctx);
})

bot.callbackQuery('about-button', (ctx) => {
    about(ctx);
    clearBotMessage(ctx);
})

bot.callbackQuery('vacancy-intro', async(ctx) => {
    searchFirstQuestion(ctx);
    clearBotMessage(ctx);
})

bot.callbackQuery(['first-city',"second-city","third-city"], (ctx) => {
    city = (ctx.match == "first-city") ? "1" :
    ctx.match == "second-city" ?  "2" : 
    "3";
    searchSecondQuestion(ctx, city);
    clearBotMessage(ctx);
})

bot.callbackQuery(['f-exp',"s-exp","t-exp"], (ctx, city) => {
    exp = (ctx.match == "f-exp") ? "noExperience" :
    ctx.match == "s-exp" ?  "between1And3" : 
    "between3And6";
    vacancies(ctx, city,expirience,pagenumber);
    clearBotMessage(ctx);
})

bot.hears('Вернуться в меню',  (ctx) => {
    backtostart(ctx);
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

