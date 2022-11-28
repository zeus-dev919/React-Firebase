import { Paper, Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';

import allActions from '../../../actions';

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cart.items);
  const totalAmount = useSelector((state: any) => state.cart.totalAmount);
  const decreaseClick = (cart:any) =>() => {
    dispatch(allActions.cartActions.cartDeleteByOne(cart));
  }
  const increaseClick = (cart:any) =>() => {
    dispatch(allActions.cartActions.cartAddByOne(cart));
  }
  const cartDeleteClick = (cart: any) => () => {
    dispatch(allActions.cartActions.cartDelete(cart));
  }
  return (
    <>
      <div className='font-24-bold'>カート</div>
      {cartItems.map((cart: any, index: number) => (
        <div key={index}>
          <Paper className='display-flex' sx={{ justifyContent: 'space-between', padding: '20px' }}>
            <img src={cart.data.img_path} alt={cart.data.menu_name} />
            <Stack spacing={2} sx={{ alignItems: 'flex-end' }}>
              <div className='font-18-bold'>{cart.data.menu_name}</div>
              <div className='font-20-medium'>{cart.data.price}</div>
              <Stack direction='row' spacing={1} sx={{ alignItems: 'center' }}>
                <IconButton size='large' disabled={cart.count === 1} onClick={decreaseClick(cart)}>
                  <RemoveCircleOutlineIcon />
                </IconButton>
                <Typography>{cart.count}</Typography>
                <IconButton onClick={increaseClick(cart)}>
                  <AddCircleIcon />
                </IconButton>
                <IconButton onClick={cartDeleteClick(cart)}>
                    <DeleteIcon />
                  </IconButton>
              </Stack>
            </Stack>
          </Paper>
          <br />
        </div>
      ))}
      <div className='display-flex' style={{ justifyContent: 'flex-end', alignItems:'center' }}>
        <div className='font-18-bold' style={{ marginRight: '20px' }}>合計</div>
        <div className='font-24-bold'>{totalAmount}</div>
      </div>
    </>
  )
}

export default Cart;