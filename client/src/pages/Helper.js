import React from "react";
import Calendar from "../components/Calendar/Calendar";
import Container from "@material-ui/core/Container";
import HelperHeader from "../components/HelperHeader/HelperHeader";
import AppBar from "../components/AppBar/AppBar";

export default function Helper() {
  return (
    <div className="background">
      <AppBar />
      <Container>
        <HelperHeader />
        <Calendar />
      </Container>
    </div>
  );
}
