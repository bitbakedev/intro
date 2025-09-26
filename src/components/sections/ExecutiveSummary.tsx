import React from 'react';
import { TrendingUp, Users, DollarSign, AlertTriangle, Target, Rocket } from 'lucide-react';
import { Achievement } from '../../types/proposal';

interface ExecutiveSummaryProps {
  executiveSummary: string;
  achievements: Achievement[];
}

const ExecutiveSummary: React.FC<ExecutiveSummaryProps> = ({
  executiveSummary,
  achievements
}) => {
  return (
    <>
      <div className="prose prose-lg max-w-none">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">시장 배경과 기회</h2>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        2021년 DeFi Summer가 있었습니다. 한국에서도 시장성이 검증됐지만, 방만한 경영으로 무너졌습니다. 
        테라(Terra) 사태, 델리오(Delio) 파산, 하루인베스트먼트 사기 사건 등 연속적인 실패로 인해 
        한국 사용자들의 DeFi에 대한 신뢰가 완전히 무너졌습니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        하지만 미국을 주도로 다시 한번 암호화폐 붐이 오고 있으며, 이러한 암호화폐를 활용할 수 있는 
        가장 중요한 활용처인 DeFi 역시 다시 부상할 것입니다. 이미 글로벌 DeFi 시장은 연 53.8%의 성장률을 
        보이며 220조원 규모로 확대되고 있습니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-6">
        하지만 한국 유저들은 2021년의 아픔으로 인해 섣불리 DeFi를 이용하지 않을 것입니다.
      </p>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-6 mt-8">비트베이크의 접근법</h2>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        유저들에게 신뢰를 되찾으려면 부드럽게 온보딩하는 것이 필요합니다. 비트베이크는 <strong>"자신들의 돈을 직접 투자하지는 않겠지만, 
        리워드로 받은 돈은 재미삼아서라도 투자하지 않을까?"</strong>라는 가설로 시작되었습니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-6">
        그 결과 4,000+ 다운로드, 52% M1 리텐션, 36% 암호화폐 전환율이라는 성과를 보이며 가설을 검증했습니다. 
        유료 마케팅 없이도 이러한 성과를 달성한 것은 우리 접근법의 유효성을 명확히 보여줍니다.
      </p>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-6 mt-8">스케일업이 필요한 단계</h2>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        기본적인 가설 검증을 마친 비트베이크는 이제 스케일업을 해야합니다. 리워드 앱 서비스로서 수익성을 만들어내야만 다음 단계로 넘어갈 수 있습니다. 
        리워드앱은 규모의 경제가 가장 잘 작동하는 분야이기 때문에 사람이 많을수록 수익성 높은 광고 매체가 붙고, 직광고를 수주해와 다른 분야보다 수월하게 수익화가 가능합니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        리워드 앱 서비스 자체로 안정적인 수익화를 달성한 이후, 비트베이크는 이를 암호화폐 상품과의 결합으로 확장하여 DeFi 플랫폼으로 진화할 수 있습니다. 내부 실험 결과, 전체 매출의 약 35%가 자연스럽게 암호화폐 상품으로 전환되고 있는 것으로 확인되었습니다.

      </p>
      <p className="text-gray-700 leading-relaxed mb-8">
즉, 리워드앱 업계 초기 수준인 월 매출 15억 원만 달성하더라도, 매월 약 5억 원이 암호화폐 상품에 예치되며 이는 단순 광고 기반 리워드 앱들과는 차별화된 구조입니다. 1년만에 누적 예치금이 30~40억 원 규모로 성장하고, 여기서 발생하는 수수료까지 더해지면, 비트베이크는 기존 리워드 앱 대비 월등히 높은 수익성을 확보할 수 있습니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-8">
        기존의 리워드 앱 서비스들은 스케일업에 많은 고민을 하고 있는 상황이지만, 
        비트베이크의 전략은 엄청난 차별점입니다. <strong>리워드 앱에서 DeFi 플랫폼으로의 진화</strong>는 
        기존 경쟁사들이 가지지 못한 독특한 성장 경로를 제공합니다.
      </p>
      </div>
      
      <div className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-center">핵심 성과 지표</h3>
        <div className="grid grid-cols-4 gap-4">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <h4 className="text-2xl font-bold text-blue-600 mb-1">{achievement.metric}</h4>
              <p className="text-sm font-medium mb-1">{achievement.value}</p>
              <p className="text-xs text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExecutiveSummary;