const express = require('express');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

// eslint-disable-next-line no-unused-vars
const dotenv = require('dotenv').config();

const app = express();

// const server = require('http').createServer(app);

// const io = require('socket.io')(server);

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', (req, res) => {
  res.send('Hi');
});

// io.on('connection', () => { /* … */ });

mongoose
  .connect(process.env.mongodbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(
    () => {
      app.listen(port);
    },
  ).catch((err) => {
    throw err;
  });
