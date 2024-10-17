import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart2, TrendingUp, GitBranch, Bot, LineChart, Cpu, BarChart } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="text-2xl font-bold">TradePro</Link>
          <div className="hidden md:flex space-x-4">
            <NavLink to="/demand-supply-scanner" icon={<BarChart2 size={18} />} text="D&S Scanner" />
            <NavLink to="/backtesting" icon={<TrendingUp size={18} />} text="Backtesting" />
            <NavLink to="/option-chain" icon={<GitBranch size={18} />} text="Option Chain" />
            <NavLink to="/strategy-builder" icon={<Cpu size={18} />} text="Strategy Builder" />
            <NavLink to="/ai-chat-bot" icon={<Bot size={18} />} text="AI Chat" />
            <NavLink to="/trading-view" icon={<LineChart size={18} />} text="Charts" />
            <NavLink to="/algo-trade" icon={<BarChart size={18} />} text="Algo Trade" />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) => (
  <Link to={to} className="flex items-center hover:text-blue-200 transition-colors duration-200">
    {icon}
    <span className="ml-1">{text}</span>
  </Link>
);

export default Navbar;