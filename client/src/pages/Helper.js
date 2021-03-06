import React from "react";
import Calendar from "../components/Calendar/Calendar";
import Container from "@material-ui/core/Container";
import ReminderButton from "../components/ReminderButton/ReminderButton";
import HelperHeader from "../components/HelperHeader/HelperHeader";

export default function Helper() {
  return (
    <div>
      <Container>
        <HelperHeader />
        <ReminderButton />
        <Calendar />
      </Container>
    </div>
  );
}
