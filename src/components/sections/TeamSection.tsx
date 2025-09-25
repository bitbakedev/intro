import React from 'react';
import { Award } from 'lucide-react';
import { TeamMember } from '../../types/proposal';
import TeamCard from '../TeamCard';

interface TeamSectionProps {
  team: TeamMember[];
}

const TeamSection: React.FC<TeamSectionProps> = ({ team }) => {
  return (
    <div>
      <div className="mb-8 p-6 bg-gray-50 rounded-lg">
        <h4 className="text-xl font-semibold text-gray-800 mb-4">LAEM STUDIO</h4>
        <p className="text-gray-700 leading-relaxed">
          <strong>풍부한 Web2 서비스 경험과 Web3 전문성을 바탕으로, 빠르게 움직이며 암호화폐의 대중화를 이끄는 팀입니다.</strong>
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          토스, 중고나라, 위메이드 등 한국 최고 수준의 기업에서 대규모 서비스 개발과 운영 경험을 쌓은 검증된 팀원들로 구성되어 있습니다. 
          특히 월간 활성 사용자 수백만 명 규모의 플랫폼 운영 경험과 다수의 DeFi 프로젝트 구축 경험을 보유하고 있어, 
          기술적 전문성과 사업적 실행력을 모두 갖춘 국내에서는 찾아보기 힘든 팀입니다.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          글로벌 해커톤에서 여러 차례 수상하며 기술력을 검증받았으며, 실제 서비스 런칭과 사용자 확보까지 성공적으로 수행한 실전 경험을 보유하고 있습니다.
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-6 mb-8">
        {team.map((member, index) => (
          <TeamCard key={index} member={member} />
        ))}
      </div>
      
      <div className="mb-8 p-6 bg-gray-50 rounded-lg">
        <h4 className="text-xl font-semibold text-gray-800 mb-4">팀의 핵심 역량</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h5 className="font-semibold text-gray-800 mb-2">대규모 서비스 경험</h5>
            <p className="text-sm text-gray-600">토스, 중고나라 등에서 월간 활성 사용자 수백만 명 규모의 서비스 개발 및 운영 경험</p>
          </div>
          <div>
            <h5 className="font-semibold text-gray-800 mb-2">Web3 기술 전문성</h5>
            <p className="text-sm text-gray-600">다수의 DeFi 프로토콜, DEX, 런치패드 구축 경험과 스마트 컨트랙트 최적화 역량</p>
          </div>
          <div>
            <h5 className="font-semibold text-gray-800 mb-2">사용자 중심 설계</h5>
            <p className="text-sm text-gray-600">복잡한 Web3 기술을 일반 사용자가 쉽게 사용할 수 있도록 만드는 UX 설계 전문성</p>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg">
        <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <Award className="w-6 h-6 mr-2" />
          주요 수상 경력
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <h5 className="font-semibold text-gray-800 mb-2">2025년</h5>
            <ul className="space-y-1 text-gray-600">
              <li>• 제1회 대한민국 스테이블코인 해커톤 최우수상</li>
              <li>• Seoulana Hackathon 2위</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-800 mb-2">2022년</h5>
            <ul className="space-y-1 text-gray-600">
              <li>• ETH Seoul 1위</li>
              <li>• Hackatom Seoul Evmos 1위</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-800 mb-2">2018년</h5>
            <ul className="space-y-1 text-gray-600">
              <li>• HDAC Hackathon The Arena Idea Award</li>
              <li>• OXD: Creative Coders Hackathon 1위</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-800 mb-2">2017년</h5>
            <ul className="space-y-1 text-gray-600">
              <li>• 12th Appjam IoT 1위</li>
              <li>• KISA NHN Fintech 4위</li>
              <li>• 14th Appjam 1위</li>
              <li>• D3S Hackathon 2위</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-white rounded-lg">
          <h5 className="font-semibold text-gray-800 mb-2">주요 프로젝트 경험</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
            <div>
              <p><strong>2024-2025년:</strong></p>
              <ul className="space-y-1 ml-4">
                <li>• Liquid Staking Protocol 구축 (Chiliz)</li>
                <li>• 탈중앙화 거래소 구축 (Neo X, Chiliz)</li>
                <li>• 밈코인 런치패드 구축 (다중 체인)</li>
                <li>• 블록체인 기반 투표 시스템 (Polygon)</li>
              </ul>
            </div>
            <div>
              <p><strong>2021-2022년:</strong></p>
              <ul className="space-y-1 ml-4">
                <li>• 크로스체인 담보대출 플랫폼 (Zeta)</li>
                <li>• 담보대출 플랫폼 구축 (Neo)</li>
                <li>• NFT 조각화 플랫폼 (Ethereum)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;