// Requiring our models

const db = require("../../models");

console.log(db.Appointments);
// Routes
module.exports = (app) => {
  // GET route for getting all of the appointments
  // findAll returns all entries for a table when used with no options
  app.get("/api/appointments", (req, res) => {
    db.Appointments.findAll({}).then((allAppts) => res.json(allAppts));
  });

  // POST route for saving a new appt
  app.post("/api/appointments", (req, res) => {
    console.log(req.body);
    db.Appointments.create({
      title: req.body.title,
      startDate: req.body.startDate,
      endDate: req.body.endDate, //formatting on this item...
      description: req.body.description,
      member: req.body.member,
      rRule: req.body.rRule,
      //   make this each box of the table?
      //   can we use state here? or form submit?
    })
      .then((allAppts) => res.json(allAppts))
      .catch((err) => res.json(err));
  });

  // DELETE route for deleting appt using the id (req.params.id)
  app.delete("/api/appointments/:id", (req, res) => {
    // We just have to specify which appt we want to destroy with "where"
    db.Appointments.destroy({
      where: {
        id: req.params.id,
      },
    }).then((allAppts) => res.json(allAppts));
  });

  // PUT route for updating appointments. We can get the updated todo data from req.body
  app.put("/api/appointments", (req, res) => {
    db.Appointments.update(
      {
        title: req.body.title,
        dateTime: req.body.dateTime,
        description: req.body.description,
        member: req.body.member,
        repeat: req.body.repeat,
      },
      {
        where: {
          id: req.body.id,
        },
      }
    )
      .then((allAppts) => res.json(allAppts))
      .catch((err) => res.json(err));
  });
};
