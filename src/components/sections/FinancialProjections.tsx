import React from 'react';
import { FinancialData } from '../../types/proposal';
import FinancialChart from '../FinancialChart';

interface FinancialProjectionsProps {
  financialProjections: FinancialData[];
}

const FinancialProjections: React.FC<FinancialProjectionsProps> = ({ financialProjections }) => {
  return (
    <>
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
      
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <p className="text-gray-700 text-sm leading-relaxed">
          리워드 앱 평균 ARPU는 1,000~2,000원대이며, 이를 기반으로 각 단계의 MAU 달성을 기준으로 매출을 보수적으로 산정한 매출입니다.
        </p>
      </div>
    </>
  );
};

export default FinancialProjections;