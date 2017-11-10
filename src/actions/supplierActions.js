import {
  CLOSE_MODAL,
  LOAD_SUPPLIER,
  LOAD_SUPPLIERS,
  OPEN_MODAL
} from "../constants/actionTypes";
import {browserHistory} from "react-router";

export const loadSupplier = (id) => {
  return function (dispatch) {
    fetch('http://localhost:8082/get-supplier/' + id).then(response => {
      return response.json();
    }).then(res => {
      dispatch({type: LOAD_SUPPLIER, data: res});
    }).catch(error => {
      return error;
    });
  };
};

export const loadSuppliers = () => {
  return function (dispatch) {
    fetch('http://localhost:8082/get-suppliers/').then(response => {
      return response.json();
    }).then(res => {
      dispatch({type: LOAD_SUPPLIERS, suppliers: res});
    }).catch(error => {
      return error;
    });
  };
};

export const clearSupplier = () => {
  return {type: LOAD_SUPPLIER, data: {}};
};

export const openModal = (modalId) => {
  return {type: OPEN_MODAL, modalId};
};


export const closeModal = (modalId) => {
  return {type: CLOSE_MODAL, modalId};
};

export const closeSupplierModal = (id) => {
  return function (dispatch) {
    if (id) {
      browserHistory.push('/redux-form');
    }
    dispatch(clearSupplier());
    dispatch(closeModal("supplierModal"));
  };
};
