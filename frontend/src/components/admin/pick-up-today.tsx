import React, { Fragment, useState } from "react";
import PickupTodayList from "./pickUpToday/pickUpTodayList";
import { useSelector } from 'react-redux';

import "../../style/admin/admin.css";
function PickupToday() {

  const dayName = ['日','月','火','水','木','金','土']
  let today = new Date()
  let month = today.getMonth() + 1
  let date = today.getDate()
  let day = today.getDay()
  
  return (
    <Fragment>
      <div className="pick-up-today">
        <div className="pick-up-today-header">
          <div style={{ display: "flex" }}>
            <div className="font-20-bold margin-top-30 margin-left-20">
              本日の受取
            </div>
            <div className="font-20-bold margin-top-30 margin-left-per-20">{month}/</div>
            <div className="font-36-bold padding-center margin-top-15 width-46-height-46-center background-color-yellow algin-text-center color-white">
              <a style={{ marginTop: "15px" }}>{date}</a>
            </div>
            <div className="font-16-bold margin-top-40 ">{`（${dayName[day]}）`}</div>
          </div>
        </div>
        <div className="pick-up-deveider"></div>
        <div style={{ height: "10px" }}></div>
        <div className="pick-up-today-list">
          <PickupTodayList/>
        </div>
      </div>
    </Fragment>
  );
}

export default PickupToday;
