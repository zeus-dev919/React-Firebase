import React, { Fragment } from "react";
import AdminNavbar from "../../components/admin/navbar";
import Sidebar from '../../components/sidebar/Sidebar';
import Calendar from "../../components/admin/calendar";
import NewOrder from "../../components/admin/neworder";
import "../../style/admin/admin.css";
import { useMediaQuery } from "react-responsive";

import { initializeApp } from "firebase/app";
import SelectedDateReservation from "../../components/admin/selectedDateReservation";
import PickupToday from "../../components/admin/pick-up-today";

function Admin() {
  let isMediumSize = useMediaQuery({
    minWidth: 1500,
  });
  let isMiddleSize = useMediaQuery({
    minWidth: 1200,
  });
  let isMiddleMobile = useMediaQuery({
    minWidth: 700,
  });
  return (
    <Fragment>
      {isMediumSize ? (
        <div className="admin-mainboard">
          {/* <Sidebar /> */}
          <AdminNavbar />
          <div>
            <Calendar />
            <NewOrder />
          </div>
          <SelectedDateReservation />
          <PickupToday />
        </div>
      ) : isMiddleSize ? (
        <div className="admin-mainboard">
          {/* <Sidebar /> */}
          <AdminNavbar />
          <div>
            <Calendar />
            <SelectedDateReservation />
          </div>
          <div>
            <NewOrder />
            <div style={{ height: "60px" }}></div>
            <PickupToday />
          </div>
        </div>
      ) : isMiddleMobile ? (
        <div className="admin-mainboard">
          {/* <Sidebar /> */}
          <AdminNavbar />
          <div>
            <Calendar />
            <NewOrder />
            <SelectedDateReservation />
            <PickupToday />
          </div>
        </div>
      ) : (
        <div style={{ justifyContent: "center", display: "flex" }}>
          <div>
            <Calendar />
            <NewOrder />
            <SelectedDateReservation />
            <PickupToday />
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default Admin;
