import React, { Component } from 'react';

export const AddTodoForm = (props) => {
    return (
        <input type="text" placeholder="Enter Todo Item" onKeyUp={props.inputChange}/>
    );
}
 
export default AddTodoForm;