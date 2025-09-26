import React from 'react';
import { FinancialData } from '../../types/proposal';
import FinancialChart from '../FinancialChart';

interface FinancialProjectionsProps {
  financialProjections: FinancialData[];
}

const FinancialProjections: React.FC<FinancialProjectionsProps> = ({ financialProjections }) => {
  return (
    <div>
      <FinancialChart 
        data={financialProjections} 
        title="매출 성장 전망 (단위: 억원)"
      />
      
      <div className="mt-8 grid grid-cols-4 gap-4">
        {financialProjections.map((item, index) => (
          <div key={index} className="text-left p-4 bg-gray-50 rounded-lg">
            <h4 className="text-lg font-semibold text-gray-800">{item.year}</h4>
            <p className="text-gray-900 font-bold text-xl">{item.revenue}억원</p>
            <p className="text-xs text-gray-700 font-medium">MAU: {item.mau}</p>
            <p className="text-xs text-gray-700">ARPU: {item.arpu.toLocaleString()}원</p>
            <p className="text-xs text-gray-700">AUM: {item.aum}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinancialProjections;