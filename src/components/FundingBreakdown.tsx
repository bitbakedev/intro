import React from 'react';
import { FundingRequest } from '../types/proposal';

interface FundingBreakdownProps {
  fundingRequest: FundingRequest;
}

const FundingBreakdown: React.FC<FundingBreakdownProps> = ({ fundingRequest }) => {
  return (
    <div>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>대표는 월급을 받지 않는다.</strong> 풀타임 인력 1명, 파트타임 혹은 외주 인원 2명 정도로 운영할 예정이다.
      </p>
      
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">투자 유치 목표 금액</h3>
        <p className="text-4xl font-bold text-gray-800">2억원</p>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-white rounded-lg">
            <p className="text-gray-600 text-sm">기업 가치 (Pre-money)</p>
            <p className="font-semibold text-gray-800">{fundingRequest.valuation}</p>
          </div>
          <div className="text-center p-3 bg-white rounded-lg">
            <p className="text-gray-600 text-sm">제공 지분</p>
            <p className="font-semibold text-gray-800">15%</p>
          </div>
        </div>
        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
          <p className="text-gray-600 text-sm">현재 보유 자금</p>
          <p className="font-semibold text-blue-800">2,500만원</p>
        </div>
      </div>
      
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-700 mb-4">자금 활용 계획</h4>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">항목</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">금액</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">비율</th>
              </tr>
            </thead>
            <tbody>
              {fundingRequest.useOfFunds.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-25'}>
                  <td className="border border-gray-300 px-4 py-3 font-medium text-gray-800">{item.category}</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">{item.amount}</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">{item.percentage}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  );
};

export default FundingBreakdown;