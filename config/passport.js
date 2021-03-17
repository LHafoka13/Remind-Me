const passport = require("passport");
const bcrypt = require("bcryptjs");
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
          console.log("inside passport", user.dataValues);
          if (err) throw err;
          if (!user) return done(null);
          if (!user.validPassword(password)) {
            return done(null, false, { message: "Incorrect password" });
          }
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
  // passport.use(
  //   new LocalStrategy(
  //     {
  //       usernameField: "email",
  //       passwordField: "password",
  //     },
  //     function(username, password, done) {
  //       // When a user tries to sign in this code runs
  //       db.User.findOne(
  //         {
  //           where: {
  //             username: username,
  //           },
  //         },
  //         function(err, user) {
  //           if (err) throw err;
  //           if (!user)
  //             return done(null, false, {
  //               message: "Incorrect email address",
  //             });
  //         }
  //       );
  // if (!user.validPassword(password)) {
  //   return done(null, false, { message: "Incorrect password" });
  //       }
  //       return done(null, user);
  //     }
  //   )
  // );
  // If there's no user with the given email
  // if (!dbUser) {
  //   return done(null, false, {
  //     message: "Incorrect email.",
  //   });
  // }
  // If there is a user with the given email, but the password the user gives us is incorrect
  // else if (!dbUser.validPassword(password)) {
  //   return done(null, false, {
  //     message: "Incorrect password.",
  //   });
  //       }
  //       // If none of the above, return the user
  //       return done(null, dbUser);
  //     });
  //   }
  // )

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  // this is were you would add the custer user in req, first lastname don't send the has pass
  passport.deserializeUser(function(id, done) {
    db.User.findById(id, function(err, user) {
      done(err, user);
    });
  });
};
// module.exports = passport;
