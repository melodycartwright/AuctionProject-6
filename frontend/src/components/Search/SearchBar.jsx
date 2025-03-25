import { useState } from "react"
import "./SearchBar.css"

const SearchBar = () => {
    const [search, setSearch] = useState('')
    const [results, setResults] = useState([])
    
    const handleSearch = async (e) => {
        setSearch(e.target.value)
        const res = await fetch(`/api/search?q=${e.target.value}`)
        const data = await res.json()
        setResults(data)
    }
  
    return (
    <div className="search-container">
        <input 
            type="text"
            placeholder="Search..."
            value={search}
            onChange={handleSearch}
        />
        <button onClick={handleSearch}>
            <i className="fa-solid fa-magnifying-glass"></i>
        </button>

    </div>
  )
}
export default SearchBar