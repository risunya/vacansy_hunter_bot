const { mainMenu } = require("../utils/buttons");

const start = ctx => ctx.reply(
    `Привет, *${ctx.message.from.first_name ? ctx.message.from.first_name : 'незнакомец'}*\\! 🛸 \n\n_Я тот самый __[бот](https://t.me/jobhunterx_bot)__, который *поможет тебе* найти все интересущие тебя вакансии\\! 💠_ \n\nБольшое спасибо сервису *[hh](https://hh.ru/)* за то, что любезно предоставляют работяющий *[api](https://api.hh.ru/openapi/)*\\! 🥏 \n\n🌀 1\\. Наш *бот запатентован* по MIT [license](https://github.com/risunya/vacansy_hunter_bot?tab=MIT-1-ov-file#)\n🌀 2\\. Мы *не несем ответственность* за ошибки сервиса, который предоставляет нам данные\n🌀 3\\. Мы используем только *открытые источники данных*`, 
    {
    parse_mode: 'MarkdownV2',
    reply_markup: mainMenu,
    disable_web_page_preview: true
    }
)
const backtostart = ctx => ctx.reply(`
*Мы \\- тот самый сервис, который поможет найти работу твоей мечты\\! ⚡ Кстати, напомню, что:* 

👾 _*1\\. Мы удобнее \\!*_
👾 _*2\\. Мы быстрее \\!*_
👾 _*3\\. Мы [безопаснее](https://nodejs.org/en/learn/getting-started/security-best-practices) \\!*_
`, 
{
    parse_mode: 'MarkdownV2',
    reply_markup: mainMenu,
})

module.exports = {
    start,
    backtostart
}