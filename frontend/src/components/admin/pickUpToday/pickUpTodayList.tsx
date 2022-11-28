import React, { Fragment, useEffect, useState } from "react";
import ExceededPickTime from "./exceededPickTime";
import CurrentTime from "./currentTime";
import Devider from "./devider";
import DeviderWithTime from "./deviderWithTime";
import { getTime } from "../../../functions/getTime";
import { compareWithCurrentTime } from "../../../functions/compareWithCurrentTime";
import { type } from "os";
import ListItem from "./listItem";
import { API } from "../../../api";
function PickupTodayList() {
  const [currentTime, setCurrentTime] = useState(getTime());
  const [orderTimeState, setOrderTimeState] = useState(false);
  const [data, setData] = useState<any>({})
  const [beforeList, setBeforeList] = useState([])
  const [afterList, setAfterList] = useState([])
  setInterval(() => {
    setCurrentTime(getTime());
  }, 10000);

  useEffect(() => {
    if(Object.keys(data).length === 0 && data.constructor === Object){
      API.get('weborder').then((res) => {
        setData(res.data)
      })
    }
    else{
      const date = new Date(data.orderedTime._seconds * 1000)
      const today = new Date()
      if(today.getMonth() == date.getMonth() && today.getDate() == date.getDate()){
        if(date > today) setAfterList(data.order)
        else setBeforeList(data.order)
      }
    }
  }, [])
  

  const beforeData = [
    [
      {
        time: "05:15",
        description: "田中 太郎",
      },
      {
        time: "05:15",
        description: "田中 太郎",
      },
      {
        time: "05:15",
        description: "田中 太郎",
      },
    ],
    [
      {
        time: "06:15",
        description: "田中 太郎",
      },
    ],
    [
      {
        time: "07:20",
        description: "田中 太郎",
      },
      {
        time: "07:20",
        description: "田中 太郎",
      },
    ],
  ];

  const afterData = [
    [
      {
        time: "11:15",
        description: "田中 太郎",
      },
      {
        time: "11:15",
        description: "田中 太郎",
      },
      {
        time: "11:15",
        description: "田中 太郎",
      },
    ],
    [
      {
        time: "12:15",
        description: "田中 太郎",
      },
      {
        time: "12:15",
        description: "田中 太郎",
      },

    ],
    [
      {
        time: "13:15",
        description: "田中 太郎",
      },
      {
        time: "13:15",
        description: "田中 太郎",
      },

    ],
    [
      {
        time: "14:15",
        description: "田中 太郎",
      },
      {
        time: "14:15",
        description: "田中 太郎",
      },
      {
        time: "14:15",
        description: "田中 太郎",
      },
    ],
    [
      {
        time: "15:15",
        description: "田中 太郎",
      },


    ],
  ];

  useEffect(() => {}, [currentTime]);

  return (
    <>
      <div style={{width:'98%'}}>
        <ExceededPickTime />
        {beforeList.map((item, idx) => {
          return (
            <div key={"a" + idx}>
              <ListItem item={item} state = {false} />
              <Devider />
            </div>
          );
        })}
        <CurrentTime currentTime={currentTime} />
        {afterList.map((item, idx) => {
          return (
            <div key={"b" + idx}>
              <ListItem item={item} state={true}/>
              <Devider />
              {/* <DeviderWithTime /> */}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default PickupTodayList;
