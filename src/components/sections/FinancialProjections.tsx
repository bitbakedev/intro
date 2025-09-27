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
      
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {financialProjections.map((item, index) => (
          <div key={index} className="text-left p-3 sm:p-4 bg-gray-50 rounded-lg">
            <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-1">{item.year}</h4>
            <p className="text-gray-900 font-bold text-lg sm:text-xl mb-2">{item.revenue}억원</p>
            <div className="space-y-1">
              <p className="text-xs text-gray-700 font-medium">MAU: {item.mau}</p>
              <p className="text-xs text-gray-700">ARPU: {item.arpu.toLocaleString()}원</p>
              <p className="text-xs text-gray-700">AUM: {item.aum}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <p className="text-gray-700 text-sm leading-relaxed">
          현재 비트베이크의 ARPU 는 800~1,000원 수준이며 리워드 앱 평균 ARPU는 1,000~2,000원 입니다.<br/>
          이를 기반으로 각 단계의 MAU 달성을 기준으로 곱해 예상(목표) 매출을 산정했습니다.
        </p>
      </div>
    </>
  );
};

export default FinancialProjections;