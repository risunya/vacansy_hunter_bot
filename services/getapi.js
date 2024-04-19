const { vacanciesMenu } = require("../utils/buttons");


getData = (ctx, pagenumber) => {
    let dataArray = [];
    fetch(`https://api.hh.ru/vacancies?per_page=5&page=${pagenumber}`)

  .then(response => {
    if (!response.ok) {
      throw new Error('Ошибка при получении данных: ' + response.status);
    }
    return response.json();
  })

  .then((data) => {
    // Проходим по каждой вакансии и выводим только названия
    data.items.forEach(vacancy => {

        let payday = (
          (vacancy?.salary?.from === undefined && vacancy?.salary?.to === undefined) ? ('Не указано') : (
            (vacancy?.salary?.from === null) ? `До ${vacancy?.salary?.to + ' ' + vacancy?.salary?.currency}` :
            (vacancy?.salary?.to === null) ? `От ${vacancy?.salary?.from + ' ' + vacancy?.salary?.currency}` :
            `${vacancy?.salary?.from + ' - ' + vacancy?.salary?.to  + ' (' + vacancy?.salary?.currency + ')'}`
          )) 
        dataArray.push(` <a href="${vacancy.alternate_url}">` + vacancy.name + '</a>\n ' + payday  + `\n`)
    });

    ctx.reply(`<b>📜 Доступные вакансии:</b> <i>(стр. ${data.page + 1}/${data.pages})</i> \n\n<i>${dataArray.join('\n')}</i>` , {
      parse_mode: 'HTML',
      reply_markup: vacanciesMenu,
    }) 
  })

  .catch(error => {
    console.error('Произошла ошибка:', error);
  });
}

module.exports = {
    getData
}