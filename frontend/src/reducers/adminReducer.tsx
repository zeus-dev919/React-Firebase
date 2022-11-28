import { ADMIN_TYPES } from "../actions/actionType";

const initialState: any = {
  selectDate: new Date()
};

const adminReducer = (state = initialState, action: any) => {

  switch(action.type) {
    case ADMIN_TYPES.CALENDAR_DATE:
      return {
        ...state,
        selectDate : action.payload,
      };
    default:
      return state;
  }
}

export default adminReducer;