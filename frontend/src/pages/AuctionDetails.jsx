import { useParams } from "react-router-dom"

const AuctionDetails = () => {
  const { id } = useParams()
  return (
    <h1>Details for auction {id}</h1>
  )
}
export default AuctionDetails