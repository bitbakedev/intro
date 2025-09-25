import React from 'react';
import { FundingRequest } from '../types/proposal';

interface FundingBreakdownProps {
  fundingRequest: FundingRequest;
}

const FundingBreakdown: React.FC<FundingBreakdownProps> = ({ fundingRequest }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">투자 요청 금액</h3>
        <p className="text-4xl font-bold text-gray-800">{fundingRequest.amount}</p>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-white rounded-lg">
            <p className="text-gray-600 text-sm">기업 가치 (Pre-money)</p>
            <p className="font-semibold text-gray-800">{fundingRequest.valuation}</p>
          </div>
          <div className="text-center p-3 bg-white rounded-lg">
            <p className="text-gray-600 text-sm">제공 지분</p>
            <p className="font-semibold text-gray-800">{fundingRequest.expectedReturn}</p>
          </div>
        </div>
      </div>
      
      <div className="space-y-4 mb-6">
        <h4 className="text-lg font-semibold text-gray-700">자금 활용 계획</h4>
        {fundingRequest.useOfFunds.map((item, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg">
            <div className="flex items-center space-x-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: `hsl(0, 0%, ${20 + index * 20}%)` }}
              />
              <span className="text-gray-700">{item.category}</span>
            </div>
            <div className="text-right">
              <p className="font-semibold text-gray-800">{item.amount}</p>
              <p className="text-sm text-gray-500">{item.percentage}%</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center p-4 bg-white rounded-lg">
          <p className="text-gray-600 text-sm">투자 기간</p>
          <p className="font-semibold text-gray-800">{fundingRequest.timeline}</p>
        </div>
        <div className="text-center p-4 bg-white rounded-lg">
          <p className="text-gray-600 text-sm">예상 수익률</p>
          <p className="font-semibold text-gray-800">{fundingRequest.expectedReturn}</p>
        </div>
      </div>
    </div>
  );
};

export default FundingBreakdown;