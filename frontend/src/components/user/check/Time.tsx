import React from 'react';
import { useSelector } from 'react-redux';
import { Paper, Button, TextField } from '@mui/material';
import BuyModal from './BuyModal';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs, { Dayjs } from 'dayjs';

function ReceiptTime() {
	const totalAmount = useSelector((state: any) => state.cart.totalAmount);

  const [open, setOpen] = React.useState(false);

  const [value, setValue] = React.useState<Dayjs | null>(dayjs());

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };
  const payClick = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }
  return (
    <>
      <Paper sx={{padding:'30px'}}>
        <div className='font-24-bold'>受け取り時間</div>
        <br/>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          label="日付"
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField fullWidth {...params} />}
        />
        <br/>
        <br/>
         <TimePicker
          label="Time"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField fullWidth {...params} />}
        />
        </LocalizationProvider>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className='font-20-bold'>合計　¥{totalAmount}</div>
        <br/>
        <button  className='pay-btn' onClick={payClick}>購入する</button>
      </Paper>
      <BuyModal open={open} handleClose={handleClose}/>
    </>
  )
}

export default ReceiptTime;