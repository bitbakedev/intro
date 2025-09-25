import React from 'react';

const Solution: React.FC = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <div className="text-center bg-gray-50 p-8 rounded-lg mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">핵심 철학</h2>
        <p className="text-xl font-semibold mb-2">"Web3 기술을 활용하지만, Web2 서비스처럼 단순합니다"</p>
        <p className="text-gray-600">복잡한 블록체인 기술을 사용자에게는 보이지 않게 숨기고, 일상적인 활동을 통해 자연스럽게 암호화폐와 DeFi에 접근</p>
      </div>
      
      <p className="text-gray-700 leading-relaxed mb-6">
        비트베이크는 앞서 제시한 모든 문제점들을 해결하는 혁신적인 솔루션을 제공합니다. 
        복잡한 Web3 기술을 사용자에게는 보이지 않게 숨기고, 일상적인 활동을 통해 자연스럽게 
        암호화폐와 DeFi에 접근할 수 있도록 만드는 것이 우리의 핵심 철학입니다.
      </p>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-6">1. 소셜 로그인 기반의 혁신적 지갑 관리</h2>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        기존 DeFi 서비스에서 가장 큰 진입 장벽 중 하나는 복잡한 지갑 생성과 관리 과정이었습니다. 
        사용자들은 12-24개의 니모닉 단어를 외우고, 개인키를 안전하게 보관해야 하는 부담을 안고 있었습니다. 
        이러한 복잡성은 일반 사용자들이 DeFi 서비스를 이용하는 것을 포기하게 만드는 주요 원인이었습니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        비트베이크는 이러한 문제를 <strong>MPC(Multi-Party Computation) 기술</strong>을 
        활용하여 근본적으로 해결했습니다. 사용자는 카카오톡, 네이버, 구글 등 익숙한 소셜 로그인만으로 
        지갑을 생성할 수 있으며, 복잡한 니모닉 암기나 개인키 백업 과정을 거칠 필요가 없습니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-6">
        사용자는 마치 일반적인 모바일 앱을 사용하는 것처럼 간단하게 지갑을 생성하고 관리할 수 있습니다. 
        "지갑 생성"이라는 개념 자체가 사용자에게 노출되지 않으며, 단순히 "계정 만들기"로 인식됩니다. 
        이는 Web2 사용자들이 Web3 서비스를 이용할 때 느끼는 심리적 장벽을 크게 낮춥니다.
      </p>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-6">2. 올인원 통합 플랫폼의 구축</h2>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        현재 DeFi 생태계는 각각의 프로토콜이 독립적으로 운영되어 사용자가 원하는 기능을 이용하기 위해 
        여러 플랫폼을 오가야 하는 불편함이 있습니다. 예를 들어, 토큰을 스테이킹하려면 먼저 적절한 
        프로토콜을 찾고, 지갑을 연결하고, 네트워크를 설정하는 복잡한 과정을 거쳐야 합니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        비트베이크는 이러한 분산된 서비스들을 <strong>하나의 통합 플랫폼</strong>으로 
        묶어 사용자가 원하는 모든 기능을 한 곳에서 이용할 수 있도록 했습니다. 분산 지갑, 멀티체인 지원, 
        DeFi 서비스가 모두 하나의 앱 안에 통합되어 있어 사용자는 복잡한 설정 과정 없이 바로 서비스를 
        이용할 수 있습니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-6">
        BTC, ETH, SOL, XRP, GAS 등 주요 체인을 지원하며, 포인트를 원하는 암호화폐로 즉시 교환하고, 
        Aave 프로토콜 연동으로 연 4-17% 수익을 자동으로 적립할 수 있습니다. 모든 자산과 수익을 
        통합 대시보드에서 한 눈에 확인할 수 있습니다.
      </p>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-6">3. 완전한 추상화를 통한 사용자 경험 혁신</h2>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        기존 DeFi 서비스에서는 사용자가 직접 체인을 선택하고, 가스비를 계산하고, 트랜잭션을 승인하는 등 
        복잡한 과정을 거쳐야 합니다. 이러한 과정들은 각각 실수할 가능성이 있으며, 한 번의 실수로 인해 
        자산 손실이 발생할 수 있습니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        비트베이크는 이러한 복잡한 과정들을 <strong>완전히 추상화</strong>하여 
        사용자로부터 숨깁니다. 사용자는 단순히 "포인트를 암호화폐로 교환한다\"는 의도만 표현하면, 
        나머지 모든 기술적 과정은 비트베이크가 자동으로 처리합니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-6">
        최적의 체인을 자동으로 선택하여 수수료를 최소화하고, 네트워크 수수료를 비트베이크에서 부담하여 
        사용자 부담을 제거하며, 블록체인 지식 없이도 모든 DeFi 서비스를 이용할 수 있도록 합니다. 
        시장 상황에 따른 자동 수익 최적화까지 제공합니다.
      </p>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-6">4. 한국 시장 특화 솔루션</h2>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        한국은 <strong>8조원 규모의 거대한 기프트카드 시장</strong>을 보유하고 있습니다. 
        비트베이크는 이러한 시장 특성을 활용하여 사용자들이 사용하지 않는 기프트카드를 포인트로 교환할 수 
        있는 서비스를 제공합니다. 이는 한국 사용자들에게만 제공되는 독특한 가치 제안입니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        한국 정부의 신용카드 암호화폐 구매 금지 조치로 인해 일반 사용자들의 암호화폐 진입이 제한되고 있는 
        상황에서, 비트베이크는 기프트카드를 통한 암호화폐 진입 경로를 제공하여 이러한 제약을 우회할 수 
        있도록 합니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-8">
        과거의 실패 사례들로 인해 한국 사용자들의 DeFi 서비스에 대한 신뢰도가 낮은 상황에서, 
        비트베이크는 투명성과 안전성을 최우선으로 하는 서비스를 제공합니다. 모든 수익 구조와 자산 관리 
        과정을 투명하게 공개하여 사용자들이 안심하고 서비스를 이용할 수 있도록 합니다.
      </p>
      
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-center">서비스 모델: Move-to-Earn + Learn-to-Earn + DeFi</h3>
        <p className="text-gray-700 text-center mb-4">
          <strong>"리워드로 시작해 DeFi 전문가를 양성합니다"</strong>
        </p>
        <p className="text-gray-600 text-center">
          1단계: 리워드 획득 → 2단계: 스테이킹 시도 → 3단계: 수익 이해 → 4단계: Web3 네이티브 성장
        </p>
      </div>
    </div>
  );
};

export default Solution;