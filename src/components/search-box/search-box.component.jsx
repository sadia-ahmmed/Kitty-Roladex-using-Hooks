import { Component } from "react";
import './search-box.styles.css';
const SearchBox =({className, placeholder, onChangeHandler})=>(
        <input 
            className={'search-box ${className}'}
            type='search' 
            placeholder={placeholder}
            //anonymous function - onChange 
            //passing function   
            onChange={onChangeHandler}   
             />

        );


export default SearchBox; 