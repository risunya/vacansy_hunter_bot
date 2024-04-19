# Job Hunter 🏹

## Описание проекта 📖

Данное приложение представляет собой бота для мессенджера Telegram, который выполняет функции мониторинга и выдачи интересующих нас вакансий по запросу пользователя.

## Используемые технологии 🔨

Для разработки бота я использовал:

- [grammy](https://github.com/grammyjs/grammY) - фреймворк для создания ботов в Telegram на языке JavaScript/Node.js.
- [Axios](https://github.com/axios/axios) - библиотека для выполнения HTTP-запросов из Node.js.
- [Mongoose](https://github.com/Automattic/mongoose) - инструмент для моделирования объектов MongoDB.
- [dotenv](https://github.com/motdotla/dotenv) - модуль для загрузки переменных среды из файла `.env`.

## Установка и запуск 📦

*Для запуска приложения вам потребуется Node.js версии 12 или выше.*

**1. Клонируйте репозиторий:**

*git clone https://github.com/risunyaaa/vacansy_hunter_bot*

**2. Перейдите в директорию проекта:**

*cd vacansy_hunter_bot*

**3. Установите зависимости:**

*npm install*

**4. Создайте файл .env в корне проекта и укажите в нем необходимые переменные:**

*TELEGRAM_BOT_TOKEN=your_telegram_bot_token
MONGODB_URI=your_mongodb_uri*

**5. Запустите приложение:**

*npm run dev*

## Автор 🧙🏾

*Автор этого проекта - [**@risunyaaa**](https://github.com/risunyaaa). Для связи с ним вы можете отправить сообщение на адрес risunyaaa@yandex*

## Лицензия 🔦
*Этот проект лицензируется по лицензии MIT - подробности смотрите в файле **LICENSE**.*

## Структура проекта 🧱

+ **bot.js** - *инициализация бота*
+ **config** - *data и перемнные окружения* 
+ **controllers** - *для команд и сцен* 
+ **utils** - *для утилит и кнопок* 
+ **services** - *api и бизнес-логика* 