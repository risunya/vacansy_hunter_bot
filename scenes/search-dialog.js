const { dialogCityMenu, dialogExpirienceMenu } = require("../utils/buttons")

const searchFirstQuestion = ctx => ctx.reply(
`📍Для начала давай разберемся *где ты находишься*\\. Мы _open\\-source проект_, так что *ваши действия абсолютно анонимны\\!*

🔥_Тебе *нужно воспользоваться подсказками снизу*\\!_`, 
    {
    parse_mode: 'MarkdownV2',
    reply_markup: dialogCityMenu,
    disable_web_page_preview: true
    }
)

const searchSecondQuestion = (ctx, city) =>  {
    console.log(ctx,city)
    let message = (city == "1") ? 'Москву' :
    (city == "2") ? 'Питер мх' :
    'Екатеринбург';

    ctx.reply(
    `🔎Отлично\\! Ты выбрал _*${message}*_\\
    
    🔥А теперь *расскажи про свой опыт*, ты уже _проженный специалист_ или _недавно в профессии_?`, 
        {
        parse_mode: 'MarkdownV2',
        reply_markup: dialogExpirienceMenu,
        disable_web_page_preview: true
        }
    )
    
}


    
module.exports = {
    searchFirstQuestion,
    searchSecondQuestion
}
