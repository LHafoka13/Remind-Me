import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import AppointmentForm from "../AppointmentForm/AppointmentForm";
import API from "../../utils/API";

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
  const [appointments, setAppointments] = useState({});

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
    API.getAppointments()
      .then((res) => setAppointments(res.data))
      .catch((err) => console.log(err));
  }

  // let body = {
  //   title: appointment.title,
  //   startDate: appointment.startDate,
  //   endDate: appointment.endDate, //formatting on this item...
  //   description: appointment.description,
  //   member: "Robby",
  //   rRule: appointment.rRule,
  // };

  const handlePost = () => {
    API.postAppointments()
      .then((res) => {
        setAppointments(res.data);
        getAppointments();
      })
      .catch((err) => console.log(err));
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
            <AppointmentForm />
            <Button onClick={handleClose} onClick={handlePost}>
              Save
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
