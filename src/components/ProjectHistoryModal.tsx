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
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
            
            <div className="space-y-8">
              {/* 2025 */}
              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-16 text-left">
                  <div className="text-lg font-bold text-black mb-2">2025</div>
                  <div className="w-4 h-4 bg-black rounded-full"></div>
                </div>
                <div className="ml-6 flex-1">
                  <h4 className="font-semibold text-gray-800 mb-2">Liquid Staking Protocol 구축</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    <a href="https://www.verb.finance/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                      https://www.verb.finance/
                    </a>
                  </p>
                  <span className="text-gray-500 text-sm">Chiliz</span>
                </div>
              </div>
              
              {/* 2024 */}
              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-16 text-left">
                  <div className="text-lg font-bold text-black mb-2">2024</div>
                  <div className="w-4 h-4 bg-black rounded-full"></div>
                </div>
                <div className="ml-6 flex-1 space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">블록체인 기반 투표 시스템 구축</h4>
                    <p className="text-gray-600 text-sm mb-1">
                      <a href="https://p.bitboard.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                        https://p.bitboard.in/
                      </a>
                    </p>
                    <span className="text-gray-500 text-sm">Polygon</span>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">탈중앙화 거래소 구축</h4>
                    <p className="text-gray-600 text-sm mb-1">
                      <a href="https://app.fanx.xyz/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                        https://app.fanx.xyz/
                      </a>
                    </p>
                    <span className="text-gray-500 text-sm">Chiliz</span>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">밈코인 런치패드 구축</h4>
                    <p className="text-gray-600 text-sm mb-1">
                      <a href="https://launchpad.etcswap.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                        https://launchpad.etcswap.org/
                      </a>
                    </p>
                    <span className="text-gray-500 text-sm">Ethereum Classic</span>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">밈코인 런치패드 구축</h4>
                    <span className="text-gray-500 text-sm">MODE</span>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">밈코인 런치패드 구축</h4>
                    <p className="text-gray-600 text-sm mb-1">
                      <a href="https://carrot-fi.xyz/launchpad" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                        https://carrot-fi.xyz/launchpad
                      </a>
                    </p>
                    <span className="text-gray-500 text-sm">Neo X</span>
                  </div>
                </div>
              </div>
              
              {/* 2023 */}
              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-16 text-left">
                  <div className="text-lg font-bold text-black mb-2">2023</div>
                  <div className="w-4 h-4 bg-black rounded-full"></div>
                </div>
                <div className="ml-6 flex-1">
                  <h4 className="font-semibold text-gray-800 mb-2">탈중앙화 거래소 구축</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    <a href="https://carrot-fi.xyz/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                      https://carrot-fi.xyz/
                    </a>
                  </p>
                  <span className="text-gray-500 text-sm">Neo X</span>
                </div>
              </div>
              
              {/* 2022 */}
              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-16 text-left">
                  <div className="text-lg font-bold text-black mb-2">2022</div>
                  <div className="w-4 h-4 bg-black rounded-full"></div>
                </div>
                <div className="ml-6 flex-1 space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">크로스체인 담보대출 플랫폼 구축</h4>
                    <span className="text-gray-500 text-sm">Zeta</span>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">담보대출 플랫폼 구축</h4>
                    <span className="text-gray-500 text-sm">Neo</span>
                  </div>
                </div>
              </div>
              
              {/* 2021 */}
              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-16 text-left">
                  <div className="text-lg font-bold text-black mb-2">2021</div>
                  <div className="w-4 h-4 bg-black rounded-full"></div>
                </div>
                <div className="ml-6 flex-1">
                  <h4 className="font-semibold text-gray-800 mb-2">NFT 조각화 플랫폼 구축</h4>
                  <span className="text-gray-500 text-sm">Ethereum</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHistoryModal;