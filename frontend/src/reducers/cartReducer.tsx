import { CART_TYPES } from "../actions/actionType";

const initialState: any = {
  totalCount:0,
  totalAmount:0,
  items: []
}
function addItems(state: any, items: any) {
  let result = [ ...state.items];
  let check = false;
  if(result.length == 0) {
    result.push(items);
  }
  else {
    for(let i = 0; i< result.length; i++) {
      if(result[i].data.menu_name === items.data.menu_name)
      {
        check = true;
        console.log(items.data.menu_name);
        let temp = {...result[i]};
        temp.count += items.count;
        result[i] = temp;
      }
    }
    if(!check) 
    {
    result.push(items);
    }
  }
  return result;
}
function addItemsByOne(state: any, items: any) {
  let result = [...state.items];
  let check = false;

  if(result.length == 0) {
    result.push(items);
  }
  else {
    for(let i = 0; i< result.length; i++) {
      if(result[i].data.menu_name == items.data.menu_name)
      {
        check = true;
        let temp = {...result[i]};
        temp.count += 1;
        result[i] = temp;
      }
    }
    if(!check) 
    {
    result.push(items);
    }
  }
  return result;
}
function deleteItemsByOne(state: any, items: any) {
  let result = [...state.items];
  if(result.length != 0) {
    for(let i = 0; i< result.length; i++) {
      if(result[i].data.menu_name == items.data.menu_name)
      {
        let temp = {...result[i]};
        temp.count -= 1;
        result[i] = temp;
      }
    }
  }
  return result;
}
function deleteItem(state: any, items: any) {
  let result = [...state.items];
  const index = result.indexOf(items);
  if (index > -1) { // only splice array when item is found
    result.splice(index,1); // 2nd parameter means remove one item only
  }
  return result;
}
const cartReducers = (state = initialState, action: any) => {

  switch (action.type) {
    case CART_TYPES.CART_ADD:
      return {
        ...state,
        totalCount: state.totalCount +  action.payload.count,
        totalAmount:state.totalAmount + action.payload.count * action.payload.data.price,
        items: addItems(state, action.payload)
      };
    case CART_TYPES.CART_DELETE:
      return {
        ...state,
        totalCount: state.totalCount - action.payload.count,
        totalAmount:state.totalAmount - action.payload.count * action.payload.data.price,
        items: deleteItem(state, action.payload)
      };
    case CART_TYPES.CART_ADD_BY_ONE:
      return {
        ...state,
        totalCount: state.totalCount + 1,
        totalAmount:state.totalAmount + action.payload.data.price * 1,
        items:addItemsByOne(state, action.payload)
      }
      case CART_TYPES.CART_DELETE_BY_ONE:
        return {
          ...state,
          totalCount: state.totalCount - 1,
          totalAmount:state.totalAmount -  action.payload.data.price,
          items:deleteItemsByOne(state, action.payload)
        }
    case CART_TYPES.CART_GET_ALL:
      return state
    default:
      return state;
  }
}

export default cartReducers;