import React from 'react';

export const SearchBox = ({type, placeholder, handleChange}) => {
    return(
        <input type={type}
         placeholder={placeholder}
         onChange={handleChange} />
    )
}