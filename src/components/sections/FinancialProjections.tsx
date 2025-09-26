import React from 'react';
import { FinancialData } from '../../types/proposal';

interface FinancialProjectionsProps {
  financialProjections: FinancialData[];
}

const FinancialProjections: React.FC<FinancialProjectionsProps> = ({ financialProjections }) => {
  return (
    <div>
      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-50">
              <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">기간</th>
              <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">매출</th>
              <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">순이익</th>
              <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">성장률</th>
              <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">MAU</th>
              <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">ARPU</th>
              <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">AUM</th>
            </tr>
          </thead>
          <tbody>
            {financialProjections.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-25'}>
                <td className="border border-gray-300 px-4 py-3 font-medium text-gray-800">{item.year}</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-700">{item.revenue}억원</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-700">{item.profit}억원</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-700">
                  {item.growth >= 0 ? '+' : ''}{item.growth}%
                </td>
                <td className="border border-gray-300 px-4 py-3 text-gray-700">{item.mau}</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-700">{item.arpu.toLocaleString()}원</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-700">{item.aum}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="text-gray-700 leading-relaxed">
        <p className="mb-4">
          위 재무 전망은 리워드 앱 시장의 성장 패턴과 비트베이크의 차별화된 DeFi 연계 모델을 바탕으로 산출되었습니다.
        </p>
        <p className="mb-4">
          특히 2026년 Q2부터는 광고 수익뿐만 아니라 암호화폐 스왑 수수료, 스테이킹 수익 수수료, 
          B2B 마케팅 수익이 본격적으로 기여하면서 기존 리워드 앱 대비 월등히 높은 수익성을 달성할 것으로 예상됩니다.
        </p>
        <p>
          AUM(관리 자산) 증가와 함께 수수료 기반 수익이 선형적으로 확대되어, 
          지속 가능한 성장 모델을 구축할 수 있을 것으로 전망됩니다.
        </p>
      </div>
    </div>
  );
};

export default FinancialProjections;