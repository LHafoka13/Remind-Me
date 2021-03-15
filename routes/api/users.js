// Requiring our models

const db = require("../../models");
const passport = require("../../config/passport");
const authMiddleware = require("../../config/middleware/isAuthenticated");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

module.exports = (app) => {
  //passport authenticate for signin
  app.post(
    "/signin",
    passport.authenticate("local", {
      failureRedirect: "/api/users/unauthorized",
      failureFlash: true,
    }),
    function(req, res, next) {
      console.log("sign in successful");
      res.json({
        //referencing the user model
        user: req.user,
        isSignedIn: true,
      });
    }
  );

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
      error: req.flash("error"),
      message: "user not authenticated",
    });
  });

  app.get("/helper", authMiddleware.isSignedIn, function(req, res, next) {
    res.json({
      email: req.email,
      loggedIn: true,
    });
  });

  // app.get("/logout", authMiddleware.logoutUser, function(req, res, next) {
  //   res.json("User logged out successfully");
  // });

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
