export interface CompanyInfo {
  name: string;
  logo?: string;
  tagline: string;
  founded: string;
  location: string;
  website: string;
  email: string;
  phone: string;
  slogan: string;
}

export interface FinancialData {
  year: string;
  revenue: number;
  profit: number;
  growth: number;
  mau: string;
  arpu: number;
  aum: string;
}

export interface TeamMember {
  name: string;
  position: string;
  experience: string;
  education: string;
  image?: string;
  linkedin?: string;
}

export interface MarketData {
  totalMarket: string;
  targetMarket: string;
  marketGrowth: string;
  customerSegments: string[];
  globalTvl: string;
  koreanTvl: string;
  rewardAppUsers: string;
}

export interface FundingRequest {
  amount: string;
  useOfFunds: Array<{
    category: string;
    amount: string;
    percentage: number;
  }>;
  timeline: string;
  expectedReturn: string;
  valuation: string;
  equity: string;
}

export interface Achievement {
  metric: string;
  value: string;
  description: string;
}

export interface ProposalData {
  companyInfo: CompanyInfo;
  executiveSummary: string;
  problemStatement: string;
  solution: string;
  marketAnalysis: MarketData;
  businessModel: string;
  competition: string;
  marketingStrategy: string;
  financialProjections: FinancialData[];
  team: TeamMember[];
  fundingRequest: FundingRequest;
  achievements: Achievement[];
  vision: string;
  risks: string;
  exitStrategy: string;
}