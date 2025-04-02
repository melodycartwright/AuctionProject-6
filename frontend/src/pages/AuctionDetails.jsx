import { useParams } from "react-router-dom"
import { getCarAuctionById } from "../services/NewAuctionService";
import { getBidsForCarAuction, placeCarBid } from "../services/NewBidService";
import { useEffect, useState } from "react";
import { formatTime } from "../util/format";

const AuctionDetails = () => {
  const { id } = useParams()

  const [auction, setAuction] = useState(null);
  const [bids, setBids] = useState(null);

  const [amountInput, setAmountInput] = useState(0);

  useEffect(() => {
    (async () => {
      const[auctionData, bidsData] = await Promise.all([
        getCarAuctionById(id),
        getBidsForCarAuction(id),
      ]);

      setAuction(auctionData);
      setBids(bidsData);
    })();
  }, [id]);

  async function onBid() {
    const response = await placeCarBid(id, amountInput);
    console.log('response', response);
  }

  if (!auction || !bids) return 'Loading...';

  return <>
    <div className="max-w-[900px] px-1 mx-auto">
      <h1 className="text-lg font-bold">{auction.title}</h1>
      <h2 className="font-semibold">{auction.description}</h2>
      <div class="flex gap-2">
        <input
          value={amountInput}
          onChange={ev => setAmountInput(ev.target.value)}
          className="border border-gray-400 py-1 px-2 rounded"
          type="number"
        />
        <button onClick={onBid} className="text-lg bg-green-400 py-1 px-2 rounded">Bid</button>
      </div>
      <div>
        <div>
          <span className="font-semibold">Make:&nbsp;</span>
          <span>{auction.make}</span>
        </div>
        <div>
          <span className="font-semibold">Model:&nbsp;</span>
          <span>{auction.model}</span>
        </div>
        <div>
          <span className="font-semibold">Year:&nbsp;</span>
          <span>{auction.year}</span>
        </div>
        <div>
          <span className="font-semibold">Price:&nbsp;</span>
          <span>{auction.price}</span>
        </div>
        <div>
          <span className="font-semibold">Status:&nbsp;</span>
          <span>{auction.status}</span>
        </div>
        <div>
          <span className="font-semibold">Start date:&nbsp;</span>
          <span>{formatTime(auction.startDate)}</span>
        </div>
        <div>
          <span className="font-semibold">End date:&nbsp;</span>
          <span>{formatTime(auction.endDate)}</span>
        </div>
        <div>
          <span className="font-semibold">id:&nbsp;</span>
          <span>{auction._id}</span>
        </div>
      </div>
      <div>
        <h2 className="font-semibold">Bid</h2>

        {bids.map((bid, i) => <div key={i}>
          <span>{formatTime(bid.createdAt)}, ${bid.amount}</span>
        </div>)}
      </div>
    </div>
  </>
}
export default AuctionDetails
