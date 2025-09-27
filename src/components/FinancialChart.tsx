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
      <h3 className="text-base sm:text-lg font-semibold mb-4 text-center">{title}</h3>
      <div className="space-y-3 sm:space-y-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center space-x-2 sm:space-x-4">
            <div className="w-12 sm:w-16 text-xs sm:text-sm font-medium text-gray-600 flex-shrink-0">
              {item.year}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs sm:text-sm text-gray-600">매출</span>
                <span className="text-xs sm:text-sm font-semibold">
                  {item.revenue.toLocaleString()}억원
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
                <div
                  className="bg-gray-800 h-2 sm:h-3 rounded-full transition-all duration-500"
                  style={{ width: `${(item.revenue / maxRevenue) * 100}%` }}
                />
              </div>
            </div>
            <div className="w-16 sm:w-20 text-right flex-shrink-0">
              <span className="text-xs sm:text-sm font-semibold">
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