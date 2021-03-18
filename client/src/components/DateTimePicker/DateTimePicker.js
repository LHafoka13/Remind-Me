// import "date-fns";
// import React from "react";
// import Grid from "@material-ui/core/Grid";
// import DateFnsUtils from "@date-io/date-fns";
// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker,
// } from "@material-ui/pickers";

// export default function DateTimePicker(props) {
//   // The first commit of Material-UI
//   const [selectedDate, setSelectedDate] = React.useState(new Date());

//   return (
//     // <MuiPickersUtilsProvider utils={DateFnsUtils}>
//     //   {/* //TODO handle the onChange gracefully */}
//     //   <Grid container justify="space-around">
//     //     <KeyboardDatePicker
//     //       margin="normal"
//     //       id="date-picker"
//     //       label="Date"
//     //       format="MM/dd/yyyy"
//     //       value={selectedDate}
//     //       onChange={props.handleDateChange}
//     //       KeyboardButtonProps={{
//     //         "aria-label": "change date",
//     //       }}
//     //     />
//     //     <KeyboardTimePicker
//     //       margin="normal"
//     //       id="start-time"
//     //       label="Time"
//     //       value={selectedDate}
//     //       onChange={props.handleTimeChange}
//     //       KeyboardButtonProps={{
//     //         "aria-label": "change time",
//     //       }}
//     //     />
//     //   </Grid>
//     // </MuiPickersUtilsProvider>
//     // );

// }

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function DateAndTimePickers(props) {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="datetime-local"
        label="Next appointment"
        type="datetime-local"
        value={props.value}
        className={classes.textField}
        onChange={props.handleDateChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}
