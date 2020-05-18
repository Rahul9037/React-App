import React from 'react';
import './search-box.styles.css';

const Search = ({placeholder , handleChange}) => { 
    return(
        <div>
             <input 
             type="search" 
             className="search"
             placeholder={placeholder} 
             onChange={handleChange}/>
        </div>
    );
}

export default Search;