import './AuctionCard.css'
import { useNavigate } from 'react-router-dom'

const AuctionCard = ({ auction }) => {

    const navigate = useNavigate()
  return (
    <div className="search-results">
      {results.map((auction, index) => (
        <div key={index}>
          <h2>{auction.title}</h2>
          <p>{auction.description}</p>
          <h3>{auction.price}</h3>
          <button onClick={() => navigate("/auctions/details/"+ auction.id)}>Details</button>
        </div>
      ))}
    </div>
  )
}

export default AuctionCard