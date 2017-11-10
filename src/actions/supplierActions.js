import {LOAD} from "../constants/actionTypes";

export const load = (id) => {
  return function (dispatch) {
    fetch('http://localhost:8082/get-supplier/' + id).then(response => {
      return response.json();
    }).then(res => {
      dispatch({type: LOAD, data: res});
    }).catch(error => {
      return error;
    });
  };
};
