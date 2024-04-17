const { Scenes } = require("telegraf");
const backButtonMenuAndLocation = require('../utils/buttons');

const whatWeatherScene = new Scenes.BaseScene('weather');

whatWeatherScene.enter(ctx => ctx.reply('Пришли мне свою геопозицию', {
    ...backButtonMenuAndLocation
}))