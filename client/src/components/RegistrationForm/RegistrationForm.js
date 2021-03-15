import React, { useState, useEffect } from "react";
import {Alert} from "reactstrap"
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Radio from "@material-ui/core/Radio";
import API from "../../utils/API";



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function RegistrationForm() {
  const classes = useStyles();

  const [userObject, setUserObject] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    helper: false,
    member: false,
  });

  const [status, setStatus] = useState([]);

  const handleTextInput = (event) => {
    console.log(event);
    let userInput = event.target.value;
    let inputName = event.target.name;
    let user = {
      firstName: userObject.firstName,
      lastName: userObject.lastName,
      email: userObject.email,
      password: userObject.password,
      helper: userObject.helper,
      member: userObject.member,
    };
    setUserObject((prevUserObject) => ({
      ...prevUserObject,
      [inputName]: userInput,
    }));
  };

  useEffect(() => {
    console.log(userObject);
  }, [userObject]);

  // useEffect(() => {
  //   fetchStatus()
  //   console.log(status)
  // }, [status])

  const handleChange = (type) => {
    if (type === "helper") {
      setUserObject((prevUserObject) => ({
        ...prevUserObject,
        helper: true,
        member: false,
      }));
    } else {
      setUserObject((prevUserObject) => ({
        ...prevUserObject,
        helper: false,
        member: true,
      }));
    }
  };

  // const fetchStatus = async () => {
  //   const response = await fetch("http://localhost:3001/api/users");
  //   setStatus(response.data);
  // };
 
  const handleSubmit = (event) => {
    event.preventDefault();
    API.register(userObject);
    event.target.reset();
  
  };

  // const getBackend = async (userObject) => {
  //   const response = await API.register(userObject);
    // if (!response.status === 402) {
    //   console.log("status received");
    // }
  // }

  return (
    <div>
      <Paper elevation={3} className="registrationHolder">
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}></Avatar>
            <Typography component="h1" variant="h5">
              Register an Account
            </Typography>
            <form className={classes.form} noValidate onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    // autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    onChange={handleTextInput}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    onChange={handleTextInput}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    onChange={handleTextInput}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    onChange={handleTextInput}
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormControlLabel
                    name="helper"
                    control={
                      <Radio
                        checked={userObject.helper}
                        onChange={(e) => handleChange("helper")}
                        value={userObject.helper}
                        name="helper"
                      />
                    }
                    label="Helper"
                  />
                </Grid>
                <Grid item xs={3}>
                  <FormControlLabel
                    name="member"
                    control={
                      <Radio
                        checked={userObject.member}
                        onChange={(e) => {
                          handleChange("member");
                        }}
                        value={userObject.member}
                        name="member"
                      />
                    }
                    label="Member"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Register
              </Button>
              <Alert className="alert" onChange={handleSubmit}>Hello</Alert>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link to="/">Already have an account? Sign in</Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      </Paper>
    </div>
  );
}
