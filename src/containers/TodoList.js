import React, { Component } from 'react';
import { TodoItem } from '../components/TodoItem';
import { connect } from 'react-redux';
import {toggleItem, removeItem} from '../actions/todoItemActions';

class TodoList extends Component {
    
    toggleItemHandler = (itemId) => {
        this.props.toggleItem(itemId);
    }

    deleteItemHandler = (itemId) => {
        this.props.deleteItem(itemId);
    }

    getFilteredTodoList = () => {
        const activeFilter = this.props.filters.find(filter => filter.active === true);
        // eslint-disable-next-line default-case
        switch (activeFilter.filterName) {
            case "Completed":
                return this.props.todoItems.filter((item) => {
                    return item.completed === true;
                });
            case "Pending":
                return this.props.todoItems.filter((item) => {
                    return item.completed === false;
                });
        }
        return this.props.todoItems;
    }

    render() {
        const filteredTodoList = this.getFilteredTodoList();
        return (
            <div className="todolist">
                {
                    filteredTodoList.map((item) => {
                        return <TodoItem key={item.id} item={item} toggleItem={this.toggleItemHandler} deleteItem={this.deleteItemHandler}/>
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todoItems: state.todoItems,
        filters: state.filters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleItem: (itemId) => {
            dispatch(toggleItem(itemId));
        },
        deleteItem: (itemId) => {
            dispatch(removeItem(itemId));
        }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);