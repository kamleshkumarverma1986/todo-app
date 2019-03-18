import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { todoItemReducer } from './reducers/todoItemReducer';
import { filterLinkReducer } from './reducers/filterLinkReducer';

const store = createStore(combineReducers({ todoItems: todoItemReducer, filters: filterLinkReducer }), {}, applyMiddleware(logger));

export default store;