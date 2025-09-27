import React from 'react';
import { Building2, Mail, Phone, Globe, Calendar, MapPin, TrendingUp, Users, DollarSign, Award } from 'lucide-react';
import ProposalSection from '../components/ProposalSection';
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

  return (
    <div className="min-h-screen bg-gray-50 py-8 print:bg-white print:py-0">
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

      {/* Business Model */}
      <ProposalSection title="수익 모델" pageBreak>
        <RevenueModel />
      </ProposalSection>

      {/* Competitive Advantage */}
      <ProposalSection title="경쟁 우위" pageBreak>
        <CompetitiveAdvantage />
      </ProposalSection>

      {/* Competition */}
      <ProposalSection title="경쟁 분석" pageBreak>
        <Competition />
      </ProposalSection>

      {/* Marketing Strategy */}
      <ProposalSection title="성장 전략" pageBreak>
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

      {/* Funding Request */}
      <ProposalSection title="Seed-Round 요약" pageBreak>
        <FundingRequest fundingRequest={data.fundingRequest} />
      </ProposalSection>

      {/* Exit Strategy */}
      <ProposalSection title="출구 전략" pageBreak>
        <ExitStrategy />
      </ProposalSection>

      {/* DeFi Products */}
      <ProposalSection title="DeFi 상품 기획" pageBreak>
        <DeFiProducts />
      </ProposalSection>

      {/* Stablecoin Strategy */}
      <ProposalSection title="원화 스테이블 코인 출범 후 전략" pageBreak>
        <StablecoinStrategy />
      </ProposalSection>

      {/* Legal Risk Mitigation */}
      <ProposalSection title="법적 리스크와 해소 전략" pageBreak>
        <LegalRiskMitigation />
      </ProposalSection>

      {/* Neo Partnership */}
      <ProposalSection title="Neo 재단과의 전략적 파트너십" pageBreak>
        <NeoPartnership />
      </ProposalSection>

      {/* Contact Information */}
      <ProposalSection title="연락처">
        <ContactInfo companyInfo={data.companyInfo} />
      </ProposalSection>
    </div>
  );
};

export default InvestmentProposal;