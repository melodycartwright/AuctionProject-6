import { useState } from "react"
import { searchProducts } from "../../services/productService"
import "./SearchBar.css"

const SearchBar = () => {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])
    
    const handleSearch = async () => {
            const data = await searchProducts(query)
            setResults(data)
    }
  
    return (
    <div className="search-container">
        <input 
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>
            <i className="fa-solid fa-magnifying-glass"></i>
        </button>



    </div>
  )
}
export default SearchBar