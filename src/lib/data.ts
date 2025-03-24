
import { Property, User } from './types';

// Mock properties data
export const properties: Property[] = [
  {
    id: '1',
    title: 'Luxurious Beachfront Villa',
    description: 'An exclusive beachfront property with stunning ocean views and private access to the shore. This luxury villa features 5 bedrooms, 6 bathrooms, a private pool, and expansive entertainment areas.',
    location: 'Miami Beach, Florida',
    price: 2500000,
    currency: 'USD',
    totalShares: 1000,
    availableShares: 750,
    sharePrice: 2500,
    roi: 8.5,
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d'
    ],
    area: 5200,
    areaUnit: 'sq ft',
    features: ['Ocean View', 'Private Pool', 'Home Automation', 'Private Beach Access', 'Gated Community'],
    vendor: {
      id: 'v1',
      name: 'Luxury Real Estate Inc.',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      rating: 4.9,
      properties: 24
    },
    createdAt: '2023-10-12T10:30:00Z'
  },
  {
    id: '2',
    title: 'Modern Downtown Penthouse',
    description: 'Spectacular penthouse in the heart of the city with panoramic views. Features high ceilings, floor-to-ceiling windows, and state-of-the-art appliances.',
    location: 'Manhattan, New York',
    price: 4200000,
    currency: 'USD',
    totalShares: 2000,
    availableShares: 1200,
    sharePrice: 2100,
    roi: 7.2,
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
      'https://images.unsplash.com/photo-1560448204-603b3fc33ddc',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea'
    ],
    area: 3800,
    areaUnit: 'sq ft',
    features: ['City View', 'Concierge', 'Fitness Center', 'Rooftop Terrace', 'Wine Cellar'],
    vendor: {
      id: 'v2',
      name: 'Metropolitan Properties',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      rating: 4.7,
      properties: 18
    },
    createdAt: '2023-11-05T14:15:00Z'
  },
  {
    id: '3',
    title: 'Mountain Retreat Lodge',
    description: 'Secluded mountain lodge surrounded by pristine nature. Perfect for those seeking tranquility and outdoor adventures.',
    location: 'Aspen, Colorado',
    price: 1800000,
    currency: 'USD',
    totalShares: 800,
    availableShares: 600,
    sharePrice: 2250,
    roi: 9.1,
    images: [
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233',
      'https://images.unsplash.com/photo-1542718610-a1d656d1884c',
      'https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5'
    ],
    area: 4100,
    areaUnit: 'sq ft',
    features: ['Mountain View', 'Fireplace', 'Hot Tub', 'Hiking Trails', 'Ski Access'],
    vendor: {
      id: 'v3',
      name: 'Alpine Investments',
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
      rating: 4.8,
      properties: 12
    },
    createdAt: '2023-09-22T09:45:00Z'
  },
  {
    id: '4',
    title: 'Historic Brownstone',
    description: 'Beautifully restored 19th-century brownstone with modern amenities. Combines historic charm with contemporary comfort.',
    location: 'Boston, Massachusetts',
    price: 3100000,
    currency: 'USD',
    totalShares: 1500,
    availableShares: 900,
    sharePrice: 2067,
    roi: 6.8,
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea',
      'https://images.unsplash.com/photo-1600607688969-a5bfcd646154'
    ],
    area: 4500,
    areaUnit: 'sq ft',
    features: ['Historic Details', 'Garden', 'Modern Kitchen', 'High Ceilings', 'Hardwood Floors'],
    vendor: {
      id: 'v4',
      name: 'Heritage Properties',
      avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
      rating: 4.6,
      properties: 9
    },
    createdAt: '2023-10-30T11:20:00Z'
  }
];

// Mock user data
export const users: User[] = [
  {
    id: 'u1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
    role: 'customer'
  },
  {
    id: 'u2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '+1 (555) 987-6543',
    avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
    role: 'vendor'
  },
  {
    id: 'u3',
    name: 'Robert Johnson',
    email: 'robert.johnson@example.com',
    phone: '+1 (555) 456-7890',
    avatar: 'https://randomuser.me/api/portraits/men/13.jpg',
    role: 'channel_partner'
  },
  {
    id: 'u4',
    name: 'Emily Davis',
    email: 'emily.davis@example.com',
    phone: '+1 (555) 789-0123',
    avatar: 'https://randomuser.me/api/portraits/women/14.jpg',
    role: 'admin'
  }
];
