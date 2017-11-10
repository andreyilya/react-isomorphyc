import {CLOSE_MODAL, LOAD, OPEN_MODAL} from "../constants/actionTypes";
import {browserHistory} from "react-router";

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
export const clearSupplier = () => {
  return {type: LOAD, data: {}};
};

export const openModal = (id) => {
  return {type: OPEN_MODAL, id};
};


export const closeModal = (modalId, id) => {
  return {type: CLOSE_MODAL, modalId};
};

export const closeSupplierModal = (id) => {
  return function (dispatch) {
    if (id) {
      browserHistory.push('/redux-form');
    }
    dispatch(clearSupplier());
    dispatch(closeModal("id", id));
  };
};
