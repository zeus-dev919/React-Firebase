import React, { Fragment, useState } from "react";
import "../../../style/admin/admin.css";
import SubListItem from "./sublistItem";
function ListItem(props: any) {
  const [listData, setListData] = useState(props.item);
  const [timeState, setTimeState] = useState(props.state);
  return (
    <Fragment>
      <div className="pickup-list-item">
        {listData.map((item: any, idx: any) => {
          return <SubListItem item={item} key={"c" + idx} state = {timeState}/>;
        })}
      </div>
    </Fragment>
  );
}

export default ListItem;
