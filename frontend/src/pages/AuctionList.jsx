import SearchBar from "../components/Search/SearchBar"
import AuctionCard from "../components/AuctionCard/AuctionCard"
import { useAuctionContext } from "../contexts/AuctionProvider"

const AuctionList = () => {

  const { auctions } = useAuctionContext()

  return (
    <div>
      <SearchBar />
      <h1>Available Auctions</h1>
      <div className="auction-container">
        {auctions.map((auction) => (
          console.log('auction', auction),
          <AuctionCard
            key={auction._id}
            title={auction.title}
            description={auction.description}
            price={auction.price}
            _id={auction._id}
          />
        ))}
      </div>
    </div>
  )
}
export default AuctionList