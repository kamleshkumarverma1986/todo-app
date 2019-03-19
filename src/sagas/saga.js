import { takeLatest, put, all } from 'redux-saga/effects';
import { fetch } from 'cross-fetch';

function* handleAddItemAsync(action) {
    yield fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify(action),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => {
        action = { ...action, type: `${action.type}_ASYNC` };
    });
    yield put(action);
}

function* handleRemoveItemAsync(action) {
    yield fetch(`https://jsonplaceholder.typicode.com/todos/${action.id}`, {
        method: 'DELETE',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => {
        action = { ...action, type: `${action.type}_ASYNC` };
    });
    yield put(action);
}

function* handleToggleItemAsync(action) {
    yield fetch(`https://jsonplaceholder.typicode.com/todos/${action.id}`, {
        method: 'PATCH',
        body: JSON.stringify(action),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => {
        action = { ...action, type: `${action.type}_ASYNC` };
    });
    yield put(action);
}

function* watchAddItem() {
    yield takeLatest("ADD_ITEM", handleAddItemAsync);
}

function* watchRemoveItem() {
    yield takeLatest("REMOVE_ITEM", handleRemoveItemAsync);
}

function* watchToggleItem() {
    yield takeLatest("TOGGLE_ITEM", handleToggleItemAsync);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
        watchAddItem(),
        watchRemoveItem(),
        watchToggleItem()
    ]);
}
