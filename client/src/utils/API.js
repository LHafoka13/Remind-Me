import axios from "axios";

export default {
  getUsers: function() {
    return axios.get("/api/users");
  },

  // logs in user
  signin: function(email, password) {
    return fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      email: email,
      password: password,
    })
      .then(() => {
        window.location.replace("/helpers");
        // If there's an error, log the error
      })
      .catch((err) => {
        console.log(err);
      });
  },

  register: function(userData) {
    console.log("user data", userData);
    return fetch("http://localhost:3001/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then(function(response) {
        console.log(response.status);
        if (response.status === 422) {
          alert("Email already exists in the database. Please try again.");
        }
        return response.json();
      })
      .then(function(data) {
        console.log(data);
      });
  },

  // isSignedIn: function() {
  //   return axios.get("/helper");
  // },

  // logout: function() {
  //   return axios.get("/api/users/logout");
  // },

  getAppointments: function() {
    return axios.get("/api/appointments");
  },

  postAppointments: function() {
    return axios.post(
      "/api/appointments"
      // {
      //   title: appointments.title,
      //   startDate: appointments.startDate,
      //   endDate: appointments.endDate, //formatting on this item...
      //   description: appointments.description,
      //   member: "Robby",
      //   rRule: appointments.rRule,
      // }
    );
  },

  deleteAppointments: function(id) {
    return axios.delete("/api/appointments/" + id);
  },

  updateAppointments: function(id) {
    return axios.put("/api/appointments/" + id);
  },
};
