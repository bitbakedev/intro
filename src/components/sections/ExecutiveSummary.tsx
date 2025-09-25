import React from 'react';
import { TrendingUp, Users, DollarSign } from 'lucide-react';
import { Achievement } from '../../types/proposal';

interface ExecutiveSummaryProps {
  executiveSummary: string;
  achievements: Achievement[];
}

const ExecutiveSummary: React.FC<ExecutiveSummaryProps> = ({
  executiveSummary,
  achievements
}) => {
  return (
    <div className="prose prose-lg max-w-none">
      <div className="text-lg leading-relaxed whitespace-pre-line mb-8">
        {executiveSummary}
      </div>
      
      <div className="grid grid-cols-3 gap-6">
        <div className="text-center p-6 bg-gray-50 rounded-lg">
          <TrendingUp className="w-8 h-8 mx-auto mb-3 text-gray-600" />
          <h4 className="text-2xl font-bold mb-2">53.8%</h4>
          <p className="text-gray-700">글로벌 DeFi 연간 성장률</p>
        </div>
        <div className="text-center p-6 bg-gray-50 rounded-lg">
          <Users className="w-8 h-8 mx-auto mb-3 text-gray-600" />
          <h4 className="text-2xl font-bold mb-2">3,200만</h4>
          <p className="text-gray-700">한국 리워드 앱 사용자</p>
        </div>
        <div className="text-center p-6 bg-gray-50 rounded-lg">
          <DollarSign className="w-8 h-8 mx-auto mb-3 text-gray-600" />
          <h4 className="text-2xl font-bold mb-2">8조원</h4>
          <p className="text-gray-700">한국 기프트카드 시장</p>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveSummary;