const { Bot } = require('grammy');
require('dotenv').config({path: './config/.env'});
const { helpMenu } = require('./utils/buttons');
const { start, backtostart } = require('./scenes/start-menu');
const { vacancies, vacanciesNext, vacanciesPrev } = require('./scenes/search-menu');
const { about } = require('./scenes/about-me');
const { faq } = require('./commands/faq');
const { support } = require('./commands/support');

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
    await clearCommandMessage(ctx);
})

bot.command('faq', async(ctx) => {
    await faq(ctx);
    clearCommandMessage(ctx);
})

bot.command('support', async(ctx) => {
    await support(ctx);
    clearCommandMessage(ctx);
})

bot.callbackQuery('vacancy-intro', async(ctx) => {
    await vacancies(ctx);
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

bot.hears('Вернуться в меню',  async (ctx) => {
    await vacancies(ctx);
    clearCommandMessage(ctx);
})

bot.on('message:text', async (ctx) => {
    await ctx.react('🤔');
    await ctx.reply(`
⚠️ _К сожалению, *я не понимаю вас*\\. Пожалуйста, воспользуйтесь *коммандами бота* или *кнопкой ниже*\\._  `,
     {
    parse_mode: 'MarkdownV2',
    reply_markup: helpMenu
    })
    clearCommandMessage(ctx);
})

function clearBotMessage (ctx) {
    if (ctx.update?.callback_query?.message?.chat?.id != undefined && ctx?.update?.callback_query?.message?.message_id != undefined) {
     ctx.api.deleteMessage(ctx.update.callback_query.message.chat.id, ctx.update.callback_query.message.message_id);
    } else {
        null
    }
}

function clearCommandMessage (ctx) {
     if (ctx?.message?.chat?.id != undefined && ctx?.message?.message_id != undefined) {
        ctx.api.deleteMessage(ctx.message.chat.id, ctx.message.message_id - 1);
        ctx.api.deleteMessage(ctx.message.chat.id, ctx.message.message_id);
     } else {
        null
     }
}

bot.start(start);

