import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import DateTimePicker from "../DateTimePicker/DateTimePicker";
import MemberDropDown from "../MemberDropDown/MemberDropDown";
import Button from "@material-ui/core/Button";

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
  const [userId, setUserId] = useState("2");

  // useEffect(() => {
  //   console.log("current state of userId", userId);
  // }, [userId]);

  const [appointment, setAppointment] = useState({
    startDate: "",
    title: "",
    notes: "",
    UserId: "",
  });

  const submitForm = (e) => {
    e.preventDefault();
    console.log("user: ", userId);
  };
  const handleDatePicker = (startDate) => {
    console.log("Start Date:", startDate);
    setAppointment({ ...appointment, startDate: startDate });
  };

  const handleTitle = (event) => {
    setAppointment({ ...appointment, title: event.target.value });
  };

  const handleNotes = (event) => {
    setAppointment({ ...appointment, notes: event.target.value });
  };

  const handleMember = (event) => {
    setAppointment({ ...appointment, UserId: event.target.value });
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <h4>Reminder Details</h4>
      <TextField
        id="standard-textarea"
        label="Title"
        multiline
        value={appointment.title}
        onChange={handleTitle}
      />
      <DateTimePicker handleDateChange={handleDatePicker} />
      <TextField
        id="standard-textarea"
        label="Notes"
        multiline
        value={appointment.notes}
        onChange={handleNotes}
      />
      <MemberDropDown
        setter={setUserId}
        value={userId}
        onChange={handleMember}
      />
      <Button onClick={() => submitForm}>Save</Button>
    </form>
  );
}
