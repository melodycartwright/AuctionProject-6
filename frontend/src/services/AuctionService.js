import axios from 'axios'

export const getAuction = async (title) => {
    
    const url = "http://localhost:3000/api/auctions/"
    const result = await axios.get(url).then(response => response.json)
    const filtered = result.filter(carAuction => carAuction.title.toLowerCase().includes(title.toLowerCase()))
    return filtered
}

