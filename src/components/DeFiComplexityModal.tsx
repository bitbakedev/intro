import React from 'react';
import { X } from 'lucide-react';

interface DeFiComplexityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DeFiComplexityModal: React.FC<DeFiComplexityModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-800">DeFi 서비스의 복잡성과 사용자 진입장벽</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="text-gray-700 leading-relaxed">
            <p className="mb-6">
              DeFi(탈중앙화 금융) 서비스는 기존 금융기관 없이도 예금, 대출, 교환, 파생상품 거래 등을 가능하게 하는 혁신적인 기술입니다.
              그러나 실제 이용 과정은 일반 사용자에게 매우 높은 진입장벽을 형성하고 있습니다.
            </p>
            
            <hr className="my-6 border-gray-300" />
            
            <h3 className="text-xl font-bold text-gray-800 mb-4">1. 서비스별 개념과 구조의 불일치</h3>
            
            <p className="mb-4">
              현재 수백 개의 DeFi 서비스가 존재하지만,
              동일한 기능을 제공하는 서비스조차 작동 방식과 개념이 제각각입니다.
            </p>
            
            <p className="mb-4">
              예를 들어, 담보대출 플랫폼만 보더라도
            </p>
            <ul className="space-y-1 mb-4 ml-4">
              <li>• 어떤 서비스는 자동 청산 시스템을 통해 담보 비율을 유지해야 하고,</li>
              <li>• 어떤 서비스는 사용자가 직접 청산 위험을 관리해야 합니다.</li>
            </ul>
            
            <p className="mb-2">이 외에도</p>
            <ul className="space-y-1 mb-4 ml-4">
              <li>• DEX(탈중앙화 거래소)</li>
              <li>• LSD(리퀴드 스테이킹)</li>
              <li>• PerpDEX(무기한 선물 거래소)</li>
              <li>• Aave V3/V4, Compound, MakerDAO 등 세대별 대출 서비스</li>
              <li>• LST(Liquid Staking Token)</li>
            </ul>
            
            <p className="mb-6">
              등의 다양한 서비스가 존재하며,
              각각의 이름, 구조, 수익 분배 방식, 리스크 모델이 상이합니다.
              이로 인해 사용자가 서비스 간 차이를 이해하기 위해 상당한 학습비용을 감수해야 하는 구조가 만들어졌습니다.
            </p>
            
            <hr className="my-6 border-gray-300" />
            
            <h3 className="text-xl font-bold text-gray-800 mb-4">2. 사용자 인터페이스(UI)의 난해함</h3>
            
            <p className="mb-4">
              DeFi 서비스의 UI는 대체로 전문가 중심으로 설계되어 있습니다.
              대부분의 화면은
              "Supply", "Borrow", "Leverage", "Stake", "APR", "Collateral", "Pool"
              과 같은 영어 기반의 전문 용어로 구성되어 있으며,
              단 한 번의 클릭으로 자산이 묶이거나 손실이 발생할 수 있는 구조입니다.
            </p>
            
            <p className="mb-4">
              또한 서비스마다 버튼의 위치, 용어의 의미, 프로세스 순서가 다르기 때문에,
              초보 사용자는 동일한 작업(예: 스테이킹, 대출, 예치)을 하더라도
              서비스마다 다른 경험을 하게 됩니다.
            </p>
            
            <p className="mb-6">
              이는 결과적으로
              DeFi 시장의 성장 속도를 저해하는 주요 UX 요인으로 작용하고 있습니다.
            </p>
            
            <hr className="my-6 border-gray-300" />
            
            <h3 className="text-xl font-bold text-gray-800 mb-4">3. 언어 장벽과 로컬라이제이션의 부족</h3>
            
            <p className="mb-4">
              전 세계 대부분의 DeFi 서비스는 영어 UI만 제공합니다.
              한국어, 일본어, 중국어 등 비영어권 사용자를 위한 로컬라이제이션은 거의 이루어지지 않았습니다.
            </p>
            
            <p className="mb-2">이에 따라,</p>
            <ul className="space-y-1 mb-6 ml-4">
              <li>• 블록체인 용어에 익숙하지 않은 사용자,</li>
              <li>• 금융 지식이 부족한 일반 투자자,</li>
              <li>• 영어에 익숙하지 않은 비영어권 사용자들은</li>
            </ul>
            
            <p className="mb-6">
              DeFi를 접하기 전부터 배제되는 구조적 불평등에 직면합니다.
            </p>
            
            <hr className="my-6 border-gray-300" />
            
            <h3 className="text-xl font-bold text-gray-800 mb-4">4. 결과적으로 나타나는 현상</h3>
            
            <p className="mb-4">
              이러한 개념의 복잡성, UI의 난해함, 언어 장벽이 결합되어
              DeFi는 "누구나 사용할 수 있는 금융"이 아니라
              소수의 기술 숙련자와 투자 경험이 풍부한 사용자만이 접근할 수 있는 금융으로 남아 있습니다.
            </p>
            
            <p>
              이는 DeFi 산업이 '기술적으로는 개방적이지만, 실질적으로는 폐쇄적'이라는 모순을 낳고 있으며,
              대중화(Mass Adoption)를 가로막는 근본적인 문제로 작용하고 있습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeFiComplexityModal;