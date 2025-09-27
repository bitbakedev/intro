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
          <div className="space-y-6 text-sm">
            <div>
              <h5 className="font-semibold text-gray-800 mb-2">2025년</h5>
              <ul className="space-y-1 text-gray-600">
                <li>• Liquid Staking Protocol 구축 - <a href="https://www.verb.finance/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">https://www.verb.finance/</a> (Chiliz)</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-gray-800 mb-2">2024년</h5>
              <ul className="space-y-1 text-gray-600">
                <li>• 블록체인 기반 투표 시스템 구축 - <a href="https://p.bitboard.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">https://p.bitboard.in/</a> (Polygon)</li>
                <li>• 탈중앙화 거래소 구축 - <a href="https://app.fanx.xyz/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">https://app.fanx.xyz/</a> (Chiliz)</li>
                <li>• 밈코인 런치패드 구축 - <a href="https://launchpad.etcswap.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">https://launchpad.etcswap.org/</a> (Ethereum Classic)</li>
                <li>• 밈코인 런치패드 구축 (MODE)</li>
                <li>• 밈코인 런치패드 구축 - <a href="https://carrot-fi.xyz/launchpad" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">https://carrot-fi.xyz/launchpad</a> (Neo X)</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-gray-800 mb-2">2023년</h5>
              <ul className="space-y-1 text-gray-600">
                <li>• 탈중앙화 거래소 구축 - <a href="https://carrot-fi.xyz/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">https://carrot-fi.xyz/</a> (Neo X)</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-gray-800 mb-2">2022년</h5>
              <ul className="space-y-1 text-gray-600">
                <li>• 크로스체인 담보대출 플랫폼 구축 (Zeta)</li>
                <li>• 담보대출 플랫폼 구축 (Neo)</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-gray-800 mb-2">2021년</h5>
              <ul className="space-y-1 text-gray-600">
                <li>• NFT 조각화 플랫폼 구축 (Ethereum)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHistoryModal;