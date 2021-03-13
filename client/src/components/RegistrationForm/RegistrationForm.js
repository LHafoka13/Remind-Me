import React, {useState, useEffect} from "react";
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

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [helper, setHelper] = useState();

  const [userObject, setUserObject] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    helper: false
  })

 const handleInputChange = (event) => {
    console.log(event);
    let userInput = event.target.value;
    let inputName = event.target.name;
    let user = {
      firstName: userObject.firstName,
      lastName: userObject.lastName,
      email: userObject.email,
      password: userObject.password,
      helper: userObject.helper,
    };
    setUserObject(prevUserObject => ({...prevUserObject, [inputName]: userInput}))
  }
  
  useEffect(() => {
    console.log(userObject);
  }, [userObject])

  const handleChecked = (event) => {
    setUserObject((prevUserObject) => ({
      ...prevUserObject,
      helper: event.target.checked
    }));
  }

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
            <form className={classes.form} noValidate>
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
                    value={this.props.firstname}
                    onChange={this.props.handleInputChange}
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
                    // autoComplete="lname"
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
                    // autoComplete="email"
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
                    // autoComplete="current-password"
                    onChange={handleTextInput}
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormControlLabel
                    // name="helper"
                    // onChange={handleTextInput}
                    control={
                      <Checkbox
                        value={userObject.helper}
                        color="primary"
                        name="helper"
                        onChange={handleChecked}
                      />
                    }
                    label="Helper"
                  />
                </Grid>
                <Grid item xs={3}>
                  <FormControlLabel
                    control={<Checkbox value="individual" color="primary" />}
                    label="Individual"
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
    