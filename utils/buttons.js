const { InlineKeyboard, Keyboard } = require('grammy');

const mainMenu = new InlineKeyboard()
    .text('Найти вакансии', 'vacancy-intro')
    .text('О создателе', 'about-button')

const vacanciesMenu = new InlineKeyboard()
    .text('⬅️', 'left-controller')
    .text('➡️', 'right-controller')
    .text('↩️ В меню', 'back-to-menu')

const aboutMenu = new InlineKeyboard()
    .text('↩️ В меню', 'back-to-menu')

const helpMenu = new Keyboard().text('Вернуться в меню').row().resized().oneTime()
    
    module.exports = {
    mainMenu,
    vacanciesMenu,
    aboutMenu,
    helpMenu
}