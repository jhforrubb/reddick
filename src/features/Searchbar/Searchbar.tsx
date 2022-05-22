import './searchbar.scss';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

const sampleJson = [
    { id: 0, label: "search result 1" },
    { id: 1, label: "search result 2" },
    { id: 2, label: "search result 3" },
    { id: 3, label: "search result 4" },
    { id: 4, label: "search result 5" },
    { id: 5, label: "search result 6" }
]

const Searchbar = () => {
    const [isFocus, setIsFocus] = useState<boolean>(false);

    return (
        <div className={`searchbar-container ${isFocus ? "focused" : ""}`}>
            <SearchIcon className="search-icon" />
            <input
                className="search-input"
                type="text"
                placeholder='Search Reddit'
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
            />
            <ClearIcon className="search-icon" />
        </div>
    )
}

export default Searchbar