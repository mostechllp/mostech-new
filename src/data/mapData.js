import dubaiUaeImg from '../assets/map/dubai&uae.png';
import africaImg from '../assets/map/africa.png';
import keralaImg from '../assets/map/kerela.png';
import europeUkImg from '../assets/map/europe&uk.png';
import cisImg from '../assets/map/cls.png';

export const pinTypes = {
  office: {
    label: 'Corporate Headquarters',
    color: '#0d6efd',
    bg: '#eff6ff',
    border: '#bfdbfe'
  },
  regional: {
    label: 'Regional Office',
    color: '#10b981',
    bg: '#ecfdf5',
    border: '#a7f3d0'
  },
  support: {
    label: 'Global Support Desk',
    color: '#0284c7',
    bg: '#f0f9ff',
    border: '#bae6fd'
  }
};

export const regionsData = [
  {
    id: 'uae',
    label: 'Dubai & UAE',
    subtitle: 'Middle East Regional Hub & Global Headquarters',
    image: dubaiUaeImg,
    badge: 'Middle East Hub',
    facilities: [
      {
        id: 'uae-hq',
        type: 'office',
        badge: 'Corporate Headquarters',
        title: 'Mostech Global Headquarters',
        address: 'Bay Square Business Tower, Business Bay, Dubai, UAE',
        phone: '+971 585792020',
        email: 'info@mostech.ae',
        city: 'Dubai, UAE'
      },
      {
        id: 'uae-ksa',
        type: 'regional',
        badge: 'Regional Office',
        title: 'Middle East Regional Office',
        address: 'Al Khabara, Jeddah, Saudi Arabia',
        phone: '+966 53 574 4308',
        email: 'support@mostech.ae',
        city: 'Jeddah, Saudi Arabia'
      }
    ]
  },
  {
    id: 'kerala',
    label: 'India (Kerala)',
    subtitle: 'R&D Center & Regional Operations Hubs',
    image: keralaImg,
    badge: 'R&D & Engineering Hub',
    facilities: [
      {
        id: 'india-calicut',
        type: 'regional',
        badge: 'Regional Office',
        title: 'HiLite Business Park Office',
        address: 'HiLite Business Park, Thondayad Bypass, Calicut, Kerala, India',
        phone: '+91 8547557283',
        email: 'india@mostech.ae',
        city: 'Calicut, Kerala'
      },
      {
        id: 'india-kannur',
        type: 'regional',
        badge: 'Regional Office',
        title: 'KVR Tower Regional Office',
        address: 'KVR Tower, Caltex, Kannur, Kerala, India',
        phone: '+91 8547557283',
        email: 'support@mostech.ae',
        city: 'Kannur, Kerala'
      }
    ]
  },
  {
    id: 'europe',
    label: 'Europe & UK',
    subtitle: 'Strategic Corporate & Tech Partnership Presence',
    image: europeUkImg,
    badge: 'European Enterprise Hub',
    facilities: [
      {
        id: 'europe-hq',
        type: 'office',
        badge: 'Global Headquarters',
        title: 'Mostech Global Headquarters',
        address: 'Bay Square Business Tower, Business Bay, Dubai, UAE',
        phone: '+971 585792020',
        email: 'info@mostech.ae',
        city: 'Dubai, UAE'
      },
      {
        id: 'europe-support',
        type: 'support',
        badge: 'International Client Desk',
        title: 'Europe & UK Client Services',
        address: 'Bay Square Business Tower, Business Bay, Dubai, UAE',
        phone: '+971 581730112',
        email: 'support@mostech.ae',
        city: 'Global Delivery'
      }
    ]
  },
  {
    id: 'africa',
    label: 'Africa',
    subtitle: 'Expanding Tech Infrastructure & Client Support',
    image: africaImg,
    badge: 'Pan-Africa Network',
    facilities: [
      {
        id: 'africa-hq',
        type: 'office',
        badge: 'Global Headquarters',
        title: 'Mostech Global Headquarters',
        address: 'Bay Square Business Tower, Business Bay, Dubai, UAE',
        phone: '+971 585792020',
        email: 'info@mostech.ae',
        city: 'Dubai, UAE'
      },
      {
        id: 'africa-support',
        type: 'support',
        badge: 'Pan-Africa Client Desk',
        title: 'Africa Regional Support Services',
        address: 'Bay Square Business Tower, Business Bay, Dubai, UAE',
        phone: '+971 581730112',
        email: 'support@mostech.ae',
        city: 'Global Delivery'
      }
    ]
  },
  {
    id: 'cis',
    label: 'CIS',
    subtitle: 'Regional Trade Hubs & Strategic Distribution Channels',
    image: cisImg,
    badge: 'CIS Regional Network',
    facilities: [
      {
        id: 'cis-hq',
        type: 'office',
        badge: 'Global Headquarters',
        title: 'Mostech Global Headquarters',
        address: 'Bay Square Business Tower, Business Bay, Dubai, UAE',
        phone: '+971 585792020',
        email: 'info@mostech.ae',
        city: 'Dubai, UAE'
      },
      {
        id: 'cis-support',
        type: 'support',
        badge: 'CIS Client Desk',
        title: 'CIS Regional Support Services',
        address: 'Bay Square Business Tower, Business Bay, Dubai, UAE',
        phone: '+971 581730112',
        email: 'support@mostech.ae',
        city: 'Global Delivery'
      }
    ]
  }
];
