/* eslint-disable linebreak-style */
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const router = require('./routes/index');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost:27017/bitfilmsdb', {
  autoIndex: true,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// заглушка
app.use((req, res, next) => {
  req.user = {
    _id: '63a1bd2462880dc539e8d4b3',
  };

  app.use(router);

  next();
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Сервер запущен на:');
  // eslint-disable-next-line no-console
  console.log('http://localhost:3000');
});
