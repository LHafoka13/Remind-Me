import React from "react";
import HelperHeader from "../components/HelperHeader/HelperHeader";
import Container from "@material-ui/core/Container";
import Calendar from "../components/Calendar/Calendar";
import AccountAppBar from "../components/AppBars/AccountAppBar"

export default function Individual() {
  return (
    <div className="background">
      <AccountAppBar />
      <Container>
        <Calendar />
      </Container>
    </div>
  );
}
