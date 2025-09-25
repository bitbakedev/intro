import React from 'react';

interface VisionProps {
  vision: string;
}

const Vision: React.FC<VisionProps> = ({ vision }) => {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">3단계 플랫폼 진화: "리워드 앱에서 종합 금융 플랫폼으로"</h2>
      
      <h3 className="text-xl font-semibold text-gray-700 mb-4">1단계: 리워드 앱 (Reward App)</h3>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        간편한 포인트 적립을 통해 광고 시청과 미션 완료로 누구나 쉽게 리워드를 획득할 수 있습니다. 
        현금, 기프트카드, 암호화폐 등 다양한 교환 옵션을 제공하여 사용자가 원하는 형태로 
        보상을 받을 수 있으며, 누구나 즐길 수 있는 간단한 리워드 경험을 제공합니다.
      </p>
      
      <h3 className="text-xl font-semibold text-gray-700 mb-4">2단계: DeFi 플랫폼 (DeFi Platform)</h3>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        자동 스테이킹 시스템을 통해 포인트를 암호화폐로 전환하여 자동으로 예치할 수 있습니다. 
        복잡한 과정 없이 이자 수익을 획득할 수 있으며, 비수탁형 방식으로 운영하여 
        법적 리스크를 최소화하면서 안전한 서비스를 제공합니다.
      </p>
      
      <h3 className="text-xl font-semibold text-gray-700 mb-4">3단계: 스테이블코인 플랫폼 (Stablecoin Platform)</h3>
      
      <p className="text-gray-700 leading-relaxed mb-6">
        스테이블코인으로 상품 및 서비스를 직접 결제할 수 있는 시스템을 구축합니다. 
        스테이블코인을 통해 다양한 암호화폐를 쉽게 구매할 수 있도록 하며, 
        스테이블코인 스테이킹을 통한 안정적인 이자 수익을 제공합니다.
      </p>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-6 mt-8">장기 비전</h2>
      
      <p className="text-gray-700 leading-relaxed">
        종합적인 Web3 금융 플랫폼으로 진화하여, 일상 활동부터 고급 DeFi 서비스까지 
        모든 것을 하나의 플랫폼에서 경험할 수 있는 생태계를 구축합니다. 
        사용자들이 Web3 기술의 복잡성을 느끼지 않으면서도 그 혜택을 온전히 누릴 수 있는 
        진정한 Web3 대중화 플랫폼을 만들어가겠습니다.
      </p>
    </div>
  );
};

export default Vision;