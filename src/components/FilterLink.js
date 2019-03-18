import React, { Component } from 'react';

export const FilterLink = (props) => {
    const linkStyle = {
        cursor: props.filter.active ? "" : "pointer",
        color: props.filter.active ? "white": "black"
    }
    return (
        <React.Fragment>
            <p onClick={() => props.filterChange(props.filter)} style={linkStyle}>{props.filter.filterName}</p>
        </React.Fragment>
    );
}
 
export default FilterLink;