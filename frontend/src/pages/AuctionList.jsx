import { getAllCarAuctions } from "../services/NewAuctionService";
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import { formatTime } from "../util/format";
import AuctionCard from "../components/AuctionCard/AuctionCard"
import { useAuctionContext } from "../contexts/AuctionProvider"
import SearchBar from "../components/Search/SearchBar";

const AuctionList = () => {
  
  const { auctions } = useAuctionContext()

  return (
    <div className="max-w-[900px] px-1 mx-auto">
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
  
  {/*
  const [auctions, setAuctions] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getAllCarAuctions();
      setAuctions(data);
    })();
  }, []);

  if (!auctions) return 'Loading...';

  return <div className="max-w-[900px] px-1 mx-auto">
    <h2 className="pt-4 pl-2 text-2xl font-bold">Car auctions</h2>
    <div class="grid gap-2">
      {auctions.map((auction, i) => <Link to={`/auctions/${auction._id}`} className="block cursor-pointer p-2 hover:bg-gray-100 rounded">
        <h3 className="text-lg font-semibold">
          {auction.title}
          &nbsp;
          <span className="bg-green-200 px-2 py-0.1 font-semibold text-sm uppercase">{auction.status}</span>
        </h3>
        <p className="text-xl">${auction.price}</p>
        <p>{auction.description}</p>
        <p>Make: {auction.make}, model: {auction.model}, year: {auction.year}</p>
        <p>
          <span className="font-semibold">Started</span>
          &nbsp;
          {formatTime(auction.startDate)},
          &nbsp;
          <span className="font-semibold">ends</span>
          &nbsp;
          {formatTime(auction.endDate)}
        </p>
      </Link>)}
    </div>
  </div>
  */}
}
export default AuctionList