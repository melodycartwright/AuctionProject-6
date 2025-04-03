import { useLocation } from "react-router-dom"
import { useAuctionContext } from "../../contexts/AuctionProvider" 
import "./SearchBar.css"
import { useEffect, useState } from "react"
import { getAllCarAuctions } from "../../services/NewAuctionService"

const SearchBar = () => {
    const [inputValue, setInputValue] = useState('')
    //const textVal = useRef()
    const location = useLocation()
    const {searchAuction, search, setSearch} = useAuctionContext()
    {/*}
    const handleSearch = async () => {
            const data = await searchAuction(textVal.current.value)
            setResults(data)
    }
    */}
    
    return (
    <div className="search-container">
        <input 
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchAuction}>
            <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        {/*
        {results.length > 0 && <AuctionCard results={results} />}
            */}

    </div>
  )
}
export default SearchBar