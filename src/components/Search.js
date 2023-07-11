import React, {useState} from "react"

function Search({onFilterText}) {

    // const [search, setSearch] = useState("")

    function handleSearch(event){
        onFilterText(event.target.value)
    }

    // function searchText(event){
    //     setSearch(event.target.value)
    //     onFilterText(search)
    // }

    return (
        <div>
            <input type="text" onChange={handleSearch} placeholder="Search..."/>
        </div>
    );
}

export default Search;