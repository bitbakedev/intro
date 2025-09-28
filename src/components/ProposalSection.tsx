import React, { ReactNode } from 'react';

interface ProposalSectionProps {
  title: string | React.ReactNode;
  children: ReactNode;
  pageBreak?: boolean;
  className?: string;
  id?: string;
}

const ProposalSection: React.FC<ProposalSectionProps> = ({
  title,
  children,
  pageBreak = false,
  className = '',
  id,
}) => {
  return (
    <section
      id={id}
      className={`
        w-full max-w-4xl mx-auto bg-white p-3 sm:p-6 mb-4 sm:mb-8
        ${pageBreak ? 'break-before-page' : ''}
        print:break-before-page print:mb-0 print:shadow-none
        shadow-lg rounded-lg
        ${className}
      `}
    >
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 border-b-2 border-blue-600 pb-2 sm:pb-3 break-words">
        {title}
      </h2>
      <div className="text-gray-700 leading-relaxed text-sm sm:text-base break-words overflow-wrap-anywhere">
        {children}
      </div>
    </section>
  );
};

export default ProposalSection;