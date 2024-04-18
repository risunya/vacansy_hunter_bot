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
  .then(data => {
    // Проходим по каждой вакансии и выводим только названия
    data.items.forEach(vacancy => {
        dataArray.push(' ' + vacancy.name + '\n ' + vacancy.salary?.from + ' ' + vacancy.salary?.currency + '\n');
    });

    ctx.reply(`Доступные вакансии: 📜 \n\n${dataArray.join('\n')}` , {
        ...vacanciesMenu
    }) 
  })
  .catch(error => {
    console.error('Произошла ошибка:', error);
  });
}

module.exports = {
    getData
}