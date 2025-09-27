import React, { useState } from 'react';
import SalaryModal from '../SalaryModal';
import ProjectHistoryModal from '../ProjectHistoryModal';

const CompetitiveAdvantage: React.FC = () => {
  const [isSalaryModalOpen, setIsSalaryModalOpen] = useState(false);
  const [isProjectHistoryModalOpen, setIsProjectHistoryModalOpen] = useState(false);

  return (
    <>
      <div className="prose prose-lg max-w-none">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">1. 기술적 해자</h3>
        
        <p className="text-gray-700 leading-relaxed mb-4">
          위에서 제시한 비즈니스 모델을 실현하고 리워드 앱에서 DeFi 플랫폼으로의 자연스러운 전환을 만들어내기 위해서는, 다양한 블록체인 생태계에 대한 깊은 이해와 DeFi 서비스 각각에 대한 전문 지식이 필요합니다. 무엇보다도 이를 하나의 서비스로 유기적으로 통합할 수 있는 높은 기술력이 요구됩니다.
        </p>재를 확보하려면
        
        <p className="text-gray-700 leading-relaxed mb-2">
          비트베이크 팀은 다년간 Web3 생태계에서 DeFi 서비스를 직접 구축하고, 여러 블록체인 재단들과 협력 프로젝트를 성공적으로 수행한 경험을 보유하고 있으며, 국내에서는 찾아보기 힘든 수준의 높은 기술적 전문성과 실행 능력을 갖추고 있습니다. 이는 경쟁사들이 쉽게 따라올 수 없는 비트베이크만의 <strong>핵심적인 기술적 해자(진입장벽)</strong>입니다.
        </p>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          <button
            onClick={() => setIsProjectHistoryModalOpen(true)}
            className="text-blue-600 hover:text-blue-800 underline cursor-pointer bg-transparent border-none p-0 font-inherit"
          >
            {'프로젝트 이력 >'}
          </button>
        </p>
        
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">2. 네트워크와 협력 경험</h3>
        
        <p className="text-gray-700 leading-relaxed mb-4">
          비트베이크는 Neo, Kaia, Bera, Chiliz 등 주요 블록체인 프로젝트와의 협업을 통해 이미 신뢰를 얻고 견고한 네트워크를 확보했습니다. 또한 Bifrost, Radius 와 같은 국내 블록체인 메인넷 재단들과도 네트워크를 가지고 있습니다. 이러한 네트워크와 파트너십은 신규 고객사 유치와 글로벌 시장 확장에 있어 강력한 기반이 됩니다.
        </p>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          비트베이크가 의미 있는 수준의 MAU만 달성하더라도 해당 재단들을 대상으로 직접적인 마케팅 예산 집행을 유치할 수 있으며, 나아가 각 재단이 육성 중인 다양한 프로젝트들과의 연결 기회 또한 자연스럽게 확보할 수 있습니다.
        </p>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          현재도 Neo 블록체인과 Kaia 재단과의 협력중이며, 특히 Neo 재단은 비트베이크가 시장성을 입증할 경우 직접 투자 의향을 밝힌 상태이며, Neo 재단과 협력중인 다른 재단과 VC로 부터도 적극적인 후속 투자 유치가 가능합니다.
        </p>
        
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">3. 인재 부족과 DeFi에 대한 이해 부족</h3>
        
        <p className="text-gray-700 leading-relaxed mb-4">
          국내 Web3 시장은 점차 사양 산업으로 인식되면서 우수한 개발자들조차 진입을 꺼려하고 있습니다. 그만큼 국내에는 인재가 부족한 상황이며, DeFi의 미래 가치를 믿고 기술력을 가진 인재들은 이미{' '} 
          <button
            onClick={() => setIsSalaryModalOpen(true)}
            className="text-blue-600 hover:text-blue-800 underline cursor-pointer bg-transparent border-none p-0 font-inherit"
          >
            높은 연봉과 좋은 조건
          </button>으로 해외 유망 프로젝트에 합류하여, 국내 기업들은 일반적인 방식으로 인재를 확보하기 어려운 상황입니다.
        </p>
        
        <p className="text-gray-700 leading-relaxed mb-4">
          국내 리워드 앱이나 핀테크 기업들이 DeFi의 가치를 체감하고 적극적으로 인재를 확보하기 위해 움직이려면, 국내에서 실질적인 성공사례가 등장해야 합니다.
        </p>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          지금 이 시점에 비트베이크가 존재합니다. 비트베이크가 첫 번째 성공사례가 된다면, 이후 다른 기업들은 경쟁적으로 인재와 자본을 투입하며 따라오거나, 더 나아가 전략적으로 비트베이크를 인수하여 통해 시장 진입을 시도할 것입니다. 이는 곧 비트베이크가 국내 DeFi 대중화를 선도하는 유일한 선두주자로 자리매김할 수 있음을 의미합니다.
        </p>
      </div>
      
      <SalaryModal 
        isOpen={isSalaryModalOpen} 
        onClose={() => setIsSalaryModalOpen(false)} 
      />
      
      <ProjectHistoryModal 
        isOpen={isProjectHistoryModalOpen} 
        onClose={() => setIsProjectHistoryModalOpen(false)} 
      />
    </>
  );
};

export default CompetitiveAdvantage;