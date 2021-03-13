import axios from "axios";

export default {
  getUsers: function() {
    return axios.get("/api/users");
  },

  // logs in user
  login: function(loginInfo) {
    return axios.post("/api/users/login", loginInfo);
  },

  signup: function(signupInfo) {
    return axios.post("/api/users/signup", signupInfo);
  },

  isLoggedIn: function() {
    return axios.get("/api/users/profile");
  },

  logout: function() {
    return axios.get("/api/users/logout");
  },

  getAppointments: function() {
    return axios.get("/api/appointments");
  },

  postAppointments: function() {
    return axios.post("/api/appointments", {
      title: appointments.title,
      startDate: appointments.startDate,
      endDate: appointments.endDate, //formatting on this item...
      description: appointments.description,
      member: "Robby",
      rRule: appointments.rRule,
    });
  },

  deleteAppointments: function(id) {
    return axios.delete("/api/appointments/" + id);
  },

  updateAppointments: function(id) {
    return axios.put("/api/appointments/" + id);
  },
};
