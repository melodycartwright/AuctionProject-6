import axios from 'axios';

// Create Car Auction
export const createCarAuction = async (auctionData) => {
  try {
    const response = await axios.post('http://localhost:3000/api/auctions', auctionData);
    return response.data;
  } catch (error) {
    console.error('Error creating car auction:', error);
    throw error;
  }
};

// Get All Car Auctions
export const getAllCarAuctions = async (search = '') => {
  try {
    const response = await axios.get('http://localhost:3000/api/auctions', {
      params: { search }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching car auctions:', error);
    throw error;
  }
};

// Get Car Auction by ID
export const getCarAuctionById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/auctions/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching car auction:', error);
    throw error;
  }
};

// Update Car Auction
export const updateCarAuction = async (id, updatedData) => {
  try {
    const response = await axios.put(`http://localhost:3000/api/auctions/${id}`, updatedData);
    return response.data;
  } catch (error) {
    console.error('Error updating car auction:', error);
    throw error;
  }
};

// Delete Car Auction
export const deleteCarAuction = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:3000/api/auctions/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting car auction:', error);
    throw error;
  }
};
