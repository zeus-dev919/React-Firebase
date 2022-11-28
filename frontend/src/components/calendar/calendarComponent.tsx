import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Calendar from 'react-calendar';
import '../../style/admin/calendar.css'
import allActions from '../../actions';

export default function CalendarComponent() {
  const dispatch = useDispatch();

  const [value, setValue] = useState(new Date());
  
  const onChange = (e : any) => {
    setValue(e);
    dispatch(allActions.adminAction.setDate(e));
    
  }

  return (
    <div style={{marginTop:'20px'}}>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}