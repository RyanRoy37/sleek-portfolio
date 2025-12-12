/*
 * CUSTOMIZATION EXAMPLE
 *
 * Want to customize this portfolio for yourself? Here's how easy it is:
 *
 * 1. Update your personal info:
 *    name: "Your Name"
 *    title: "Your Professional Title"
 *    avatar: "/path/to/your/image.jpg"
 *
 * 2. Add your skills:
 *    skills: [
 *      { name: "Python", href: "https://python.org", component: "Python" }, // Note: You'd need to create Python component
 *      { name: "React", href: "https://react.dev", component: "ReactIcon" },
 *      { name: "Node.js", href: "https://nodejs.org", component: "NodeJs" },
 *    ]
 *
 * 3. Write your description using the template:
 *    template: "I'm a **passionate developer** who loves building apps with {skills:0} and {skills:1}. I specialize in **web development** and enjoy working with {skills:2}."
 *
 * 4. Update your social links:
 *    Just change the href values to your own social media profiles
 *
 * That's it! Your portfolio will automatically update with your information.
 */
import Github from '@/components/svgs/Github';
import LinkedIn from '@/components/svgs/LinkedIn';
import Mail from '@/components/svgs/Mail';
import X from '@/components/svgs/X';
import ExpressJs from '@/components/technologies/ExpressJs';
import FastAPI from '@/components/technologies/FastAPI';
import Java from '@/components/technologies/Java';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Python from '@/components/technologies/Python';
import ReactIcon from '@/components/technologies/ReactIcon';
// Technology Components

// Component mapping for skills
export const skillComponents = {
  ReactIcon: ReactIcon,
  PostgreSQL: PostgreSQL,
  NodeJs: NodeJs,
  MongoDB: MongoDB,
  JavaScript: JavaScript,
  Python: Python,
  FastAPI: FastAPI,
  ExpressJs: ExpressJs,
  Java: Java,
};

export const heroConfig = {
  // Personal Information
  name: 'Ryan',
  title: 'A Software developer (Backend).',
  avatar: '/assets/logo.png',

  // Skills Configuration
  skills: [
     {
      name: 'Python',
      href: 'https://www.python.org/',
      component: 'Python',
    },
     {
      name: 'JavaScript',
      href: 'https://javascript.info/',
      component: 'JavaScript',
    },
    {
      name: 'Express.js',
      href: 'https://expressjs.com/',
      component: 'ExpressJs',
    },
    {
      name: 'FastAPI',
      href: 'https://fastapi.tiangolo.com/',
      component: 'FastAPI',
    },
    {
      name: 'PostgreSQL',
      href: 'https://www.postgresql.org/',
      component: 'PostgreSQL',
    },
  ],

  // Description Configuration
  description: {
    template:
      'I build efficient software using {skills:0}, {skills:1}, {skills:2}, {skills:3} and {skills:4}. With a focus on <b>Software Security</b>. Enthusiastic about <b>Fintech</b>, driven by the potential in the field.',
  },

  // Buttons Configuration
  buttons: [
    {
      variant: 'outline',
      text: 'Resume / CV',
      href: '/resume',
      icon: 'CV',
    },
    {
      variant: 'default',
      text: 'Get in touch',
      href: '/contact',
      icon: 'Chat',
    },
  ],
};

// Social Links Configuration
export const socialLinks = [
  {
    name: 'X',
    href: 'https://x.com/RyanRoy37',
    icon: <X />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ryan-roy-777791227/',
    icon: <LinkedIn />,
  },
  {
    name: 'Github',
    href: 'https://github.com/RyanRoy37',
    icon: <Github />,
  },
  {
    name: 'Email',
    href: 'mailto:jryanroy37@gmail.com',
    icon: <Mail />,
  },
];
