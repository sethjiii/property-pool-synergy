
export interface Property {
  id: string;
  title: string;
  description: string;
  location: string;
  price: number;
  currency: string;
  totalShares: number;
  availableShares: number;
  sharePrice: number;
  roi: number;
  images: string[];
  area: number;
  areaUnit: string;
  features: string[];
  vendor: Vendor;
  createdAt: string;
}

export interface Vendor {
  id: string;
  name: string;
  avatar?: string;
  rating: number;
  properties: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  role: 'customer' | 'vendor' | 'channel_partner' | 'admin';
}
