import React from "react";
import HelperHeader from "../components/HelperHeader/HelperHeader";
import Container from "@material-ui/core/Container";
import Calendar from "../components/Calendar/Calendar";
import AppBar from "../components/AppBar/AppBar";

export default function Individual() {
  return (
    <div className="background">
      <AppBar />
      <Container>
        <Calendar />
      </Container>
    </div>
  );
}
