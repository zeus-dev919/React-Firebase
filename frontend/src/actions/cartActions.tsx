import { CART_TYPES } from "./actionType";

 const cartAdd = (data: Object, count: number) => {
  const type = CART_TYPES.CART_ADD;
  return { type, payload:{data, count} };
}

const cartAddByOne = (data:any) => {
  const type = CART_TYPES.CART_ADD_BY_ONE;
  return {type, payload:data}

}

const cartDeleteByOne = (data:any) => {
  const type = CART_TYPES.CART_DELETE_BY_ONE;
  return {type, payload:data}
}

 const cartGetAll = () => {
  const type = CART_TYPES.CART_GET_ALL;
  return type;
}


const cartDelete = (data:any) => {
  const type = CART_TYPES.CART_DELETE;
  return {type, payload:data}
}
export default {
  cartAdd,
  cartGetAll,
  cartDelete,
  cartAddByOne,
  cartDeleteByOne
}