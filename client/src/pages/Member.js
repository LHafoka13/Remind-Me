import React from "react";
import Container from "@material-ui/core/Container";
import Calendar from "../components/Calendar/Calendar";
import AccountAppBar from "../components/AppBars/AccountAppBar";
import MemberHeader from "../components/MemberHeader/MemberHeader";

export default function Member() {
  return (
    <div className="background">
      <AccountAppBar />
      <Container>
        <MemberHeader />
        <Calendar />
      </Container>
    </div>
  );
}
