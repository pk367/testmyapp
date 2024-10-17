import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart2, TrendingUp, GitBranch, Bot, LineChart, Cpu, BarChart } from 'lucide-react';

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to TradePro</h1>
      <p className="text-xl mb-12">Your all-in-one trading platform for advanced analysis and strategy building.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard
          to="/demand-supply-scanner"
          icon={<BarChart2 size={40} />}
          title="Demand & Supply Scanner"
          description="Identify key market levels"
        />
        <FeatureCard
          to="/backtesting"
          icon={<TrendingUp size={40} />}
          title="Backtesting"
          description="Test your strategies on historical data"
        />
        <FeatureCard
          to="/option-chain"
          icon={<GitBranch size={40} />}
          title="Option Chain Data"
          description="Analyze option market data"
        />
        <FeatureCard
          to="/strategy-builder"
          icon={<Cpu size={40} />}
          title="Strategy Builder"
          description="Create and test custom trading strategies"
        />
        <FeatureCard
          to="/ai-chat-bot"
          icon={<Bot size={40} />}
          title="AI Chat Bot"
          description="Get instant trading insights"
        />
        <FeatureCard
          to="/trading-view"
          icon={<LineChart size={40} />}
          title="Advanced Charts"
          description="Visualize market data like a pro"
        />
      </div>
    </div>
  );
};

const FeatureCard = ({ to, icon, title, description }: { to: string; icon: React.ReactNode; title: string; description: string }) => (
  <Link to={to} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
    <div className="text-blue-600 mb-4">{icon}</div>
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p className="text-gray-600">{description}</p>
  </Link>
);

export default Home;