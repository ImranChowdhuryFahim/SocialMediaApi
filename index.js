const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', (req, res, next) => {
  res.send('Hi');
});

app.listen(port);
