import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../style/admin/admin.css";
function ListItem(props: any) {
  const navigate = useNavigate();
  return (
    <Fragment>
      <div className="list-item" onClick={() => navigate('/admin/order')}>
        <div className="list-item-margin-left-20 align-center font-16-medium color-404040">
          {props.date}
        </div>
        <div className="list-item-margin-left-20 align-center font-16-medium color-404040">
          {props.time}
        </div>
        <div className="list-icon list-item-margin-left-20"></div>
        <div className="list-item-margin-left-20 align-center font-12-bold color-404040">
          {props.description}
        </div>
        <div className="align-right item-icon"></div>
      </div>
    </Fragment>
  );
}

export default ListItem;
