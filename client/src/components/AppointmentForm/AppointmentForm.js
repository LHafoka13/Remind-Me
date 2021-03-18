import React, { useEffect, useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import DateTimePicker from "../DateTimePicker/DateTimePicker";
import MemberDropDown from "../MemberDropDown/MemberDropDown";
import Button from "@material-ui/core/Button";
import API from "../../utils/API";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function AppointmentForm(props) {
  const classes = useStyles();
  const [userId, setUserId] = useState(2);
  const [startDate, setstartDate] = useState(new Date().toISOString());
  const [startTime, setstartTime] = useState(new Date().toISOString());
  const [title, setTitle] = useState();
  const [notes, setNotes] = useState();

  useEffect(() => {
    console.log(userId);
  }, [userId]);

  const submitForm = (e) => {
    e.preventDefault();
    const data = {
      startDate: startDate,
      title: title,
      description: notes,
      UserId: userId,
    };

    //post
    console.log("data: ", data);

    API.postAppointments(data);
  };

  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return [month, day, year].join("/");
  }

  const handleDateChange = (startDate) => {
    console.log("Start Date:", startDate);
    setstartDate(formatDate(startDate));
    console.log("New Start Date", formatDate(startDate));
  };

  const handleTimeChange = (startTime) => {
    console.log("Start Time: ", startTime);
    setstartDate(formatDate(startTime));
  };

  const handleTitle = (event) => {
    // e.preventDefault();
    setTitle(event.target.value);
  };

  const handleUserId = (event) => {
    // e.preventDefault();
    console.log("user Id:", event.target.value);
    setUserId(event.target.value);
  };

  const handleNotes = (event) => {
    setNotes(event.target.value);
  };

  const handleMember = (event) => {
    setAppointment({ ...appointment, UserId: event.target.value });
  };

  return (
    <form
      className={classes.root}
      onSubmit={submitForm}
      noValidate
      autoComplete="off"
    >
      <h4>Reminder Details</h4>
      <TextField
        id="standard-textarea"
        label="Title"
        multiline
        // value={appointment.title}
        onChange={handleTitle}
      />
      <DateTimePicker
        value={startDate}
        handleDateChange={handleDateChange}
        handleTimeChange={handleTimeChange}
      />
      <TextField
        id="standard-textarea"
        label="Notes"
        multiline
        onChange={handleNotes}
      />
      <MemberDropDown
        setter={setUserId}
        user={userId}
        getUserId={handleUserId}
        onChange={handleMember}
      />
      <Button type="submit">Save</Button>
    </form>
  );
}
