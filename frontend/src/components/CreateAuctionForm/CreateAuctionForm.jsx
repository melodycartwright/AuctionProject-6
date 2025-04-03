import React, { useState } from 'react';
import { createCarAuction } from '../../services/NewAuctionService';
import '../CreateAuctionForm/CreateAuctionForm.css';

const CreateAuctionForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [price, setPrice] = useState('');
  const [startDate, setStartDate] = useState(new Date().toISOString());
  const [endDate, setEndDate] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const auctionData = {
      title,
      description,
      make,
      model,
      year,
      price,
      startDate,
      endDate,
    };
    try {
      const createdAuction = await createCarAuction(auctionData);
      console.log('Auction created:', createdAuction);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='form-container'>
    <form onSubmit={handleSubmit} className='form'>
      <label>
        Title:<br />
        <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
      </label>
      <label>
        Description:<br />
        <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
      </label>
      <label>
        Make:<br />
        <input type="text" value={make} onChange={(event) => setMake(event.target.value)} />
      </label>
      <label>
        Model:<br />
        <input type="text" value={model} onChange={(event) => setModel(event.target.value)} />
      </label>
      <label>
        Year:<br />
        <input type="number" value={year} onChange={(event) => setYear(event.target.value)} />
      </label>
      <label>
        Price:<br />
        <input type="number" value={price} onChange={(event) => setPrice(event.target.value)} />
      </label>
      <label>
        Start Date:<br />
        <input type="date" value={startDate} onChange={(event) => setStartDate(event.target.value)} />
      </label>
      <label>
        End Date:<br />
        <input type="date" value={endDate} onChange={(event) => setEndDate(event.target.value)} />
      </label>
      <button type="submit">Create Auction</button>
    </form>
    </div>
  );
}



export default CreateAuctionForm