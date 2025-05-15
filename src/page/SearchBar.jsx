import React from 'react';
import "../CSS/SearchBar.css";

const SearchBar = ({ query, onChange }) => {
    return (
        <div className="d1">
            <input
                type="text"
                value={query}
                onChange={onChange}    
                placeholder="Ara..."
                className="s-input"
            />

            <button className="search">
                Search
            </button>
        </div>
    );
};

export default SearchBar;
