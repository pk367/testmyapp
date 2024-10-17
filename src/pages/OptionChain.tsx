import React, { useState } from 'react';
import { GitBranch, Search } from 'lucide-react';

const OptionChain = () => {
  const [symbol, setSymbol] = useState('');
  const [expirationDate, setExpirationDate] = useState('');

  const handleFetchOptionChain = () => {
    // Implement option chain fetching logic here
    console.log(`Fetching option chain for ${symbol} expiring on ${expirationDate}`);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Option Chain Data</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <GitBranch size={24} className="text-blue-600 mr-2" />
          <h2 className="text-xl font-semibold">Option Chain Lookup</h2>
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
            <label htmlFor="expirationDate" className="block text-sm font-medium text-gray-700 mb-1">Expiration Date</label>
            <input
              type="date"
              id="expirationDate"
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <button
          onClick={handleFetchOptionChain}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
        >
          <Search size={18} className="mr-2" />
          Fetch Option Chain
        </button>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Option Chain</h3>
        <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">Strike</th>
                <th className="px-4 py-2 text-left">Call Bid</th>
                <th className="px-4 py-2 text-left">Call Ask</th>
                <th className="px-4 py-2 text-left">Put Bid</th>
                <th className="px-4 py-2 text-left">Put Ask</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2" colSpan={5}>Option chain data will appear here after fetching.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OptionChain;