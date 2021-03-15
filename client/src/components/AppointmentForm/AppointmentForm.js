import React, { useState } from "react";
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

  // [date, setDate] = useState("");
  // [title, setTitle] = useState("");
  // [notes, setNotes] = useState("");
  // [member, setMember] = useState("");

  const [appointment, setAppointment] = useState({
    startDate: "",
    title: "",
    notes: "",
    UserId: "",
  });

  const handleDatePicker = (startDate) => {
    // console.log(event.target.value);
    setAppointment({ ...appointment, startDate });
  };

  const handleTitle = (event) => {
    setAppointment({ ...appointment, title: event.target.value });
  };

  const handleNotes = (event) => {
    setAppointment({ ...appointment, notes: event.target.value });
  };

  const handleMember = (event) => {
    setAppointment({ ...appointment, member: event.target.value });
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
      <MemberDropDown value={appointment.UserId} onChange={handleMember} />
      <Button onClick={() => props.handlePost(appointment)}>Save</Button>
    </form>
  );
}
