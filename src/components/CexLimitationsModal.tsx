import React from 'react';
import { X } from 'lucide-react';

interface CexLimitationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CexLimitationsModal: React.FC<CexLimitationsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-800">중앙화 거래소의 구조적 한계와 DeFi 연계 불가능성</h2>
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
              업비트, 빗썸 등 중앙화 거래소(Centralized Exchange, CEX)는 암호화폐 거래의 주요 관문이지만,
              DeFi(탈중앙화 금융)와는 구조적으로 정반대의 운영 방식을 가지고 있습니다.
              그 결과, 중앙화 거래소는 DeFi와 직접 연동하거나 사용자의 자산을 활용한 DeFi 서비스를 제공할 수 없습니다.
            </p>
            
            <hr className="my-6 border-gray-300" />
            
            <h3 className="text-xl font-bold text-gray-800 mb-4">1. 자산 보관 방식의 근본적 차이</h3>
            
            <p className="mb-4">
              중앙화 거래소는 이용자의 자산을 직접 보관(Custody) 합니다.
              모든 거래가 거래소의 내부 서버(DB)에서 처리되며, 실제 블록체인 상의 트랜잭션은 발생하지 않습니다.
            </p>
            
            <ul className="space-y-2 mb-4 ml-4">
              <li>• 사용자는 실질적으로 "코인을 소유"하는 것이 아니라, 거래소의 "내부 장부에 기록된 잔액"을 보유하는 것에 불과합니다.</li>
              <li>• 따라서 거래소는 사용자의 자산을 DeFi 프로토콜에 예치하거나 운용할 수 없습니다.</li>
              <li>• 이는 법적으로 무단 운용(Misappropriation)으로 간주될 수 있으며, 금융 규제 위반 소지가 있습니다.</li>
            </ul>
            
            <p className="mb-6">
              반면, DeFi는 사용자가 직접 지갑을 소유하고 스마트컨트랙트를 통해 자산을 관리합니다.
            </p>
            
            <hr className="my-6 border-gray-300" />
            
            <h3 className="text-xl font-bold text-gray-800 mb-4">2. 법적·규제 리스크</h3>
            
            <p className="mb-4">
              국내 거래소들은 금융감독원 및 FIU(금융정보분석원)의 감독 하에 있으며,
              고객 자산의 외부 이동은 원칙적으로 제한됩니다.
            </p>
            
            <ul className="space-y-2 mb-4 ml-4">
              <li>• 외부의 DeFi 프로토콜은 대부분 비인가 서비스로 분류되며, 자산을 예치할 경우 소비자 보호 책임과 손실 책임이 거래소에 귀속될 수 있습니다.</li>
              <li>• 또한 "해킹, 프로토콜 오류, 운영자 부재" 등 DeFi 특유의 리스크를 거래소가 감당할 방법이 없습니다.</li>
            </ul>
            
            <p className="mb-6">
              이 때문에 CEX는 법적으로도 DeFi 통합이 금지된 구조입니다.
            </p>
            
            <hr className="my-6 border-gray-300" />
            
            <h3 className="text-xl font-bold text-gray-800 mb-4">3. 기술적·운영적 제약</h3>
            
            <p className="mb-4">
              DeFi는 블록체인 위에서 실행되는 스마트컨트랙트 기반 시스템입니다.
              그러나 중앙화 거래소는 폐쇄형 서버 환경에서 거래를 처리하기 때문에
              스마트컨트랙트와 직접 상호작용할 수 없습니다.
            </p>
            
            <ul className="space-y-2 mb-4 ml-4">
              <li>• 거래소의 모든 주문, 매칭, 결제는 내부 DB에서 수행됩니다.</li>
              <li>• 블록체인 네트워크와 연결되어 있지 않기 때문에, DeFi 프로토콜과의 통합은 불가능합니다.</li>
              <li>• 또한 기술 구조상, 지갑 서명·체인 전환·가스비 처리 등 DeFi 핵심 기능을 지원할 수 없습니다.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CexLimitationsModal;