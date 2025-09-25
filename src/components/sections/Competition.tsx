import React from 'react';

interface CompetitionProps {
  competition: string;
}

const Competition: React.FC<CompetitionProps> = ({ competition }) => {
  return (
    <div className="prose prose-lg max-w-none">
      <div className="text-base leading-relaxed whitespace-pre-line">
        {competition}
      </div>
    </div>
  );
};

export default Competition;