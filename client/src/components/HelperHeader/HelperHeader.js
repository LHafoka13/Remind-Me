import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();

  // const [member, setMember] = useState("");

  useEffect(() => {});

  return (
    <div className={classes.root} className="mt-3 mb-3">
      <AppBar position="static" spacing={2}>
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            Welcome!

          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
