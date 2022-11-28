
import { Grid, Paper, Stack, Accordion, AccordionSummary, AccordionDetails} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Cart from '../../components/user/mypage/Cart';

import '../../style/user/mypage.css';

function MyPage() {
	return (
		<div className="my-page">
			<div className="font-20-bold my-page-text">マイページ</div>
			<Grid container spacing={2}>
				<Grid item xs={12} lg={8} >
					<Paper>
						<div className='font-14-medium book-text'>予約確認</div>
						<div className='book-detail'>
							{/* <div className='font-12-medium'>現在予約はしていません</div> */}
							<Stack spacing={1}>
								<div className='font-12-medium'>受取予定日時</div>
								<div style={{ display: 'flex', justifyContent: 'space-between' }}>
									<div className='font-12-medium'>2022/10/10 15:45</div>
									<div className='font-12-medium'>合計3,000円</div>
								</div>
							</Stack>
							<hr />
							<Cart />
						</div>
					</Paper>
					<br />

					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header"
						>
							<div className='font-14-medium accordion-text'>原材料</div>
						</AccordionSummary>
						<AccordionDetails>
							<div className='font-14-medium book-text'>注文履歴</div>
							<div className='book-detail'>
							{/* <div className='font-12-medium'>現在予約はしていません</div> */}
								<Stack spacing={1}>
									<div className='font-12-medium'>受取日時</div>
									<div style={{ display: 'flex', justifyContent: 'space-between' }}>
										<div className='font-12-medium'>2022/10/10 15:45</div>
										<div className='font-12-medium'>合計3,000円</div>
									</div>
								</Stack>
								<hr />
								<Cart />
							</div>
						</AccordionDetails>
					</Accordion>
				</Grid>
				<Grid item xs={12} lg={4}>
					<Paper className='right-paper'>
						<div className='font-14-medium right-text'>情報編集</div>
						<hr />
						<div className='font-14-medium right-text'>ログアウト</div>
					</Paper>
				</Grid>
			</Grid>
		</div>
	)

}

export default MyPage;