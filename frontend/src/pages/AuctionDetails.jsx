import { useParams } from "react-router-dom"
import { getCarAuctionById } from "../services/NewCoolAuctionService";
import { useEffect, useState } from "react";

const AuctionDetails = () => {
  const { id } = useParams()

  const [auction, setAuction] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getCarAuctionById(id);
      setAuction(data);
    })();
  }, [id]);

  if (!auction) return 'Loading...';

  return <>
    <div className="max-w-[900px] px-1 mx-auto">
      <h1 className="text-lg font-bold">{auction.title}</h1>
      <h2 className="font-semibold">{auction.description}</h2>
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
          <span>{auction.startDate}</span>
        </div>
        <div>
          <span className="font-semibold">End date:&nbsp;</span>
          <span>{auction.endDate}</span>
        </div>
        <div>
          <span className="font-semibold">id:&nbsp;</span>
          <span>{auction._id}</span>
        </div>
      </div>
      <pre className="whitespace-pre-wrap">{JSON.stringify(auction, null, 2)}</pre>
    </div>
  </>
}
export default AuctionDetails

