import dotenv from 'dotenv';

const retrieveProducts = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/feedback`, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error('Invalid user API response, check network tab!');
      }
  
      return data;
  
    } catch (err) { 
      console.log('Error from data retrieval:', err);
      return [];
    }
  }


  const retrieveCategory = async () => {
    try {
      const response = await fetch('/api/products', {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error('Invalid user API response, check network tab!');
      }
  
      return data;
  
    } catch (err) { 
      console.log('Error from data retrieval:', err);
      return [];
    }
  }

  export { retrieveProducts, retrieveCategory };