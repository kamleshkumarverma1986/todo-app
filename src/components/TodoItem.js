import React from 'react';

export const TodoItem = (props) => {
    const itemStyle = {
        textDecoration: props.item.completed? "line-through" : ""
    }
    return (
        <div className="todoitem">
            <div className="content-area" onClick={() => props.toggleItem(props.item.id)}>
                <span style={itemStyle}>{props.item.text}</span>
            </div>
            <div className="cross-mark" onClick={() => props.deleteItem(props.item.id)}>
                <p>X</p>
            </div>
        </div>
    );
}