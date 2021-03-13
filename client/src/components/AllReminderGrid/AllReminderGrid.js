import React from "react";
import Paper from "@material-ui/core/Paper";
import { GroupingState, IntegratedGrouping } from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableGroupRow,
} from "@devexpress/dx-react-grid-material-ui";

const columns = [
  { name: "name", title: "Member" },
  { name: "date", title: "Date" },
  { name: "reminder", title: "Reminder" },
];
const rows = [{ name: "Robby", date: "03/13/2021", reminder: "Take Pills" }];

export default () => {
  return (
    <Paper>
      <Grid rows={rows} columns={columns}>
        <GroupingState grouping={[{ columnName: "name" }]} />
        <IntegratedGrouping />
        <Table />
        <TableHeaderRow />
        <TableGroupRow />
      </Grid>
    </Paper>
  );
};