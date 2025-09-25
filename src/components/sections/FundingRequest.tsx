import React from 'react';
import { FundingRequest as FundingRequestType } from '../../types/proposal';
import FundingBreakdown from '../FundingBreakdown';

interface FundingRequestProps {
  fundingRequest: FundingRequestType;
}

const FundingRequest: React.FC<FundingRequestProps> = ({ fundingRequest }) => {
  return (
    <div>
      <FundingBreakdown fundingRequest={fundingRequest} />
      
      <div className="mt-8 bg-gray-50 p-6 rounded-lg">
        <h4 className="text-xl font-semibold text-gray-800 mb-4">투자자 혜택</h4>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h5 className="font-semibold text-gray-800 mb-2">지분 및 권리</h5>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• 투자 금액에 따른 지분 제공</li>
              <li>• 이사진 참여 권한</li>
              <li>• 청산 시 우선권 보장</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-800 mb-2">정보 제공</h5>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• 정기적인 사업 보고서</li>
              <li>• 재무 정보 제공</li>
              <li>• 전략적 의사결정 참여</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundingRequest;