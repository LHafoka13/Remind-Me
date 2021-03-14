import React, { useState } from "react";
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

  const [rows, setRows] = useState([
    {
      id: 1,
      date: "03/16/2021 5:00 PM",
      reminder: "Eat Dinner",
      notes: "",
      member: "Lindsay",
    },
    {
      id: 2,
      date: "03/16/2021 9:00 PM",
      reminder: "Take Trash Out",
      notes: "",
      member: "Lily",
    },
  ]);

  const commitChanges = ({ changed, deleted }) => {
    let changedRows;
    if (changed) {
      changedRows = rows.map((row) =>
        changed[row.id] ? { ...row, ...changed[row.id] } : row
      );
    }
    if (deleted) {
      const deletedSet = new Set(deleted);
      changedRows = rows.filter((row) => !deletedSet.has(row.id));
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
        <TableEditColumn showEditCommand showDeleteCommand />
      </Grid>
    </Paper>
  );
};
