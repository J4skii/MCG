import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string; // Changed from href to path for router
}

export interface Service {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export interface Stat {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string[];
  imageUrl?: string;
}

export interface DealData {
  name: string;
  value: number;
  category: string;
  status: string;
}

export interface Partner {
  name: string;
  website: string;
  domain: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  Icon: LucideIcon;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone?: string;
  type: 'entrepreneur' | 'funder';
  companyName?: string;
  regNumber?: string;
  fundSize?: string;
  isVerified: boolean;
  registrationDate: string;
  documents: string[];
  status: 'pending' | 'verified' | 'investor-ready';
}