import { combineReducers } from 'redux';
import supplierReducer from './supplierReducer';
import {routerReducer} from 'react-router-redux';
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers({
  supplierReducer,
  routing: routerReducer,
  form: reduxFormReducer
});

export default rootReducer;
