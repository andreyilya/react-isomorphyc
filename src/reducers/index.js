import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import supplierReducer from './supplierReducer';
import {routerReducer} from 'react-router-redux';
import { reducer as reduxFormReducer } from 'redux-form'

const rootReducer = combineReducers({
  fuelSavings,
  supplierReducer,
  routing: routerReducer,
  form: reduxFormReducer
});

export default rootReducer;
