const { aboutMenu } = require("../utils/buttons");

const about = ctx => ctx.reply(
`👀* Привет, меня зовут Андрей\\! *
     
🎫 _Я *создатель* данного бота\\._ Если вы заметили *баги*, ~||что невозможно|| ~ или у вас есть *предложения по сотрудничеству* \\- обязательно напишите мне\\.
 *telegram:* _@risunya_
 *GitHub:* [_@risunya_](https://github.com/risunya)
    `, 
    {
    parse_mode: 'MarkdownV2',
    reply_markup: aboutMenu,
    }
)

module.exports = {
    about,
}