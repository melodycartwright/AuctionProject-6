import axios from 'axios';

// Place a Car Bid
export const placeCarBid = async (carAuctionId, amount) => {
  try {
    const response = await axios.post('http://localhost:3000/api/bids', { carAuctionId, amount });
    return response.data;
  } catch (error) {
    console.error('Error placing car bid:', error);
    throw error;
  }
};

// Get Bids for Car Auction
export const getBidsForCarAuction = async (carAuctionId) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/bids/${carAuctionId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching bids:', error);
    throw error;
  }
};

// Delete Car Bid
export const deleteCarBid = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:3000/api/bids/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting car bid:', error);
    throw error;
  }
};