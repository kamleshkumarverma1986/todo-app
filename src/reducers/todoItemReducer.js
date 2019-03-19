import { todoItems } from '../initialState';

export const todoItemReducer = (state= todoItems, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case "ADD_ITEM_ASYNC":
            state = [ ...state, {
                id: action.id,
                title: action.title,
                completed: action.completed
            }]
            break;
        case "REMOVE_ITEM_ASYNC":
            state = state.filter((item) => {
                return item.id !== action.id;
            })
            break;
        case "TOGGLE_ITEM_ASYNC":
            state = state.map((item) => {
                let tempItem = { ...item };
                if (tempItem.id === action.id) {
                    tempItem.completed = !tempItem.completed;
                }
                return tempItem;
            })
            break;
    }
    return state;
}