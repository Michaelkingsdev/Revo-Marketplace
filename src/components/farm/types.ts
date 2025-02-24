import { StaticImageData } from 'next/image';

export interface FarmLocation {
  latitude: number;
  longitude: number;
  address: string;
  city: string;
  state: string;
  country: string;
}

export interface FarmCertification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate: string;
  status: 'active' | 'expired' | 'pending';
  documentUrl?: string;
}

export interface FarmingMethod {
  type: string;
  description: string;
  sustainabilityScore: number;
}

export interface Crop {
  id: string;
  name: string;
  status: 'active' | 'planned' | 'harvested';
  plantingDate: string;
  expectedHarvestDate: string;
  actualHarvestDate?: string;
  quantity: number;
  unit: string;
}

export interface Infrastructure {
  equipment: Array<{
    name: string;
    quantity: number;
    status: 'operational' | 'maintenance' | 'retired';
  }>;
  storage: Array<{
    type: string;
    capacity: number;
    unit: string;
    currentUtilization: number;
  }>;
  processing: Array<{
    facility: string;
    capacity: number;
    capabilities: string[];
  }>;
}

export interface SustainabilityMetrics {
  waterUsage: {
    amount: number;
    unit: string;
    period: string;
  };
  carbonFootprint: {
    amount: number;
    unit: string;
    period: string;
  };
  renewableEnergy: {
    percentage: number;
    sources: string[];
  };
  wasteManagement: {
    recyclingRate: number;
    compostingRate: number;
    methods: string[];
  };
}

export interface FarmImage {
  id: string;
  url: string | StaticImageData;
  alt: string;
  caption?: string;
}

export interface FarmProfileProps {
  id: string;
  name: string;
  establishedDate: string;
  location: FarmLocation;
  totalArea: {
    value: number;
    unit: string;
  };
  images: FarmImage[];
  certifications: FarmCertification[];
  farmingMethods: FarmingMethod[];
  activeCrops: Crop[];
  infrastructure: Infrastructure;
  sustainabilityMetrics: SustainabilityMetrics;
  contactInfo: {
    phone: string;
    email: string;
    website?: string;
  };
}

export interface FarmGalleryProps {
  images: FarmImage[];
  onImageClick?: (image: FarmImage) => void;
}

export interface FarmDetailsProps {
  farmingMethods: FarmingMethod[];
  infrastructure: Infrastructure;
}

export interface FarmMetricsProps {
  crops: Crop[];
  sustainabilityMetrics: SustainabilityMetrics;
}

export interface FarmCertificationsProps {
  certifications: FarmCertification[];
} 