import React from 'react';

const DeFiProducts: React.FC = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">1. 스테이킹 & LSD (Liquid Staking Derivatives)</h2>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        사용자가 포인트를 암호화폐로 전환한 후, 해당 자산을 스테이킹하여 안정적인 수익을 창출할 수 있는 서비스를 제공합니다. 
        특히 LSD(Liquid Staking Derivatives) 토큰을 활용하여 스테이킹 중인 자산의 유동성을 확보하면서도 
        지속적인 스테이킹 보상을 받을 수 있도록 합니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-6">
        이를 통해 사용자는 자산을 락업하지 않고도 스테이킹 수익을 얻을 수 있으며, 
        필요시 언제든지 유동성을 확보할 수 있는 유연성을 제공받습니다.
      </p>

      <img src="/img_defi_1.png" />
      
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 mt-8">2. 담보대출 프로토콜 유동성 공급</h2>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        Aave, Compound 등 검증된 담보대출 서비스에 유동성을 공급하여 안정적인 이자 수익을 창출합니다. 
        사용자의 암호화폐 자산을 담보대출 풀에 예치하여 대출자들에게 유동성을 제공하고, 
        그 대가로 연 4-17% 수준의 이자 수익을 획득할 수 있습니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-6">
        이는 전통적인 예금 상품 대비 높은 수익률을 제공하면서도, 
        검증된 서비스를 통해 상대적으로 안전한 투자 옵션을 제공합니다.
      </p>

      <img src="/img_defi_2.png" />
      
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 mt-8">3. 거래소 유동성 공급</h2>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        탈중앙화 거래소(DEX)의 유동성 풀에 참여하여 거래 수수료 수익을 창출하는 서비스를 제공합니다. 
        사용자는 두 개의 토큰을 페어로 예치하여 유동성을 공급하고, 
        해당 풀에서 발생하는 거래 수수료의 일정 비율을 수익으로 받을 수 있습니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-6">
        다양한 토큰 페어와 서비스를 통해 위험도와 수익률을 조절할 수 있으며, 
        자동화된 포트폴리오 관리를 통해 최적의 수익률을 추구합니다.
      </p>

      <img src="/img_defi_1.png" />
      
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 mt-8">4. 투자 상품</h2>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        포인트로 암호화폐 및 주식에 투자할 수 있는 통합 투자 플랫폼을 제공합니다. 
        담보대출 서비스를 활용하여 낮은 수수료로 1.5~2배 레버리지 투자도 가능하게 하여, 
        사용자의 투자 수익률을 극대화할 수 있는 옵션을 제공합니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        다만, 이러한 서비스는 현재 국내 금융 규제와 관련된 제도적 문제들을 해결해야 하는 과제가 있습니다. 
        특히 주식 투자와 레버리지 상품의 경우 금융당국의 승인과 라이선스가 필요할 수 있으며, 
        이에 대한 법적 검토와 규제 대응 방안을 마련해야 합니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-6">
        비트베이크는 단계적 접근을 통해 먼저 규제가 명확한 암호화폐 투자 상품부터 출시하고, 
        점진적으로 제도적 기반을 마련하여 더 다양한 투자 상품으로 확장해 나갈 계획입니다.
      </p>
      
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 mt-8">통합 관리 시스템</h2>
      
      <p className="text-gray-700 leading-relaxed">
        모든 DeFi 상품은 비트베이크 플랫폼 내에서 통합적으로 관리되며, 
        사용자는 복잡한 DeFi 서비스를 직접 다룰 필요 없이 간단한 인터페이스를 통해 
        다양한 투자 상품에 접근할 수 있습니다. 실시간 수익률 모니터링, 자동 리밸런싱, 
        위험 관리 등의 기능을 통해 전문적인 자산 관리 서비스를 제공합니다.
      </p>
    </div>
  );
};

export default DeFiProducts;