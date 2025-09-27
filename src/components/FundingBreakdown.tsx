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
이는 기업가치 16.6억 원(Pre-money) 기준으로 12%의 지분을 제공하는 조건입니다.
현재 팀은 2번의 예비창업패키지를 통해 약 2,500만 원의 자금을 확보하였으며, 이번 투자를 통해 추가로 확보한 자금으로
12개월 동안 빠른 성장을 만들어낼 계획입니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-4">
시리즈 A 투자유치 전까지 대표는 무급으로 일할 예정이며,
풀타임 인력 1명과 파트타임 또는 외주 인력 2명 수준으로 효율적인 팀 구조를 유지할 예정입니다.
      </p>

      <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-8">벨류에이션 근거</h3>
      
      <div className="space-y-6">
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-2">1. 차별화된 수익 모델 검증 완료</h4>
          <p className="text-gray-700 leading-relaxed mb-3">
            비트베이크는 5,000명 이상의 누적 사용자와 일간 활성 사용자(DAU) 약 1,000명을 확보했습니다. 
            또한 리워드에서 암호화폐 상품으로 이어지는 전환 구조를 검증하며, 서비스의 성장 가능성과 
            시장 적합성(Product-Market Fit)을 입증했습니다.
          </p>
          <p className="text-gray-700 leading-relaxed">
            현재 광고·기프트카드·스테이킹 3개의 수익 모델을 운영 중이며, 현재 구조만으로도 MAU 1만 명 도달 시 
            월 매출 800만 원 이상이 예상되며, 규모의 경제를 통해 더 높은 수익성을 만들어낼 수 있습니다. 리워드 앱 시장은 이미 검증된 비즈니스 모델이지만, 
            비트베이크는 여기에 DeFi 를 더하여 기존 리워드 앱 대비 독보적인 수익성과 
            성장성을 가지고 있습니다.
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-2">2. DeFi 기술력 및 협력 네트워크의 희소성</h4>
          <p className="text-gray-700 leading-relaxed mb-4">
            비트베이크 팀은 DeFi 서비스를 직접 개발하고, Neo·Kaia·Bera·Chiliz 등 주요 글로벌 
            블록체인 재단과 협력한 경험을 보유하고 있습니다. 이러한 기술력과 네트워크는 국내에서 찾아보기 어려운 수준의 차별화된 경쟁력으로, 
            비트베이크를 단순한 리워드 앱이 아닌 DeFi·스테이블코인 인프라 플랫폼으로 확장할 수 있는 현실적 가능성을 증명합니다.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            또한 기술뿐 아니라 사용자 경험(UX) 측면에서도 강력한 경쟁력을 갖추고 있습니다. 
            대표를 포함한 핵심 인력은 UX 관련 석사 학위를 보유하고 있으며, 토스·중고나라·핀다 등 국내 대표적인 사용자 중심 서비스에서 실제 제품을 설계하고 성장시킨 경험이 있습니다.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            이러한 기술적 깊이와 사용자 이해 능력의 결합은, 복잡한 DeFi 서비스를 누구나 쉽게 사용할 수 있는 형태로 풀어내는 것을 가능하게 합니다. 
            즉, 비트베이크는 기술적 기반과 사용자 경험을 모두 갖춘 팀으로, 리워드 앱을 넘어 차세대 금융 서비스로 진화할 준비가 이미 완료된 팀입니다.
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-2">3. 동일 시장 내 유사 기업 밸류 비교</h4>
          <p className="text-gray-700 leading-relaxed">
            국내 리워드 앱 주요 기업(예: 캐시워크, 비트버니)은 시드 단계에서 50억 원 이상의 
            기업가치를 평가받았습니다. 비트베이크는 이들보다 더 다양한 수익 구조(DeFi + 리워드)와 
            원화 스테이블코인 및 DeFi 시장 선점 가능성을 동시에 보유하고 있어, 16.6억 원의 
            밸류에이션은 보수적이면서도 충분히 합리적인 수준입니다.
          </p>
        </div>
      </div>
    
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