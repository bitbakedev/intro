import React from 'react';

const ProblemStatement: React.FC = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">1. 글로벌 DeFi 시장의 구조적 문제</h2>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        현재 DeFi 생태계는 혁신적인 잠재력에도 불구하고 높은 기술적 복잡성 때문에 일반 사용자의 진입이 지연되고 있습니다. 
        사용자는 단순히 계정을 만드는 수준을 넘어 지갑 생성, 개인키 및 시드 구문 보관, 네트워크와 가스비 선택까지 모두 직접 관리해야 하며, 
        이는 보안과 사용성 측면에서 큰 부담으로 작용합니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        특히 사용자 이해 부족은 DeFi 확산의 핵심 장애 요인으로 반복적으로 지적됩니다. Uniswap Labs가 2023년에 실시한 설문 조사에 따르면, 
        중앙화 거래소(CEX) 사용자 중 42%가 DeFi를 사용하지 않는 이유로 '이해 부족(lack of understanding)'을 꼽았으며, 
        거래 수수료와 복잡성도 주요 장벽으로 나타났습니다【<a href="https://blog.uniswap.org/cefi-defi-uniswap-survey" target="_blank" className="text-blue-600 hover:text-blue-800">Uniswap Labs, 2023</a>】. 또한 Crypto.com이 발표한 Decentralised Finance User Survey 결과에 따르면, 
        DeFi를 들어본 적 있는 응답자 중 48%만이 중급 이상 수준의 이해도를 보였고, 53%는 들어봤지만 실제 사용 경험은 없다고 응답했습니다【<a href="https://crypto.com/research/decentralised-finance-survey-2020" target="_blank" className="text-blue-600 hover:text-blue-800">Crypto.com, 2020</a>】.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-6">
        이러한 조사 결과들은 "기술적 복잡성"이 DeFi 보급의 구조적 문제라는 점을 분명히 보여줍니다. 
        실제로 Chainalysis도 2023년 보고서에서, 대부분의 신규 사용자는 지갑 관리와 스마트컨트랙트 사용법을 배우는 과정에서 이탈한다고 분석했습니다【<a href="https://www.chainalysis.com/blog/2023-geography-of-cryptocurrency/" target="_blank" className="text-blue-600 hover:text-blue-800">Chainalysis, Crypto Adoption Report 2023</a>】.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-6">
        따라서 한국은 물론이고, 글로벌 DeFi 시장의 성장은 단순히 새로운 금융 상품을 설계하는 데 그치지 않고, 
        복잡한 UX를 단순화하고 진입 장벽을 낮추는 사용자 경험 혁신이 뒷받침되어야 가능합니다.
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