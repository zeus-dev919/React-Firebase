import React, {useState} from 'react';
import {  Grid, Stack } from '@mui/material';
import Order from '../../components/admin/orderinfo/Order';
import OrderDetail from '../../components/admin/orderinfo/OrderDetail';

import UserInfo from '../../components/admin/orderinfo/UserInfo';
import '../../style/admin/orderinfo.css';
import ChangeTimeModal from '../../components/admin/orderinfo/ChangeTimeModal';



function OrderInfo() {
	const [open, setOpen] = useState(false);
	const handleClose = () => {
		 setOpen(false);
	}
	return (
		<div className='order-container'>
			<Grid container spacing={5}>
				<Grid item xs={12} lg={8}>
					<Stack spacing={5}>
						<OrderDetail />
						<Order />
					</Stack>
				</Grid>
				<Grid item xs={12} lg={1}></Grid>
				<Grid item xs={12} lg={3}>
					<Stack spacing={2}>
						<button className='success-btn font-20-bold'>受渡完了</button>
						<button className='change-btn font-20-bold' onClick={()=>setOpen(true)}>日時・時間変更</button>
						<div className='font-14-medium delete-btn'>この予約を削除する</div>
					</Stack>
					<br />
					<UserInfo />
				</Grid>
			</Grid>
			<ChangeTimeModal open = {open} handleClose = {handleClose}/>
		</div>
	)
}

export default OrderInfo;