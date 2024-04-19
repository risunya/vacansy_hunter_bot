const { InlineKeyboard } = require('grammy');

const mainMenu = new InlineKeyboard()
    .text('Найти вакансии', 'vacancy-intro')
    .text('О создателе', 'about-button')

const vacanciesMenu = new InlineKeyboard()
    .text('⬅️', 'left-controller')
    .text('➡️', 'right-controller')
    .text('↩️ В меню', 'back-to-menu')

 const aboutMenu = new InlineKeyboard()
    .text('↩️ В меню', 'back-to-menu')

module.exports = {
    mainMenu,
    vacanciesMenu,
    aboutMenu
}