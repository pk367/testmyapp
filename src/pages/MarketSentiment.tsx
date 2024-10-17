import React, { useState } from 'react';
import { BarChart, Search } from 'lucide-react';

const MarketSentiment = () => {
  const [symbol, setSymbol] = useState('');

  const handleAnalyzeSentiment = () => {
    // Implement sentiment analysis logic here
    console.log(`Analyzing market sentiment for ${symbol}`);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Market Sentiment Analysis</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <BarChart size={24} className="text-blue-600 mr-2" />
          <h2 className="text-xl font-semibold">Sentiment Analysis</h2>
        </div>
        <div className="mb-4">
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
        <button
          onClick={handleAnalyzeSentiment}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
        >
          <Search size={18} className="mr-2" />
          Analyze Sentiment
        </button>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Sentiment Analysis Results</h3>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <h4 className="font-semibold mb-2">Overall Sentiment</h4>
              <div className="text-2xl font-bold text-blue-600">Neutral</div>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2">Positive Mentions</h4>
              <div className="text-2xl font-bold text-green-600">0</div>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2">Negative Mentions</h4>
              <div className="text-2xl font-bold text-red-600">0</div>
            </div>
          </div>
          <div className="mt-6">
            <h4 className="font-semibold mb-2">Recent News Headlines</h4>
            <ul className="list-disc list-inside text-gray-600">
              <li>No recent news headlines available.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketSentiment;