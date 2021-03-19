const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const db = require("../models");

module.exports = function(passport) {
  // Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
  passport.use(
    new localStrategy(
      {
        usernameField: "username",
        passwordField: "password",
      },
      function(username, password, done) {
        console.log(username, password);
        // When a user tries to sign in this code runs
        db.User.findOne({
          where: {
            email: username,
          },
        }).then((user, err) => {
          // console.log("inside passport", user.dataValues);
          if (err) throw err;
          // user = user.dataValues;
          if (!user) return done(null);
          if (!user.validPassword(password)) {
            return done(null, false, { message: "Incorrect password" });
          }
          console.log("inside passport", user.datavalues);
          return done(null, user);
        });
        // (err, user) => {
        //   console.log('lkjasdlfjkasdklfj', user, error);
        //   if (err) throw err;
        //   if (!user) return done(null);
        //   if (!user.validPassword(password)) {
        //     return done(null, false, { message: "Incorrect password" });
        //   }
        //   return done(null, user);
        // }
        // );
      }
    )
  );

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  // this is were you would add the custer user in req, first lastname don't send the has pass
  passport.deserializeUser(function(id, done) {
    db.User.findByPk(id, function(err, user) {
      done(err, user);
    });
  });
};
// module.exports = passport;
