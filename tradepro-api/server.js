const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

app.get('/api/ohlc_data', async (req, res) => {
  const { symbol, timeframe } = req.query;
  
  try {
    const [rows] = await pool.execute(
      'SELECT datetime, open, high, low, close, volume FROM ohlc_data WHERE symbol = ? AND timeframe = ? ORDER BY datetime',
      [symbol, timeframe]
    );

    res.json(rows);
  } catch (error) {
    console.error('Error fetching OHLC data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});