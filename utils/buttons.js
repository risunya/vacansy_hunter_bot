const {Markup} = require('telegraf');


const mainMenu = 
    Markup.inlineKeyboard([
            [Markup.button.callback('Найти вакансии', 'vacancy-intro'),
             Markup.button.callback('О создателе', 'about-button')]
    ]).resize();

const vacanciesMenu =
    Markup.inlineKeyboard([
        [Markup.button.callback('⬅️', 'left-controller'),
        Markup.button.callback('➡️', 'right-controller')],
        [Markup.button.callback('↩️ В меню', 'back-to-menu')]
    ]).resize();

 const aboutMenu = 
    Markup.inlineKeyboard([
             [Markup.button.callback('↩️ В меню', 'back-to-menu')]
    ]).resize();


module.exports = {
    mainMenu,
    vacanciesMenu,
    aboutMenu
}