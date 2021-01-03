import { combineReducers } from 'redux';
import {
  exampleState,
} from './reducers/reducer';

const rootReducer = combineReducers({
  exampleState,
})

export default rootReducer;
