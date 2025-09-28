import React from 'react';
import { Building2, Mail, Phone, Globe, Calendar, MapPin, TrendingUp, Users, DollarSign, Award } from 'lucide-react';
import ProposalSection from '../components/ProposalSection';
import NavigationMenu from '../components/NavigationMenu';
import ExecutiveSummary from '../components/sections/ExecutiveSummary';
import ProblemStatement from '../components/sections/ProblemStatement';
import Solution from '../components/sections/Solution';
import RevenueModel from '../components/sections/RevenueModel';
import CompetitiveAdvantage from '../components/sections/CompetitiveAdvantage';
import MarketAnalysis from '../components/sections/MarketAnalysis';
import Competition from '../components/sections/Competition';
import MarketingStrategy from '../components/sections/MarketingStrategy';
import FinancialProjections from '../components/sections/FinancialProjections';
import Vision from '../components/sections/Vision';
import TeamSection from '../components/sections/TeamSection';
import FundingRequest from '../components/sections/FundingRequest';
import ExitStrategy from '../components/sections/ExitStrategy';
import Risks from '../components/sections/Risks';
import DeFiProducts from '../components/sections/DeFiProducts';
import StablecoinStrategy from '../components/sections/StablecoinStrategy';
import LegalRiskMitigation from '../components/sections/LegalRiskMitigation';
import NeoPartnership from '../components/sections/NeoPartnership';
import ContactInfo from '../components/sections/ContactInfo';
import { sampleProposalData } from '../data/sampleData';

const InvestmentProposal: React.FC = () => {
  const data = sampleProposalData;

  const sections = [
    { id: 'executive-summary', title: '요약' },
    { id: 'problem-statement', title: '문제 정의' },
    { id: 'solution', title: '솔루션' },
    { id: 'revenue-model', title: '수익 모델' },
    { id: 'competitive-advantage', title: '경쟁 우위' },
    { id: 'competition', title: '경쟁 분석' },
    { id: 'marketing-strategy', title: '성장 전략' },
    { id: 'financial-projections', title: '재무 전망' },
    { id: 'team', title: '팀 소개' },
    { id: 'funding-request', title: 'Seed-Round 요약' },
    { id: 'exit-strategy', title: '투자금 회수 전략' },
    { id: 'defi-products', title: 'DeFi 상품 기획', isAppendix: true },
    { id: 'stablecoin-strategy', title: '원화 스테이블 코인 출범 후 전략', isAppendix: true },
    { id: 'legal-risk', title: '법적 리스크와 해소 전략', isAppendix: true },
    { id: 'neo-partnership', title: 'Neo 재단 파트너십', isAppendix: true },
    { id: 'contact', title: '연락처' },
  ];

  return (
    <NavigationMenu sections={sections}>
      <div className="min-h-screen bg-gray-50 py-8 print:bg-white print:py-0 flex-1">
      
        {/* Executive Summary */}
        <ProposalSection title="요약" pageBreak id="executive-summary">
          <ExecutiveSummary 
            executiveSummary={data.executiveSummary}
            achievements={data.achievements}
          />
        </ProposalSection>

        {/* Problem Statement */}
        <ProposalSection title="문제 정의" pageBreak id="problem-statement">
          <ProblemStatement />
        </ProposalSection>

        {/* Solution */}
        <ProposalSection title="솔루션" pageBreak id="solution">
          <Solution />
        </ProposalSection>

        {/* Business Model */}
        <ProposalSection title="수익 모델" pageBreak id="revenue-model">
          <RevenueModel />
        </ProposalSection>

        {/* Competitive Advantage */}
        <ProposalSection title="경쟁 우위" pageBreak id="competitive-advantage">
          <CompetitiveAdvantage />
        </ProposalSection>

        {/* Competition */}
        <ProposalSection title="경쟁 분석" pageBreak id="competition">
          <Competition />
        </ProposalSection>

        {/* Marketing Strategy */}
        <ProposalSection title="성장 전략" pageBreak id="marketing-strategy">
          <MarketingStrategy />
        </ProposalSection>

        {/* Financial Projections */}
        <ProposalSection title="재무 전망" pageBreak id="financial-projections">
          <FinancialProjections financialProjections={data.financialProjections} />
        </ProposalSection>

        {/* Team */}
        <ProposalSection title="팀 소개" pageBreak id="team">
          <TeamSection team={data.team} />
        </ProposalSection>

        {/* Funding Request */}
        <ProposalSection title="Seed-Round 요약" pageBreak id="funding-request">
          <FundingRequest fundingRequest={data.fundingRequest} />
        </ProposalSection>

        {/* Exit Strategy */}
        <ProposalSection title="투자금 회수 전략" pageBreak id="exit-strategy">
          <ExitStrategy />
        </ProposalSection>

        {/* DeFi Products */}
        <ProposalSection title={<><span className="text-sm text-gray-500">Appendix 1</span><br />DeFi 상품 기획</>} pageBreak id="defi-products">
          <DeFiProducts />
        </ProposalSection>

        {/* Stablecoin Strategy */}
        <ProposalSection title={<><span className="text-sm text-gray-500">Appendix 2</span><br />원화 스테이블 코인 출범 후 전략</>} pageBreak id="stablecoin-strategy">
          <StablecoinStrategy />
        </ProposalSection>

        {/* Legal Risk Mitigation */}
        <ProposalSection title={<><span className="text-sm text-gray-500">Appendix 3</span><br />법적 리스크와 해소 전략</>} pageBreak id="legal-risk">
          <LegalRiskMitigation />
        </ProposalSection>

        {/* Neo Partnership */}
        <ProposalSection title={<><span className="text-sm text-gray-500">Appendix 4</span><br />Neo 재단과의 전략적 파트너십</>} pageBreak id="neo-partnership">
          <NeoPartnership />
        </ProposalSection>

        {/* Contact Information */}
        <ProposalSection title="연락처" id="contact">
          <ContactInfo companyInfo={data.companyInfo} />
        </ProposalSection>
      </div>
    </NavigationMenu>
  );
};

export default InvestmentProposal;