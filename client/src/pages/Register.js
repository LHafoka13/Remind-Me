import React from "react";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import AppBar from "../components/AppBars/AppBar";


export default function Register() {
  return (
    <div className="background">
      <AppBar />
      <RegistrationForm />
    </div>
  );
}
