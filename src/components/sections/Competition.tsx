import React from 'react';

const Competition: React.FC = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">1. 리워드 앱 경쟁사</h2>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        국내 리워드 앱들은 대규모 사용자 기반을 바탕으로 성장했으나, DeFi 영역으로의 확장에는 한계가 있습니다.
      </p>
      
      <ul className="text-gray-700 leading-relaxed mb-6 ml-6">
        <li className="mb-2">
          <strong>캐시워크:</strong> 헬스케어 및 웰니스 서비스로 방향을 잡으며 금융·DeFi 영역에는 진출하지 않았습니다.
        </li>
        <li className="mb-2">
          <strong>비트버니:</strong> 암호화폐 교환 기능을 도입했지만 단순 교환 수준에 머물러 있으며, DeFi 확장성은 부족한 상황입니다.
        </li>
      </ul>
      
      <p className="text-gray-700 leading-relaxed mb-8">
        즉, 기존 리워드 앱들은 광고 기반 보상 모델에 머물러 있어 DeFi와 연결된 성장 동력을 확보하지 못하고 있습니다.
      </p>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-6 mt-8">2. 대형 플랫폼</h2>
      
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