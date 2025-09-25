import React from 'react';

interface RisksProps {
  risks: string;
}

const Risks: React.FC<RisksProps> = ({ risks }) => {
  return (
    <div className="prose prose-lg max-w-none">
      <div className="text-base leading-relaxed whitespace-pre-line">
        {risks}
      </div>
    </div>
  );
};

export default Risks;