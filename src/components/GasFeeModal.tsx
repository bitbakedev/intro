import React from 'react';
import { X } from 'lucide-react';

interface GasFeeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GasFeeModal: React.FC<GasFeeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-800">왜 '가스비 대납'이 필요한가</h2>
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
              블록체인 서비스는 크게 수탁형과 비수탁형으로 나눌 수 있습니다.
            </p>
            
            <ul className="space-y-2 mb-6 ml-4">
              <li>• <strong>수탁형 서비스</strong>는 중앙 서버가 사용자의 자산을 대신 관리합니다.</li>
              <li>• <strong>비수탁형 서비스</strong>는 사용자가 직접 지갑을 가지고, 본인이 승인해야 거래가 이루어집니다.</li>
            </ul>
            
            <p className="mb-6">
              비트베이크는 한국 법을 준수하기 위해 비수탁형으로 운영되고 있습니다.<br/>
              비수탁형은 훨씬 투명하고 안전하지만, 한 가지 큰 불편함이 있습니다.<br/>
              바로 모든 거래를 실행할 때마다 '가스비'라는 수수료를 내야 한다는 점입니다.
            </p>
            
            <hr className="my-6 border-gray-300" />
            
            <h3 className="text-xl font-bold text-gray-800 mb-4">가스비란?</h3>
            
            <p className="mb-4">
              블록체인에서 거래(트랜잭션)를 할 때는 '가스비'라는 일종의 수수료가 필요합니다.<br/>
              이 수수료는 거래를 처리해주는 네트워크 참여자들에게 지급됩니다.
            </p>
            
            <p className="mb-4">
              문제는 이 가스비가 블록체인마다 다르다는 것입니다.
            </p>
            
            <ul className="space-y-1 mb-6 ml-4">
              <li>• 이더리움에서는 ETH,</li>
              <li>• 솔라나에서는 SOL,</li>
              <li>• 네오에서는 GAS 같은 식으로,</li>
            </ul>
            
            <p className="mb-6">
              각 블록체인마다 가스비로 쓰이는 코인의 종류가 모두 다릅니다.
            </p>
            
            <hr className="my-6 border-gray-300" />
            
            <h3 className="text-xl font-bold text-gray-800 mb-4">사용자가 직접 가스비를 준비해야 하는 불편함</h3>
            
            <p className="mb-4">
              비수탁형 서비스에서는 거래가 일어날 때마다<br/>
              사용자의 지갑에서 직접 가스비가 빠져나갑니다.<br/>
              따라서 사용자는
            </p>
            
            <ol className="space-y-1 mb-4 ml-4">
              <li>1. 거래소에서 해당 코인을 구매하고,</li>
              <li>2. 자신의 지갑으로 보내고,</li>
              <li>3. 충분한 양의 가스비를 미리 충전해둬야 합니다.</li>
            </ol>
            
            <p className="mb-6">
              하지만 대부분의 일반 사용자는<br/>
              "가스비가 뭔지", "어떤 코인을 사야 하는지", "어디서 충전해야 하는지"조차 모릅니다.<br/>
              이 때문에 비수탁형 서비스의 진입장벽이 높아지고,<br/>
              "그냥 포기하거나 탈중앙화 서비스를 이용하지 않는 사용자"가 많습니다.
            </p>
            
            <hr className="my-6 border-gray-300" />
            
            <h3 className="text-xl font-bold text-gray-800 mb-4">그래서 '가스비 대납'이 필요하다</h3>
            
            <p className="mb-4">
              가스비 대납은 사용자가 이런 과정을 전혀 신경 쓰지 않아도 되게 만드는 방식입니다.<br/>
              즉,
            </p>
            
            <ul className="space-y-1 mb-6 ml-4">
              <li>• 사용자가 버튼만 누르면,</li>
              <li>• 서비스가 대신 가스비를 내주고,</li>
              <li>• 사용자는 마치 일반 앱처럼 간편하게 이용할 수 있습니다.</li>
            </ul>
            
            <p>
              이 방식은 사용자가 블록체인을 잘 몰라도 자연스럽게 서비스를 사용할 수 있게 만들고,<br/>
              비수탁형 서비스의 진입장벽을 크게 낮춰줍니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GasFeeModal;