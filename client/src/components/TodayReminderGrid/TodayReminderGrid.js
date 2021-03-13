import React from "react";
import Paper from "@material-ui/core/Paper";
import {
  Grid,
  Table,
  TableHeaderRow,
} from "@devexpress/dx-react-grid-material-ui";

const columns = [
  { name: "date", title: "Date" },
  { name: "reminder", title: "Reminder" },
  { name: "member", title: "Member" },
];
const rows = [
  { date: 0, reminder: "DevExtreme", member: "DevExpress" },
  { date: 1, reminder: "DevExtreme Reactive", member: "DevExpress" },
];

export default () => (
  <Paper>
    <Grid rows={rows} columns={columns}>
      <Table />
      <TableHeaderRow />
    </Grid>
  </Paper>
);
