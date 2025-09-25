import React from 'react';

const ProblemStatement: React.FC = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">1. 글로벌 DeFi 시장의 구조적 문제</h2>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        현재 DeFi 생태계는 혁신적인 잠재력에도 불구하고 높은 기술적 복잡성 때문에 일반 사용자의 진입이 지연되고 있습니다. 
        사용자는 단순히 계정을 만드는 수준을 넘어 지갑 생성, 개인키 및 시드 구문 보관, 네트워크와 가스비 선택, 
        스마트컨트랙트 서명 절차까지 모두 직접 이해하고 관리해야 합니다. 이러한 과정은 금융 서비스에 익숙한 일반 대중에게 
        매우 난해하게 느껴지며, 실제로 많은 신규 사용자가 이 과정에서 이탈하게 만듭니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        Uniswap Labs의 2023년 설문 조사에서도 중앙화 거래소 사용자들이 DeFi를 사용하지 않는 가장 큰 이유로 
        <strong>"이해 부족과 복잡성"</strong>을 꼽았고 (<a href="https://blog.uniswap.org/cefi-defi-uniswap-survey?utm_source=chatgpt.com" 
           target="_blank" 
           rel="noopener noreferrer" 
           className="text-blue-600 hover:text-blue-800 underline">Uniswap Labs, 2023</a>), 
        <a href="https://www.mdpi.com/2504-2289/9/7/178" 
           target="_blank" 
           rel="noopener noreferrer" 
           className="text-blue-600 hover:text-blue-800 underline">Toward the Mass Adoption of Blockchain (MDPI, 2025)</a>은 "복잡한 인터페이스와 익숙하지 않은 절차가 
        비기술 사용자의 참여를 저해한다"고 분석하며, 사용자 경험(UX)이 DeFi 대중화의 핵심 장애 요인임을 
        강조합니다【MDPI, 2025】.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-6">
        글로벌 시장에서는 이런 사용성 문제를 해결하기 위해 다양한 실험이 진행되고 있지만, 한국 시장에서는 
        여전히 시도조차 거의 없는 상황입니다. 결국 "사용하기 어렵다"는 점이 DeFi 확산의 가장 큰 구조적 문제로 
        자리 잡고 있습니다.
      </p>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-6 mt-8">2. 한국 시장의 특수한 문제점 : 규제적 제약과 신뢰도 위기</h2>
      
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
      
      <h2 className="text-2xl font-bold text-gray-800 mb-6 mt-8">3. 미충족된 시장 기회 : 거대한 잠재 시장의 존재</h2>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        한국에는 약 <strong>200만명의 암호화폐 투자자</strong>가 있지만, 
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