import { useState, useMemo } from "react"
const Results = ({items, onItemSelected, query, onResultsCalculated}) => {
    const [results, setResults] = useState([])
    const filteredItems = findMatch()
    function findMatch(items,query){
        console.log("Hola")
    }
    return(
        <div>Hola</div>
    )
}
export default Results