import React from "react";
// import TimePicker from "../components/Calendar/TimePicker";
import Calendar from "../components/Calendar/Calendar";
import Container from "@material-ui/core/Container";
import ReminderButton from "../components/ReminderButton/ReminderButton";

export default function Helper() {
  return (
    <div>
      <Container>
        <ReminderButton />
        <Calendar />
      </Container>
    </div>
  );
}
