import uber from 'assets/icons/uber_com_logo.webp';
import uberMin from 'assets/icons/uber.min.webp';
import university from 'assets/icons/university.webp';
import universityMin from 'assets/icons/university.min.webp';
import casumo from 'assets/icons/casumo_logo.webp';
import casumoMin from 'assets/icons/casumo.min.webp';
import lightitglobal from 'assets/icons/light_it_logo.webp';
import lightitglobalMin from 'assets/icons/light.min.webp';
import blanco from 'assets/icons/blanco_services_logo.webp';
import blancoMin from 'assets/icons/blanco.min.webp';

const details = {
  name: {
    first: 'Koen',
    last: 'Lee',
    nickname: 'Koen',
  },
  education: [
    {
      school: 'University of Amsterdam',
      url: 'https://www.uva.nl/en',
      icon: university,
      iconMin: universityMin,
      location: 'Amsterdam, North Holland, Netherlands',
      degree: 'Bachelor',
      major: 'Computer Science',
      start: '2012',
      end: '2016',
    },
  ],
  experience: [
    {
      company: 'Uber',
      url: 'https://www.uber.com/gb/en/',
      icon: uber,
      iconMin: uberMin,
      location: 'Amsterdam, North Holland, Netherlands',
      contract: 'Contract',
      position: 'Senior Software Engineer',
      start: 'Jan 2022',
      end: 'Sep 2024',
      description: [
        'Built the MVP app using react-native and expo and ticket dashboard using react.',
        'Implemented UI designs of several game ideas to pixel perfect and optimized UI components.',
        'Used redux and react context for sharing the global states.',
        'Used react hooks for state management and ui optimization.',
        'Defined and used custom hooks and used apollo-graphql for backend integration.',
        'Implemented beautiful animations using react-spring/native.',
        'Collaborated with a cross-functional team using tools such as Github, Jira, and Discord, ensuring effective communication and streamlined development processes.',
      ],
      skills: [
        'React',
        'React Native',
        'Expo',
        'Angular',
        'VueJS',
        'Apollo',
        'NodeJS',
        'AWS',
        'GraphQL',
      ],
    },
    {
      company: 'Casumo',
      url: 'https://www.casumo.com/en/',
      icon: casumo,
      iconMin: casumoMin,
      location: 'Warsaw, Mazowiekie, Poland',
      contract: 'Full-time',
      position: 'Senior Software Engineer',
      start: 'Apr 2019',
      end: 'Dec 2021',
      description: [
        'Developed several web applications using React, Next.js, and TypeScript.',
        'Clarified project goals by creating wireframes, use-cases, and information architectures.',
        'Implemented web-accessible and mobile-optimized UI using Material-UI, TailWindCSS, Bootstrap5, Emotion, etc.',
        'CMS experience with Storyblok and contentful.',
        'Built animations of page transition, menus, and slideout using react-spring, gsap, and framer motion.',
        'Mentored advanced TDD practices and set the standards for the team members.',
        'Reduced initial page load speed by 60% with incremental SSG and partial hydration.',
        'Integrated Storm, Clerk, and Unifaun for checkout, product recommendations, etc.',
      ],
      skills: [
        'TypeScript',
        'React',
        'React Native',
        'VueJS',
        'NextJS',
        'NodeJS',
        'TailWindCSS',
        'Material UI',
        'GSAP',
      ],
    },
    {
      company: 'Light IT Global',
      url: 'https://light-it.net/',
      icon: lightitglobal,
      iconMin: lightitglobalMin,
      location: 'Amsterdam, North Holland, Netherlands',
      contract: 'Contract',
      position: 'Software Engineer',
      start: 'Oct 2017',
      end: 'Apr 2019',
      description: [
        'Built the Next.js based React Front-end and Node/DynamoDB/Lambda based serverless functions.',
        'Used AWS CloudFormation for seamless provisioning of the backend service.',
        'Set up AWS Cloudwatch logs, Budget alerts, Cognito, and AWS WAF for the back-end',
        'Built the mobile app in React Native, tested and published to iOS and Android stores.',
        'Worked on reusing React web components for React Native mobile app.',
        'Used React Native SVG library to fully rely on SVG images.',
        'Used React Navigation for navigation and Styled Components for the UI.',
        'Used Yarn workspace to build the monorepo of the backend, web frontend, and mobile app.',
      ],
      skills: [
        'NextJS',
        'React',
        'NodeJS',
        'DynamoDB',
        'Lambda',
        'AWS CloudFormation',
        'AWS Cloudwatch',
        'React Native',
        'iOS/Android',
      ],
    },
    {
      company: 'Blanco WealthTech',
      url: 'https://www.useblanco.com/',
      icon: blanco,
      iconMin: blancoMin,
      location: 'Amsterdam, Noth Holland, Netherlands',
      contract: 'Contract',
      position: 'Full Stack Engineer',
      start: 'Nov 2016',
      end: 'Sep 2017',
      description:
        [
          'Developed a web version of the application using React.',
          'Implement fully responsive pixel-perfect cross-platform designs in React and SASS.',
          'Refactored an application due to issues with performance and looming bottlenecks.',
          'Oversaw code quality and code review process in the engineering team.',
          'Built mobile-responsive CSS components and organized the front-end with them.',
        ],

      skills: [
        'NodeJS',
        'Docker',
        'GitHub CI/CD',
        'React',
        'Bootstrap',
      ],
    },
  ],
  languages: [
    {
      name: 'Vietnamese',
      level: 'C2',
      native: true,
    },
    {
      name: 'English',
      level: 'C1',
    },
  ],
  contact: {
    address: 'Barcelona, España',
    email: 'contact@bsodium.fr',
    phone: '+33 7 83 79 29 25',
    website: 'https://www.bsodium.fr',
    linkedin: 'https://www.linkedin.com/in/koen-lee-uh0',
    github: 'https://www.github.com/bsodium',
    researchgate: 'https://www.researchgate.net/profile/Elliot-Negrel-Jerzy',
    gitlab: 'https://www.gitlab.com/bsodium',
    deviantart: 'https://www.deviantart.com/bsodium',
  },
};

export default details;
