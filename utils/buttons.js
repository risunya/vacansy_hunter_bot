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
    .text('Москва',"first-step").row()
    .text('Санкт-Петербург',"first-step").row()
    .text('Казань',"first-step").row()
    .text('Новгород',"first-step").row()
    .text('Челябинск',"first-step").row()

const dialogExpirienceMenu = new InlineKeyboard()
    .text('Нет опыта', "second-step").row()
    .text('От 1 года до 3 лет', "second-step")
    .text('От 3 до 6 лет', "second-step")
    
    module.exports = {
    mainMenu,
    vacanciesMenu,
    aboutMenu,
    helpMenu,
    dialogExpirienceMenu,
    dialogCityMenu
}