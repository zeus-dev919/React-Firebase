import { Typography, Stack, IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

function CartButton(props:any) {
  const {count, increase, decrease} = props;
  return (
    <Stack direction='row' spacing={1} sx={{ alignItems: 'center' }}>
      <IconButton size='large' disabled={count === 1} onClick={decrease}>
        <RemoveCircleOutlineIcon />
      </IconButton>
      <Typography>{count}</Typography>
      <IconButton onClick={increase}>
        <AddCircleIcon />
      </IconButton>
    </Stack>
  )

}

export default CartButton;