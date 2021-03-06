import React from "react";
import SignIn from "../components/SignInForm/SignInForm";
import AppBar from "../components/AppBar/AppBar";

export default function Home() {
  return (
    <div className="background">
      <AppBar />
      <SignIn />
    </div>
  );
}
