import React from 'react';
import { FundingRequest } from '../types/proposal';

interface FundingBreakdownProps {
  fundingRequest: FundingRequest;
}

const FundingBreakdown: React.FC<FundingBreakdownProps> = ({ fundingRequest }) => {
  return (
    <div className="prose prose-lg max-w-none">
      <p className="text-gray-700 leading-relaxed mb-4">
       비트베이크는 총 2억 원의 Seed 투자 유치를 목표로 하고 있으며,
이는 기업가치 13억 원(Pre-money) 기준으로 15%의 지분을 제공하는 조건입니다.
현재 팀은 약 2,500만 원의 자금을 보유하고 있으며, 이번 투자를 통해 확보한 자금으로
12개월 동안 빠른 성장을 만들어낼 계획입니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-4">
대표는 월급을 받지 않으며,
풀타임 인력 1명과 파트타임 또는 외주 인력 2명 수준으로 효율적인 팀 구조를 유지할 예정입니다.
      </p>
    
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">투자 자금 활용 계획</h3>
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
            <tr>
              <td className="border border-gray-300 px-4 py-3 font-medium text-gray-800">인건비</td>
              <td className="border border-gray-300 px-4 py-3 text-gray-700">1억 1,000만원</td>
              <td className="border border-gray-300 px-4 py-3 text-gray-700">49%</td>
            </tr>
            <tr className="bg-gray-25">
              <td className="border border-gray-300 px-4 py-3 font-medium text-gray-800">마케팅 및 사용자 확보</td>
              <td className="border border-gray-300 px-4 py-3 text-gray-700">6,000만원</td>
              <td className="border border-gray-300 px-4 py-3 text-gray-700">27%</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3 font-medium text-gray-800">기술 인프라</td>
              <td className="border border-gray-300 px-4 py-3 text-gray-700">3,000만원</td>
              <td className="border border-gray-300 px-4 py-3 text-gray-700">13%</td>
            </tr>
            <tr className="bg-gray-25">
              <td className="border border-gray-300 px-4 py-3 font-medium text-gray-800">운영 자금</td>
              <td className="border border-gray-300 px-4 py-3 text-gray-700">2,000만원</td>
              <td className="border border-gray-300 px-4 py-3 text-gray-700">9%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default FundingBreakdown;