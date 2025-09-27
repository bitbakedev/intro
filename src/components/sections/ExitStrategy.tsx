import React from 'react';

const ExitStrategy: React.FC = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">출구 전략별 예상 수익률 (Seed 투자 기준)</h2>
      
      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-50">
              <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">출구 전략</th>
              <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">시기</th>
              <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">밸류에이션</th>
              <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">수익률</th>
              <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">조건/특징</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-3 font-medium text-gray-800">Series A</td>
              <td className="border border-gray-300 px-4 py-3 text-gray-700">2026 Q3~Q4</td>
              <td className="border border-gray-300 px-4 py-3 text-gray-700">200~300억원</td>
              <td className="border border-gray-300 px-4 py-3 text-gray-700">15~20배</td>
              <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm">연매출 80억, 순이익 5억 달성<br/>구주 매각을 통한 Exit 가능</td>
            </tr>
            <tr className="bg-gray-25">
              <td className="border border-gray-300 px-4 py-3 font-medium text-gray-800">Series B</td>
              <td className="border border-gray-300 px-4 py-3 text-gray-700">2027~2028</td>
              <td className="border border-gray-300 px-4 py-3 text-gray-700">1,000억원</td>
              <td className="border border-gray-300 px-4 py-3 text-gray-700">70~80배</td>
              <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm">대형 PE, 글로벌 헤지펀드 투자<br/>글로벌 확장 본격화</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3 font-medium text-gray-800">M&A</td>
              <td className="border border-gray-300 px-4 py-3 text-gray-700">2027~2029</td>
              <td className="border border-gray-300 px-4 py-3 text-gray-700">500~2,000억원</td>
              <td className="border border-gray-300 px-4 py-3 text-gray-700">50~160배</td>
              <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm">토스, 카카오, 네이버 등<br/>Web3 기술력과 사용자 기반 가치</td>
            </tr>
            <tr className="bg-gray-25">
              <td className="border border-gray-300 px-4 py-3 font-medium text-gray-800">기타 방안</td>
              <td className="border border-gray-300 px-4 py-3 text-gray-700">조건 달성시</td>
              <td className="border border-gray-300 px-4 py-3 text-gray-700">협의</td>
              <td className="border border-gray-300 px-4 py-3 text-gray-700">5배+</td>
              <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm">연간 50억 이상 영업이익 달성시<br/>사전 약정 가격으로 지분 매입<br/>장기적 IPO 가능</td>
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