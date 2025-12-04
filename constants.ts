import { 
  Banknote, 
  FileText, 
  TrendingUp, 
  Handshake, 
  ShieldCheck, 
  Zap, 
  Clock, 
  Globe 
} from 'lucide-react';
import { NavItem, Service, Stat, TeamMember, DealData, Partner } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', path: '#about' },
  { label: 'Services', path: '#services' },
  { label: 'Track Record', path: '#track-record' },
  { label: 'Team', path: '#team' },
  { label: 'Partners', path: '#partners' },
  { label: 'Contact', path: '#contact' },
];

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
    role: 'Managing Director (Ex-A.T Kearney)',
    description: [
      'Specialist in capital raising, deal packaging, and corporate advisory.',
      'Leads MCG’s funding pathways and strategic partnerships with DFIs, banks, and alternative lenders.'
    ]
  },
  {
    name: 'Joshua Anderson',
    role: 'Strategic Partnerships Director',
    description: [
      'Focus on commercial deal sourcing and placement.',
      'Drives MCG’s network expansion and execution of long-term partnerships.'
    ]
  },
  {
    name: 'LéJeay Anderson',
    role: 'Legal & Compliance Director',
    description: [
      'Focus on contract drafting, governance reviews, and due diligence.',
      'Ensures all packaged deals and client mandates are legally sound and regulator-ready.'
    ]
  },
];

export const DEALS: DealData[] = [
  { name: 'Halal Beef', value: 100, category: 'Funding', status: 'In Execution' },
  { name: 'Tourism', value: 200, category: 'Equity', status: 'In Execution' },
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
    description: 'Bank/DFI-approved submissions – fewer rejections, faster approvals.',
    Icon: ShieldCheck,
  },
  {
    title: 'Speed',
    description: 'Submission in under a week – unmatched submission certainty.',
    Icon: Clock,
  },
  {
    title: 'Reach',
    description: 'Access to diverse funders & dealmakers – placement across all types of deals.',
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