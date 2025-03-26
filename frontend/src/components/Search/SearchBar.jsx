import { useContext, useRef } from "react"
import { AuctionContext } from "../../contexts/AuctionProvider" 
import "./SearchBar.css"

const SearchBar = () => {
    
    const textVal = useRef()
    
    const {searchAuction} = useContext(AuctionContext)
    
    const handleSearch = async () => {
            const data = await searchAuction(textVal.current.value)
            setResults(data)
    }
  
    return (
    <div className="search-container">
        <input 
            type="text"
            placeholder="Search..."
            ref={textVal}
        />
        <button onClick={handleSearch}>
            <i className="fa-solid fa-magnifying-glass"></i>
        </button>

        {results.length > 0 && <AuctionCard results={results} />}


    </div>
  )
}
export default SearchBar