// Requiring our models

const db = require("../../models");

module.exports = (app) => {
  // GET route for getting all of the appointments
  // findAll returns all entries for a table when used with no options
  app.get("/api/users", (req, res) => {
    db.User.findAll({}).then((allUsers) => {
      console.log(JSON.parse(JSON.stringify(allUsers)));
      res.json(JSON.parse(JSON.stringify(allUsers)));
    });
  });
};
