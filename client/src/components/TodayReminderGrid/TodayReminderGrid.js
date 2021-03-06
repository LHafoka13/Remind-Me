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

  const [rows, setRows] = useState([]);

  const deleteAppointment = (id) => {
    fetch(`/api/appointments/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then((res) => console.log(res));
  };

  const commitChanges = ({ added, changed, deleted }) => {
    let changedRows;
    if (added) {
      const startingAddedId =
        rows.length > 0 ? rows[rows.length - 1].id + 1 : 0;
      changedRows = [
        ...rows,
        ...added.map((row, index) => ({
          id: startingAddedId + index,
          ...row,
        })),
      ];
    }
    if (changed) {
      changedRows = rows.map((row) =>
        changed[row.id] ? { ...row, ...changed[row.id] } : row
      );
    }
    if (deleted) {
      const deletedSet = new Set(deleted);
      changedRows = rows.filter((row) => {
        !deletedSet.has(row.id);
        deleteAppointment(rows[0].id);
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
        <TableEditColumn showEditCommand showDeleteCommand />
      </Grid>
    </Paper>
  );
};
