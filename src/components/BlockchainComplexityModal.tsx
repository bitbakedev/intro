import React from 'react';
import { X } from 'lucide-react';

interface BlockchainComplexityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BlockchainComplexityModal: React.FC<BlockchainComplexityModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-800">블록체인 생태계의 복잡성</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="text-gray-700 leading-relaxed">
            <p className="mb-4">
              블록체인 생태계는 겉으로 보기엔 "암호화폐를 예치하고 이자를 받는 서비스"처럼 단순해 보이지만, 
              실제로는 매우 복잡한 구조를 가지고 있습니다.
            </p>
            
            <p className="mb-4">
              현재 세상에는 수십 가지의 블록체인(예: 이더리움, 솔라나, 폴리곤, 바이낸스, 네오 등)이 존재하고, 
              이 위에서 수백 개의 DeFi(탈중앙화 금융) 서비스가 각각 독립적으로 운영되고 있습니다.
            </p>
            
            <p className="mb-4">
              문제는 각 블록체인이 완전히 다른 언어와 규칙을 사용한다는 점입니다.
            </p>
            
            <p className="mb-2 font-semibold">예를 들어:</p>
            <ul className="space-y-2 mb-6 ml-4">
              <li>• 사용하는 프로그래밍 언어가 다릅니다. (이더리움은 Solidity, 솔라나는 Rust)</li>
              <li>• 거래 속도(TPS)와 수수료 구조도 제각각입니다.</li>
              <li>• 사용하는 기축 코인도 다릅니다. (이더리움은 ETH, 솔라나는 SOL, 네오는 GAS)</li>
              <li>• 어떤 블록체인은 특정 국가에 인프라가 집중되어 있고, 어떤 블록체인은 완전히 분산되어 있습니다.</li>
            </ul>
            
            <p className="mb-4">
              이런 복잡성 때문에 일반 사용자가 직접 최적의 블록체인과 DeFi 서비스를 선택하는 것은 거의 불가능합니다. 
              비트베이크는 이 모든 복잡성을 자동화하여 사용자에게는 단순한 경험만을 제공합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockchainComplexityModal;