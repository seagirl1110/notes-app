import { createStore } from 'redux';
import noteReducer from './reducers/noteReducers';

const store = createStore(noteReducer);

export default store;
