import { useState } from "react"
import Results from "./Results"

const SearchBar = ({items, onItemSelected}) => {
    const [query, setQuery] = useState("ma")
    const [results, setResults] = useState([])
    function handleChange(e){
        const value = e.target.value
        setQuery(value)
    }
    function handleResults(items){
        setResults(items)
    }
    function handleItemSelected(){
        
    }
    return (
        <div>
            {results && <div>{results.length}</div>}
            <input type="text" onChange={handleChange} value = {query}/>
            <Results items = {items} query={query} onItemSelected={handleItemSelected} onResultsCalculated={handleResults}/>
        </div>
    )
}

export default SearchBar