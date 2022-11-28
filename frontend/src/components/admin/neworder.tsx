import React, { Fragment, useState, useEffect } from "react";
import ListItem from "./listItem";
import "../../style/admin/admin.css";
import { API } from "../../api";

function addZero(i: number) {
  if (i < 10) return "0" + i.toString();
  return i.toString();
}

function NewOrder() {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    if(data.length === 0){
      API.get("weborder").then((res) => {
        console.log(res.data)
        const date = new Date(res.data.orderedTime._seconds * 1000);
        setData([
          {
            date: addZero(date.getMonth() + 1) + "/" + addZero(date.getDate()),
            time: addZero(date.getHours()) + ":" + addZero(date.getMinutes()),
            discription: "田中 太郎",
          },
        ]);
      });
    }
  }, []);
  // const listData = [
  //   {
  //     date: "11/11",
  //     time: "10:15",
  //     description: "田中 太郎",
  //   },
  //   {
  //     date: "11/11",
  //     time: "10:20",
  //     description: "田中 太郎",
  //   },
  //   {
  //     date: "11/11",
  //     time: "14:15",
  //     description: "田中 太郎",
  //   },
  //   {
  //     date: "11/12",
  //     time: "08:15",
  //     description: "田中 太郎",
  //   },
  //   {
  //     date: "11/13",
  //     time: "10:30",
  //     description: "田中 太郎",
  //   },
  //   {
  //     date: "11/13",
  //     time: "10:30",
  //     description: "田中 太郎",
  //   },
  //   {
  //     date: "11/13",
  //     time: "10:30",
  //     description: "田中 太郎",
  //   },
  //   {
  //     date: "11/13",
  //     time: "10:30",
  //     description: "田中 太郎",
  //   },
  // ];
  return (
    <Fragment>
      <div className="neworder-borad">
        <div className="font-20-bold new-order-title">新着注文</div>
        <div style={{ display: "flex" }}>
          <div className="font-14-medium new-order-title">注文日時</div>
          <span style={{ width: "27%" }}></span>
          <div className="font-14-medium new-order-title">注文者</div>
        </div>
        <div
          style={{
            width: "90%",
            height: "2px",
            marginTop: "3px",
            backgroundColor: "#D3D3D3",
          }}
        ></div>
        <div style={{ height: "10px" }}></div>
        <div className="new-order-list">
          {data.map((item: any, idx: number) => {
            return (
              <ListItem
                date={item.date}
                time={item.time}
                description={item.description}
                key={idx}
              />
            );
          })}
        </div>
      </div>
    </Fragment>
  );
}

export default NewOrder;
