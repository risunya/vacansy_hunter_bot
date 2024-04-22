const { InlineKeyboard, Keyboard } = require('grammy');

const mainMenu = new InlineKeyboard()
    .text('Начать поиск!', 'vacancy-intro')
    .text('О создателе', 'about-button')

const vacanciesMenu = new InlineKeyboard()
    .text('⬅️', 'left-controller')
    .text('➡️', 'right-controller')
    .text('↩️ В меню', 'back-to-menu')

const aboutMenu = new InlineKeyboard()
    .text('↩️ В меню', 'back-to-menu')

const helpMenu = new Keyboard().text('Вернуться в меню').row().resized().oneTime()

const dialogCityMenu = new InlineKeyboard()
    .text('Москва',"first-city").row()
    .text('Санкт-Петербург',"second-city").row()
    .text('Казань',"third-city").row()

const dialogExpirienceMenu = new InlineKeyboard()
    .text('Нет опыта', "f-exp").row()
    .text('От 1 года до 3 лет', "s-exp")
    .text('От 3 до 6 лет', "t-exp")
    
    module.exports = {
    mainMenu,
    vacanciesMenu,
    aboutMenu,
    helpMenu,
    dialogExpirienceMenu,
    dialogCityMenu
}