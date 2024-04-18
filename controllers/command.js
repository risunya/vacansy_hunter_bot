const { mainMenu, vacanciesMenu, aboutMenu } = require("../utils/buttons");

const start = ctx => ctx.reply('Привет, я тот самый бот, который поможет тебе найти все интересущие тебя вакансии!', {
    ...mainMenu
})

const vacancies = ctx => {
    let dataArray = [];
    fetch('https://api.hh.ru/vacancies/')
  .then(response => {
    if (!response.ok) {
      throw new Error('Ошибка при получении данных: ' + response.status);
    }
    return response.json();
  })
  .then(data => {
    // Проходим по каждой вакансии и выводим только названия
    data.items.forEach(vacancy => {
        dataArray.push(vacancy.name);
    });

    ctx.reply(`Доступные вакансии: 📜 \n\n ${dataArray.join('\n')}` , {
        ...vacanciesMenu
    }) 
  })
  .catch(error => {
    console.error('Произошла ошибка:', error);
  });
}

const about = ctx => ctx.reply('Привет, меня зовут Андрей! 🛠️ \nЯ создатель данного бота. 🧰 \n\nЕсли вы заметили баги или у вас есть предложения по сотрудничеству - обязательно напишите мне: @risunya 🙋‍♂️ ', {
    ...aboutMenu
})

module.exports = {
    start,
    vacancies,
    about,
}