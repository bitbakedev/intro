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
    <div className="prose prose-lg max-w-none">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">시장 배경과 기회</h2>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        2021년 DeFi Summer가 있었습니다. 한국에서도 시장성이 검증됐지만, 방만한 경영으로 무너졌습니다. 
        테라(Terra) 사태, 델리오(Delio) 파산, 하루인베스트먼트 사기 사건 등 연속적인 실패로 인해 
        한국 사용자들의 DeFi에 대한 신뢰가 완전히 무너졌습니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        하지만 미국을 주도로 다시 한번 암호화폐 붐이 오고 있으며, 이러한 암호화폐를 활용할 수 있는 
        가장 중요한 활용처인 DeFi 역시 다시 부상할 것입니다. 글로벌 DeFi 시장은 연 53.8%의 성장률을 
        보이며 220조원 규모로 확대되고 있습니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-6">
        하지만 한국 유저들은 2021년의 아픔으로 인해 섣불리 투자하지 않을 것입니다. 
        유저들에게 신뢰를 다시 얻어야 합니다.
      </p>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-6 mt-8">비트베이크의 접근법</h2>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        이러려면 유저들에게 부드럽게 온보딩하는 것이 필요합니다. 자신들의 돈을 직접 투자하지는 않을 것입니다. 
        하지만 <strong>"리워드로 받은 돈은 재미삼아서라도 투자해볼 것이다"</strong>라는 가설로 시작되었습니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-6">
        그 결과 4,000+ 다운로드, 52% M1 리텐션, 36% 암호화폐 전환율이라는 성과를 보이며 가설을 검증했습니다. 
        유료 마케팅 없이도 이러한 성과를 달성한 것은 우리 접근법의 유효성을 명확히 보여줍니다.
      </p>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-6 mt-8">스케일업 전략</h2>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        이제 스케일업을 해야 하는 시기입니다. 리워드 앱 서비스로서 수익성을 만들어내야 합니다. 
        이는 규모의 경제이기 때문에 사람이 많을수록 수익성 높은 광고 매체가 붙고, 직광고를 수주해올 수도 있습니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        이렇게 리워드 앱 서비스 자체로 수익화를 마치면, DeFi 상품으로의 적극적인 전환으로 
        DeFi 플랫폼으로 진화가 가능합니다. 1단계 리워드 앱에서 2단계 DeFi 플랫폼, 
        최종적으로 3단계 스테이블코인 플랫폼으로의 진화를 계획하고 있습니다.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-8">
        기존의 리워드 앱 서비스들은 스케일업에 많은 고민을 하고 있는 상황이지만, 
        우리의 전략은 엄청난 차별점입니다. <strong>리워드 앱에서 DeFi 플랫폼으로의 진화</strong>는 
        기존 경쟁사들이 가지지 못한 독특한 성장 경로를 제공합니다.
      </p>
      </div>
      
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="text-center p-6 bg-gray-50 rounded-lg">
          <AlertTriangle className="w-8 h-8 mx-auto mb-3 text-red-500" />
          <h4 className="text-2xl font-bold mb-2 text-red-600">신뢰 위기</h4>
          <p className="text-gray-700">2021년 DeFi 실패로 인한 한국 시장 신뢰도 하락</p>
        </div>
        <div className="text-center p-6 bg-gray-50 rounded-lg">
          <Target className="w-8 h-8 mx-auto mb-3 text-blue-500" />
          <h4 className="text-2xl font-bold mb-2 text-blue-600">검증된 가설</h4>
          <p className="text-gray-700">리워드 기반 DeFi 온보딩 전략의 성공적 검증</p>
        </div>
        <div className="text-center p-6 bg-gray-50 rounded-lg">
          <Rocket className="w-8 h-8 mx-auto mb-3 text-green-500" />
          <h4 className="text-2xl font-bold mb-2 text-green-600">스케일업</h4>
          <p className="text-gray-700">리워드 앱에서 DeFi 플랫폼으로의 진화 전략</p>
        </div>
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
    </div>
  );
};

export default ExecutiveSummary;