// Requiring our models

const db = require("../../models");

console.log(db.Users);

module.exports = (app) => {
  // GET route for getting all of the appointments
  // findAll returns all entries for a table when used with no options
  app.get("/api/users", (req, res) => {
    db.User.findAll({}).then((allUsers) => res.json(allUsers));
  });
};
