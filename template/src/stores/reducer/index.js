import { combineReducers } from 'redux';
import globalReducer from './globalSlice';
import counterReducer from '../../features/counter/counterSlice';

export default combineReducers({
    global: globalReducer,
    counter: counterReducer
})