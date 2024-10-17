import React, { useState } from 'react';
import { BarChart2, Search } from 'lucide-react';

const DemandSupplyScanner = () => {
  const [symbol, setSymbol] = useState('');
  const [timeframe, setTimeframe] = useState('1D');

  const handleScan = () => {
    // Implement the scanning logic here
    console.log(`Scanning ${symbol} on ${timeframe} timeframe`);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Demand & Supply Zones Scanner</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <BarChart2 size={24} className="text-blue-600 mr-2" />
          <h2 className="text-xl font-semibold">Scanner Settings</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="symbol" className="block text-sm font-medium text-gray-700 mb-1">Symbol</label>
            <input
              type="text"
              id="symbol"
              value={symbol}
              onChange={(e) => setSymbol(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter stock symbol"
            />
          </div>
          <div>
            <label htmlFor="timeframe" className="block text-sm font-medium text-gray-700 mb-1">Timeframe</label>
            <select
              id="timeframe"
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="1D">1 Day</option>
              <option value="4H">4 Hours</option>
              <option value="1H">1 Hour</option>
              <option value="30M">30 Minutes</option>
            </select>
          </div>
        </div>
        <button
          onClick={handleScan}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
        >
          <Search size={18} className="mr-2" />
          Scan for Zones
        </button>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Scan Results</h3>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600">Scan results will appear here after running the scanner.</p>
        </div>
      </div>
    </div>
  );
};

export default DemandSupplyScanner;