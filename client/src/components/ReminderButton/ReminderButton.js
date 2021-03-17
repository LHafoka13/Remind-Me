import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import AppointmentForm from "../AppointmentForm/AppointmentForm";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [appointments, setAppointments] = useState([]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    loadAppointments(appointments);
  }, []);

  function loadAppointments() {
    fetch("/api/appointments")
      .then((response) => response.json())
      .then((data) => {
        console.log("success in getting appointments:", data);
        setAppointments(data);
      })
      .catch((error) => console.error("error:", error));
  }

  console.log(appointments);

  const handlePost = (appointment) => {
    console.log("appointment: ", appointment);
    let body = {
      title: appointment.title,
      startDate: appointment.startDate.toISOString(),
      // endDate: appointment.endDate, //formatting on this item...
      notes: appointment.notes,
      // rRule: appointment.rRule,
      UserId: appointment.UserId,
    };
    console.log(body);
    fetch("/api/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body), //not sure which variable to capture here
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("appointment set:", data);
        setAppointments(data);
        // console.log(appointments);
        handleClose();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <Button
        type="button"
        variant="outlined"
        color="primary"
        onClick={handleOpen}
      >
        Add A Reminder
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <AppointmentForm handlePost={handlePost} />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
