import React from 'react';

const Risks: React.FC = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">기술적 리스크</h2>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        스마트 컨트랙트 보안 취약점은 DeFi 서비스 연동 시 가장 중요한 고려사항입니다. 
        해킹이나 버그로 인한 자산 손실 위험을 최소화하기 위해 정기적인 보안 감사와 
        다중 서명 지갑을 통한 자산 관리를 실시하고 있습니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-6">
        사용자 증가에 따른 확장성 문제도 중요한 기술적 리스크입니다. 블록체인 네트워크 부하 증가로 
        인한 거래 지연이나 수수료 상승을 대비하여 다중 체인 지원과 레이어2 솔루션 도입을 
        계획하고 있습니다. 또한 암호화폐 관련 법규 변화에 대응하기 위해 법무팀을 강화하고 
        규제 준수 체계를 구축하고 있습니다.
      </p>
      
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 mt-8">시장 리스크</h2>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        경쟁 심화는 피할 수 없는 시장 리스크입니다. 토스, 카카오뱅크 등 대형 플레이어들이 
        유사한 서비스로 시장에 진입할 가능성이 있으며, 이에 대응하기 위해 지속적인 기술 혁신과 
        사용자 경험 개선에 집중하고 있습니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-6">
        암호화폐 시장의 높은 변동성도 주요 리스크 요소입니다. 가격 급락 시 사용자들의 
        관심도가 떨어질 수 있으며, 이를 대비하여 스테이블코인 기반 서비스 확대와 
        다양한 자산 클래스 지원을 통해 리스크를 분산시키고 있습니다. 경제 불황으로 인한 
        광고 예산 감소 위험에 대해서는 5개의 서로 다른 수익원을 통해 수익 다각화를 실현하고 있습니다.
      </p>
      
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 mt-8">완화 방안</h2>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        모든 리스크에 대한 체계적인 완화 방안을 마련하고 있습니다. 보안 리스크에 대해서는 
        분기별 스마트 컨트랙트 보안 감사를 실시하고, 화이트해커 프로그램을 운영하여 
        취약점을 사전에 발견하고 해결하고 있습니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        시장 리스크 완화를 위해서는 광고 수익, 기프트카드 수수료, 스왑 수수료, 스테이킹 수수료, 
        B2B 마케팅 등 5개의 서로 다른 수익원을 통해 리스크를 분산시키고 있습니다. 
        이러한 다각화된 수익 구조는 특정 분야의 위기가 전체 사업에 미치는 영향을 최소화합니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-6">
        규제 리스크에 대해서는 전문 법무팀을 구성하여 국내외 규제 변화를 지속적으로 모니터링하고, 
        규제 당국과의 적극적인 소통을 통해 컴플라이언스를 강화하고 있습니다. 
        또한 모든 수익 구조와 자산 관리 과정을 투명하게 공개하여 사용자들의 신뢰를 확보하고 
        규제 리스크를 최소화하고 있습니다.
      </p>
    </div>
  );
};

export default Risks;