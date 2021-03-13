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
  { date: "03/13/2021", reminder: "Eat Dinner", member: "Lindsay" },
  { date: "03/13/2021", reminder: "Take Trash Out", member: "Lily" },
];

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

export default () => (
  <Paper>
    <Grid rows={rows} columns={columns}>
      <Table rowComponent={TableRow} />
      <TableHeaderRow />
    </Grid>
  </Paper>
);
