import './AuctionCard.css'
import { useNavigate } from 'react-router-dom'

const AuctionCard = ({ title, description, price, _id }) => {
  console.log(_id)
    const navigate = useNavigate()
  return (
    <div className="auction-card">
        
          <h2>{title}</h2>
          <p>{description}</p>
          <h3>{price}</h3>
          <button onClick={() => navigate(`/auctions/${_id}`)}>Details</button>
        </div>
      
    
  )
}

export default AuctionCard