import React from 'react';
import { X } from 'lucide-react';

interface SalaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SalaryModal: React.FC<SalaryModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-800">2025 Web3 개발자 연봉, 근무환경 현황</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="text-gray-700 leading-relaxed">
            <ul className="space-y-3 text-sm">
              <li>• <strong>평균 연봉:</strong> 약 $120,000 ~ $300,000 (한화 1.6억 ~ 4억 원 수준)</li>
              <li>• <strong>지급 방식:</strong> USDT 같은 달러 스테이블코인이나 프로젝트 토큰으로 지급되는 경우가 많음</li>
              <li>• <strong>세금 혜택:</strong> 스테이블코인, 재단의 토큰으로 지급 시 국가별 과세 규정 적용이 불명확하여, 일부 개발자들은 사실상 소득세를 내지 않는 경우도 존재</li>
              <li>• <strong>스톡옵션:</strong> 프로젝트 재단 토큰을 스톡옵션 형태로 보상받는 구조도 흔함</li>
              <li>• <strong>근무 형태:</strong> 리모트 근무가 기본이므로, 한국 거주자라도 영어만 가능하다면 글로벌 프로젝트 참여에 큰 제약이 없음</li>
            </ul>
          </div>
        </div>
        
            한국에서 연봉 1억을 제시받더라도, 실질적으로는 해외 프로젝트의 보상이 2~3배 이상 높게 체감되는 상황
      </div>
    </div>
  );
};

export default SalaryModal;