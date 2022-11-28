import { Grid } from '@mui/material';
import Card from './Card';

function Product(props: any) {
  const { menus } = props;
  return (
    <>
      <Grid container spacing={3}>
        {menus.map((product: any, index: number) => {
          return (
            <Grid item key={index} xs='auto' lg='auto' >
              <Card product={product} />
            </Grid>
          )
        })}
      </Grid>

    </>
  )
}

export default Product;