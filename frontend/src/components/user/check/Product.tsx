import {Grid, Chip} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const data = [{
  label: 'ショートケーキ',
  imgPath:
    '/strawberry.png',
  price: 2000
}, {
  label: 'ショートケーキ',
  imgPath:
    '/strawberry.png',
  price: 2000
}, {
  label: 'ショートケーキ',
  imgPath:
    '/strawberry.png',
  price: 2000
}, {
  label: 'ショートケーキ',
  imgPath:
    '/strawberry.png',
  price: 2000
},{
  label: 'ショートケーキ',
  imgPath:
    '/strawberry.png',
  price: 2000
},{
  label: 'ショートケーキ',
  imgPath:
    '/strawberry.png',
  price: 2000
}]

function Product() {
  return (
    <>
      <div className='font-20-bold'>XXXショップからもう１品のおすすめ</div>
      <br/>
      <Grid container spacing={3}>
        {data.map((product, index) => {
          return (
            <Grid item key={index} lg='auto'>
              <div className='product'>
                <img
                  src={product.imgPath}
                  alt={product.label}
                />
                <div className='font-24-bold product-label'>{product.label}</div>
                <div className='display-flex jc-sb'>
                  <div className='font-20-medium'>{product.price}</div>
                  <Chip variant='outlined' className='font-16-medium' icon={<ShoppingCartIcon />} label='追加' />
                </div>
              </div>
            </Grid>

          )
        })}
      </Grid>
    </>
  )
}

export default Product;