const { getData } = require("../services/getapi");
const { mainMenu, aboutMenu } = require("../utils/buttons");

const start = ctx => ctx.reply(
    `Привет, *${ctx.message.from.first_name ? ctx.message.from.first_name : 'незнакомец'}*\\! 🔮 \n\n_Я тот самый *бот*, который *поможет тебе* найти все интересущие тебя вакансии\\! 💼_ \n\nБольшое спасибо сервису [hh](https://hh.ru/) за то, что любезно предоставляют работяющий [api](https://api.hh.ru/openapi/)\\!`, 
    {
    parse_mode: 'MarkdownV2',
    reply_markup: mainMenu,
    }
)



const backtostart = ctx => ctx.reply(`А я все еще \\- тот самый бот, который помогает искать все интересущие тебя вакансии\\!`, {
    parse_mode: 'MarkdownV2',
    reply_markup: mainMenu,
})

let pagenumber = 0;

const vacancies = (ctx) => {
    getData(ctx, pagenumber)
}

const vacanciesNext = (ctx) => {
    pagenumber = pagenumber + 1;
    getData(ctx, pagenumber )
}

const vacanciesPrev = (ctx) => {
    if (pagenumber>=1) {
        pagenumber = pagenumber - 1;
        getData(ctx, pagenumber )
    } else {
        getData(ctx, 0 )
    }
}

const about = ctx => ctx.reply(
    'Привет, меня зовут Андрей\\! 🛠️\n  \nЯ *создатель* данного бота\\. 🧰 \n\nЕсли вы заметили баги, ~||что невозможно|| ~ или у вас есть предложения по сотрудничеству \\- обязательно напишите мне: @risunya 🙋‍♂️ ', 
    {
    parse_mode: 'MarkdownV2',
    reply_markup: aboutMenu,
    }
)

module.exports = {
    start,
    vacancies,
    about,
    vacanciesNext,
    vacanciesPrev,
    backtostart
}