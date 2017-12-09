import {
  CLOSE_MODAL,
  HIDE_WAITING,
  LOAD_SUPPLIER,
  LOAD_SUPPLIERS,
  OPEN_MODAL,
  SHOW_WAITING
} from "../constants/actionTypes";

export const loadSupplier = (id) => {
  return function (dispatch) {
    fetch(process.env.API_URL + '/get-supplier/' + id).then(response => {
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
//TODO: create own http service
    dispatch({type: SHOW_WAITING, waitingId: "supplierLayer"});
    fetch(process.env.API_URL + '/get-suppliers/').then(response => {
      return response.json();
    }).then(res => {
      dispatch({type: LOAD_SUPPLIERS, suppliers: res});
      dispatch({type: HIDE_WAITING, waitingId: "supplierLayer"});
    }).catch(error => {
      dispatch({type: HIDE_WAITING, waitingId: "supplierLayer"});
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

export const closeSupplierModal = (id, history) => {
  return function (dispatch) {
    if (id) {
      history.push('/redux-form');
    }
    dispatch(clearSupplier());
    dispatch(closeModal("supplierModal"));
  };
};
