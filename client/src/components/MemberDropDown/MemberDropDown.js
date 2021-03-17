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

export default function MemberDropDown(props) {
  console.log("asldkfja", props.value);
  const classes = useStyles();

  const [members, setMembers] = useState([]);

  const [member, setMember] = useState([]);

  const handleChange = async (event) => {
    //filter returns an array
    const selected = members.filter(
      (member) => member.id === event.target.value
    );
    console.log(event.target.value);
    console.log(selected);
    setMember(event.target.value);
  };

  useEffect(() => {
    console.log(members);
  }, [members]);

  useEffect(() => {
    loadMembers();
  }, []);

  //loads members to the drop down
  function loadMembers() {
    console.log("loadmembers function call");
    fetch("/api/members")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMembers((prevMembers) => [...prevMembers, ...data]);
      })
      .catch((err) => console.log(err));
    console.log("members:: ", members);
  }

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="member-drop-down">Member</InputLabel>
        <Select
          labelId="member-drop-down"
          id="member-list"
          value={member}
          onChange={handleChange}
        >
          {members.length === 0 ? (
            <p>loading...</p>
          ) : (
            members.map((member) => {
              console.log("member", member);
              return (
                <MenuItem value={member.id} key={member.id}>
                  {member.firstName} {member.lastName}
                </MenuItem>
              );
            })
          )}
        </Select>
      </FormControl>
    </div>
  );
}
