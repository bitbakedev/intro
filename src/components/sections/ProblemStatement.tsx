
<import React from 'react';

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
        <a href="https://blog.uniswap.org/cefi-defi-uniswap-survey" 
           target="_blank" 
           rel="noopener noreferrer" 
           className="text-blue-600 hover:text-blue-800 underline">Uniswap Labs의 2023년 설문</a> 조사에서도 중앙화 거래소 사용자들이 DeFi를 사용하지 않는 가장 큰 이유로 
        "이해 부족과 복잡성"을 꼽았고, 
        <a href="https://www.mdpi.com/2504-2289/9/7/178" 
           target="_blank" 
           rel="noopener noreferrer" 
           className="text-blue-600 hover:text-blue-800 underline">Toward the Mass Adoption of Blockchain (MDPI, 2025)</a>은 "복잡한 인터페이스와 익숙하지 않은 절차가 
        비기술 사용자의 참여를 저해한다"고 분석하며, 사용자 경험(UX)이 DeFi 대중화의 핵심 장애 요인임을 
        강조합니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-6">
        글로벌 시장에서는 이런 사용성 문제를 해결하기 위해 다양한 실험이 진행되고 있지만, 한국 시장에서는 
        여전히 시도조차 거의 없는 상황입니다. 결국 "사용하기 어렵다"는 점이 DeFi 확산의 가장 큰 구조적 문제로 
        자리 잡고 있습니다.
      </p>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-6 mt-8">2. 한국 시장의 특수한 문제점 : 규제적 제약과 신뢰도 위기</h2>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        한국은 암호화폐 시장에서 독특한 규제 환경을 가지고 있습니다. 2021년 정부의 신용카드를 통한 
        암호화폐 구매 금지 조치는 사용자들의 진입 경로를 제한했으며, 이는 투기 억제와 자금세탁 방지를 
        목적으로 했지만 결과적으로 일반 사용자들의 접근성을 크게 저해했습니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        더욱 심각한 문제는 연속적인 실패 사례입니다. 2022년 테라(Terra) 붕괴, 2023년 델리오(Delio)의 
        예치금 동결 및 파산, 2024년 하루인베스트먼트 사기 사건 등은 단순히 개별 기업의 문제가 아니라 
        산업 전반에 대한 불신을 심화시킨 사건들이었습니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-6">
        이러한 규제적 제약과 신뢰도 위기의 결합은 한국 사용자들이 새로운 DeFi 서비스에 진입하는 데 
        큰 장벽으로 작용하고 있으며, 강화된 KYC/AML 절차 또한 추가적인 부담으로 인식되고 있습니다.
        <a href="https://www.upbit.com/web-static/announcement/share/ko/4851" 
           target="_blank" 
           rel="noopener noreferrer" 
           className="text-blue-600 hover:text-blue-800 underline">강화된 KYC/AML 절차</a> 또한 추가적인 부담으로 인식되고 있습니다.
      </p>
    </div>
  );
};

export default ProblemStatement;