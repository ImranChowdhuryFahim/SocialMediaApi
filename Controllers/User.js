/* eslint-disable no-unused-vars */
const User = require('../Models/User');

module.exports = {

  Register: (req, res, next) => {
    const { firstname } = req.body;
    const { lastname } = req.body;
    const { email } = req.body;
    const { password } = req.body;
    const user = new User({
      firstname, lastname, email, password,
    });
    User.find({ email: req.body.email })
      .then((users) => {
        const existinguser = users[0];
        if (!existinguser) {
          user.save()
            .then((result) => {
              res.send(result);
            }).catch((err) => {
              res.send(err);
            });
        } else {
          res.send('already Exists');
        }
      })
      .catch((err) => {
        res.send(err);
      });
  },
  getUsers: (req, res, next) => {
    User.find()
      .then((users) => {
        res.send(users);
      })
      .catch((err) => {
        res.send(err);
      });
  },
  Login: (req, res, next) => {
    User.find({ email: req.body.email, password: req.body.password })
      .then((users) => {
        const user = users[0];
        if (user) {
          res.send(true);
        } else {
          res.send(false);
        }
      })
      .catch((err) => {
        res.send(err);
      });
  },
};
