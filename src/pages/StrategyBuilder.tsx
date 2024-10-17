import React, { useState } from 'react';
import { Cpu, Save } from 'lucide-react';

const StrategyBuilder = () => {
  const [strategyName, setStrategyName] = useState('');
  const [entryCondition, setEntryCondition] = useState('');
  const [exitCondition, setExitCondition] = useState('');

  const handleSaveStrategy = () => {
    // Implement strategy saving logic here
    console.log(`Saving strategy: ${strategyName}`);
    console.log(`Entry condition: ${entryCondition}`);
    console.log(`Exit condition: ${exitCondition}`);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Strategy Builder & Tester</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <Cpu size={24} className="text-blue-600 mr-2" />
          <h2 className="text-xl font-semibold">Build Your Strategy</h2>
        </div>
        <div className="space-y-4">
          <div>
            <label htmlFor="strategyName" className="block text-sm font-medium text-gray-700 mb-1">Strategy Name</label>
            <input
              type="text"
              id="strategyName"
              value={strategyName}
              onChange={(e) => setStrategyName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter strategy name"
            />
          </div>
          <div>
            <label htmlFor="entryCondition" className="block text-sm font-medium text-gray-700 mb-1">Entry Condition</label>
            <textarea
              id="entryCondition"
              value={entryCondition}
              onChange={(e) => setEntryCondition(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
              placeholder="Define entry condition (e.g., MA(50) crosses above MA(200))"
            ></textarea>
          </div>
          <div>
            <label htmlFor="exitCondition" className="block text-sm font-medium text-gray-700 mb-1">Exit Condition</label>
            <textarea
              id="exitCondition"
              value={exitCondition}
              onChange={(e) => setExitCondition(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
              placeholder="Define exit condition (e.g., Price drops below MA(50))"
            ></textarea>
          </div>
        </div>
        <button
          onClick={handleSaveStrategy}
          className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
        >
          <Save size={18} className="mr-2" />
          Save Strategy
        </button>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Strategy Tester</h3>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600">Strategy testing functionality will be implemented here.</p>
        </div>
      </div>
    </div>
  );
};

export default StrategyBuilder;