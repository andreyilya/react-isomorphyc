import {CLOSE_MODAL, OPEN_MODAL} from "../constants/actionTypes";
import objectAssign from "object-assign";

const modalReducer = (state = {}, action) => {
  let assignedObject = objectAssign({}, state);
  switch (action.type) {
    case OPEN_MODAL:
      assignedObject[action.modalId] = true;
      return assignedObject;
    case CLOSE_MODAL:
      assignedObject[action.modalId] = false;
      return assignedObject;
    default:
      return state;
  }
};

export default modalReducer;
