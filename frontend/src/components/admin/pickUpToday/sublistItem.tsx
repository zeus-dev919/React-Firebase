import { color, style } from "@mui/system";
import React, { Fragment, useState } from "react";
import "../../../style/admin/admin.css";
function SubListItem(props: any) {
  const [state, setState] = useState(props.state)
  return (
    <Fragment>
      <div className="sub-list-item">
        <div className="sub-list-logo"></div>
        <div className="sub-list-time-name">
          <div className= "font-16-medium" style={state? {color: 'black'} : {color : 'red'}}>{props.item.time}</div>
          <div className="font-16-bold" style={state? {color: 'black'} : {color : 'red'}}>{props.item.description}</div>
        </div>
      </div>
    </Fragment>
  );
}

export default SubListItem;
