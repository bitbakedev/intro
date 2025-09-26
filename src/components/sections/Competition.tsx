import React from 'react';

const Competition: React.FC = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">리워드 앱 경쟁사 비교</h2>
      
      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-50">
              <th className="border border-gray-300 px-2 py-2 text-left font-semibold text-gray-800">회사명</th>
              <th className="border border-gray-300 px-2 py-2 text-left font-semibold text-gray-800">서비스</th>
              <th className="border border-gray-300 px-2 py-2 text-left font-semibold text-gray-800">MAU</th>
              <th className="border border-gray-300 px-2 py-2 text-left font-semibold text-gray-800">기업가치/시가총액</th>
              <th className="border border-gray-300 px-2 py-2 text-left font-semibold text-gray-800">연 매출</th>
              <th className="border border-gray-300 px-2 py-2 text-left font-semibold text-gray-800">특징</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-2 py-2 font-medium text-gray-800">넛지헬스케어</td>
              <td className="border border-gray-300 px-2 py-2 text-gray-700">캐시워크</td>
              <td className="border border-gray-300 px-2 py-2 text-gray-700">450만 명</td>
              <td className="border border-gray-300 px-2 py-2 text-gray-700">3,000억 원</td>
              <td className="border border-gray-300 px-2 py-2 text-gray-700">1,181억 원</td>
              <td className="border border-gray-300 px-2 py-2 text-gray-700 text-sm">헬스케어·웰니스 중심, 금융·DeFi 확장성 제한적</td>
            </tr>
            <tr className="bg-gray-25">
              <td className="border border-gray-300 px-2 py-2 font-medium text-gray-800">엔비티</td>
              <td className="border border-gray-300 px-2 py-2 text-gray-700">캐시슬라이드</td>
              <td className="border border-gray-300 px-2 py-2 text-gray-700">1,000만 명</td>
              <td className="border border-gray-300 px-2 py-2 text-gray-700">500억 원</td>
              <td className="border border-gray-300 px-2 py-2 text-gray-700">800억 원</td>
              <td className="border border-gray-300 px-2 py-2 text-gray-700 text-sm">최대 사용자 기반, 상대적으로 낮은 기업가치</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-2 py-2 font-medium text-gray-800">그래비티랩스</td>
              <td className="border border-gray-300 px-2 py-2 text-gray-700">머니워크</td>
              <td className="border border-gray-300 px-2 py-2 text-gray-700">30만 명</td>
              <td className="border border-gray-300 px-2 py-2 text-gray-700">1,800억 원</td>
              <td className="border border-gray-300 px-2 py-2 text-gray-700">60~80억 원</td>
              <td className="border border-gray-300 px-2 py-2 text-gray-700 text-sm">소규모 MAU 대비 높은 기업가치</td>
            </tr>
            <tr className="bg-gray-25">
              <td className="border border-gray-300 px-2 py-2 font-medium text-gray-800">업라이즈</td>
              <td className="border border-gray-300 px-2 py-2 text-gray-700">비트버니</td>
              <td className="border border-gray-300 px-2 py-2 text-gray-700">40만 명</td>
              <td className="border border-gray-300 px-2 py-2 text-gray-700">공개된바 없음</td>
              <td className="border border-gray-300 px-2 py-2 text-gray-700">공개된바 없음</td>
              <td className="border border-gray-300 px-2 py-2 text-gray-700 text-sm">암호화폐로 교환 시도, DeFi 확장은 못하고 있음</td>
            </tr>
            <tr className="bg-blue-50">
              <td className="border border-gray-300 px-2 py-2 font-medium text-blue-800">비트베이크</td>
              <td className="border border-gray-300 px-2 py-2 text-blue-700">비트베이크</td>
              <td className="border border-gray-300 px-2 py-2 text-blue-700">1만 명 (목표)</td>
              <td className="border border-gray-300 px-2 py-2 text-blue-700">15억 원 (목표)</td>
              <td className="border border-gray-300 px-2 py-2 text-blue-700">1억 원 (목표)</td>
              <td className="border border-gray-300 px-2 py-2 text-blue-700 text-sm font-medium">리워드 + DeFi 통합 플랫폼</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">종합 인사이트</h3>
        <ul className="text-gray-700 leading-relaxed space-y-2">
          <li>• 국내 리워드 앱 기업들은 대규모 MAU와 안정적인 매출 구조를 확보하고 있으나,</li>
          <li>• 공통적으로 광고 중심의 보상 모델에 의존하고 있으며, DeFi 및 금융 서비스로의 확장성은 제한적입니다.</li>
          <li>• 이는 비트베이크가 리워드와 DeFi를 결합한 새로운 성장 동력을 제시할 수 있는 기회로 이어집니다.</li>
        </ul>
      </div>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-6 mt-8">기타 경쟁사</h2>
      
      <h3 className="text-xl font-semibold text-gray-700 mb-4 ml-4">1. 대형 플랫폼</h3>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        대형 플랫폼들은 현재 원화 스테이블코인 발행에 집중하고 있습니다.
      </p>
      
      <ul className="text-gray-700 leading-relaxed mb-8 ml-6">
        <li className="mb-2">
          원화 스테이블코인 사업이 제도적으로 안정화되더라도, DeFi 서비스로 확장되기까지는 최소 2~3년 이상이 소요될 것으로 예상됩니다.
        </li>
        <li className="mb-2">
          규제와 리스크 관리 요인으로 인해, 단기적으로는 DeFi 연계보다는 지급결제·송금 중심의 서비스에 집중할 가능성이 높습니다.
        </li>
      </ul>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-6 mt-8">3. 암호화폐 관련 경쟁사</h2>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        암호화폐 관련 서비스들은 다양한 시도를 이어왔지만, 지속적인 성과 창출에는 어려움을 겪고 있습니다.
      </p>
      
      <ul className="text-gray-700 leading-relaxed mb-8 ml-6">
        <li className="mb-2">
          <strong>샌드뱅크:</strong> 수백억 원 규모의 투자를 유치했으나 성과가 뚜렷하지 않았으며, 암호화폐 자산관리라는 직접적 접근의 한계가 드러났습니다.
        </li>
        <li className="mb-2">
          <strong>하루인베스트먼트, 델리오:</strong> 대규모 예치금 확보로 시장성을 보여주었으나, 운영 리스크 관리 실패로 파산에 이르렀습니다.
        </li>
        <li className="mb-2">
          <strong>업비트, 빗썸 등 중앙화 거래소:</strong> 구조적으로 DeFi와 연계가 불가능하며, 이로 인해 제공 가능한 상품과 수익률에 한계가 있습니다.
        </li>
      </ul>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-6 mt-8">4. 글로벌 레퍼런스</h2>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        글로벌 시장에서도 레퍼런스가 존재합니다.
      </p>
      
      <ul className="text-gray-700 leading-relaxed mb-4 ml-6">
        <li className="mb-2">
          <strong>Pi Network:</strong> MAU 수천만 명을 확보하며 대규모 네트워크를 형성했으나, 실제 거래 가능한 토큰을 제공하지 못해 경제적 가치 창출에는 한계가 있습니다.
        </li>
        <li className="mb-2">
          그럼에도 불구하고 글로벌 유저 기반 확대 가능성을 보여주는 사례로 참고할 만합니다.
        </li>
      </ul>
    </div>
  );
};

export default Competition;