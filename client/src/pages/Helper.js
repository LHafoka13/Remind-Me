import React from "react";
import Container from "@material-ui/core/Container";
import HelperHeader from "../components/HelperHeader/HelperHeader";
import AccountAppBar from "../components/AppBars/AccountAppBar";
import ReminderButton from "../components/ReminderButton/ReminderButton";
import TodayReminderGrid from "../components/TodayReminderGrid/TodayReminderGrid";
import ScheduledReminderGrid from "../components/ScheduledReminderGrid/ScheduledReminderGrid";

export default function Helper() {
  return (
    <div className="background">
      <AccountAppBar />
      <Container>
        <HelperHeader />
        <ReminderButton />
        <h2>My Lists</h2>
        <h4>Today</h4>
        <TodayReminderGrid />
        <h4>Scheduled</h4>
        <ScheduledReminderGrid />
        <h4>All Reminders</h4>
      </Container>
    </div>
  );
}
