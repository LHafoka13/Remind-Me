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
    { name: "date", title: "Date" },
    { name: "reminder", title: "Reminder" },
  ]);
  const [rows] = useState([
    { id: 1, name: "Robby", date: "03/13/2021", reminder: "Take Pills" },
  ]);

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
        <TableEditColumn showAddCommand showEditCommand showDeleteCommand />
        <TableGroupRow />
      </Grid>
    </Paper>
  );
};
