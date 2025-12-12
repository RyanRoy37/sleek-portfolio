import JavaScript from '@/components/technologies/JavaScript';
import ExpressJs from '@/components/technologies/ExpressJs';
import Github from '@/components/technologies/Github';
import MongoDB from '@/components/technologies/MongoDB';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import ReactIcon from '@/components/technologies/ReactIcon';
import { Project } from '@/types/project';
import FastAPI from '@/components/technologies/FastAPI';
import Docker from '@/components/technologies/Docker';  
import Python from '@/components/technologies/Python';  
import Redis from '@/components/technologies/Redis';  
import Kite from '@/components/technologies/Kite';
import Flutter from '@/components/technologies/Flutter';
import Dart from '@/components/technologies/Dart';
import Bert from '@/components/technologies/Bert';
import JMeter from '@/components/technologies/Jmeter';



export const projects: Project[] = [
  {
  title: 'SuperTrAId',
  description:
    'An AI-powered virtual trading and investment platform that allows users to backtest strategies using real-market data with virtual capital, featuring smart portfolios, SuperBundles, alerts, and LLM-guarded interactions.',
  image: '/project/supertraid.png',
  video: '#',
  link: '#',
  technologies: [
    { name: 'FastAPI', icon: <FastAPI key="fastapi" /> },
    { name: 'Python', icon: <Python key="python" /> },
    { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
    { name: 'Redis', icon: <Redis key="redis" /> },
    { name: 'Docker', icon: <Docker key="docker" /> },
    { name: 'Kite', icon: <Kite key="kite" /> },
    { name: 'NodeJs', icon: <NodeJs key="nodejs" /> },
    { name: 'ExpressJs', icon: <ExpressJs key="expressjs" /> },
    { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
    { name: 'React', icon: <ReactIcon key="react" /> },
    { name: 'GitHub', icon: <Github key="github" /> },
  ],
  github: 'https://github.com/RyanRoy37/SuperTrAId',
  live: '#',
  details: true,
  projectDetailsPageSlug: '/projects/supertraid',
  isWorking: false,
},
{
  title: 'Red-Tape',
  description:
    'A phishing detection system accessible via a browser plugin or web app that accurately identifies malicious websites using URL intelligence, certificate inspection, page content analysis, and behavioral monitoring.',
  image: '/project/redtape.png',
  video: '#',
  link: '#',
  technologies: [
    { name: 'Python', icon: <Python key="python" /> },
    { name: 'FastAPI', icon: <FastAPI key="fastapi" /> },
    { name: 'JavaScript', icon: <JavaScript key="js" /> },
  ],
  github: 'https://github.com/RyanRoy37/Red-Tape',
  live: '#',
  details: true,
  projectDetailsPageSlug: '/projects/redtape',
  isWorking: false,
},

  
  {
  title: 'HORUS 🦅',
  description:
    'Flutter-based offline bird identification app for bird watchers, using AI-powered image recognition to detect and classify bird species and provide detailed information on birds commonly found in Bengaluru.',
  image: '/project/horus.png',
  video: '',
  link: '',
  technologies: [
    { name: 'Flutter', icon: <Flutter key="flutter" /> },
    { name: 'Dart', icon: <Dart key="dart" /> },
  ],
  github: 'https://github.com/RyanRoy37/Horus',
  live: 'For development purposes only',
  details: true,
  projectDetailsPageSlug: '/projects/horus',
  isWorking: true,
},

  {
  title: 'LLM Guardrail Middleware',
  description:
    'Production-ready security middleware for Large Language Models that detects prompt injection, jailbreak attempts, banned words, and sensitive information before prompts reach the LLM.',
  image: '/project/llm-guardrail.png',
  video: '',
  link: '',
  technologies: [
    { name: 'FastAPI', icon: <FastAPI key="fastapi" /> },
    { name: 'Python', icon: <Python key="python" /> },
    { name: 'BERT ', icon: <Bert key="bert-tiny" /> },
    { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
  ],
  github: 'https://github.com/RyanRoy37/LLM-GuardRail-Middleware',
  live: 'For development purposes only',
  details: true,
  projectDetailsPageSlug: '/projects/llm-guardrail',
  isWorking: true,
},

  {
  title: 'Rate Limiting Algorithms',
  description:
    'FastAPI-based project implementing and benchmarking multiple API rate-limiting algorithms—Fixed Window, Sliding Window Counter, Token Bucket, and Leaky Bucket—to protect APIs against abuse, DoS-style traffic, and resource exhaustion.',
  image: '/project/ratelimiters.png',
  video: '',
  link: '',
  technologies: [
    { name: 'FastAPI', icon: <FastAPI key="fastapi" /> },
    { name: 'Python', icon: <Python key="python" /> },
    { name: 'Apache JMeter', icon: <JMeter key="jmeter" /> },
  ],
  github: 'https://github.com/RyanRoy37/Rate-Limiters',
  live: 'for development purposes only',
  details: true,
  projectDetailsPageSlug: '/projects/ratelimiters',
  isWorking: true,
}

];
