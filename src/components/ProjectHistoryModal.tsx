import React from 'react';
import { X } from 'lucide-react';

interface ProjectHistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProjectHistoryModal: React.FC<ProjectHistoryModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-800">주요 프로젝트 구축 경험</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start space-x-3">
              <span className="font-bold text-blue-600 min-w-[60px]">2025</span>
              <div>
                <span>Liquid Staking Protocol 구축 (</span>
                <a href="https://www.verb.finance/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                  https://www.verb.finance/
                </a>
                <span>) | Chiliz</span>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <span className="font-bold text-blue-600 min-w-[60px]">2024</span>
              <div>
                <span>블록체인 기반 투표 시스템 구축 (</span>
                <a href="https://p.bitboard.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                  https://p.bitboard.in/
                </a>
                <span>) | Polygon</span>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <span className="font-bold text-blue-600 min-w-[60px]">2024</span>
              <div>
                <span>탈중앙화 거래소 구축 (</span>
                <a href="https://app.fanx.xyz/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                  https://app.fanx.xyz/
                </a>
                <span>) | Chiliz</span>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <span className="font-bold text-blue-600 min-w-[60px]">2024</span>
              <div>
                <span>밈코인 런치패드 구축 (</span>
                <a href="https://launchpad.etcswap.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                  https://launchpad.etcswap.org/
                </a>
                <span>) | Ethereum Classic</span>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <span className="font-bold text-blue-600 min-w-[60px]">2024</span>
              <div>밈코인 런치패드 구축 | MODE</div>
            </div>
            
            <div className="flex items-start space-x-3">
              <span className="font-bold text-blue-600 min-w-[60px]">2024</span>
              <div>
                <span>밈코인 런치패드 구축 (</span>
                <a href="https://carrot-fi.xyz/launchpad" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                  https://carrot-fi.xyz/launchpad
                </a>
                <span>) | Neo X</span>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <span className="font-bold text-blue-600 min-w-[60px]">2023</span>
              <div>
                <span>탈중앙화 거래소 구축 (</span>
                <a href="https://carrot-fi.xyz/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                  https://carrot-fi.xyz/
                </a>
                <span>) | Neo X</span>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <span className="font-bold text-blue-600 min-w-[60px]">2022</span>
              <div>크로스체인 담보대출 플랫폼 구축 | Zeta</div>
            </div>
            
            <div className="flex items-start space-x-3">
              <span className="font-bold text-blue-600 min-w-[60px]">2022</span>
              <div>담보대출 플랫폼 구축 | Neo</div>
            </div>
            
            <div className="flex items-start space-x-3">
              <span className="font-bold text-blue-600 min-w-[60px]">2021</span>
              <div>NFT 조각화 플랫폼 구축 | Ethereum</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHistoryModal;