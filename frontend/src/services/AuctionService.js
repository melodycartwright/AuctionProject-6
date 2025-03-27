import axios from 'axios'

export const getAuctions = async (title) => {
    
    const url = "http://localhost:3000/api/auctions/"
    const result = await axios.get(url).then(response => response.json())
    const filtered = result.data.filter(auction => auction.title.toLowerCase().includes(title.toLowerCase()))
    return filtered
}