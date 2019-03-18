let initialState = [
    {
        id: 1,
        text: "need to learn react",
        completed: false
    }
];
export const todoItemReducer = (state= initialState, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            state = [ ...state, {
                id: action.id,
                text: action.text,
                completed: action.completed
            }]
            break;
        case "REMOVE_ITEM":
            state = state.filter((item) => {
                return item.id !== action.id;
            })
            break;
        case "TOGGLE_ITEM":
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