let todoItemId = 1;

export const addItem = (text) => {
    return { type: "ADD_ITEM", id: ++todoItemId, text: text, completed: false };
}

export const toggleItem = (itemId) => {
    return { type: "TOGGLE_ITEM", id: itemId };
}

export const removeItem = (itemId) => {
    return { type: "REMOVE_ITEM", id: itemId };
}