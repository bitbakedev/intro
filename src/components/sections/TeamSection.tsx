import React from 'react';
import { useState } from 'react';
import { TeamMember } from '../../types/proposal';
import TeamCard from '../TeamCard';
import ImageModal from '../ImageModal';

interface TeamSectionProps {
  team: TeamMember[];
}

const TeamSection: React.FC<TeamSectionProps> = ({ team }) => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const openImageModal = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div>
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

        <div className="mt-12">
          <h3 className="text-xl font-bold text-gray-800 mb-4">주요 수상 경력</h3>
          <div className="space-y-4 text-sm mb-6">
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
              <h5 className="font-semibold text-gray-800 mb-2">2019년</h5>
              <ul className="space-y-1 text-gray-600">
                <li>• 54회 대한민국디자인전람회 장관상</li>
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
            <div>
              <h5 className="font-semibold text-gray-800 mb-2">2015년</h5>
              <ul className="space-y-1 text-gray-600">
                <li>• ETRI Idea Club 4위</li>
                <li>• Naver D2 X Inha University Hackathon 4위</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <img
              src="/img_awards_1.png"
              alt="수상 경력 1"
              className="w-full h-auto rounded-lg shadow-md cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => openImageModal("/img_awards_1.png", "수상 경력 1")}
            />
            <img
              src="/img_awards_2.png"
              alt="수상 경력 2"
              className="w-full h-auto rounded-lg shadow-md cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => openImageModal("/img_awards_2.png", "수상 경력 2")}
            />
            <img
              src="/img_awards_3.png"
              alt="수상 경력 3"
              className="w-full h-auto rounded-lg shadow-md cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => openImageModal("/img_awards_3.png", "수상 경력 3")}
            />
            <img
              src="/img_awards_4.png"
              alt="수상 경력 4"
              className="w-full h-auto rounded-lg shadow-md cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => openImageModal("/img_awards_4.png", "수상 경력 4")}
            />
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-bold text-gray-800 mb-4">주요 프로젝트 구축 이력</h3>
          <div className="space-y-6 text-sm">
            <div>
              <h5 className="font-semibold text-gray-800 mb-2">2025년</h5>
              <ul className="space-y-1 text-gray-600">
                <li>• Liquid Staking Protocol 구축 - <a href="https://www.verb.finance/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">https://www.verb.finance/</a> (Chiliz)</li>
                <li>• 비트코인 UTXO 기반 암호화폐 지갑 개발 (<a href="https://play.google.com/store/apps/details?id=com.between.wallet" target="_blank">BetweenWallet</a>)</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-gray-800 mb-2">2024년</h5>
              <ul className="space-y-1 text-gray-600">
                <li>• 블록체인 기반 투표 시스템 구축 - <a href="https://p.bitboard.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">https://p.bitboard.in/</a> (Polygon)</li>
                <li>• 탈중앙화 거래소 구축 - <a href="https://app.fanx.xyz/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">https://app.fanx.xyz/</a> (Chiliz)</li>
                <li>• 밈코인 런치패드 구축 - <a href="https://launchpad.etcswap.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">https://launchpad.etcswap.org/</a> (Ethereum Classic)</li>
                <li>• 밈코인 런치패드 구축 (MODE)</li>
                <li>• 밈코인 런치패드 구축 - <a href="https://carrot-fi.xyz/launchpad" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">https://carrot-fi.xyz/launchpad</a> (Neo X)</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-gray-800 mb-2">2023년</h5>
              <ul className="space-y-1 text-gray-600">
                <li>• 탈중앙화 거래소 구축 - <a href="https://carrot-fi.xyz/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">https://carrot-fi.xyz/</a> (Neo X)</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-gray-800 mb-2">2022년</h5>
              <ul className="space-y-1 text-gray-600">
                <li>• 크로스체인 담보대출 플랫폼 구축 (Zeta)</li>
                <li>• 담보대출 플랫폼 구축 (Neo)</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-gray-800 mb-2">2021년</h5>
              <ul className="space-y-1 text-gray-600">
                <li>• NFT 조각화 플랫폼 구축 (Ethereum)</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-gray-800 mb-2">2019년</h5>
              <ul className="space-y-1 text-gray-600">
                <li>• 암호화폐 통합 지갑 구축</li>
                <li>• 블록체인 기반 증명서 발급 솔루션 구축</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <ImageModal
        isOpen={selectedImage !== null}
        onClose={closeImageModal}
        imageSrc={selectedImage?.src || ''}
        imageAlt={selectedImage?.alt || ''}
      />
    </>
  );
};

export default TeamSection;