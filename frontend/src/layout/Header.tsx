import { Paper, Avatar, Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { IsLogin } from "../utils/UserInfo";
import MediaQuery from 'react-responsive'

import '../style/user/header.css';
const badgeStyle = {
	"& .MuiBadge-badge": {
		color: 'white',
		backgroundColor: '#EDBF06',
		height: 15,
		width: 15,
	}
}
function Header() {
	const navigate = useNavigate();
	const success = IsLogin();
	const badgeClick = success?() => navigate('/check'):()=>navigate('/login');
	const totalCount = useSelector((state: any) => state.cart.totalCount);
	const userName = useSelector((state: any) => state.login?.user);
	return (
		<>
		<MediaQuery minWidth='701px'>
			<Paper className="header">
			<div className="header-left">
				<img className="cursor-pointer" src="/logo.png" height='40px' style={{ marginRight: '10px' }} onClick={() => navigate('/')} />
				<button className="header-btn font-10-medium">ケーキ予約受付中</button>
			</div>
			<div className="header-right">
				{success ? <div className="user-profile" onClick={() => navigate('/mypage')} >
						<Avatar className="user-avatar"/>
						<div className="font-18-medium">{userName}</div>
					</div> :
					<div className="user-profile" >
						<Avatar className="user-avatar"/>
						<div className="font-18-medium">ゲスト様</div>
					</div>
				}
				<IconButton onClick={badgeClick}>
					<Badge badgeContent={totalCount} sx={badgeStyle} >
						<ShoppingCartIcon sx={{ fontSize: '40px' }} />
					</Badge>
				</IconButton>
			</div>
		</Paper>
		</MediaQuery>
		<MediaQuery maxWidth='700px'>
			<Paper className="header-mobile">
			<img className="cursor-pointer" src="/logo.png" height='40px' style={{ marginRight: '10px' }} onClick={() => navigate('/')} />
			<div className="header-right">
				{success ? <div className="user-profile" >
						<Avatar className="user-avatar"/>
						<div className="font-18-medium">{userName}</div>
					</div> :
					<div className="user-profile" >
						<Avatar className="user-avatar"/>
						<div className="font-18-medium">ゲスト様</div>
					</div>
				}
			</div>
		</Paper>
		</MediaQuery>
		
		</>
		

	)
}

export default Header;