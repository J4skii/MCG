import { Stat, Service, TeamMember, DealData, Partner } from '../types';
import { 
  Banknote, 
  FileText, 
  TrendingUp, 
  Handshake, 
  Zap, 
  ShieldCheck, 
  Clock, 
  Globe 
} from 'lucide-react';

export const STATS: Stat[] = [
  { value: 300, label: 'Packaged Deals', prefix: 'R', suffix: 'm+' },
  { value: 20, label: 'Active Mandates', suffix: '+' },
  { value: 3, label: 'Provinces' },
  { value: 100, label: 'Black Youth-Led', suffix: '%' },
];

export const SERVICES: Service[] = [
  {
    title: 'Funding & Capital Solutions',
    description: 'Debt & grant placement, on-lending, and structured capital solutions tailored to business needs.',
    Icon: Banknote,
  },
  {
    title: 'Packaging & Consulting',
    description: 'Investor-ready packs pre-vetted to DFI/banking standards, management consulting, and strategy support.',
    Icon: FileText,
  },
  {
    title: 'Equity & Special Situations',
    description: 'Equity raises, M&A advisory, and turnaround transactions to drive growth and sustainability.',
    Icon: TrendingUp,
  },
  {
    title: 'Deal Connect & Partnerships',
    description: 'Connecting commercial opportunities (e.g., linking mines to transporters) for mutual benefit.',
    Icon: Handshake,
  },
];

export const TEAM: TeamMember[] = [
  {
    name: 'Jared Pillay',
    role: 'Managing Director',
    description: [
      'Ex-A.T Kearney Strategy Consultant.',
      'Specialist in capital raising, deal packaging, and corporate advisory.'
    ]
  },
  {
    name: 'Joshua Anderson',
    role: 'Strategic Partnerships',
    description: [
      'Expert in commercial deal sourcing and placement.',
      'Drives MCG’s network expansion and partnership execution.'
    ]
  },
  {
    name: 'LéJeay Anderson',
    role: 'Legal & Compliance',
    description: [
      'Ensures deals are legally sound and regulator-ready.',
      'Focus on contract drafting, governance reviews, and due diligence.'
    ]
  },
];

export const DEALS: DealData[] = [
  { name: 'Halal Beef', value: 100, category: 'Funding', status: 'In Execution' },
  { name: 'Tourism Group', value: 200, category: 'Equity', status: 'In Execution' },
  { name: 'Mine Logistics', value: 600, category: 'Deal Connect', status: 'In Execution' },
];

export const WHY_US = [
  {
    title: 'Empowerment',
    description: 'Measurable B-BBEE & supplier development impact.',
    Icon: Zap,
  },
  {
    title: 'Quality',
    description: 'Bank/DFI-approved submissions – fewer rejections.',
    Icon: ShieldCheck,
  },
  {
    title: 'Speed',
    description: 'Submission in under a week – unmatched certainty.',
    Icon: Clock,
  },
  {
    title: 'Reach',
    description: 'Access to diverse funders & dealmakers.',
    Icon: Globe,
  },
];

export const PARTNERS: Partner[] = [
  { name: 'Nedbank CIB', website: 'https://www.nedbank.co.za', domain: 'nedbank.co.za' },
  { name: 'Absa', website: 'https://www.absa.co.za', domain: 'absa.co.za' },
  { name: 'Investec', website: 'https://www.investec.com', domain: 'investec.com' },
  { name: 'Grindrod Bank', website: 'https://www.grindrodbank.co.za', domain: 'grindrodbank.co.za' },
  { name: 'African Bank', website: 'https://www.africanbank.co.za', domain: 'africanbank.co.za' },
  { name: 'IDC', website: 'https://www.idc.co.za', domain: 'idc.co.za' },
  { name: 'NEF', website: 'https://www.nefcorp.co.za', domain: 'nefcorp.co.za' },
  { name: 'Crede Capital', website: 'https://credecapital.co.za', domain: 'credecapital.co.za' },
];