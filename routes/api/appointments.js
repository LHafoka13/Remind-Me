// Requiring our models

const db = require("../../models");

console.log(db.Appointments);
// Routes
module.exports = (app) => {
  // GET route for getting all of the appointments
  // findAll returns all entries for a table when used with no options
  app.get("/api/appointments", (req, res) => {
    db.Appointments.findAll({
      include: [
        {
          model: db.User,
        },
      ],
    }).then((allAppts) => res.json(allAppts));
  });

  //
  app.get("/api/members/appointments/:id", (req, res) => {
    db.User.findAll({
      include: [{ model: db.Appointments }],
      where: {
        id: req.params.id,
      },
    }).then((allAppts) => res.json(allAppts));
  });

  //working GET route
  app.get("/api/members/appointments/", (req, res) => {
    db.User.findAll({
      include: [{ model: db.Appointments }],
    }).then((allAppts) => res.json(allAppts));
  });

  // POST route for saving a new appt
  //THE BELOW IS WHAT WE NEED TO CHANGE THIS ROUTE TO???
  //`/api/appointments/${appointment.User.User.Id}`
  app.post(`/api/appointments`, (req, res) => {
    console.log({ body: req.body });
    db.Appointments.create({
      title: req.body.title,
      startDate: req.body.startDate,
      description: req.body.description,
      rRule: req.body.rRule,
      UserId: req.body.UserId,

      include: [
        {
          model: db.User,
          where: {
            id: req.body.UserId,
          },
        },
      ],
    })
      .then((allAppts) => res.json(allAppts))
      .catch((err) => {
        console.log({ err });
        res.json(err);
      });
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
        startDate: req.body.startDate,
        description: req.body.description,
        rRule: req.body.rRule,
        UserId: req.params.id,
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
