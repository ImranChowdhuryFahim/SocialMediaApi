const express = require('express');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

// eslint-disable-next-line no-unused-vars
const dotenv = require('dotenv').config();

const userRouter = require('./Routes/User');

const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', userRouter);
app.use('/', (req, res) => {
  res.send('hi i am working');
});

mongoose
  .connect(process.env.mongodbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(
    () => {
      const server = app.listen(port);
      // eslint-disable-next-line global-require
      const io = require('socket.io')(server);
      io.on('connection', () => { /* … */ });
    },
  ).catch((err) => {
    throw err;
  });
