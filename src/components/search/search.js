import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";
import { Geo_API_URL, geoApioptions } from "../../api";

const Search = ({onSearchChange}) => {

    const [search, setSearch] = useState(null);

    const loadOptions = (inputValue) => {
        return fetch(
            `${Geo_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
             geoApioptions)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }

    const handleOnChange = (searchData)=> {
        setSearch(searchData);
        onSearchChange(searchData);
    }
    return(
        <AsyncPaginate
            placeholder = "Search For city"
            debounceTimeout={600}
            value = {search}
            onChange = {handleOnChange}
            loadOptions = {loadOptions}
        />
    )
}

export default Search;