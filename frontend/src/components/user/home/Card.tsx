import React from 'react';
import { Chip } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from "react-router-dom";
import { createSearchParams, useSearchParams } from "react-router-dom";
import ShopModal from '../ShopModal';

const Card = (props: any) => {
  const product: any = props.product;
  const [open, setOpen] = React.useState(false);

  const shopClick = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }
  const navigate = useNavigate();
  const detailClick = (data: any) => () => {
    navigate({
      pathname: '/detail',
      search: `?${createSearchParams(data)}`,
    })
  }

  return (
    <>
      {product.is_sale ?
        <div className='sold-product' style={{ position: "relative" }}>
          {product.is_sale && <div >
            <div className="sold-product-bg" >
            </div>
            <div className=" font-32-medium sold-product-text">売り切れ</div>
          </div>}
          <img
            src={product.img_path}
            alt="product"
          />
          <div className='font-24-bold product-label'>{product.menu_name}</div>
          <div className='display-flex jc-sb'>
            <div className='font-20-medium'>{product.price}</div>
            <Chip variant='outlined' className='font-16-medium' icon={<ShoppingCartIcon />} label='追加' />
          </div>
        </div>
        : <>
          <div onClick={detailClick(product)} className='product' style={{ position: "relative" }}>
            <img
              src={product.img_path}
              alt={Object.keys(product)[0]}
            />
            <div className='font-24-bold product-label'>{product.menu_name}</div>
            <div className='display-flex jc-sb'>
              <div className='font-20-medium'>¥{product.price}</div>
              <div onClick={shopClick}>
                <Chip variant='outlined' className='font-16-medium' icon={<ShoppingCartIcon />} label='追加' />
              </div>
            </div>
          </div>
          <ShopModal open={open} handleClose={handleClose} /></>
      }

    </>


  )
}

export default Card;