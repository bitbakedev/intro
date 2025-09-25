import React from 'react';

interface ExitStrategyProps {
  exitStrategy: string;
}

const ExitStrategy: React.FC<ExitStrategyProps> = ({ exitStrategy }) => {
  return (
    <div className="prose prose-lg max-w-none">
      <div className="text-base leading-relaxed whitespace-pre-line">
        {exitStrategy}
      </div>
    </div>
  );
};

export default ExitStrategy;