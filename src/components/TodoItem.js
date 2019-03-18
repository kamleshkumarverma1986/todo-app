import React, { Component } from 'react';

export const TodoItem = (props) => {
    const itemStyle = {
        textDecoration: props.item.completed? "line-through" : ""
    }
    return (
        <div className="todoitem" onClick={()=> props.toggleItem(props.item.id)}>
            <span style={itemStyle}>{props.item.text}</span>
            <span className="cross-mark" onClick={()=> props.deleteItem(props.item.id)}>X</span>
        </div>
    );
}