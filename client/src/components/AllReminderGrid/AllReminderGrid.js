import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import {
  GroupingState,
  IntegratedGrouping,
  EditingState,
} from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableGroupRow,
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
    { name: "name", title: "Member" },
    { name: "date", title: "Date & Time" },
    { name: "reminder", title: "Reminder" },
    { name: "notes", title: "Notes" },
  ]);
  const [rows] = useState([
    {
      id: 1,
      name: "Robby",
      date: "03/13/2021 1:00 PM",
      reminder: "Take Pills",
      notes: "all 5 pills",
    },
    {
      id: 2,
      name: "Robby",
      date: "03/14/2021 2:00 PM",
      reminder: "Take A Shower",
      notes: "",
    },
    {
      id: 3,
      name: "Lindsay",
      date: "03/17/2021 2:00 PM",
      reminder: "Go To Park",
      notes: "",
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
        <GroupingState grouping={[{ columnName: "name" }]} />
        <IntegratedGrouping />
        <Table rowComponent={TableRow} />
        <TableHeaderRow />
        <TableEditRow />
        <TableEditColumn showEditCommand showDeleteCommand />
        <TableGroupRow />
      </Grid>
    </Paper>
  );
};
