import {CLOSE_MODAL, OPEN_MODAL} from "../constants/actionTypes";


const modalReducer = (state = {modalOpen: false}, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        modalOpen: true
      };
    case CLOSE_MODAL:
      return {
        modalOpen: false
      };
    default:
      return state;
  }
};

export default modalReducer;
