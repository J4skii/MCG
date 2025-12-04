import { ProcessStep } from '../types';
import { 
  ClipboardCheck, 
  FileSearch, 
  Handshake, 
  Rocket, 
  UserCheck, 
  Briefcase, 
  Search,
  CheckCircle2
} from 'lucide-react';

export const ENTREPRENEUR_FLOW: ProcessStep[] = [
  {
    id: 1,
    title: 'Quick Registration',
    description: 'Create your profile and tell us about your business sector and funding needs.',
    Icon: UserCheck,
  },
  {
    id: 2,
    title: 'Business Assessment',
    description: 'We review your preliminary info to gauge readiness and fit for our mandates.',
    Icon: ClipboardCheck,
  },
  {
    id: 3,
    title: 'MCG Packaging',
    description: 'Our team structures your deal to meet DFI & Bank standards (Investor-Ready).',
    Icon: FileSearch,
  },
  {
    id: 4,
    title: 'Matchmaking',
    description: 'We present your packaged deal to our network of 20+ active capital partners.',
    Icon: Handshake,
  },
  {
    id: 5,
    title: 'Closing',
    description: 'Final deal structuring, due diligence support, and disbursement.',
    Icon: Rocket,
  },
];

export const FUNDER_FLOW: ProcessStep[] = [
  {
    id: 1,
    title: 'Partner Registration',
    description: 'Sign up as an institutional or private capital partner.',
    Icon: Briefcase,
  },
  {
    id: 2,
    title: 'Mandate Alignment',
    description: 'Define your investment criteria, risk appetite, and preferred sectors.',
    Icon: ClipboardCheck,
  },
  {
    id: 3,
    title: 'Deal Flow Access',
    description: 'Get exclusive access to pre-vetted, investor-ready opportunities.',
    Icon: Search,
  },
  {
    id: 4,
    title: 'Expression of Interest',
    description: 'Select deals and move quickly to due diligence with our support.',
    Icon: CheckCircle2,
  },
];