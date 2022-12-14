import { useState } from 'react'
import { Paper, Grid, Stack, Accordion, AccordionSummary, AccordionDetails, FormControl, FormLabel, RadioGroup, Radio, FormControlLabel, Checkbox, TextField } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';
import Image from "react-image-enlarger";
import { useDispatch } from 'react-redux';
import allActions from '../../../actions';
import CartButton from '../CartButton';
import ShopModal from '../ShopModal';
import { IsLogin } from '../../../utils/UserInfo';
import useAdd from '../../../useHooks/useAdd';

function Product() {
  const data = Object.fromEntries(
    new URLSearchParams(window.location.search)
  )
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { count, setCount, increase, decrease } = useAdd(1);
  const success = IsLogin();
  const [zoomed, setZoomed] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  }
  const addCart = () => {
    setOpen(true);
    setCount(1);
    dispatch(allActions.cartActions.cartAdd(data, count));
  }
  return (
    <>
      <Paper >
        <Grid className='product-detail-paper' container spacing={4}>
          <Grid item xs={12} lg={6} >
            <Image
              style={{ width: "auto", height: "320px" }}
              src={data.img_path}
              zoomed={zoomed}
              onClick={() => setZoomed(true)}
              onRequestClose={() => setZoomed(false)} />
            <br />
            <br />
            <Stack direction='row' spacing={2}>
              <img className='sub-image' src={data.img_path} alt={data.menu_name} />
              <img className='sub-image' src={data.img_path} alt={data.menu_name} />
              <img className='sub-image' src={data.img_path} alt={data.menu_name} />
              <img className='sub-image' src={data.img_path} alt={data.menu_name} />
            </Stack>
          </Grid>
          <Grid item xs={12} lg={6} >
            <div>
              <div className='font-32-bold title'>{data.menu_name}</div>
              <div className='font-16-medium description'>{data.description}</div>
            </div>
            <div className='display-flex jc-sb'>
              <div className='font-32-bold'>{data.price}</div>
              <CartButton count={count} increase={increase} decrease={decrease} />
            </div>
           <Paper sx={{backgroundColor:'#F8F8F8 '}}>
           <Stack spacing={2} sx={{padding:'20px 14px'}}>
              <FormControl>
                <FormLabel>?????????</FormLabel>
                <RadioGroup
                  row
                  defaultValue="female"
                >
                  <FormControlLabel value="female" control={<Radio  />} label="14cm(??????)" className='font-14-medium' />
                  <FormControlLabel value="male" control={<Radio />} label="18cm +400???" />
                  <FormControlLabel value="other" control={<Radio />} label="24cm +900???" />
                </RadioGroup>
              </FormControl>
              <FormControl>
                <FormLabel className='font-14-medium'>??????????????????</FormLabel>
                <RadioGroup
                  row
                  defaultValue="female"
                >
                  <FormControlLabel value="female" control={<Radio  />} label="14cm(??????)" className='font-14-medium' />
                  <FormControlLabel value="male" control={<Radio />} label="18cm +400???" />
                  <FormControlLabel value="other" control={<Radio />} label="24cm +900???" />
                </RadioGroup>
              </FormControl>
              <FormControl>
                  <FormLabel className='font-14-medium'>???????????????????????????</FormLabel>
                  <FormControlLabel control={<Checkbox />} label="??????" />
                </FormControl>
                <FormControl>
                  <FormLabel className='font-14-medium'>??????????????????????????????????????????????????????????????????</FormLabel>
                  <TextField  label="Message" variant="outlined" placeholder='??????????????????????????????????????????????????????' />
                </FormControl>
            </Stack>
           </Paper>
            <br/>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              {success ? <button style={{width:'100%'}} className='cart-btn font-14-medium' onClick={addCart}>??????????????????</button> :
                <button style={{width:'100%'}} className='cart-btn font-14-medium' onClick={() => navigate('/login')}>??????????????????</button>}
            </div>
            <div>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <div className='font-14-medium'>?????????</div>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: '#F0F0F0' }}>
                  <div className='font-14-medium'>
                    ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <div className='font-14-medium'>?????????????????????</div>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: '#F0F0F0' }}>
                  <div className='font-14-medium'>
                    ????????????????????????????????????8??????
                  </div>
                  <div className='font-14-medium'>?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</div>
                </AccordionDetails>
              </Accordion>
            </div>
          </Grid>
        </Grid>
      </Paper>
      <ShopModal open={open} handleClose={handleClose} />
    </>
  )
}


export default Product;