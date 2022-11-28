import { useDispatch, useSelector } from 'react-redux';
import { Dialog, DialogContent, DialogTitle, DialogActions, Divider, Box, IconButton, List, ListItem, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import allActions from '../../actions';


function ShopModal(props: any) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const shopList = useSelector((state: any) => state.cart.items);
  const totalAmount = useSelector((state: any) => state.cart.totalAmount);

  const cartDeleteClick = (cart: any) => () => {
    dispatch(allActions.cartActions.cartDelete(cart));
  }

  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={props.open}
      onClose={props.handleClose}
      PaperProps={{
        style: { borderRadius: '16px' }
      }}
    >
      <DialogTitle className='display-flex justify-content-center'>カート内の商品</DialogTitle>
      <Divider />
      <DialogContent sx={{ padding: '0px 50px' }}>
        <List>
          {!!shopList && shopList.map((cart: any, index: number) => (
            <div key={index} >
              <ListItem style={{ justifyContent: 'space-between' }}>
                <Box>
                  <div className='font-24-bold'>{cart.data.menu_name}</div>
                  <div className='font-16-medium'>{cart.data.price}円</div>
                </Box>
                <Box className='display-flex'>
                  <div className='font-20-medium display-flex align-items-center' style={{ marginRight: '10px' }}>{cart.count}</div>
                  <IconButton onClick={cartDeleteClick(cart)}>
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </ListItem>
              {index == shopList.length - 1?<></>:<Divider />}
            </div>
          ))}

        </List>
        <Box className='display-flex align-items-center'>
          <ShoppingCartIcon sx={{ fontSize: '32x', marginRight: '5px' }} />
          <div className='font-20-bold'>¥{totalAmount}</div>
        </Box>
      </DialogContent>
      <DialogActions sx={{ padding: '0px 50px' }}>
        <button className='cart-btn font-12-medium' style={{ backgroundColor: '#B4B4B4' }} onClick={props.handleClose}>キャンセル</button>
        <button className='cart-btn font-12-medium' onClick={() => navigate('/check')}>レジに進む</button>
      </DialogActions>
    </Dialog>
  )

}

export default ShopModal;