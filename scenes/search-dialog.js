const { dialogCityMenu, dialogExpirienceMenu } = require("../utils/buttons")

const searchFirstQuestion = ctx => ctx.reply(
`Для начала давай разберемся где ты находишься\\. 
Тебе нужно воспользоваться подсказками снизу\\!`, 
    {
    parse_mode: 'MarkdownV2',
    reply_markup: dialogCityMenu,
    disable_web_page_preview: true
    }
)


const searchSecondQuestion = ctx => ctx.reply(
`Отлично\\! А теперь расскажи про свой опыт, ты уже проженный специалист или недавно в профессии?`, 
    {
    parse_mode: 'MarkdownV2',
    reply_markup: dialogExpirienceMenu,
    disable_web_page_preview: true
    }
)


    
module.exports = {
    searchFirstQuestion,
    searchSecondQuestion
}
