import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { Box } from '@mui/material';
import Product from "../../components/user/detail/Product";
import Service from "../../components/user/detail/Service";
import '../../style/user/user.css';

function Detail() {
  return (
    <>
      <Box>
        <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '10%', marginTop: '50px' }}>
          <div className="font-14-bold">ホーム</div>
          <ArrowForwardIosSharpIcon sx={{ height: '14px' }} />
          <div className="font-14-bold">ショートケーキ</div>
        </div>
      </Box>
      <br />
      <br />
      <Product />
      <Service />
    </>
  )
}

export default Detail;