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
      <ProposalSection title="요약" pageBreak>
        <ExecutiveSummary 
          executiveSummary={data.executiveSummary}
          achievements={data.achievements}
        />
      </ProposalSection>

      {/* Problem Statement */}
      <ProposalSection title="문제 정의" pageBreak>
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
        <ExitStrategy />
      </ProposalSection>

      {/* Risks */}
      <ProposalSection title="리스크 요소" pageBreak>
        <Risks />
      </ProposalSection>

      {/* Contact Information */}
      <ProposalSection title="연락처">
        <ContactInfo companyInfo={data.companyInfo} />
      </ProposalSection>
    </div>
  );
};

export default InvestmentProposal;