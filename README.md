# Movies Explorer - бэкенд часть проекта по поиску фильмов

<p align="center">
  <img src="https://img.shields.io/badge/node.js-v16.16.0-green">
  <img src="https://img.shields.io/badge/express-v4.18.2-lightgrey">
  <img src="https://img.shields.io/badge/mongoose-v6.7.2-green">
</p>

### URL:
https://api.movies-explorer.sk.nomoredomains.club

### Запуск проекта:
* Установить __npm__ `npm install -g npm`;
* Для запуска проекта в режиме __development__ `npm run dev`;
* Для запуска проекта в режиме __production__ `npm start`;

### О проекте:
Серверная часть проекта [Movies Explorer](https://movies-explorer.sk.nomoredomainsclub.ru). Выполняет функцию отбработки запросов, валидации данных, сохранения данных в базу __MongoDB__, обработки ошибок.

### Функциональность проекта:
* Код сервера написан с помощью фреймворка __express__;
* Данные хранятся в __MongoDB__. Перед отправкой на сервер, все данные валидируются посредством моделей данных. Используется метод `mongoose.Schema`;
* Реализованы __контроллеры__ для обработки всех запросов;
* Маршруты обрабатываются при помощи __Express Router__. Все данные проходят валидацию __celebrate Joi__, перед попаданием в контроллер;
* Реализовано логирование __запросов__ и __ошибок__ в отдельные файлы в корне проекта;
* Установлен __линтер__ для корректности кода;

## Технологии в проекте:
<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-black?style=for-the-badge&logo=JavaScript&logoColor=yellow"/>
  <img src="https://img.shields.io/badge/Node.js-black?style=for-the-badge&logo=Node.js&logoColor=green"/>
  <img src="https://img.shields.io/badge/Express-black?style=for-the-badge&logo=Express&logoColor=Aqua"/>
  <img src="https://img.shields.io/badge/MongoDB-black?style=for-the-badge&logo=MongoDB&logoColor=SeaGreen"/>
</p>

📱 [Frontend](https://github.com/StasKudinow/movies-explorer-frontend)

🌎 __IP:__ 62.84.125.241

🦸🏻‍♂️ __Developers:__ [Stas Kudinov](https://github.com/StasKudinow)
