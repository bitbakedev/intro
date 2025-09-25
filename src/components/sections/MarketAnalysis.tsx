import React from 'react';
import { MarketData } from '../../types/proposal';

interface MarketAnalysisProps {
  marketAnalysis: MarketData;
}

const MarketAnalysis: React.FC<MarketAnalysisProps> = ({ marketAnalysis }) => {
  return (
    <div className="grid grid-cols-2 gap-8 mb-8">
      <div className="space-y-4">
        <div className="p-6 bg-gray-50 rounded-lg">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">글로벌 DeFi 시장</h4>
          <p className="text-2xl font-bold text-blue-600">{marketAnalysis.totalMarket}</p>
          <p className="text-sm text-gray-600 mt-1">연간 {marketAnalysis.marketGrowth}</p>
        </div>
        <div className="p-6 bg-gray-50 rounded-lg">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">한국 DeFi 시장</h4>
          <p className="text-2xl font-bold text-red-600">{marketAnalysis.targetMarket}</p>
          <p className="text-sm text-gray-600 mt-1">글로벌 대비 1% 미만</p>
        </div>
      </div>
      <div className="space-y-4">
        <div className="p-6 bg-gray-50 rounded-lg">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">리워드 앱 사용자</h4>
          <p className="text-2xl font-bold text-green-600">{marketAnalysis.rewardAppUsers}</p>
          <p className="text-sm text-gray-600 mt-1">60%가 암호화폐 투자 관심</p>
        </div>
        <div className="p-6 bg-gray-50 rounded-lg">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">주요 고객군</h4>
          <ul className="space-y-1 mt-2">
            {marketAnalysis.customerSegments.map((segment, index) => (
              <li key={index} className="text-sm text-gray-700">• {segment}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MarketAnalysis;