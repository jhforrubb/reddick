import './searchbar.scss';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const sampleJson = [
    { id: 0, label: "search result 1" },
    { id: 1, label: "search result 2" },
    { id: 2, label: "search result 3" },
    { id: 3, label: "search result 4" },
    { id: 4, label: "search result 5" },
    { id: 5, label: "search result 6" }
]

const Searchbar = () => {
    return (
        <div className="searchbar">
            <Autocomplete
                freeSolo={true}
                options={sampleJson.map(el => el.label)}
                renderInput={(params) => <TextField {...params} label="Search Reddit" />}
            />
        </div>
    )
}

export default Searchbar