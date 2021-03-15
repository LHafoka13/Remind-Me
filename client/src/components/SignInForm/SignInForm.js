import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  //Set components initial state
  const [users, setUsers] = useState([]);

  // const [userEmail, setUserEmail] = useState("");
  // const [userPassword, setUserPassword] = useState("");
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: ""
  })

  //Load all users and store them with setUsers
  // useEffect(() => {
  //   console.log(users);
  // }, [users]);

  // useEffect(() => {
  //   loadUsers();
  // }, []);

  // // Loads all users and sets them to users
  // function loadUsers() {
  //   API.getUsers()
  //     .then((res) => setUsers(res.data))
  //     .catch((err) => console.log(err));
  // }

  const handleLoginInput = (event) => {
    console.log(event);
    let userInput = event.target.value;
    let inputName = event.target.name;
    let userCredential = {
      email: userLogin.email,
      password: userLogin.password
    }
    setUserLogin((prevUserLogin) => ({
      ...prevUserLogin, 
      [inputName]: userInput
    }))
  }

  useEffect(() => {
    console.log(userLogin);
  }, [userLogin])

  const handleLogin = (event) => {
    event.preventDefault();
    API.signin(userLogin);
  }

  const classes = useStyles();

  return (
    <div>
      <Paper elevate={3} className="formHolder">
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}></Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} noValidate onSubmit={handleLogin}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleLoginInput}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleLoginInput}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onSubmit={handleLogin}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link to="/register">{"Don't have an account? Sign Up"}</Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      </Paper>
    </div>
  );
}
