import React from 'react';
import { useState } from 'react';
import { TeamMember } from '../../types/proposal';
import TeamCard from '../TeamCard';
import AwardsModal from '../AwardsModal';
import ProjectHistoryModal from '../ProjectHistoryModal';

interface TeamSectionProps {
  team: TeamMember[];
}

const TeamSection: React.FC<TeamSectionProps> = ({ team }) => {
  const [isAwardsModalOpen, setIsAwardsModalOpen] = useState(false);
  const [isProjectHistoryModalOpen, setIsProjectHistoryModalOpen] = useState(false);

  return (
    <>
      <div className="mb-8">
        <div className="mb-8">
          <p className="text-gray-700 leading-relaxed mb-4">
            토스, 중고나라, 핀다 등 한국 최고 수준의 기업에서 대규모 서비스 개발과 운영 경험을 쌓은 검증된 팀원들로 구성되어 있습니다. 
            특히 월간 활성 사용자 수백만 명 규모의 플랫폼 운영 경험과 다수의 DeFi 프로젝트 구축 경험을 보유하고 있어, 
            기술적 전문성과 사업적 실행력을 모두 갖춘 국내에서는 찾아보기 힘든 팀입니다.
          </p>
          <p className="text-gray-700 leading-relaxed">
            글로벌 해커톤에서도 여러 차례 수상하며 기술력을 검증받았으며, 실제 서비스 런칭과 사용자 확보까지 성공적으로 수행한 실전 경험을 보유하고 있습니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {team.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
        
        <div className="text-center">
          <button
            onClick={() => setIsAwardsModalOpen(true)}
            className="text-blue-600 hover:text-blue-800 underline cursor-pointer bg-transparent border-none p-0 font-inherit"
          >
            주요 수상 경력 &gt;
          </button>
          <span className="mx-4 text-gray-400">|</span>
          <button
            onClick={() => setIsProjectHistoryModalOpen(true)}
            className="text-blue-600 hover:text-blue-800 underline cursor-pointer bg-transparent border-none p-0 font-inherit"
          >
            비트베이크팀의 프로젝트 이력 >
          </button>
        </div>
      
      <AwardsModal 
        isOpen={isAwardsModalOpen} 
        onClose={() => setIsAwardsModalOpen(false)} 
      />
      
      <ProjectHistoryModal 
        isOpen={isProjectHistoryModalOpen} 
        onClose={() => setIsProjectHistoryModalOpen(false)} 
      />
    </>
  );
};

export default TeamSection;