import React, { Component } from 'react';

export const FilterLink = (props) => {
    const linkStyle = {
        cursor: props.filter.active ? "" : "pointer",
        color: props.filter.active ? "white": "black"
    }
    return (
        <p onClick={() => props.filterChange(props.filter)} style={linkStyle}>{props.filter.filterName}</p>
    );
}
 
export default FilterLink;