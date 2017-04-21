import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import {routerReducer} from 'react-router-redux';
import { reducer as reduxFormReducer } from 'redux-form'

const rootReducer = combineReducers({
  fuelSavings,
  routing: routerReducer,
  form: reduxFormReducer
});

export default rootReducer;
