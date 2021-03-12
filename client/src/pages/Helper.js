import React from "react";
import Calendar from "../components/Calendar/Calendar";
import Container from "@material-ui/core/Container";
import HelperHeader from "../components/HelperHeader/HelperHeader";
import AccountAppBar from "../components/AppBars/AccountAppBar";
import AddButton from "../components/ReminderButton/ReminderButton";

export default function Helper() {
  return (
    <div className="background">
      <AccountAppBar />
      <Container>
        <HelperHeader />
        <AddButton />
        <Calendar />
      </Container>
    </div>
  );
}
