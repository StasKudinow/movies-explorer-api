const STATUS_OK = 200;
const STATUS_CREATED = 201;
const ERROR_SERVER = 500;
const ERROR_VALIDATION = 400;
const ERROR_NOT_FOUND = 404;
const ERROR_AUTH = 401;
const ERROR_CONFLICT = 409;
const ERROR_FORBIDDEN = 403;
const SALT_ROUND = 10;

const MESSAGE_SERVER = 'На сервере произошла ошибка';
const MESSAGE_VALIDATION = 'Переданы некорректные данные';
const MESSAGE_NOT_FOUND = 'Запрашиваемый фильм не найден';
const MESSAGE_AUTH = 'Ошибка авторизации';
const MESSAGE_CONFLICT = 'Пользователь с переданным email уже существует';
const MESSAGE_FORBIDDEN = 'Нет доступа';

const { NODE_ENV, JWT_SECRET = 'JWT_SECRET' } = process.env;
const { DB_ADDRESS = 'mongodb://localhost:27017/moviesdb' } = process.env;

module.exports = {
  STATUS_OK,
  STATUS_CREATED,
  ERROR_SERVER,
  ERROR_VALIDATION,
  ERROR_NOT_FOUND,
  ERROR_AUTH,
  ERROR_CONFLICT,
  ERROR_FORBIDDEN,
  SALT_ROUND,
  MESSAGE_SERVER,
  MESSAGE_VALIDATION,
  MESSAGE_NOT_FOUND,
  MESSAGE_AUTH,
  MESSAGE_CONFLICT,
  MESSAGE_FORBIDDEN,
  NODE_ENV,
  JWT_SECRET,
  DB_ADDRESS,
};
