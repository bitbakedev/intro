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
          <h2 className="text-2xl font-bold text-gray-800">2025년 Web3 개발자 연봉 현황</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">평균 연봉 수준</h3>
              <p className="text-blue-700 text-xl font-bold">
                $120,000 ~ $300,000
              </p>
              <p className="text-blue-600 text-sm mt-1">
                (한화 1.6억 ~ 4억 원 수준)
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">지급 방식</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• USDT 같은 달러 스테이블코인</li>
                  <li>• 프로젝트 토큰으로 지급</li>
                  <li>• 스톡옵션 형태 보상</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">세금 혜택</h4>
                <p className="text-sm text-gray-600">
                  스테이블코인 급여 지급 시 국가별 과세 규정이 불명확하여, 
                  일부 개발자들은 사실상 소득세를 내지 않는 경우도 존재
                </p>
              </div>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">국내 대비 차이</h4>
              <p className="text-red-700 text-sm">
                한국에서 연봉 1억을 제시받더라도, 실질적으로는 Web3 해외 프로젝트의 
                보상이 <strong>2~3배 이상 높게 체감</strong>될 수 있음
              </p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">근무 형태</h4>
              <p className="text-green-700 text-sm">
                <strong>리모트 근무가 기본</strong>이므로, 한국 거주자라도 영어만 가능하다면 
                글로벌 프로젝트 참여에 큰 제약이 없음
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalaryModal;