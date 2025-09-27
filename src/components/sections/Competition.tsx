import React from 'react';

const Competition: React.FC = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">1. 리워드 앱 경쟁사</h2>
      
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
          </tbody>
        </table>
      </div>
      
      <p className="text-gray-700 leading-relaxed mb-8">
        국내 리워드 앱 기업들은 대규모 MAU와 안정적인 매출 구조를 확보하고 있으나, 공통적으로 광고 중심의 보상 모델에 의존하고 있으며, DeFi 및 금융 서비스로의 확장성은 제한적입니다. 이는 비트베이크가 리워드와 DeFi를 결합한 새로운 성장 동력을 제시할 수 있는 기회로 이어집니다.
      </p>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-6 mt-8">2. 대형 플랫폼</h2>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        토스, 카카오, 네이버 등 국내 대형 플랫폼들은 아직 DeFi보다는 원화 스테이블코인 발행에 집중하고 있습니다. 그러나 이 과정은 규제 협의와 인프라 구축 문제로 인해 최소 2년 이상 소요될 것으로 예상됩니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        설령 스테이블코인이 발행되더라도, 이를 실제로 활용할 수 있는 결제·송금·투자 등의 사용처를 확장하는 데 추가 시간이 필요합니다. 따라서 DeFi 서비스로 본격적으로 연결되기까지는 총 3~4년 이상이 걸릴 가능성이 높습니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        결국 대형 플랫폼들은 규제와 리스크 관리라는 족쇄로 인해 단기적으로는 결제·송금 등 제도권 금융 연계 서비스에 집중할 수밖에 없으며, DeFi 확장은 후순위로 밀릴 수밖에 없습니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-8">
        반면, 비트베이크는 빠른 실행력과 민첩성을 기반으로, 대형 플랫폼들이 제도권 안에서 시간을 소모하는 사이 DeFi 시장을 선점할 수 있는 전략적 기회를 확보하게 됩니다.
      </p>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-6 mt-8">3. 암호화폐 관련 경쟁사</h2>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        국내 암호화폐 서비스들은 다양한 시도를 이어왔지만, 지속적이고 안정적인 성과 창출에는 실패해왔습니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        예를 들어, 암호화폐 자산 관리 앱 샌드뱅크는 25억 원 규모의 투자를 유치하며 주목을 받았으나, 뚜렷한 사업 성과를 만들어내지 못했습니다. 이는 '암호화폐 자산관리'라는 직접적 접근 방식의 한계를 보여주는 사례라 할 수 있습니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        하루인베스트먼트와 델리오는 대규모 예치금을 확보하며 시장성 자체는 입증했지만, 내부 운영 리스크 관리에 실패하면서 결국 파산에 이르렀습니다. 이러한 사건들은 단순히 개별 기업의 실패를 넘어, 국내 사용자들의 신뢰를 크게 떨어뜨렸습니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-8">
        한편, 업비트·빗썸 등 중앙화 거래소들은 국내에서 압도적인 점유율을 차지하고 있지만, 제도적 문제와 리스크, 수익성 층면에서 DeFi와 직접 활용할 수 없는 한계를 지니고 있습니다. 결국 이들이 제공할 수 있는 상품과 수익률에는 뚜렷한 한계가 있으며, 이는 DeFi 생태계의 본질적인 확장성과는 거리가 있습니다.
      </p>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-6 mt-8">4. 글로벌 레퍼런스</h2>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        글로벌 시장에서도 비트베이크의 성장 가능성을 뒷받침할 수 있는 레퍼런스 사례가 존재합니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        대표적으로 Pi Network는 약 6,000만 명의 MAU를 확보하며 전 세계적으로 대규모 네트워크를 형성했습니다. 현재 시가총액은 약 3.25조 원 규모에 달하며, 팀 보유 토큰 비중이 20~30% 수준으로 추정됩니다. 과거에는 실제 거래 가능한 토큰을 제공하지 못해 경제적 가치 창출에 한계가 있었지만, 최근에는 거래소 상장을 통해 유저들에게 실질적인 리워드를 제공하는 데까지 발전했습니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        Pi Network는 이처럼 "리워드 기반 온보딩 모델을 통해 수천만 명 규모의 글로벌 유저 풀을 확보하고, 나아가 토큰 상장을 통한 경제적 가치 창출까지 연결할 수 있다"는 가능성을 입증한 사례라 할 수 있습니다. 이는 비트베이크가 동일한 온보딩 모델을 토대로, 그러나 더 빠르고 안정적으로 DeFi 연계까지 이어지는 완성된 서비스를 제공한다는 점에서 강력한 차별화 지점을 보여줍니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        특히 국내 리워드 앱들은 리워드 수단이 기프티콘이나 원화에 한정되어 있어 글로벌 확장성이 떨어집니다. 반면 비트베이크는 암호화폐를 직접 리워드로 지급하며, 더 나아가 이를 스테이킹으로 연계해 앱 유저의 자산을 락인(lock-in) 시키는 구조를 갖추고 있습니다. 이는 단순 리워드 지급을 넘어, 사용자 유지율과 플랫폼 성장성을 동시에 강화하는 강력한 경쟁력입니다.
      </p>
    </div>
  );
};

export default Competition;