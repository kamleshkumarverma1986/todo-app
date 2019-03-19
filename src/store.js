import { createStore, combineReducers, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import { todoItemReducer } from './reducers/todoItemReducer';
import { filterLinkReducer } from './reducers/filterLinkReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/saga';

const sagaMiddleware = createSagaMiddleware();
/* 
* createStore API => createStore(reducers, initialState, Enhanders)
    - reducers => Can be an combineReducers.
    - initialState(optional) => Can be an empty object like {} if reducers have initial state passed.
    - Enhancers(optional) => Example of enhancers is - applyMiddleware 
        This should be last parameters always in createStore API.s
*/

const myCustomLogger = (store) => (next) => (action) => {
    console.log("This is the action ", action);
    next(action); /* This is require to reach upto the reducers */
}
const store = createStore(combineReducers({ todoItems: todoItemReducer, filters: filterLinkReducer }), applyMiddleware(myCustomLogger, sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;