import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Stack } from '@mui/material'
function createData(
	name: string,
	calories: number,
) {
	return { name, calories };
}

const rows = [
	createData('ショートケーキ', 159),
	createData('ショートケーキ', 237),
	createData('ショートケーキ', 262),
	createData('ショートケーキ', 305),
	createData('ショートケーキ', 356),
];

function OrderDetail() {
	return (
		<div className='paper'>
			<div className='font-32-bold'>山田花子</div>
			<Table >
				<TableHead>
					<TableRow>
						<TableCell ><span className='font-14-medium'>注文内容</span></TableCell>
						<TableCell align="left"><span className='font-14-medium'>注文点数</span> </TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row, index: number) => (
						<TableRow
							key={index}
						>
							<TableCell component="th" scope="row">
								<Stack direction='row' spacing={1}>
									<img src='/strawberry.png' className='table-img' />
									<div className='font-24-bold'>
										{row.name}
									</div>
								</Stack>

							</TableCell>
							<TableCell align="left"><span className='font-32-bold'>1</span><span className='font-18-bold'>点</span></TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	)
}

export default OrderDetail;