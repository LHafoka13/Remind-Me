import axios from "axios";

export default {
  getUsers: function() {
    return axios.get("/api/users");
  },

  //logs in user
  signin: function(username, password, done) {
    console.log(username);
    console.log(password);
    return fetch("http://localhost:3001/api/login", {
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
          window.location.replace(`/helper/${data.id}`);
        }
        if (data.helper === false) {
          window.location.replace(`/member/${data.id}`);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    //  .catch((err) => {
    //   console.log(err);
    // }),

    // .catch((err) => {
    //   console.log(err);
    // .then((response) => {
    //   console.log("here again");
    //   console.log(response)
    //   if (user.helper === true) {
    //     window.location.replace("/helper");
    //   }
    //   if (user.helper === false) {
    //     window.location.replace("/member");
    //   }
    //   if (response.status === 204) {
    //     alert("Account not found. Please register your account.")
    //   }
    //   // else {
    //   //   alert("Email and password combination is wrong. Try again.");
    //   // }

    //   // window.location.replace("/helper");
    //   // If there's an error, log the error
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
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

  getAppointments: function() {
    return axios.get("/api/appointments");
  },

  postAppointments: function() {
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
