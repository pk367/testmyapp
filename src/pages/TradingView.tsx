import React, { useState, useEffect, useRef } from 'react';
import { LineChart, Search } from 'lucide-react';
import { createChart, ColorType } from 'lightweight-charts';
import { fetchOHLCData } from '../api/ohlcData';

const TradingView = () => {
  const [symbol, setSymbol] = useState('AAPL');
  const [timeframe, setTimeframe] = useState('1D');
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<any>(null);

  useEffect(() => {
    if (chartContainerRef.current) {
      const chart = createChart(chartContainerRef.current, {
        width: chartContainerRef.current.clientWidth,
        height: 500,
        layout: {
          background: { type: ColorType.Solid, color: 'white' },
          textColor: 'black',
        },
        grid: {
          vertLines: { color: 'rgba(197, 203, 206, 0.5)' },
          horzLines: { color: 'rgba(197, 203, 206, 0.5)' },
        },
        rightPriceScale: {
          borderColor: 'rgba(197, 203, 206, 0.8)',
        },
        timeScale: {
          borderColor: 'rgba(197, 203, 206, 0.8)',
        },
      });

      const candlestickSeries = chart.addCandlestickSeries({
        upColor: '#26a69a',
        downColor: '#ef5350',
        borderVisible: false,
        wickUpColor: '#26a69a',
        wickDownColor: '#ef5350',
      });

      chartRef.current = { chart, candlestickSeries };

      return () => {
        chart.remove();
      };
    }
  }, []);

  useEffect(() => {
    fetchChartData();
  }, [symbol, timeframe]);

  const fetchChartData = async () => {
    try {
      const data = await fetchOHLCData(symbol, timeframe);
      const formattedData = data.map((item: any) => ({
        time: item.datetime,
        open: parseFloat(item.open),
        high: parseFloat(item.high),
        low: parseFloat(item.low),
        close: parseFloat(item.close),
      }));

      if (chartRef.current) {
        chartRef.current.candlestickSeries.setData(formattedData);
      }
    } catch (error) {
      console.error('Error fetching chart data:', error);
    }
  };

  const handleLoadChart = () => {
    fetchChartData();
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Advanced Charts</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <LineChart size={24} className="text-blue-600 mr-2" />
          <h2 className="text-xl font-semibold">Chart Settings</h2>
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
              <option value="15M">15 Minutes</option>
              <option value="10M">10 Minutes</option>
              <option value="30M">30 Minutes</option>
              <option value="75M">75 Minutes</option>
              <option value="120M">120 Minutes</option>
              <option value="125M">125 Minutes</option>
              <option value="5M">5 Minutes</option>
              <option value="1M">1 Minutes</option>
              
            </select>
          </div>
        </div>
        <button
          onClick={handleLoadChart}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
        >
          <Search size={18} className="mr-2" />
          Load Chart
        </button>
      </div>
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <div ref={chartContainerRef} className="w-full h-[500px]"></div>
      </div>
    </div>
  );
};

export default TradingView;