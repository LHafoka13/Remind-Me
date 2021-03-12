import * as React from "react";
import Paper from "@material-ui/core/Paper";
import { ViewState, EditingState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Appointments,
  Toolbar,
  ViewSwitcher,
  DateNavigator,
  MonthView,
  DayView,
  TodayButton,
  EditRecurrenceMenu,
  AllDayPanel,
  AppointmentForm,
  AppointmentTooltip,
  ConfirmationDialog,
} from "@devexpress/dx-react-scheduler-material-ui";

const messages = {
  moreInformationLabel: "",
};

const TextEditor = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  if (props.type === "multilineTextEditor") {
    return null;
  }
  return <AppointmentForm.TextEditor {...props} />;
};

const BasicLayout = ({ onFieldChange, appointmentData, ...restProps }) => {
  console.log(appointmentData);

  // appointmentData.startDate = appointmentData.startDate.toString();
  // appointmentData.endDate = appointmentData.endDate.toString();

  console.log(appointmentData);

  const onCustomFieldChange = (nextValue) => {
    onFieldChange({ customField: nextValue });
  };

  return (
    <AppointmentForm.BasicLayout
      appointmentData={appointmentData}
      onFieldChange={onFieldChange}
      {...restProps}
    >
      <AppointmentForm.Label text="Notes" type="title" />
      <AppointmentForm.TextEditor
        value={appointmentData.customField}
        onValueChange={onCustomFieldChange}
        placeholder="Optional"
      />
      <AppointmentForm.Label text="Member" type="title" />
      <AppointmentForm.Select
        value={appointmentData.customField}
        onValueChange={onCustomFieldChange}
        placeholder="Member"
      />
    </AppointmentForm.BasicLayout>
  );
};

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentViewName: "month",
      addedAppointment: {},
      appointmentChanges: {},
      editingAppointment: undefined,

      appointments: [],
    };

    this.currentViewNameChange = (currentViewName) => {
      this.setState({ currentViewName });
    };
    this.commitChanges = this.commitChanges.bind(this);
    this.changeAddedAppointment = this.changeAddedAppointment.bind(this);
    this.changeAppointmentChanges = this.changeAppointmentChanges.bind(this);
    this.changeEditingAppointment = this.changeEditingAppointment.bind(this);
  }

  componentDidMount = () => {
    this.getAppointments();
  };

  changeAddedAppointment(addedAppointment) {
    this.setState({ addedAppointment });
  }

  getAppointments = () => {
    fetch("/api/appointments")
      .then((response) => response.json())
      .then((data) => {
        console.log("success in getting appointments:", data);
        this.setState({ appointments: data });
      })
      .catch((error) => console.error("error:", error));
  };

  changeAppointmentChanges(appointmentChanges) {
    console.log("appointment change");
    this.setState({ appointmentChanges });
  }

  //this runs when the appointment Form is opened
  changeEditingAppointment(editingAppointment) {
    console.log("editing");
    this.setState({ editingAppointment });
  }

  commitChanges({ added, changed, deleted }) {
    console.log("deleting");
    this.setState((state) => {
      let { addedAppointment } = state;

      let body = {
        title: addedAppointment.title,
        startDate: addedAppointment.startDate,
        endDate: addedAppointment.endDate, //formatting on this item...
        description: addedAppointment.description,
        member: "Robby",
        rRule: addedAppointment.rRule,
        //   make this each box of the table?
        //   can we use state here? or form submit?
      };

      console.log("----Body----");
      console.log(body);

      console.log("----State----");
      console.log(state);
      if (added) {
        fetch("/api/helper/appointments", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body), //not sure which variable to capture here
        })
          .then((response) => response.json())
          .then((data) => {
            // const startingAddedId =
            //   data.length > 0 ? data[data.length - 1].id + 1 : 0;
            // data = [...data, { id: startingAddedId, ...added }];
            this.getAppointments();
          })
          .catch((err) => console.error(err));
        if (changed) {
          data = data.map((appointment) =>
            changed[appointment.id]
              ? { ...appointment, ...changed[appointment.id] }
              : appointment
          );
        }
        if (deleted !== undefined) {
          fetch("api/appointments/:id", {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            where: {
              id: req.params.id,
            },
          }).then((response) => response.json());
          this.getAppointments();
          // data = data.filter((appointment) => appointment.id !== deleted);
        }
        // return { data };
      }
    });
  }

  render() {
    const {
      currentViewName,
      addedAppointment,
      appointmentChanges,
      editingAppointment,
    } = this.state;

    return (
      <Paper elevation={3} className="calendarHeight">
        <Scheduler data={this.state.appointments}>
          <ViewState
            defaultCurrentDate={new Date()}
            currentViewName={currentViewName}
            onCurrentViewNameChange={this.currentViewNameChange}
          />
          <EditingState
            onCommitChanges={this.commitChanges}
            addedAppointment={addedAppointment}
            onAddedAppointmentChange={this.changeAddedAppointment}
            appointmentChanges={appointmentChanges}
            onAppointmentChangesChange={this.changeAppointmentChanges}
            editingAppointment={editingAppointment}
            onEditingAppointmentChange={this.changeEditingAppointment}
          />
          <WeekView startDayHour={9} endDayHour={19} />
          <WeekView
            name="work-week"
            displayName="Work Week"
            excludedDays={[0, 6]}
            startDayHour={9}
            endDayHour={19}
          />
          <MonthView name="month" />
          <DayView />
          <AllDayPanel />
          <EditRecurrenceMenu />
          <ConfirmationDialog />
          <Toolbar />
          <DateNavigator />
          <TodayButton />
          <ViewSwitcher />
          <Appointments />
          <AppointmentTooltip showOpenButton showDeleteButton />
          <AppointmentForm
            basicLayoutComponent={BasicLayout}
            textEditorComponent={TextEditor}
            messages={messages}
          />
        </Scheduler>
      </Paper>
    );
  }
}
