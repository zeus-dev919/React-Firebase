import { Paper, Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
const cartItems = [0,1];

function Cart() {
  return (
    <>
      {cartItems.map((cart: any, index: number) => (
        <div key={index}>
          <div className='display-flex' style={{ justifyContent: 'space-between', paddingBottom: '10px' }}>
            <img src='/strawberry.png' width='100px' alt='image' />
            <Stack spacing={2} sx={{ alignItems: 'flex-end' }}>
              <div className='font-18-bold'>ショートケーキ</div>
              <div className='font-20-medium'>1点</div>
            </Stack>
          </div>
        </div>
      ))}
    </>
  )
}

export default Cart;