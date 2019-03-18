import React, { Component } from 'react';
import { AddTodoForm } from '../components/AddTodoForm';
import { connect } from 'react-redux';
import { addItem } from '../actions/todoItemActions';

class AddTodo extends Component {

    inputChangeHandler = (event) => {
        if (event.key === "Enter") {
            this.props.addItem(event.target.value);
            event.target.value = "";
        }
    }
    
    render() {
        return (
            <div className="addtodo">
                <AddTodoForm inputChange={this.inputChangeHandler}/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (text) => {
            dispatch(addItem(text));
        }
    }
}
 
export default connect(null, mapDispatchToProps)(AddTodo);