import React from 'react';

import { useState } from 'react';
import BlockchainComplexityModal from '../BlockchainComplexityModal';
import GasFeeModal from '../GasFeeModal';
import DeFiComplexityModal from '../DeFiComplexityModal';

const Solution: React.FC = () => {
  const [isBlockchainModalOpen, setIsBlockchainModalOpen] = useState(false);
  const [isGasFeeModalOpen, setIsGasFeeModalOpen] = useState(false);
  const [isDeFiComplexityModalOpen, setIsDeFiComplexityModalOpen] = useState(false);

  return (
    <>
    <div className="prose prose-lg max-w-none">
      <p className="text-gray-700 leading-relaxed mb-6">
        비트베이크는 앞서 제시한 모든 문제점들을 해결하는 솔루션을 제공합니다. 
        복잡한 Web3 기술을 사용자에게는 보이지 않게 숨기고, 일상적인 활동을 통해 자연스럽게 
        암호화폐와 DeFi에 접근할 수 있도록 만드는 것이 우리의 핵심 전략입니다.
      </p>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-6">1. 유저들에게 친숙한 리워드 앱 서비스로 접근</h2>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        리워드 앱 시장은 지속적으로 성장하고 있으며, 한국에서만 3,200만명의 사용자가 활발하게 이용하고 있습니다. 
        캐시워크, 캐시슬라이드, 머니워크 등 다양한 플레이어들이 각각의 고유한 영역에서 성공을 거두고 있습니다. 
        리워드앱 시장은 다른 분야와 달리 승자독식 시장이 아니라 여러 서비스가 공존할 수 있는 시장입니다. (<a href="https://www.mk.co.kr/news/economy/11342869?utm_source=chatgpt.com" target="_blak" className="text-underline text-blue-500">참고자료</a>)
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-6">
        비트베이크는 이처럼 유저에게 너무나 친숙한 리워드 앱 형태로 사용자들에게 접근하여 심리적 장벽을 제거합니다. 
        사용자들은 "암호화폐 투자"나 "DeFi 서비스"라는 부담스러운 개념 대신, 
        "걸으면서 포인트 적립하기"라는 일상적이고 친숙한 활동으로 온보딩 됩니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        이렇게 온보딩된 사용자들은 리워드 앱을 일상적으로 활용하면서 스테이킹과 DeFi 상품에 자연스럽게 노출됩니다. 
        초기에는 단순히 포인트 적립이나 소액 투자로 시작하지만, 반복적인 사용을 통해 점진적으로 지갑 사용, 자산 관리, 
        스테이킹 개념을 익히게 됩니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-6">
        결국 사용자는 DeFi의 가치를 이해한 적극적 투자자로 전환됩니다. 거래소에 단순 보관하던 코인을 비트베이크로 옮겨와 
        예치하거나, 원화 기반 스테이블 코인을 통해 직접 코인을 구매하고 스테이킹에 참여하게 됩니다. 
        이러한 단계적 전환은 국내 사용자들에게 DeFi에 대한 신뢰를 회복시키고, 동시에 비트베이크가 자연스럽게 
        DeFi 플랫폼으로 자리매김하도록 만듭니다.
      </p>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-6 mt-8">2. 사용성과 법적 리스크를 동시에 충족하는 지갑 관리 기술</h2>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        기존 DeFi 서비스에서 가장 큰 진입 장벽 중 하나는 복잡한 지갑 생성과 관리 과정이었습니다. 
        사용자는 12~24개의 니모닉 단어를 외우고, 개인키를 안전하게 보관해야 하는 부담을 떠안아야 했습니다. 
        이러한 복잡성은 일반 사용자들이 DeFi 서비스를 포기하게 만드는 주요 원인이었습니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        비트베이크는 이 문제를 MPC(Multi-Party Computation) 기술을 활용해 근본적으로 해결했습니다. 
        사용자는 카카오톡, 네이버, 구글 등 익숙한 소셜 로그인만으로 지갑을 생성할 수 있으며, 
        니모닉 암기나 개인키 백업 과정이 전혀 필요하지 않습니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-6">
        결과적으로 사용자는 일반 모바일 앱처럼 단순히 "계정 만들기"만 경험하며, "지갑 생성"이라는 개념 자체를 
        이해하지 않아도 됩니다. 이는 Web2 사용자들이 Web3 서비스 이용 시 느끼던 심리적 장벽을 크게 낮추는 효과를 가져옵니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-6">
        또한 비트베이크는 이러한 방식을 통해 비수탁형(non-custodial) 구조를 유지하므로, 국내 법적 규제를 준수하면서도 
        사용자에게 높은 보안성과 편의성을 동시에 제공합니다.
      </p>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-6">3. 사용자 경험 혁신</h2>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        DeFi를 이용하려면, 사용자는 중앙화 거래소에서 코인을 구매하고 → 지갑으로 전송한 뒤 → Aave, Curve, Uniswap 등 개별 웹페이지를 찾아 접속해야 했습니다.
이 과정에서 여러 앱을 오가며, 각 서비스의 사용법과 네트워크별 가스비, 트랜잭션 승인 절차까지 직접 이해해야 했습니다. 이는 일반 사용자에게는 진입 장벽이 너무 높고, 전문가조차 실수를 반복하는 복잡한 구조입니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-4">
비트베이크는 이러한 불편함을 완전히 해결했습니다.
지갑, 멀티체인 지원, 스테이킹 및 예치 서비스까지 모두 비트베이크앱 안에서 작동하며, 사용자는 “포인트를 암호화폐로 교환한다” 와 같은 쉽고 추상화된 경험만 하게 됩니다.
모든 복잡한 과정(체인 선택, 가스비 계산, DeFi 연동, 트랜잭션 서명 등)은 비트베이크가 자동으로 처리합니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-4">
      비트베이크는<br/>
        <ul>
    	<li>•	최적의 블록체인과 DeFi 서비스를 자동으로 선택하여 수수료 최소화, 수익성 극대화 (
          <button
            onClick={() => setIsBlockchainModalOpen(true)}
            className="text-blue-600 hover:text-blue-800 underline cursor-pointer bg-transparent border-none p-0 font-inherit"
          >
            자세히
          </button>
        )</li>
    	<li>•	유저의 트랜젝션 수수료를 대신 납부 (
          <button
            onClick={() => setIsGasFeeModalOpen(true)}
            className="text-blue-600 hover:text-blue-800 underline cursor-pointer bg-transparent border-none p-0 font-inherit"
          >
            자세히
          </button>
        )</li>
    	<li>•	블록체인에 대한 지식 없이도 DeFi 서비스를 이용할 수 있도록 설계 (
          <button
            onClick={() => setIsDeFiComplexityModalOpen(true)}
            className="text-blue-600 hover:text-blue-800 underline cursor-pointer bg-transparent border-none p-0 font-inherit"
          >
            자세히
          </button>
        )</li>
          </ul>
           </p>

      <p className="text-gray-700 leading-relaxed mb-4">
즉, 비트베이크는 기존의 “전문가만을 위한 DeFi”를 누구나 쉽게 접근할 수 있는 리워드형 금융 서비스로 재정의한 최초의 플랫폼입니다.
           </p>

      
      <h2 className="text-2xl font-bold text-gray-800 mb-6">4. 시장에 대한 높은 이해도를 기반으로 한 전략적 접근</h2>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        한국은 약 8조 원 규모의 거대한 기프트카드 시장을 보유하고 있습니다. 비트베이크는 이 시장 특성을 활용해, 
        사용하지 않는 기프트카드를 포인트로 교환하고 이를 암호화폐로 전환할 수 있는 서비스를 제공합니다. 
        이는 한국 정부의 신용카드 암호화폐 구매 금지 조치로 진입이 제한된 일반 사용자들에게 대체재로 작용합니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        또한 비트베이크 팀은 원화 스테이블코인 발행을 준비 중인 Kaia (Kakao + LINE Next) 재단과 협업할 수 있는 파트너십 기반을 
        이미 확보했으며, 이를 통해 원화 
        스테이블코인이 발행될 경우, 누구보다 빠르게 협업·적용할 수 있는 시장 선점 기회를 가지게 됩니다.
      </p>
    </div>
    
    <BlockchainComplexityModal 
      isOpen={isBlockchainModalOpen} 
      onClose={() => setIsBlockchainModalOpen(false)} 
    />
    
    <GasFeeModal 
      isOpen={isGasFeeModalOpen} 
      onClose={() => setIsGasFeeModalOpen(false)} 
    />
    
    <DeFiComplexityModal 
      isOpen={isDeFiComplexityModalOpen} 
      onClose={() => setIsDeFiComplexityModalOpen(false)}  />
    </>
  );
};

export default Solution;