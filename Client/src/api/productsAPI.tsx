import dotenv from 'dotenv';

dotenv.config();

const API_BASE_URL = process.env.API_BASE_URL;
console.log('API_BASE_URL:', API_BASE_URL);

const retrieveProducts = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/products`, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error('Invalid user API response, check network tab!');
      }
      console.log(data);
      return data;
      
    } catch (err) { 
      console.log('Error from data retrieval:', err);
      return [];
    }
  }

const retrieveCategory = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/categories`, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error('Invalid user API response, check network tab!');
      }
      console.log(data);
      return data;
      
    } catch (err) { 
      console.log('Error from data retrieval:', err);
      return [];
    }
  }

  export { retrieveProducts, retrieveCategory };