const { mainMenu } = require('../utils/buttons');

const start = ctx => ctx.reply('Привет! Я бот, который поможет тебе!', {
    ...mainMenu
});

const backMenu = ctx => ctx.reply('Ты находишься в меню!', {
    ...mainMenu
});

//команда для входа в сцену
const startWhatWeather = ctx => {}

module.exports = {
    start,
    backMenu
}