import React from 'react';

const RevenueModel: React.FC = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">리워드앱의 기본적인 비즈니스 모델</h2>
      
      <h3 className="text-xl font-semibold text-gray-700 mb-4 ml-4">1. 광고 수익</h3>
      
      <p className="text-gray-700 leading-relaxed mb-4 ml-6">
        비트베이크의 핵심 수익원은 광고입니다. Google AdMob, Unity Ads, AdPopcorn, Adison, TNK, Pincrux 등 
        6개 주요 광고 네트워크와 연동하여 전체 화면 광고, 리워드형 광고, 배너 광고, 네이티브 광고 등 
        다양한 포맷을 제공하며, 이를 통해 안정적인 한 광고 수익을 창출합니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-6 ml-6">
        광고 수익의 80%는 사용자 리워드, 20%는 플랫폼 수익으로 배분됩니다. 
        특히 머니또, 쿠키키우기와 같은 자체 콘텐츠를 통해 사용자의 광고 체류 시간과 재방문율을 높여, 
        업계 평균 대비 높은 수준의 광고 노출수와 지속 시간을 만들어내고 있습니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-6 ml-6">
        향후 유의미한 MAU를 확보한 뒤에는,
광고 단가가 높은 프리미엄 애드네트워크와의 제휴가 가능해져
현재보다 광고 효율과 수익성이 크게 향상될 전망입니다.
      </p>
      
      <h3 className="text-xl font-semibold text-gray-700 mb-4 ml-4">2. 기프트카드 수수료</h3>
      
      <p className="text-gray-700 leading-relaxed mb-6 ml-6">
        유저가 비트베이크내에서 판매한 기프트카드는 전문 매입사에 재판매 됩니다. 판매 정산금액의 15% 는 비트베이크가 수취하며, 사용자는 기프트카드 가액의 75%를 포인트로 수령하게 됩니다. 이는 기존 리워드 앱에서는 찾아볼 수 없는 독창적인 수익 구조이며, 사용자가 늘어날수록 기프트카드 거래량이 증가하고, 주요 기프트카드 발행사·매입사와의 전략적 제휴를 통해 안정적이고 지속적인 수익 성장을 기대할 수 있습니다.
      </p>
      
      <h3 className="text-xl font-semibold text-gray-700 mb-4 ml-4">3. B2B 직광고</h3>
      
      <p className="text-gray-700 leading-relaxed mb-4 ml-6">
        비트베이크는 일정 수준 이상의 사용자 기반을 확보하면 직접 광고 유치를 통해 수익성을 한 단계 더 강화할 수 있습니다. 
        일반적으로 MAU 1만 명 이상을 달성하면 광고주와 직접 거래가 가능해지며, 중간 수수료를 지불해야 하는 광고 네트워크 대비 
        더 높은 광고 단가와 순수익을 확보할 수 있습니다. 이를 통해 광고 매출의 안정성과 수익률을 동시에 높일 수 있습니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-6 ml-6">
        또한, <a href="https://www.ads-soon.com/" target="_blank" className="text-blue-600 hover:text-blue-800 underline">애즈순(Ads-Soon)</a>과 같은 B2B 광고 플랫폼을 활용하거나, 
        광고주 대상 페이드 마케팅 <a href="https://partners.bitbunny.io/" target="_blank" className="text-blue-600 hover:text-blue-800 underline">(예시)</a>을 통해 직광고를 확보할 수 있는 
        실행 경로도 이미 열려 있습니다. 이러한 전략을 통해 비트베이크는 단순 광고 네트워크 의존을 넘어 
        직광고 기반의 고수익 모델로 빠르게 전환할 수 있습니다.
      </p>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-6 mt-8">비트베이크만의 추가적인 비즈니스 모델</h2>
      
      <h3 className="text-xl font-semibold text-gray-700 mb-4 ml-4">1. 스왑 & 출금 수수료</h3>
      
      <p className="text-gray-700 leading-relaxed mb-4 ml-6">
        사용자가 포인트를 암호화폐로 교환할 때 <strong>10% 서비스 수수료</strong>를 부과하며, 
        거래소로 출금 시에도 동일한 <strong>10% 서비스 수수료</strong>와 네트워크 수수료가 발생합니다. 
        이 구조는 사용자 자산이 늘어날수록 선형적으로 확대되는 안정적 수익원입니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-6 ml-6">
        향후 본격적인 포인트 ↔ 암호화폐 간 거래 기능을 구축하면 수수료율을 점진적으로 낮출 계획입니다. 
        다만, 현재 글로벌 암호화폐 거래소들 중 상당수가 <strong>0.5% 미만의 수수료율</strong>로도 높은 영업이익을 
        달성하고 있다는 점을 감안하면, 거래 수수료는 다른 리워드앱에서는 만들기 어려운 부가가치가 높은 
        비즈니스 구조임을 보여줍니다.
      </p>
      
      <h3 className="text-xl font-semibold text-gray-700 mb-4 ml-4">2. 스테이킹 수익 수수료</h3>
      
      <p className="text-gray-700 leading-relaxed mb-4 ml-6">
        유저가 암호화폐 예치를 통해 얻는 수익의 90%는 사용자 보상, 10%는 비트베이크 수익으로 배분됩니다. 
        관리 자산(AUM)이 증가할수록 수수료 수익 역시 선형적으로 확대되며, 사용자가 더 많은 리워드를 얻을수록 
        예치량도 많아지기 때문에 수익도 함께 증가하는 선순환 모델입니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-6 ml-6">
        AUM 규모가 커질수록 비트베이크는 DeFi 프로토콜과 협상을 통해 유동성을 집중적으로 제공하는 대가로 
        추가적인 수수료나 토큰을 보상으로 확보할 수 있게 됩니다. 이는 단순 수수료 수익을 넘어, 
        추가적인 인센티브와 이익을 창출할 수 있는 구조를 의미합니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-6 ml-6">
        무엇보다 중요한 점은, 비트베이크 팀이 이미 과거 프로젝트에서 DeFi 서비스 ↔ 블록체인 재단간 
        유동성 공급 및 인센티브 협상 경험을 보유하고 있다는 사실입니다. 따라서 이는 단순한 이론이 아니라, 
        실행 가능성과 경쟁 우위가 입증된 전략입니다.
      </p>
      
      <h3 className="text-xl font-semibold text-gray-700 mb-4 ml-4">3. B2B 마케팅</h3>
      
      <p className="text-gray-700 leading-relaxed mb-4 ml-6">
        글로벌 Web3 재단들은 한국 시장을 매우 중요하게 평가하며, 한국 사용자들을 대상으로 한 효과적인 마케팅 채널을 필요로 하고 있습니다. 
        그러나 현재 한국에서는 브랜드 이미지 훼손 우려나 법적 리스크 회피 등의 이유로 기존 플랫폼들이 암호화폐 관련 마케팅을 기피하고 있어, 
        이러한 수요를 충족할 수 있는 적절한 온보딩 플랫폼이 부재한 상황입니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-4 ml-6">
        비트베이크는 MAU가 일정 수준 이상으로 성장하면 블록체인 재단들을 대상으로 마케팅 서비스를 제공합니다. 
        이는 Galaxe와 유사한 구조로, 트위터 좋아요·퀴즈·간단한 게임 등의 미션을 통해 사용자들이 해당 재단의 토큰을 리워드로 받게 하는 방식입니다. 
        이 모델은 재단에게는 효과적인 프로모션 채널, 사용자에게는 실질적 보상, 비트베이크에게는 높은 인게이지먼트와 수익성을 동시에 제공합니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-6 ml-6">
        비트베이크는 이미 Neo, Kaia, Bera, Chiliz 등 주요 블록체인 프로젝트와 협업한 경험을 통해 검증된 마케팅 효과와 견고한 네트워크를 확보했습니다. 
        이러한 파트너십은 신규 고객사 유치와 시장 확장의 강력한 기반이 됩니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-4 ml-6">
        주목할 점은, 다수의 블록체인 재단들이 이미 수천억 원 규모의 시가총액을 보유하고 있으며, 마케팅 성과에 따라 조 단위 시가총액으로 성장할 수 있다는 사실입니다. 
        이 과정에서 재단들은 수십억~수백억 원 규모의 토큰 예산을 마케팅 비용으로 집행하고 있으며, 이는 일반 광고 산업 대비 압도적으로 높은 수익성을 제공합니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-4 ml-6">
        실제로 글로벌 시장에서는 Galaxe와 같은 플랫폼이 동일한 모델로 이미 성공을 입증했습니다. 
        비트베이크는 이러한 검증된 모델을 한국 시장에 선도적으로 적용함으로써 독점적 위치를 차지할 수 있습니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-6 ml-6">
        결과적으로, 블록체인 재단에게는 효과적인 마케팅 채널, 사용자에게는 수백 원에서 수십만 원 수준의 실질적 리워드, 
        비트베이크에는 수수료 수익과 높은 사용자 인게이지먼트를 제공하는 구조로, 모든 이해관계자가 이익을 얻는 윈-윈 모델입니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-6 ml-6">
        이를 실현하기 위해서는 다양한 블록체인과 DeFi 서비스에 대한 깊은 이해와, 이를 실제 서비스에 유기적으로 연동할 수 있는 기술력이 필요합니다. 
        비트베이크 팀은 다년간 Web3 생태계에서 DeFi 프로토콜을 직접 구축하고, 여러 블록체인 재단들과 협력 프로젝트를 성공적으로 수행한 경험을 보유하고 있습니다. 
        이러한 경험과 기술력은 국내 시장의 다른 기업들이 쉽게 따라올 수 없는 강력한 기술적 해자(진입장벽)로 작용합니다.
      </p>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-6 mt-8">다양한 수익원의 상호 보완적 성장</h2>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        비트베이크의 수익 모델은 단순한 다각화를 넘어서 상호 보완적인 선순환 구조를 만들어냅니다. 
        광고 수익 증가는 사용자 리워드 증가로 이어지고, 이는 다시 암호화폐 상품 예치 증가로 연결됩니다. 
        AUM이 높아지면 거래량과 수수료가 증가합니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-6">
        또한 AUM과 MAU 가 증가하면 DeFi 플랫폼과 기업의 협력, 마케팅 수요가 증가하여 수익이 더 극대화 되는 구조입니다. 
        이처럼 <strong>5개의 서로 다른 수익원</strong>은 리스크를 분산시키면서도 
        상호 보완적으로 작용하여 지속 가능한 성장을 만들어냅니다.
      </p>
    </div>
  );
};

export default RevenueModel;