import {LOAD} from "../constants/actionTypes";


const supplierReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD:
      return {
        data: action.data
      };
    default:
      return state
  }
};

export default supplierReducer
