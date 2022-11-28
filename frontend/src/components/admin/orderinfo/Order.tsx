import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

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

function Order() {
    return (
        <div className='paper'>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell ><span className='font-14-medium'>受取希望日</span></TableCell>
                    <TableCell align="left"><span className='font-14-medium'>受取時間</span> </TableCell>
                    <TableCell align="left"><span className='font-14-medium'>注文点数</span> </TableCell>
                    <TableCell align="left"><span className='font-14-medium'>購入金額</span> </TableCell>
                    <TableCell align="left"><span className='font-14-medium'>注文日</span> </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row, index: number) => (
                    <TableRow
                        key={index}
                    >
                        <TableCell component="th" scope="row">
                            <div className='font-18-medium'>
                                2022/09/09
                            </div>
                        </TableCell>
                        <TableCell align="left">
                            <div className='font-18-medium'>
                                12:00
                            </div>
                        </TableCell>
                        <TableCell align="left">
                            <div className='font-18-medium'>
                                3点
                            </div>
                        </TableCell>
                        <TableCell align="left">
                            <div className='font-18-medium'>
                                5,000円
                            </div>
                        </TableCell>
                        <TableCell align="left">
                            <div className='font-18-medium'>
                                2022/09/07
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </div>
    )
}

export default Order;