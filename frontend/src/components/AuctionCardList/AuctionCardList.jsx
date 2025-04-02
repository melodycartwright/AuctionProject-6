import "./AuctionCardList.css"
import AuctionCard from "../AuctionCard/AuctionCard"
import { useAuctionContext } from "../../contexts/AuctionProvider"

export const AuctionCardList = () => {

  const { auctions } = useAuctionContext()
  console.log('auctions', auctions)

  return (
    <div>
      <h1>Available Auctions</h1>
      <div className="auction-container">
        {auctions.map((auction) => (
          <AuctionCard
            key={auction.id}
            title={auction.title}
            description={auction.description}
            price={auction.price}
          />
        ))}
      </div>
    </div>
  )
}
