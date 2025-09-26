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
    </div>
  );
};

export default FundingRequest;