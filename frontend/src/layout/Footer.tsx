import { Paper, Stack, Divider } from "@mui/material";
import MediaQuery from 'react-responsive'
import '../style/user/footer.css';
export default function Footer() {
	return (
		<>
			<MediaQuery minWidth='701px'>
				<Paper variant="outlined" className="footer" >
					<Stack spacing={4} direction='row' justifyContent='center'>
						<div className="font-16-bold">ホーム</div>
						<div>
							<div className="font-16-bold">メニュー</div>
							<div>
								<div className="font-14-medium">おすすめ </div>
								<div className="font-14-medium"> ケーキ </div>
								<div className="font-14-medium"> ドリンク</div>
							</div>
						</div>
						<div className="font-16-bold">会社情報</div>
						<div className="font-16-bold">お問い合わせ</div>
						<div>
							<div className="font-16-bold">アプリ・SNS</div>
							<div>
								<div className="font-14-medium">おすすめ </div>
								<div className="font-14-medium"> ケーキ </div>
								<div className="font-14-medium"> ドリンク</div>
							</div>
						</div>
					</Stack>
					<br />
					<br />
					<br />
					<Divider />
					<br />
					<br />
					<Stack spacing={1} direction='row' justifyContent='flex-end'>
						<div className="font-16-medium">利用規約</div>
						<div className="font-16-medium">個人情報保護方針</div>
						<div className="font-16-medium">法律に基づく情報</div>
						<div className="font-16-medium">株式会社XXXXXXXX</div>
					</Stack>
				</Paper>
			</MediaQuery>
			<MediaQuery maxWidth='700px'>
				<Paper variant="outlined" className="footer-mobile" >
					<div className="font-14-medium mobile-text">株式会社XXXXXXXX</div>
					<div className="font-14-medium mobile-text">利用規約</div>
					<div className="font-14-medium mobile-text">個人情報保護方針</div>
					<br />
					<div className="font-14-medium mobile-copyright">Copyright ©︎ eBENTO ALL Rights Reserved.</div>
				</Paper>
			</MediaQuery>
		</>

	)

}