import React from 'react';
import { FinancialData } from '../types/proposal';

interface FinancialChartProps {
  data: FinancialData[];
  title: string;
}

const FinancialChart: React.FC<FinancialChartProps> = ({ data, title }) => {
  const maxRevenue = Math.max(...data.map(d => d.revenue));

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-4 text-center">{title}</h3>
      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="w-16 text-sm font-medium text-gray-600">
              {item.year}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-600">매출</span>
                <span className="text-sm font-semibold">
                  {item.revenue.toLocaleString()}억원
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-gray-800 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${(item.revenue / maxRevenue) * 100}%` }}
                />
              </div>
            </div>
            <div className="w-20 text-right">
              <span className="text-sm font-semibold">
                {item.growth >= 0 ? '+' : ''}{item.growth}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinancialChart;