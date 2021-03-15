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
        <InputLabel id="member-drop-down">Member</InputLabel>
        <Select
          labelId="member-drop-down"
          id="member-list"
          value={members}
          onChange={handleChange}
        >
          {members.map((member) => {
            return (
              <MenuItem
                id={member.id}
                value={member.id}
                firstName={member.firstName}
                lastName={member.lastName}
              >
                {member.firstName} {member.lastName}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
