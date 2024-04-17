const { Markup } = require("telegraf");
const { CMD_TEXT } = require("../config/consts");

const mainMenu = 
    Markup.keyboard([
        [CMD_TEXT.weatherI],
        [CMD_TEXT.weatherNoI]
    ]).resize();


const backButtonMenu = 
    Markup.keyboard([
        [CMD_TEXT.menu]
    ]).resize();

const backButtonMenuAndLocation = 
    Markup.keyboard([
        Markup.button.locationRequest('Мое местоположение'),
        Markup.button.text(CMD_TEXT.menu)
    ]).resize();

module.exports = {
    mainMenu,
    backButtonMenu,
    backButtonMenuAndLocation
}