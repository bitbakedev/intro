import React from 'react';

interface MarketingStrategyProps {
  marketingStrategy: string;
}

const MarketingStrategy: React.FC<MarketingStrategyProps> = ({ marketingStrategy }) => {
  return (
    <div className="prose prose-lg max-w-none">
      <div className="text-base leading-relaxed whitespace-pre-line">
        {marketingStrategy}
      </div>
    </div>
  );
};

export default MarketingStrategy;