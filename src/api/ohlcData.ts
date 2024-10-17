import axios from 'axios';

const API_BASE_URL = 'https://sarvkalyan.com/api'; // Updated with your Hostinger domain

export const fetchOHLCData = async (symbol: string, timeframe: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/get_ohlc_data.php`, {
      params: { symbol, timeframe },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching OHLC data:', error);
    throw error;
  }
};