// Quack! This is a duck. https://github.com/erikras/ducks-modular-redux
import {LOAD} from "../constants/actionTypes";
import SupplierService from "../api/SupplierService";


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

/**
 * Simulates data loaded into this supplierReducer from somewhere
 */
export const load = data => ({ type: LOAD, data });

export default supplierReducer
