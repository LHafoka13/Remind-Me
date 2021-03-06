import axios from "axios";

export default {
  getUsers: function() {
    return axios.get("/api/users");
  },

  //logs in user
  signin: function(username, password, done) {
    console.log(username);
    console.log(password);
    return fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then(function(response) {
        console.log(response.status);
        if (response.status === 204) {
          alert("User not found. Please register an account");
        }
        return response.json();
      })
      .then(function(data) {
        console.log(data);
        if (data.helper === true) {
          console.log("LOOK HERE", data.id);
          window.location.replace(`/helper/${data.id}`);
        }
        if (data.helper === false) {
          window.location.replace(`/member/${data.id}`);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  //reigsters the user in the database
  register: function(userData) {
    console.log("user data", userData);
    return fetch("/api/users", {
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

  getAppointments: function() {
    return axios.get("/api/appointments");
  },

  postAppointments: function(body) {
    return fetch("/api/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body), //not sure which variable to capture here
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("appointment set:", data);
      })
      .catch((err) => console.error(err));
  },

  deleteAppointments: function(id) {
    return axios.delete("/api/appointments/" + id);
  },

  updateAppointments: function(id) {
    return axios.put("/api/appointments/" + id);
  },
};
