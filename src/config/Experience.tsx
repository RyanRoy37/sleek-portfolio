import AWS from '@/components/technologies/AWS';
import BootStrap from '@/components/technologies/BootStrap';
import CSS from '@/components/technologies/CSS';
import Excel from '@/components/technologies/Excel';
import ExpressJs from '@/components/technologies/ExpressJs';
import Html from '@/components/technologies/Html';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Postman from '@/components/technologies/Postman';
import PowerBI from '@/components/technologies/PowerBI';
import Python from '@/components/technologies/Python';
import ReactIcon from '@/components/technologies/ReactIcon';;
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: true,
    company: 'Onsurity Technologies Pvt. Ltd.',
    position: 'Intern Tech',
    location: 'Bangalore, India (On-Site)',
    image: '/company/onsurity.png',
    description: [],
    startDate: 'January 2026',
    endDate: 'Present',
    technologies: [
      {
        name: 'NodeJS',
        href: 'https://nodejs.com/',
        icon: <NodeJs />,
      },
      {
        name: 'ExpressJs',
        href: 'https://expressjs.com/',
        icon: <ExpressJs />,
      },
      {
        name: 'JavaScript',
        href: 'https://www.javascript.com/',
        icon: <JavaScript />,
      },

    ],
    website: 'https://www.onsurity.com',
    x: 'https://x.com/onsurity',
    linkedin: 'https://www.linkedin.com/company/onsurity/posts',
  },

  {
    isCurrent: false,
    company: 'Aditya Birla Fashion & Retail Ltd.',
    position: 'Data Analyst Intern',
    location: 'Bangalore, India (OnSite)',
    image: '/company/abfrl.png',
    description: [
      '*Worked on an "Employee Attrition Analysis" project, where my responsibility was to develop an automated dashboard for monthly HR reports utilizing Excel.',
      '* Cleaned company employee data, employed pivot tables to create informative plots, and integrated them into a centralized dashboard. Extracted meaningful insights from the Company Attrition data and submitted a report of insights from the data, receiving acknowledgment from the Head of HR. ',
    ],
    startDate: 'June 2023',
    endDate: 'July 2025',
    technologies: [
      
      {
        name: 'Python',
        href: 'https://www.python.org/',
        icon: <Python />,
      },
      {
        name: 'PowerBI',
        href: 'https://powerbi.com',
        icon: <PowerBI />,
      },
      {
        name: 'Excel',
        href: 'https://excel.cloud.microsoft',
        icon: <Excel />,
      },

    ],
    website: 'https://www.abfrl.com',
  },

];
