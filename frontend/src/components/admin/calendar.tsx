import React, { Fragment, useState } from "react";
import CalendarComponent from "../calendar/calendarComponent";
import "../../style/admin/calendar.css";
function Calendar() {
  return (
    <Fragment>
      <div className="calendar-borad">
        <CalendarComponent />
      </div>
    </Fragment>
  );
}

export default Calendar;
