
import { Grid } from '@mui/material';
import Cart from '../../components/user/check/Cart';
import Product from "../../components/user/check/Product";
import ReceiptTime from '../../components/user/check/Time';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { Box } from '@mui/material';
import '../../style/user/user.css';
function Check() {
  return (
    <div style={{padding:'50px  10%'}}>
       <Box>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div className="font-14-bold">ホーム</div>
          <ArrowForwardIosSharpIcon sx={{ height: '14px' }} />
          <div className="font-14-bold">ショートケーキ</div>
        </div>
      </Box>
      <br />

      <Grid container spacing={2}>
        <Grid item xs={12} lg={8}>
          <Cart />
          <br/>
          <br/>
          <br/>
          <Product />
        </Grid>
        <Grid item xs={12} lg={4}>
          <ReceiptTime />
        </Grid>
      </Grid>
    </div>
  )
}

export default Check;