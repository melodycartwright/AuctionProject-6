import { useState } from "react"

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
    <div>SearchBar</div>
  )
}
export default SearchBar