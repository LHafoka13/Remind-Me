// fetch calls for appointment database in sql
// const appointmentSelect = document.getElementById("category"); //button selector

module.exports = {
  // let users;

  getUsers: function(req, res) {
    fetch("/api/users", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("success in getting users:", data);
        users = data;
      })
      .catch((error) => console.error("error:", error));
  },
};
// const deleteAppointment = (id) => {
//   fetch(`/api/appointments/${id}`, {
//     method: "DELETE",
//     headers: { "Content-Type": "application/json" },
//   }).then(() => {
//     //   set state?
//     getAppointment(appointmentSelect.value);
//   });
// };

// const addAppointment = (appointment) => {
//   fetch("/api/appointments", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(appointment),
//   })
//     .then(() => {
//       window.location.href = "/individual";
//     })
//     .catch((err) => console.error(err));
// };

// const updateAppointment = (appointment) => {
//   fetch(`/api/appointments`, {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(appointment),
//   }).then((response) => {
//     console.log(response); // set state?
//   });
// };

// function displayEmpty() {
//   //function to not show anything in the calendar
// }

// function initializeCalendar() {
//   //logic to display data in calendar
// }
