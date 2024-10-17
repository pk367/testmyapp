import React, { useState } from 'react';
import { BarChart, Play, Pause } from 'lucide-react';

const AlgoTrade = () => {
  const [strategy, setStrategy] = useState('');
  const [symbol, setSymbol] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const handleToggleAlgo = () => {
    setIsRunning(!isRunning);
    // Implement algo trading start/stop logic here
    console.log(`${isRunning ? 'Stopping' : 'Starting'} algo trade for ${strategy} on ${symbol}`);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Algo Trade</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <BarChart size={24} className="text-blue-600 mr-2" />
          <h2 className="text-xl font-semibold">Algo Trading Configuration</h2>
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
        </div>
        <button
          onClick={handleToggleAlgo}
          className={`w-full py-2 px-4 rounded-md transition-colors duration-200 flex items-center justify-center ${
            isRunning ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'
          } text-white`}
        >
          {isRunning ? (
            <>
              <Pause size={18} className="mr-2" />
              Stop Algo
            </>
          ) : (
            <>
              <Play size={18} className="mr-2" />
              Start Algo
            </>
          )}
        </button>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Algo Trading Status</h3>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600">
            {isRunning
              ? `Algo trading is currently running for ${strategy} on ${symbol}.`
              : 'Algo trading is not currently active.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AlgoTrade;