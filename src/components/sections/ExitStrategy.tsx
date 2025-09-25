import React from 'react';

const ExitStrategy: React.FC = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">출구 전략별 예상 수익률 (Seed 투자 기준)</h2>
      
      <h3 className="text-xl font-semibold text-gray-700 mb-4">Series A (2026 Q3)</h3>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        밸류에이션 1,000억원을 목표로 하며, Seed 투자자는 67배의 수익률을 기대할 수 있습니다. 
        이는 MAU 100만명과 월매출 15억원 달성을 조건으로 합니다. 현재 성장 궤도를 고려할 때 
        충분히 달성 가능한 목표입니다.
      </p>
      
      <h3 className="text-xl font-semibold text-gray-700 mb-4 mt-8">Series B (2027-2028)</h3>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        밸류에이션 5,000억원을 목표로 하며, Seed 투자자는 333배의 수익률을 기대할 수 있습니다. 
        이 단계에서는 대형 PE나 글로벌 헤지펀드의 투자를 유치하여 글로벌 확장을 본격화할 예정입니다.
      </p>
      
      <h3 className="text-xl font-semibold text-gray-700 mb-4 mt-8">M&A (2027-2029)</h3>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        밸류에이션 3,000-5,000억원 규모의 M&A를 통해 200-333배의 수익률을 달성할 수 있습니다. 
        토스, 카카오뱅크, Coinbase 등이 잠재적인 인수사로 예상되며, 이들은 비트베이크의 
        Web3 기술력과 사용자 기반에 높은 가치를 부여할 것으로 전망됩니다.
      </p>
      
      <h3 className="text-xl font-semibold text-gray-700 mb-4 mt-8">IPO (2028-2030)</h3>
      
      <p className="text-gray-700 leading-relaxed mb-6">
        밸류에이션 1조원 이상을 목표로 하며, Seed 투자자는 667배 이상의 수익률을 기대할 수 있습니다. 
        MAU 500만명과 연매출 1,000억원 달성을 조건으로 하며, 이는 Web3 대중화 플랫폼으로서의 
        독보적인 지위를 확립했을 때 가능한 시나리오입니다.
      </p>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-6 mt-8">투자자 보호</h2>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        Anti-dilution 조항을 통해 후속 투자 라운드에서의 지분 희석을 방지하고, 
        Liquidation Preference를 통해 청산 시 우선권을 보장합니다. 
        또한 분기별 사업 현황 보고를 통해 투자자들에게 정기적으로 회사의 성과와 
        전략적 방향성을 공유할 예정입니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed">
        이러한 투자자 보호 장치들은 투자 리스크를 최소화하면서도 
        회사의 성장 잠재력을 최대한 활용할 수 있도록 설계되었습니다.
      </p>
    </div>
  );
};

export default ExitStrategy;