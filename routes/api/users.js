// Requiring our models

const db = require("../../models");

const passport = require("passport");
const authMiddleware = require("../../config/middleware/isAuthenticated");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

module.exports = (app) => {
  app.post("/api/login", (req, res, next) => {
    console.log("users.js", req.body);
    passport.authenticate("local", (err, user, info) => {
      console.log(info);
      if (err) throw err;
      if (!user) res.sendStatus(204);
      else {
        req.logIn(user, (err) => {
          if (err) throw err;
          console.log("found user", user.dataValues);
          const { id, firstName, lastName, email, helper } = user.dataValues;
          console.log("settingUser", user.dataValues);
          res.json({ id, firstName, lastName, email, helper });
        });
      }
    })(req, res, next);
  });

  //post route for adding new user to the db
  app.post("/api/users", jsonParser, function(req, res, next) {
    // console.log("email", req.body);
    db.User.findOne({ where: { email: req.body.email } }).then((user, err) => {
      if (err) console.log("something went awry");
      console.log("we got here", user);
      if (user) {
        console.log("email already exists");
        return res.status(422).send({
          error: "That email address is already in use",
        });
      } else {
        console.log("creating");
        db.User.create({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: req.body.password,
          helper: req.body.helper,
          member: req.body.member,
        });
      }
    });
  });

  app.get("/unauthorized", function(req, res, next) {
    res.json({
      message: "user not authenticated",
    });
  });


  // GET route for getting all of the users
  // findAll returns all entries for a table when used with no options
  app.get("/api/users", (req, res) => {
    db.User.findAll({}).then((allUsers) => {
      console.log(JSON.parse(JSON.stringify(allUsers)));
      res.json(JSON.parse(JSON.stringify(allUsers)));
    });
  });

  //GET Route for getting only Members in the member drop down
  app.get("/api/members", (req, res) => {
    db.User.findAll({
      where: {
        member: 1,
      },
    }).then((allMembers) => {
      console.log(JSON.parse(JSON.stringify(allMembers)));
      res.json(JSON.parse(JSON.stringify(allMembers)));
    });
  });
};
