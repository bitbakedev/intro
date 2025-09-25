import React from 'react';

interface VisionProps {
  vision: string;
}

const Vision: React.FC<VisionProps> = ({ vision }) => {
  return (
    <div className="prose prose-lg max-w-none">
      <div className="text-base leading-relaxed whitespace-pre-line">
        {vision}
      </div>
    </div>
  );
};

export default Vision;