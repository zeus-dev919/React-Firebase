import React, { Fragment, useEffect, useState } from "react";
import ListItem from "./listItem";
import { useSelector} from 'react-redux'
import "../../style/admin/admin.css";
import { API } from "../../api";

function addZero(i: number) {
  if (i < 10) return "0" + i.toString();
  return i.toString();
}

function SelectedDateReservation() {

  const [data, setData] = useState<any>({})
  const [list, setList] = useState<any>([])
  let selectedDate = useSelector((state : any) => state.admin.selectDate)
  let month = selectedDate.getMonth() + 1
  let day = selectedDate.getDate()
  
  useEffect(() => {
    if(Object.keys(data).length === 0 && data.constructor === Object){
      API.get('weborder').then((res) => {
        setData(res.data)
      })
    }
    
    else{
      const date = new Date(data.receivedTime._seconds * 1000)
      const selDate = new Date(selectedDate)
      if(selDate.getMonth() == date.getMonth() && selDate.getDate() == date.getDate()){
        const newList = []
        for(let i = 0; i < data.order.length; i++){
          newList.push({
            date: addZero(date.getMonth() + 1) + "/" + addZero(date.getDate()),
            time: addZero(date.getHours()) + ":" + addZero(date.getMinutes()),
            discription: "田中 太郎",
          })
        }
        setList(newList)
      }
      else{
        setList([])
      }
      
    }

  } , [selectedDate])
  
  const listData = [
    {
      date: "11/11",
      time: "10:15",
      description: "田中 太郎",
    },
    {
      date: "11/11",
      time: "10:20",
      description: "田中 太郎",
    },
    {
      date: "11/11",
      time: "14:15",
      description: "田中 太郎",
    },
    {
      date: "11/12",
      time: "08:15",
      description: "田中 太郎",
    },
    {
      date: "11/13",
      time: "10:30",
      description: "田中 太郎",
    },
    {
      date: "11/13",
      time: "10:30",
      description: "田中 太郎",
    },
    {
      date: "11/13",
      time: "10:30",
      description: "田中 太郎",
    },
    {
      date: "11/13",
      time: "10:30",
      description: "田中 太郎",
    },
    {
        date: "11/13",
        time: "10:30",
        description: "田中 太郎",
      },
      {
        date: "11/13",
        time: "10:30",
        description: "田中 太郎",
      },{
        date: "11/13",
        time: "10:30",
        description: "田中 太郎",
      },{
        date: "11/13",
        time: "10:30",
        description: "田中 太郎",
      },{
        date: "11/13",
        time: "10:30",
        description: "田中 太郎",
      },{
        date: "11/13",
        time: "10:30",
        description: "田中 太郎",
      },{
        date: "11/13",
        time: "10:30",
        description: "田中 太郎",
      },{
        date: "11/13",
        time: "10:30",
        description: "田中 太郎",
      },{
        date: "11/13",
        time: "10:30",
        description: "田中 太郎",
      },{
        date: "11/13",
        time: "10:30",
        description: "田中 太郎",
      },{
        date: "11/13",
        time: "10:30",
        description: "田中 太郎",
      },{
        date: "11/13",
        time: "10:30",
        description: "田中 太郎",
      },{
        date: "11/13",
        time: "10:30",
        description: "田中 太郎",
      },{
        date: "11/13",
        time: "10:30",
        description: "田中 太郎",
      },
  ];
  return (
    <Fragment>
      <div className="width-500 min-width-400 height-85-per margin-top-5vh min-height-600 board-white border-radius-15 box-shadow-gray">
        <div className="font-24-bold new-order-title margin-left-30 padding-top-10">選択日の予約一覧</div>
        <div className="selected-reservation-date font-24-bold ">
            {2022}年 {month}/{day} （土）
        </div>
        <div style={{ display: "flex", width:'93%', marginLeft:'3.5%'}}>
          <div className="font-14-bold new-order-title">受け取り時間</div>
          <span style={{ width: "27%" }}></span>
          <div className="font-14-bold new-order-title">注文者</div>
        </div>
        <div className="devider"></div>
        <div style={{height:'10px'}}></div>
        <div className="selected-reservation-list">
          {list.map((item : any,idx : any) => {
            return(
              <ListItem date={item.date} time = {item.time} description={item.description} key = {idx}/>
            )
          })}
        </div>
        <div style={{height:'50px'}}></div>
      </div>
    </Fragment>
  );
}

export default SelectedDateReservation;
