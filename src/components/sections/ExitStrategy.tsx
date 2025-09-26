import React from 'react';

const ExitStrategy: React.FC = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">출구 전략별 예상 수익률 (Seed 투자 기준)</h2>
      
      <h3 className="text-xl font-semibold text-gray-700 mb-4">Series A (2026 Q3)</h3>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        벨류에이션 200~300억원 목표로 Seed Round 투자 대비 15~20배 수준의 수익률을 기대할 수 있습니다. 
        이는 연매출 80억, 순이익 5억 달성을 조건으로 합니다. Series A 투자 유치시 투자자에게 구주 매각을 통해 Exit 이 가능할것으로 예상됩니다.
      </p>
      
      <h3 className="text-xl font-semibold text-gray-700 mb-4 mt-8">Series B (2027-2028)</h3>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        밸류에이션 1,000억원을 목표로 하며, Seed 투자자는 70~80배의 수익률을 기대할 수 있습니다. 
        이 단계에서는 대형 PE나 글로벌 헤지펀드의 투자를 유치하여 글로벌 확장을 본격화할 예정입니다.
      </p>
      
      <h3 className="text-xl font-semibold text-gray-700 mb-4 mt-8">M&A (2027-2029)</h3>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        밸류에이션 500-2,000억원 규모의 M&A를 통해 50-160배의 수익률을 달성할 수 있습니다. 
        토스, 카카오, 네이버 등이 잠재적인 인수사로 예상되며, 이들은 비트베이크의 
        Web3 기술력과 사용자 기반에 높은 가치를 부여할 것으로 전망됩니다.
      </p>
      
      <h3 className="text-xl font-semibold text-gray-700 mb-4 mt-8">이 외의 방안</h3>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        밸류에이션 500-2,000억원 규모의 M&A를 통해 50-160배의 수익률을 달성할 수 있습니다. 
        토스, 카카오, 네이버 등이 잠재적인 인수사로 예상되며, 이들은 비트베이크의 
        Web3 기술력과 사용자 기반에 높은 가치를 부여할 것으로 전망됩니다.
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
      
      <h2 className="text-2xl font-bold text-gray-800 mb-6 mt-8">전략적 투자자 확보</h2>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        비트베이크는 이미 글로벌 블록체인 생태계에서 중요한 전략적 파트너십을 구축하고 있습니다. 
        특히 <strong>Neo 재단</strong>은 비트베이크가 성과를 달성할 경우 투자 의향을 공식적으로 밝힌 바 있어, 
        후속 투자 라운드에서 유리한 조건으로 자금을 조달할 수 있는 기반을 마련했습니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-6">
        이러한 전략적 투자자의 사전 관심 표명은 단순한 자금 조달을 넘어서 글로벌 Web3 생태계로의 
        확장과 기술적 협업을 통한 시너지 창출을 가능하게 합니다. Neo와 같은 검증된 블록체인 플랫폼과의 
        파트너십은 비트베이크의 기술적 신뢰성을 높이고, 글로벌 시장 진출을 가속화하는 중요한 자산이 될 것입니다.
      </p>
    </div>
  );
};

export default ExitStrategy;