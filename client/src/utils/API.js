import axios from "axios";

export default {
  getUsers: function() {
    return axios.get("/api/users");
  },

  // logs in user
  login: function(loginInfo) {
    return axios.post("/api/users/", loginInfo);
  },

  register: function(registerInfo) {
    return axios.post("/api/users/register", registerInfo);
  },

  isLoggedIn: function() {
    return axios.get("/api/users/profile");
  },

  logout: function() {
    return axios.get("/api/users/logout");
  },
};
