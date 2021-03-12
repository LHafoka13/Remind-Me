import React from "react";
import Button from "@material-ui/core/Button";

export default function AddButton() {
  return (
    <Button
      variant="outlined"
      color="primary"
      className="mb-3"
      onClick={() => {
        this.setState({ editingFormVisible: true });
        this.onEditingAppointmentChange(undefined);
        this.onAddedAppointmentChange({
          startDate: new Date(currentDate).setHours(startDayHour),
          endDate: new Date(currentDate).setHours(startDayHour + 1),
        });
      }}
    >
      Add A Reminder
    </Button>
  );
}
