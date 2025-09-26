import React from 'react';
import { FundingRequest } from '../types/proposal';

interface FundingBreakdownProps {
  fundingRequest: FundingRequest;
}

const FundingBreakdown: React.FC<FundingBreakdownProps> = ({ fundingRequest }) => {
  return (
    <div className="prose prose-lg max-w-none">
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>대표는 월급을 받지 않는다.</strong> 풀타임 인력 1명, 파트타임 혹은 외주 인원 2명 정도로 운영할 예정이다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        비트베이크는 총 <strong>2억원의 투자 유치</strong>를 목표로 하고 있으며, 이는 기업 가치 13억원(Pre-money) 기준으로 
        <strong>15%의 지분</strong>을 제공하는 조건입니다. 현재 팀이 보유한 자금은 2,500만원이며, 
        이번 투자를 통해 확보한 자금으로 12개월간 안정적인 사업 운영과 성장을 추진할 계획입니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        투자 자금의 활용 계획은 다음과 같습니다. 가장 큰 비중인 49%(1억 1,000만원)는 <strong>인건비</strong>로 배정하여 
        핵심 개발 인력과 운영 인력을 확보할 예정입니다. 27%(6,000만원)는 <strong>마케팅 및 사용자 확보</strong>에 투입하여 
        빠른 사용자 기반 확장을 도모하겠습니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        13%(3,000만원)는 <strong>기술 인프라</strong> 구축에 사용하여 서버, 보안, 블록체인 연동 등 안정적인 서비스 운영을 
        위한 기반을 마련하고, 나머지 9%(2,000만원)는 <strong>운영 자금</strong>으로 활용하여 사무실 임대료, 
        각종 라이선스 비용, 법무·회계 등 필수 운영비를 충당할 계획입니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed">
        이러한 자금 배분을 통해 비트베이크는 향후 12개월 내에 MAU 10만명 달성과 월 매출 1억원 규모의 
        안정적인 수익 구조를 구축하여, Series A 라운드 진입을 위한 견고한 기반을 마련하겠습니다.
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