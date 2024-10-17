import React, { useState } from 'react';
import { TrendingUp, Play } from 'lucide-react';

const Backtesting = () => {
  const [strategy, setStrategy] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleBacktest = () => {
    // Implement backtesting logic here
    console.log(`Running backtest for ${strategy} from ${startDate} to ${endDate}`);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Backtesting</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <TrendingUp size={24} className="text-blue-600 mr-2" />
          <h2 className="text-xl font-semibold">Backtest Configuration</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="strategy" className="block text-sm font-medium text-gray-700 mb-1">Strategy</label>
            <input
              type="text"
              id="strategy"
              value={strategy}
              onChange={(e) => setStrategy(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter strategy name"
            />
          </div>
          <div>
            <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
            <input
              type="date"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <button
          onClick={handleBacktest}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
        >
          <Play size={18} className="mr-2" />
          Run Backtest
        </button>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Backtest Results</h3>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600">Backtest results will appear here after running the test.</p>
        </div>
      </div>
    </div>
  );
};

export default Backtesting;