import React, { useState } from 'react';
import SalaryModal from '../SalaryModal';

const CompetitiveAdvantage: React.FC = () => {
  const [isSalaryModalOpen, setIsSalaryModalOpen] = useState(false);

  return (
    <>
      <div className="prose prose-lg max-w-none">
        <h3 className="text-xl font-semibold text-gray-700 mb-4 ml-4">1. 기술적 해자</h3>
        
        <p className="text-gray-700 leading-relaxed mb-4 ml-6">
          비즈니스 모델을 실현하고 리워드 앱에서 DeFi 플랫폼으로의 자연스러운 전환을 만들어내기 위해서는, 다양한 블록체인 생태계에 대한 깊은 이해와 DeFi 프로토콜 각각에 대한 전문 지식이 필요합니다. 무엇보다도 이를 하나의 서비스로 유기적으로 통합할 수 있는 기술력이 요구됩니다.
        </p>
        
        <p className="text-gray-700 leading-relaxed mb-6 ml-6">
          비트베이크 팀은 다년간 DeFi 영역만을 집중적으로 연구·구축해온 경험을 통해, 국내에서는 찾아보기 힘든 수준의 높은 기술적 전문성과 실행 능력을 갖추고 있습니다. 이는 경쟁사들이 쉽게 따라올 수 없는 비트베이크만의 <strong>핵심적인 기술적 해자(진입장벽)</strong>입니다.
        </p>
        
          <div className="space-y-2 text-sm text-gray-700 mb-4">
            <div>• <strong>2025</strong> Liquid Staking Protocol 구축 (<a href="https://www.verb.finance/" target="_blank" rel="noopener noreferrer\" className="text-blue-600 hover:text-blue-800 underline">https://www.verb.finance/</a>) | Chiliz</div>
            <div>• <strong>2024</strong> 블록체인 기반 투표 시스템 구축 (<a href="https://p.bitboard.in/" target="_blank" rel="noopener noreferrer\" className="text-blue-600 hover:text-blue-800 underline">https://p.bitboard.in/</a>) | Polygon</div>
            <div>• <strong>2024</strong> 탈중앙화 거래소 구축 (<a href="https://app.fanx.xyz/" target="_blank" rel="noopener noreferrer\" className="text-blue-600 hover:text-blue-800 underline">https://app.fanx.xyz/</a>) | Chiliz</div>
            <div>• <strong>2024</strong> 밈코인 런치패드 구축 (<a href="https://launchpad.etcswap.org/" target="_blank" rel="noopener noreferrer\" className="text-blue-600 hover:text-blue-800 underline">https://launchpad.etcswap.org/</a>) | Ethereum Classic</div>
            <div>• <strong>2024</strong> 밈코인 런치패드 구축 | MODE</div>
            <div>• <strong>2024</strong> 밈코인 런치패드 구축 (<a href="https://carrot-fi.xyz/launchpad" target="_blank" rel="noopener noreferrer\" className="text-blue-600 hover:text-blue-800 underline">https://carrot-fi.xyz/launchpad</a>) | Neo X</div>
            <div>• <strong>2023</strong> 탈중앙화 거래소 구축 (<a href="https://carrot-fi.xyz/" target="_blank" rel="noopener noreferrer\" className="text-blue-600 hover:text-blue-800 underline">https://carrot-fi.xyz/</a>) | Neo X</div>
            <div>• <strong>2022</strong> 크로스체인 담보대출 플랫폼 구축 | Zeta</div>
            <div>• <strong>2022</strong> 담보대출 플랫폼 구축 | Neo</div>
            <div>• <strong>2021</strong> NFT 조각화 플랫폼 구축 | Ethereum</div>
          </div>
        
        <h3 className="text-xl font-semibold text-gray-700 mb-4 ml-4">2. 네트워크와 협력 경험</h3>
        
        <p className="text-gray-700 leading-relaxed mb-4 ml-6">
          비트베이크는 Neo, Kaia, Bera, Chiliz 등 주요 블록체인 프로젝트와의 협업을 통해 이미 신뢰를 얻고 견고한 네트워크를 확보했습니다. 이러한 파트너십은 단순한 협력에 그치지 않고, 신규 고객사 유치와 글로벌 시장 확장에 있어 강력한 기반이 됩니다.
        </p>
        
        <p className="text-gray-700 leading-relaxed mb-6 ml-6">
          의미 있는 수준의 MAU만 달성하더라도 해당 재단들을 대상으로 직접적인 마케팅 예산 집행을 유치할 수 있으며, 나아가 각 재단이 육성 중인 다양한 프로젝트들과의 연결 기회 또한 자연스럽게 확보할 수 있습니다.
        </p>
        
        <p className="text-gray-700 leading-relaxed mb-6 ml-6">
          현재도 Neo 블록체인과 Kaia 재단과의 협력중이며, 특히 Neo 재단은 비트베이크가 시장성을 입증할 경우 직접 투자 의향을 밝힌 상태입니다.
        </p>
        
        <h3 className="text-xl font-semibold text-gray-700 mb-4 ml-4">3. 인재 부족과 DeFi에 대한 이해 부족</h3>
        
        <p className="text-gray-700 leading-relaxed mb-4 ml-6">
          국내 Web3 시장은 점차 사양 산업으로 인식되면서 우수한 개발자들조차 진입을 꺼려하고 있습니다. 그만큼 국내에는 인재가 부족한 상황이며, DeFi의 미래 가치를 믿고 기술력을 가진 인재들은 이미{' '} 
          <button
            onClick={() => setIsSalaryModalOpen(true)}
            className="text-blue-600 hover:text-blue-800 underline cursor-pointer bg-transparent border-none p-0 font-inherit"
          >
            높은 연봉과 좋은 조건
          </button>으로 해외 유망 프로젝트에 합류하여, 국내 기업들은 일반적인 방식으로 인재를 확보하기 어려운 상황입니다.
        </p>
        
        <p className="text-gray-700 leading-relaxed mb-4 ml-6">
          국내 리워드 앱이나 핀테크 기업들이 DeFi의 가치를 체감하고 적극적으로 인재를 확보하려면, 국내에서 실질적인 성공사례가 등장해야 합니다.
        </p>
        
        <p className="text-gray-700 leading-relaxed mb-6 ml-6">
          지금 이 시점에 비트베이크가 존재합니다. 우리가 첫 번째 성공사례가 된다면, 이후 다른 기업들은 경쟁적으로 인재와 자본을 투입하며 우리를 따라오거나, 더 나아가 전략적 인수를 통해 시장 진입을 시도할 것입니다. 이는 곧 비트베이크가 국내 DeFi 대중화를 선도하는 유일한 선두주자로 자리매김할 수 있음을 의미합니다.
        </p>
      </div>
      
      <SalaryModal 
        isOpen={isSalaryModalOpen} 
        onClose={() => setIsSalaryModalOpen(false)} 
      />
    </>
  );
};

export default CompetitiveAdvantage;