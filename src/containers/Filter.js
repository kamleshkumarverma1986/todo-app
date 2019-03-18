import React, { Component } from 'react';
import { FilterLink } from '../components/FilterLink';
import { connect } from 'react-redux';
import { changeFilter } from '../actions/filterActions';

class Filter extends Component {

    filterChangeHandler = (filter) => {
        if (!filter.active) {
            this.props.changeFilterMethod(filter.filterName);
        }
    }

    render() {
        return (
            <div className="filter">
                {
                    this.props.filters.map((filter) => {
                        return <FilterLink key={filter.filterName} filter={filter} filterChange={this.filterChangeHandler}/>
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeFilterMethod: (filterName) => {
            dispatch(changeFilter(filterName));
        }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Filter);