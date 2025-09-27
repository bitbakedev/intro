import React from 'react';

const ExitStrategy: React.FC = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">출구 전략별 예상 수익률 (Seed Round 투자 기준)</h2>
      
      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-50">
              <th className="border border-gray-300 px-3 py-3 text-left font-semibold text-gray-800" style={{width: '12%'}}>출구 전략</th>
              <th className="border border-gray-300 px-3 py-3 text-left font-semibold text-gray-800" style={{width: '15%'}}>시기</th>
              <th className="border border-gray-300 px-3 py-3 text-left font-semibold text-gray-800" style={{width: '20%'}}>밸류에이션 (수익률)</th>
              <th className="border border-gray-300 px-3 py-3 text-left font-semibold text-gray-800" style={{width: '53%'}}>설명</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-3 py-3 font-medium text-gray-800 align-top">Series A</td>
              <td className="border border-gray-300 px-3 py-3 text-gray-700 align-top">2026 Q3~Q4</td>
              <td className="border border-gray-300 px-3 py-3 text-gray-700 align-top">200~300억원 (12~19배)</td>
              <td className="border border-gray-300 px-3 py-3 text-gray-700 text-sm align-top">벨류에이션 200~300억원 목표로 Seed Round 투자 대비 15~20배 수준의 수익률을 기대할 수 있습니다. 이는 연매출 80억, 순이익 5억 달성을 조건으로 합니다. Series A 투자 유치시 투자자에게 구주 매각을 통해 Exit이 가능할 것으로 예상됩니다.</td>
            </tr>
            <tr className="bg-gray-25">
              <td className="border border-gray-300 px-3 py-3 font-medium text-gray-800 align-top">Series B</td>
              <td className="border border-gray-300 px-3 py-3 text-gray-700 align-top">2027~2028</td>
              <td className="border border-gray-300 px-3 py-3 text-gray-700 align-top">1,000억원 (62.5배)</td>
              <td className="border border-gray-300 px-3 py-3 text-gray-700 text-sm align-top">밸류에이션 1,000억원을 목표로 하며, Seed 투자자는 70~80배의 수익률을 기대할 수 있습니다. 이 단계에서는 대형 VC나 재단들의 투자를 유치하여 글로벌 확장을 본격화할 예정입니다.</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-3 py-3 font-medium text-gray-800 align-top">M&A</td>
              <td className="border border-gray-300 px-3 py-3 text-gray-700 align-top">2027~2029</td>
              <td className="border border-gray-300 px-3 py-3 text-gray-700 align-top">500~2,000억원 (30~125배)</td>
              <td className="border border-gray-300 px-3 py-3 text-gray-700 text-sm align-top">밸류에이션 500-2,000억원 규모의 M&A를 통해 50-160배의 수익률을 달성할 수 있습니다. 토스, 카카오, 네이버 등이 잠재적인 인수사로 예상되며, 이들은 비트베이크의 Web3 기술력과 사용자 기반에 높은 가치를 부여할 것으로 전망됩니다.</td>
            </tr>
            <tr className="bg-gray-25">
              <td className="border border-gray-300 px-3 py-3 font-medium text-gray-800 align-top">기타 방안</td>
              <td className="border border-gray-300 px-3 py-3 text-gray-700 align-top">조건 달성시</td>
              <td className="border border-gray-300 px-3 py-3 text-gray-700 align-top">협의</td>
              <td className="border border-gray-300 px-3 py-3 text-gray-700 text-sm align-top">회사가 일정 수준 이상의 영업이익(예: 연간 50억 이상 영업이익)을 달성하면, Seed 투자자의 지분을 사전에 약정된 가격(예: 투자액 대비 5배 가치)으로 되사줄 수 있는 옵션을 부여하는 것도 가능하며, <br/>장기적으로는 IPO를 통해 증시에 상장 후 투자금을 회수하는 방안도 존재합니다.</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-6 mt-8">투자자 보호</h2>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        Anti-dilution 조항을 통해 후속 투자 라운드에서의 지분 희석을 방지하고, 
        Liquidation Preference를 통해 청산 시 우선권을 보장합니다. 
        또한 분기별 사업 현황 보고를 통해 투자자들에게 정기적으로 회사의 성과와 
        전략적 방향성을 공유할 예정입니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed">
        비트베이크는 향후 시리즈 투자, M&A, IPO 등 주요 자금 조달 및 Exit 전략에 대해 항상 투자자와 적극적으로 협의하며, 모든 의사결정 과정에서 주주의 이익을 최우선으로 고려할 것입니다.
      </p>
    </div>
  );
};

export default ExitStrategy;