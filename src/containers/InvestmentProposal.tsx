import React from 'react';
import { Building2, Mail, Phone, Globe, Calendar, MapPin, TrendingUp, Users, DollarSign, Award } from 'lucide-react';
import ProposalSection from '../components/ProposalSection';
import ExecutiveSummary from '../components/sections/ExecutiveSummary';
import ProblemStatement from '../components/sections/ProblemStatement';
import Solution from '../components/sections/Solution';
import RevenueModel from '../components/sections/RevenueModel';
import MarketAnalysis from '../components/sections/MarketAnalysis';
import Competition from '../components/sections/Competition';
import MarketingStrategy from '../components/sections/MarketingStrategy';
import FinancialProjections from '../components/sections/FinancialProjections';
import Vision from '../components/sections/Vision';
import TeamSection from '../components/sections/TeamSection';
import FundingRequest from '../components/sections/FundingRequest';
import ExitStrategy from '../components/sections/ExitStrategy';
import Risks from '../components/sections/Risks';
import ContactInfo from '../components/sections/ContactInfo';
import { sampleProposalData } from '../data/sampleData';

const InvestmentProposal: React.FC = () => {
  const data = sampleProposalData;

  return (
    <div className="min-h-screen bg-gray-50 py-8 print:bg-white print:py-0">
      {/* Cover Page */}
      <section className="w-full max-w-4xl mx-auto bg-gray-900 text-white p-12 mb-8 rounded-lg shadow-lg print:rounded-none print:shadow-none print:break-after-page">
        <div className="text-center mb-12">
          <Building2 className="w-20 h-20 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4">{data.companyInfo.name}</h1>
          <p className="text-2xl font-semibold mb-2 text-gray-300">"{data.companyInfo.slogan}"</p>
          <p className="text-xl opacity-90 mb-8">{data.companyInfo.tagline}</p>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-6">투자 제안서</h2>
          <p className="text-lg opacity-90">Investment Proposal</p>
        </div>
        
        <div className="grid grid-cols-2 gap-8 text-sm mb-8">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>설립: {data.companyInfo.founded}년</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>{data.companyInfo.location}</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4" />
              <span>{data.companyInfo.website}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>{data.companyInfo.email}</span>
            </div>
          </div>
        </div>

        {/* Key Achievements */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {data.achievements.map((achievement, index) => (
            <div key={index} className="text-center p-4 bg-gray-800 rounded-lg">
              <h4 className="text-2xl font-bold text-white mb-1">{achievement.metric}</h4>
              <p className="text-sm font-medium mb-1">{achievement.value}</p>
              <p className="text-xs opacity-80">{achievement.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-sm opacity-75">
            작성일: {new Date().toLocaleDateString('ko-KR')}
          </p>
        </div>
      </section>

      {/* Executive Summary */}
      <ProposalSection title="경영진 요약" pageBreak>
        <ExecutiveSummary 
          executiveSummary={data.executiveSummary}
          achievements={data.achievements}
        />
      </ProposalSection>

      {/* Problem Statement */}
      <ProposalSection title="문제 정의" pageBreak>
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">1. 글로벌 DeFi 시장의 구조적 문제</h2>
          
          <h3 className="text-xl font-semibold text-gray-700 mb-4">기술적 진입 장벽</h3>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            현재 DeFi 생태계는 기술적 복잡성으로 인해 일반 사용자들의 진입을 크게 저해하고 있습니다. 
            블록체인 기술 자체가 복잡한 것은 물론, 사용자들이 실제로 서비스를 이용하기까지 거쳐야 하는 
            단계들이 과도하게 많고 복잡합니다.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            일반 사용자가 DeFi 서비스를 이용하려면 먼저 블록체인 지갑을 생성하고, 개인키와 시드 구문을 
            안전하게 보관해야 합니다. 이는 단순히 계정을 만드는 것이 아니라, 사용자가 자신의 자산을 
            완전히 책임져야 한다는 것을 의미합니다. 한 번 잃어버리면 복구가 불가능한 개인키 관리, 
            복잡한 가스비 계산, 네트워크 선택 등은 일반 사용자에게는 부담스러운 요소들입니다.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            더욱 문제가 되는 것은 DeFi 생태계에서 사용되는 전문 용어들입니다. DEX(탈중앙화 거래소), 
            AMM(자동 시장 조성자), Liquidity Pool(유동성 풀), Yield Farming(수익 농사), 
            Staking(스테이킹) 등은 개발자들이 이해하기 쉽게 만든 용어이지만, 일반 사용자들에게는 
            외계어와 다름없습니다. <strong className="text-red-600">DeFi 사용자의 78%가 기술적 복잡성을 
            주요 진입 장벽으로 인식</strong>하고 있다는 조사 결과가 이를 뒷받침합니다.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-6 mt-8">2. 한국 시장의 특수한 문제점</h2>
          
          <h3 className="text-xl font-semibold text-gray-700 mb-4">규제적 제약과 신뢰도 위기</h3>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            한국은 암호화폐 시장에서 독특한 규제 환경을 가지고 있습니다. 2021년 정부의 신용카드를 통한 
            암호화폐 구매 금지 조치는 한국 사용자들의 암호화폐 진입 경로를 크게 제한했습니다. 
            이 조치는 투기 억제와 자금세탁 방지를 목적으로 했지만, 결과적으로 일반 사용자들의 
            암호화폐 접근성을 크게 저해했습니다.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            더욱 심각한 문제는 연속적인 실패 사례들입니다. 2022년 테라(Terra) 사태로 400억 달러가 증발했고, 
            2023년 델리오(Delio)가 8,000억원 규모의 예치금과 함께 파산했으며, 2024년 하루인베스트먼트 
            사태까지 이어지며 한국 사용자들의 신뢰도는 바닥을 쳤습니다.
          </p>
        </div>
        <ProblemStatement />
      </ProposalSection>

      {/* Solution */}
      <ProposalSection title="솔루션" pageBreak>
        <Solution />
      </ProposalSection>

      {/* Market Analysis */}
      <ProposalSection title="시장 분석" pageBreak>
        <MarketAnalysis marketAnalysis={data.marketAnalysis} />
      </ProposalSection>

      {/* Business Model */}
      <ProposalSection title="수익 모델" pageBreak>
        <RevenueModel />
      </ProposalSection>

      {/* Competition */}
      <ProposalSection title="경쟁 분석" pageBreak>
        <Competition />
      </ProposalSection>

      {/* Marketing Strategy */}
      <ProposalSection title="마케팅 전략" pageBreak>
        <MarketingStrategy />
      </ProposalSection>

      {/* Financial Projections */}
      <ProposalSection title="재무 전망" pageBreak>
        <FinancialProjections financialProjections={data.financialProjections} />
      </ProposalSection>

      {/* Team */}
      <ProposalSection title="팀 소개" pageBreak>
        <TeamSection team={data.team} />
      </ProposalSection>

      {/* Vision */}
      <ProposalSection title="비전" pageBreak>
        <Vision />
      </ProposalSection>

      {/* Funding Request */}
      <ProposalSection title="투자 요청" pageBreak>
        <FundingRequest fundingRequest={data.fundingRequest} />
      </ProposalSection>

      {/* Exit Strategy */}
      <ProposalSection title="출구 전략" pageBreak>
        <ExitStrategy exitStrategy={data.exitStrategy} />
      </ProposalSection>

      {/* Risks */}
      <ProposalSection title="리스크 요소" pageBreak>
        <Risks risks={data.risks} />
      </ProposalSection>

      {/* Contact Information */}
      <ProposalSection title="연락처">
        <ContactInfo companyInfo={data.companyInfo} />
      </ProposalSection>
    </div>
  );
};

export default InvestmentProposal;