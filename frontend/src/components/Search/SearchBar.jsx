import { useLocation } from "react-router-dom"
import { useAuctionContext } from "../../contexts/AuctionProvider" 
import "./SearchBar.css"
import { useEffect } from "react"

const SearchBar = () => {
    
    //const textVal = useRef()
    const location = useLocation()
    const {searchAuction, search, setSearch} = useAuctionContext()
    {/*}
    const handleSearch = async () => {
            const data = await searchAuction(textVal.current.value)
            setResults(data)
    }
    */}
    useEffect(() => {
        if (location.pathname === '/') {
            setSearch('')
        }
    }, [location.pathname])
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