import React, { ReactNode } from 'react';

interface ProposalSectionProps {
  title: string;
  children: ReactNode;
  pageBreak?: boolean;
  className?: string;
}

const ProposalSection: React.FC<ProposalSectionProps> = ({
  title,
  children,
  pageBreak = false,
  className = '',
}) => {
  return (
    <section
      className={`
        w-full max-w-4xl mx-auto bg-white p-8 mb-8
        ${pageBreak ? 'break-before-page' : ''}
        print:break-before-page print:mb-0 print:shadow-none
        shadow-lg rounded-lg
        ${className}
      `}
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
        {title}
      </h2>
      <div className="text-gray-700 leading-relaxed">
        {children}
      </div>
    </section>
  );
};

export default ProposalSection;