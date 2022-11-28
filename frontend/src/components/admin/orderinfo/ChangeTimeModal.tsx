import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Divider, TextField } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';

function ChangeTimeModal(props: any) {
	const { open, handleClose } = props;

	const [value, setValue] = React.useState<Dayjs | null>(dayjs());

	const handleChange = (newValue: Dayjs | null) => {
		setValue(newValue);
	};

	return (
		<Dialog
			open={open}
			onClose={handleClose}
			PaperProps={{ sx: { borderRadius: '15px' } }}
		>
			<div className='modal'>
				<DialogTitle >
					<div className='font-32-bold'>山田花子</div>
				</DialogTitle>
				<Divider />
				<DialogContent>
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<DesktopDatePicker
							label="受取希望日"
							inputFormat="MM/DD/YYYY"
							value={value}
							onChange={handleChange}
							renderInput={(params) => <TextField fullWidth {...params} />}
						/>
						<br />
						<br />
						<TimePicker
							label="受取時間"
							value={value}
							onChange={handleChange}
							renderInput={(params) => <TextField fullWidth {...params} />}
						/>
					</LocalizationProvider>
				</DialogContent>
				<DialogActions>
					<button className='success-btn font-20-bold' onClick={handleClose}>変更する</button>
					<button className='change-btn font-20-bold' onClick={handleClose}>
						キャンセル
					</button>
				</DialogActions>
			</div>

		</Dialog>
	)
}

export default ChangeTimeModal;