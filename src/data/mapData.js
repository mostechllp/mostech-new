import dubaiUaeImg from '../assets/map/dubai&uae.png';
import indiaImg from '../assets/map/india.png';
import ukImg from '../assets/map/Uk.png';
import saudiImg from '../assets/map/saudi.png';
import omanImg from '../assets/map/Oman.png';
import qatarImg from '../assets/map/Qatar.png';

export const pinTypes = {
  office: {
    label: 'Corporate Headquarters',
    color: '#0d6efd',
    bg: '#eff6ff',
    border: '#bfdbfe'
  },
  regional: {
    label: 'Regional Office',
    color: '#0d6efd',
    bg: '#eff6ff',
    border: '#bfdbfe'
  },
  support: {
    label: 'Global Support Desk',
    color: '#0284c7',
    bg: '#f0f9ff',
    border: '#bae6fd'
  },
  service: {
    label: 'Global Service Area',
    color: '#0284c7',
    bg: '#f0f9ff',
    border: '#bae6fd'
  }
};

export const regionsData = [
  {
    id: 'uae',
    label: 'UAE',
    subtitle: 'Head Office & Regional Operations Hub',
    image: dubaiUaeImg,
    badge: 'Corporate Headquarters',
    facilities: [
      {
        id: 'uae-dubai',
        type: 'office',
        badge: 'Head Office',
        title: 'Dubai Head Office',
        address: 'Business Bay, Dubai, United Arab Emirates',
        phone: '+971 58 579 2020',
        email: 'info@mostech.ae',
        city: 'Business Bay, Dubai'
      }
    ]
  },
  {
    id: 'kerala',
    label: 'India',
    subtitle: 'R&D Center & Regional Operations Hub',
    image: indiaImg,
    badge: 'R&D & Engineering Hub',
    facilities: [
      {
        id: 'india-calicut',
        type: 'regional',
        badge: 'R&D & Tech Center',
        title: 'Mostech India Development Center',
        address: 'Hilite Business Tower, Calicut, Keralam, India',
        phone: '+91 8547557283',
        email: 'info@mostech.in',
        city: 'Calicut, Keralam'
      }
    ]
  },
  {
    id: 'qatar',
    label: 'Qatar',
    subtitle: 'Enterprise Solutions & Global Service Area',
    image: qatarImg,
    badge: 'Global Service Area',
    facilities: [
      {
        id: 'qatar-lusail',
        type: 'service',
        badge: 'Global Service Area',
        title: 'Qatar Global Service Area',
        address: 'Lusail, Doha, State of Qatar',
        phone: '+974 5054 7557',
        email: 'support@mostech.ae',
        city: 'Lusail, Doha'
      }
    ]
  },
  {
    id: 'saudi',
    label: 'Saudi Arabia',
    subtitle: 'Middle East Commercial & Global Service Area',
    image: saudiImg,
    badge: 'Global Service Area',
    facilities: [
      {
        id: 'saudi-jeddah',
        type: 'service',
        badge: 'Global Service Area',
        title: 'Saudi Arabia Global Service Area',
        address: 'Jeddah, Meccah Province, Kingdom of Saudi Arabia',
        phone: '+966 53 574 4308',
        email: 'support@mostech.ae',
        city: 'Jeddah, Saudi Arabia'
      }
    ]
  },
  {
    id: 'oman',
    label: 'Oman',
    subtitle: 'Sultanate of Oman Global Service Area',
    image: omanImg,
    badge: 'Global Service Area',
    facilities: [
      {
        id: 'oman-seeb',
        type: 'service',
        badge: 'Global Service Area',
        title: 'Oman Global Service Area',
        address: 'Seeb, Muscat, Sultanate of Oman',
        phone: '+971 58 579 2020',
        email: 'support@mostech.ae',
        city: 'Seeb, Muscat'
      }
    ]
  },
  {
    id: 'uk',
    label: 'UK',
    subtitle: 'Strategic Technology & Global Service Area',
    image: ukImg,
    badge: 'Global Service Area',
    facilities: [
      {
        id: 'uk-london',
        type: 'service',
        badge: 'Global Service Area',
        title: 'UK Global Service Area',
        address: 'Tech City, East London, United Kingdom',
        phone: '+44 7466 523243',
        email: 'support@mostech.ae',
        city: 'East London, UK'
      }
    ]
  }
];
