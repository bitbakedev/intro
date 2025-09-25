import React from 'react';

const ProblemStatement: React.FC = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">1. 글로벌 DeFi 시장의 구조적 문제</h2>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        현재 DeFi 생태계는 기술적 복잡성으로 인해 일반 사용자들의 진입을 크게 저해하고 있습니다. 
        블록체인 기술 자체가 복잡한 것은 물론, 사용자들이 실제로 서비스를 이용하기까지 거쳐야 하는 
        단계들이 과도하게 많고 복잡합니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        일반 사용자가 DeFi 서비스를 이용하려면 먼저 블록체인 지갑을 생성하고, 개인키와 시드 구문을 
        안전하게 보관해야 합니다. 이는 단순히 계정을 만드는 것이 아니라, 사용자가 자신의 자산을 
        완전히 책임져야 한다는 것을 의미합니다. 한 번 잃어버리면 복구가 불가능한 개인키 관리, 
        복잡한 가스비 계산, 네트워크 선택 등은 일반 사용자에게는 부담스러운 요소들입니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-6">
        더욱 문제가 되는 것은 DeFi 생태계에서 사용되는 전문 용어들입니다. DEX(탈중앙화 거래소), 
        AMM(자동 시장 조성자), Liquidity Pool(유동성 풀), Yield Farming(수익 농사), 
        Staking(스테이킹) 등은 개발자들이 이해하기 쉽게 만든 용어이지만, 일반 사용자들에게는 
        외계어와 다름없습니다. <strong>DeFi 사용자의 78%가 기술적 복잡성을 
        주요 진입 장벽으로 인식</strong>하고 있다는 조사 결과가 이를 뒷받침합니다.
      </p>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-6 mt-8">2. 한국 시장의 특수한 문제점</h2>
      
      <p className="text-xl font-semibold text-gray-700 mb-4">규제적 제약과 신뢰도 위기</p>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        한국은 암호화폐 시장에서 독특한 규제 환경을 가지고 있습니다. 2021년 정부의 신용카드를 통한 
        암호화폐 구매 금지 조치는 한국 사용자들의 암호화폐 진입 경로를 크게 제한했습니다. 
        이 조치는 투기 억제와 자금세탁 방지를 목적으로 했지만, 결과적으로 일반 사용자들의 
        암호화폐 접근성을 크게 저해했습니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        더욱 심각한 문제는 연속적인 실패 사례들입니다. 2022년 테라(Terra) 사태로 400억 달러가 증발했고, 
        2023년 델리오(Delio)가 8,000억원 규모의 예치금과 함께 파산했으며, 2024년 하루인베스트먼트 
        사기 사건으로 1.4조원의 피해가 발생했습니다. 이러한 연속적인 실패 사례들은 단순히 개별 기업의 
        문제를 넘어서 전체 산업에 대한 신뢰를 크게 훼손했습니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-6">
        그 결과 <strong>한국 사용자들의 DeFi 서비스 신뢰도가 글로벌 평균 
        대비 40% 낮은 수준</strong>에 머물러 있으며, 강화된 KYC/AML 절차는 추가적인 진입 장벽으로 
        작용하고 있습니다.
      </p>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-6 mt-8">3. 미충족된 시장 기회</h2>
      
      <h3 className="text-xl font-semibold text-gray-700 mb-4">거대한 잠재 시장의 존재</h3>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        하지만 이러한 문제들 뒤에는 거대한 기회가 숨어 있습니다. 현재 <strong>
        3,200만명의 리워드 앱 사용자 중 60%가 암호화폐 투자에 관심</strong>을 표명하고 있으며, 
        이는 약 1,920만명의 잠재 고객층을 의미합니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        또한 한국에는 약 <strong>200만명의 암호화폐 투자자</strong>가 있지만, 
        이들 중 실제로 DeFi 서비스를 이용하는 비율은 20% 미만에 불과합니다. 이는 기술적 진입 장벽과 
        사용성 문제로 인해 DeFi의 잠재력을 제대로 활용하지 못하고 있다는 것을 의미합니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-6">
        가장 주목할 점은 시장 규모의 격차입니다. <strong>글로벌 DeFi 시장 
        TVL이 220조원</strong>에 달하는 반면, <strong>한국은 2조원으로 
        1% 미만</strong>에 불과합니다. 이는 한국이 암호화폐 기술의 선도국임에도 불구하고, 
        DeFi 분야에서는 후진국 수준에 머물러 있다는 것을 의미하며, 동시에 거대한 성장 잠재력을 
        보여주는 지표입니다.
      </p>
    </div>
  );
};

export default ProblemStatement;