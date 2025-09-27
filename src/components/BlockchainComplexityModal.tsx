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
              현재 전세계에는 수십 가지의 블록체인이 있습니다. 
              (예: 이더리움, 솔라나, 폴리곤, 바이낸스, 네오 등)
            </p>
            
            <p className="mb-6">
              그리고 이 블록체인 위에는 <strong>수백 개의 '돈을 맡기고 이자를 받는 서비스(DeFi)'</strong>가 각각 따로 운영되고 있습니다.<br/>
              겉으로 보기엔 다양하고 선택의 폭이 넓어 보이지만, 실제로는 일반 사람들에게는 너무 복잡한 구조입니다.
            </p>
            
            <hr className="my-6 border-gray-300" />
            
            <div className="space-y-4 mb-6">
              <div>
                <p className="font-semibold text-gray-800 mb-2">1. 블록체인마다 언어가 다릅니다.</p>
                <p className="text-gray-700 ml-4">
                  마치 나라별로 말이 다른 것처럼, 이더리움은 '솔리디티', 솔라나는 '러스트'라는 언어를 사용합니다. 
                  그래서 개발자들은 각각의 블록체인에 맞춰 따로따로 만들어야 합니다.
                </p>
              </div>
              
              <div>
                <p className="font-semibold text-gray-800 mb-2">2. 규칙과 속도도 다릅니다.</p>
                <p className="text-gray-700 ml-4">
                  어떤 블록체인은 빠르지만 수수료가 비싸고, 어떤 블록체인은 느리지만 안정적입니다. 즉, 같은 일을 하더라도 블록체인마다 조건이 전부 다릅니다.
                </p>
              </div>
              
              <div>
                <p className="font-semibold text-gray-800 mb-2">3. 쓰는 돈의 종류도 다릅니다.</p>
                <p className="text-gray-700 ml-4">
                  이더리움은 ETH, 솔라나는 SOL, 네오는 GAS를 사용합니다. 마치 나라가 다르면 화폐가 다른 것처럼,  블록체인마다 기본 화폐가 제각각입니다.
                </p>
              </div>
            </div>
            
            <hr className="my-6 border-gray-300" />
            
            <h3 className="text-lg font-semibold text-gray-800 mb-4">결국 사용자 입장에서는</h3>
            
            <p className="mb-4">
              일반 사용자가 어떤 블록체인을 써야 하는지, 어떤 서비스가 더 유리한지를 스스로 판단하기는 거의 불가능합니다.<br/>
              예를 들어,
            </p>
            
            <ul className="space-y-2 mb-4 ml-4">
              <li>• 이자를 더 많이 주는 곳이 어디인지,</li>
              <li>• 수수료가 싼 곳이 어디인지,</li>
              <li>• 이 서비스를 쓰려면 어떤 블록체인을 선택해야 하는지조차 알기 어렵습니다.</li>
            </ul>
            
            <p>
              이런 복잡함 때문에 블록체인을 잘 모르는 사람은 시작조차 하기 어려운 구조가 되어버렸습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockchainComplexityModal;