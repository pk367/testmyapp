import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import DemandSupplyScanner from './pages/DemandSupplyScanner';
import Backtesting from './pages/Backtesting';
import OptionChain from './pages/OptionChain';
import StrategyBuilder from './pages/StrategyBuilder';
import AiChatBot from './pages/AiChatBot';
import TradingView from './pages/TradingView';
import AlgoTrade from './pages/AlgoTrade';
import MarketSentiment from './pages/MarketSentiment';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center py-4">TradePro App</h1>
      <Router>
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/demand-supply-scanner" element={<DemandSupplyScanner />} />
            <Route path="/backtesting" element={<Backtesting />} />
            <Route path="/option-chain" element={<OptionChain />} />
            <Route path="/strategy-builder" element={<StrategyBuilder />} />
            <Route path="/ai-chat-bot" element={<AiChatBot />} />
            <Route path="/trading-view" element={<TradingView />} />
            <Route path="/algo-trade" element={<AlgoTrade />} />
            <Route path="/market-sentiment" element={<MarketSentiment />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;