import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import { EditingState } from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableEditRow,
  TableEditColumn,
} from "@devexpress/dx-react-grid-material-ui";
const getRowId = (row) => row.id;
const TableRow = ({ row, ...restProps }) => (
  <Table.Row
    {...restProps}
    // eslint-disable-next-line no-alert
    onClick={() => alert(JSON.stringify(row))}
    style={{
      cursor: "pointer",
    }}
  />
);

export default () => {
  const [columns] = useState([
    { name: "date", title: "Date & Time" },
    { name: "reminder", title: "Reminder" },
    { name: "notes", title: "Notes" },
    { name: "member", title: "Member" },
  ]);
  const [rows, setRows] = useState("");

  // function formatDate(date) {
  //   var d = new Date(date),
  //     month = "" + (d.getMonth() + 1),
  //     day = "" + d.getDate(),
  //     year = d.getFullYear();
  //   if (month.length < 2) month = "0" + month;
  //   if (day.length < 2) day = "0" + day;
  //   return [year, month, day].join("-");
  // }

  useEffect(() => {
    fetch("/api/appointments/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        data = data.map((data) => {
          return {
            id: data.id,
            date: data.startDate,
            reminder: data.title,
            notes: data.description,
            member: data.User.firstName + " " + data.User.lastName,
          };
        });
        setRows(data);
      });
  }, []);
  console.log(rows);
  const deleteAppointment = (id) => {
    fetch(`/api/appointments/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then((res) => console.log(res));
  };
  const updateAppointment = (appointment) => {
    fetch(`/api/appointments`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(appointment),
    }).then((response) => {
      console.log(response); // set state?
    });
  };
  const commitChanges = ({ changed, deleted }) => {
    let changedRows;
    if (changed) {
      changedRows = rows.map((row) => {
        changed[row.id] ? { ...row, ...changed[row.id] } : row;
        // updateAppointment(rows[0].id);
      });
    }
    if (deleted) {
      const deletedSet = new Set(deleted);
      changedRows = rows.filter((row) => {
        // console.log(rows.indexOf() + 1);
        // console.log(row.id);
        !deletedSet.has(row.id);
        deleteAppointment(rows[rows.indexOf() + 1].id);
        window.location.reload();
      });
    }
    setRows(changedRows);
  };
  return (
    <Paper>
      <Grid rows={rows} columns={columns} getRowId={getRowId}>
        <EditingState onCommitChanges={commitChanges} />
        <Table rowComponent={TableRow} />
        <TableHeaderRow />
        <TableEditRow />
        <TableEditColumn showDeleteCommand />
      </Grid>
    </Paper>
  );
};
