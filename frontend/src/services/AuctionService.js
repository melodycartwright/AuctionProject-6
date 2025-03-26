import axios from 'axios'

export const getAuctionById = async (id) => {
    const {id} = useParams()
    const url = `http://localhost:3000/:${id}`
    const result = await axios.get(url)
    return result
}