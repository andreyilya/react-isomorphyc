// Quack! This is a duck. https://github.com/erikras/ducks-modular-redux
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

/**
 * Simulates data loaded into this supplierReducer from somewhere
 */
export const load = (id) => {
    return function (dispatch) {
      fetch('http://localhost:8082/get-supplier/' + id).then(response => {
        return response.json();
      }).then(res => {
        dispatch({type: LOAD, data: res});
      }).catch(error => {
        return error;
      });
    }
  }
;

export default supplierReducer
