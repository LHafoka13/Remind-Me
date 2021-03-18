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
  const [userId, setUserId] = useState();
  const [startDate, setstartDate] = useState();
  const [title, setTitle] = useState();
  const [notes, setNotes] = useState();

  const submitForm = (e) => {
    e.preventDefault();
    const data = {
      startDate: startDate,
      title: title,
      notes: notes,
      UserId: userId,
    };

    //post
    console.log("data: ", data);

    API.postAppointments(data);
  };

  const handleDateChange = (startDate) => {
    console.log("Start Date:", startDate);
    setAppointment({ ...appointment, startDate: startDate });
  };

  const handleTitle = (event) => {
    // e.preventDefault();
    setTitle(event.target.value);
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
      <DateTimePicker handleDateChange={setstartDate} handleTime={null} />
      <TextField
        id="standard-textarea"
        label="Notes"
        multiline
        onChange={handleNotes}
      />
      <MemberDropDown
        setter={setUserId}
        user={userId}
        onChange={handleMember}
      />
      <Button type="submit">Save</Button>
    </form>
  );
}
