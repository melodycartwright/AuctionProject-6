import axios from "axios";

// Place a Car Bid
export const placeCarBid = async (carAuctionId, amount) => {
  try {
    // Fetch the auction details to check its end date
    const auctionResponse = await axios.get(
      `http://localhost:3000/api/auctions/${carAuctionId}`
    );
    const auction = auctionResponse.data;

    // Check if the auction has already ended
    if (new Date() > new Date(auction.endDate)) {
      alert("This auction has already ended. Bidding is closed.");
      return; // Stop the function if the auction has ended
    }

    // Proceed to place the bid if the auction is still open
    const response = await axios.post("http://localhost:3000/api/bids", {
      carAuctionId,
      amount,
    });

    return response.data;
  } catch (error) {
    console.error("Error placing car bid:", error);

    // Check if the error is due to the auction being closed
    if (
      error.response &&
      error.response.status === 400 &&
      error.response.data.message === "Auction has ended. Bidding is closed."
    ) {
      alert("You cannot place a bid because the auction has ended.");
    } else {
      alert("An error occurred while placing your bid. Please try again.");
    }

    throw error;
  }
};

// Get Bids for Car Auction
export const getBidsForCarAuction = async (carAuctionId) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/bids/${carAuctionId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching bids:", error);
    throw error;
  }
};

// Delete Car Bid
export const deleteCarBid = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:3000/api/bids/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting car bid:", error);
    throw error;
  }
};
