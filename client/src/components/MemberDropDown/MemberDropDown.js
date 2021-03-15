import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function MemberDropDown() {
  const classes = useStyles();

  const [members, setMembers] = useState([]);

  const handleChange = (event) => {
    setMembers(event.target.value);
  };

  useEffect(() => {
    console.log(members);
  }, [members]);

  useEffect(() => {
    loadMembers();
  }, []);

  //loads members to the drop down
  function loadMembers() {
    fetch("/api/members")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMembers(data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Member</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={members}
          onChange={handleChange}
        >
          <MenuItem value={members[0]}>{members[0]}</MenuItem>
          <MenuItem></MenuItem>
          <MenuItem></MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
