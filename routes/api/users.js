// Requiring our models

const db = require("../../models");
const passport = require("../../config/passport");
const authMiddleware = require("../../config/middleware/isAuthenticated");

module.exports = (app) => {
  app.post(
    "/login",
    passport.authenticate("local", {
      failureRedirect: "/api/users/unauthorized",
      failureFlash: true,
    }),
    function(req, res, next) {
      console.log("sign in successful");
      res.json({
        user: req.user,
        loggedIn: true,
      });
    }
  );

  //post route for adding new user to the db
  app.post("/signup", function(req, res, next) {
    db.User.findOne({ email: req.body.email }, function(err, user) {
      if (err) throw err;
      if (user) {
        console.log("user already exists");
        return res.json("user already exists");
      }
      if (!user) {
        db.User.findOne({ email: req.body.email }, function(err, useremail) {
          if (err) throw err;
          if (useremail) {
            return res.json("email is already in use");
          }
          if (!useremail) {
            let newUser = new db.User({
              firstname: req.body.firstname,
              lastname: req.body.lastname,
              email: req.body.email,
              password: req.body.password,
              helper: req.body.helper,
            });
            newUser.password = newUser.generateHash(req.body.password);
            newUser.save(function(err) {
              if (err) throw err;
              console.log("user saved!");
              res.redirect(307, "/api/users/login");
            });
          }
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

  app.get("/profile", authMiddleware.isLoggedIn, function(req, res, next) {
    res.json({
      email: req.email,
      loggedIn: true,
    });
  });

  app.get("/logout", authMiddleware.logoutUser, function(req, res, next) {
    res.json("User logged out successfully");
  });

  // GET route for getting all of the users
  // findAll returns all entries for a table when used with no options
  app.get("/api/users", (req, res) => {
    db.User.findAll({}).then((allUsers) => {
      console.log(JSON.parse(JSON.stringify(allUsers)));
      res.json(JSON.parse(JSON.stringify(allUsers)));
    });
  });
};
