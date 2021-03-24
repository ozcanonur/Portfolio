import pitdbImg from '../assets/img/pitdb_high.png';
import chemphoprologImg from '../assets/img/chemphoprolog.png';
import discordImg from '../assets/img/discord.png';
import heartspaceImg from '../assets/img/heartspace.png';

import JavascriptIcon from '../assets/svg/js.svg';
import ReactIcon from '../assets/svg/react_icon.svg';
import ReduxIcon from '../assets/svg/redux_icon.svg';
import SassIcon from '../assets/svg/sass_icon.svg';
import MuiIcon from '../assets/svg/mui_icon.svg';
import GatsbyIcon from '../assets/svg/gatsby_icon.svg';
import NetlifyIcon from '../assets/svg/netlify.svg';

import NodeIcon from '../assets/svg/node_icon.svg';
import TypescriptIcon from '../assets/svg/ts_icon.svg';
import MongoIcon from '../assets/svg/mongo_icon.svg';
import PostgresIcon from '../assets/svg/postgres_icon.svg';
import HerokuIcon from '../assets/svg/heroku.svg';
import SocketIcon from '../assets/svg/socket_icon.svg';
import JestIcon from '../assets/svg/jest_icon.svg';

export const projects = [
  {
    title: 'PITDB',
    description: `The bioinformatics team of Queen Mary University of London was looking to build a web portal for researchers so that they can showcase their findings from PIT (proteomics informed by transcriptomics) experiments. A strong online platform was needed to support the publication, and that's where I came in. PITDB includes many visualisations custom tailored for bioinformatics, such as confidence interval charts, interactive figures and the most challanging of all, a gene browser where users can browse through different transcripts to compare & contrast.`,
    img: pitdbImg,
    websiteUrl: 'http://pitdb.herokuapp.com/',
    githubUrl: 'https://github.com/ozcanonur/PITDB',
    skills: [
      {
        name: 'TypeScript',
        img: TypescriptIcon,
      },
      {
        name: 'React.js',
        img: ReactIcon,
      },
      {
        name: 'Redux',
        img: ReduxIcon,
      },
      {
        name: 'Material UI',
        img: MuiIcon,
      },
      {
        name: 'SASS',
        img: SassIcon,
      },
      {
        name: 'Node.js',
        img: NodeIcon,
      },
      {
        name: 'MongoDB',
        img: MongoIcon,
      },
      {
        name: 'Jest',
        img: JestIcon,
      },
      ,
      {
        name: 'Heroku',
        img: HerokuIcon,
      },
    ],
  },
  {
    title: 'Chemphoprolog',
    description: `The initial project I was hired for at Queen Mary University of London was to help analyse experimental phosphoproteomics data, discover novel findings and create a web portal. The most impressive part of the findings and the website turned out to be the pathway analysis, where users can browse through various novel kinase signaling pathways on the animated custom pathway visualisation and track the chain reactions with the help of explanations at every step.`,
    img: chemphoprologImg,
    websiteUrl: 'http://chemphoprolog.herokuapp.com/',
    githubUrl: 'https://github.com/ozcanonur/chemphoprolog',
    skills: [
      {
        name: 'TypeScript',
        img: TypescriptIcon,
      },
      {
        name: 'React.js',
        img: ReactIcon,
      },
      {
        name: 'Redux',
        img: ReduxIcon,
      },
      {
        name: 'Material UI',
        img: MuiIcon,
      },
      {
        name: 'SASS',
        img: SassIcon,
      },
      {
        name: 'Node.js',
        img: NodeIcon,
      },
      {
        name: 'PostgreSQL',
        img: PostgresIcon,
      },
      ,
      {
        name: 'Heroku',
        img: HerokuIcon,
      },
    ],
  },
  {
    title: 'Discord',
    description: `Among all my personal projects, this is my favorite. A clone of discord, an instant messaging and digital distribution platform designed for creating communities. Most gamers would know that discord is a part of our daily lives. The inspiration came from the desire to attempt to create something I use daily, along with learning real-time communication via sockets. It turned out to be quite challenging, especially with the time commitment needed while I was busy with my full-time job. Most of the important functionality is intact, check it out!`,
    img: discordImg,
    websiteUrl: 'http://ozcanonur-discord.herokuapp.com/',
    githubUrl: 'https://github.com/ozcanonur/discord-clone',
    skills: [
      {
        name: 'TypeScript',
        img: TypescriptIcon,
      },
      {
        name: 'React.js',
        img: ReactIcon,
      },
      {
        name: 'Redux',
        img: ReduxIcon,
      },
      {
        name: 'Material UI',
        img: MuiIcon,
      },
      {
        name: 'SASS',
        img: SassIcon,
      },
      {
        name: 'Node.js',
        img: NodeIcon,
      },
      {
        name: 'MongoDB',
        img: MongoIcon,
      },
      {
        name: 'Socket.io',
        img: SocketIcon,
      },
      {
        name: 'Heroku',
        img: HerokuIcon,
      },
    ],
  },
  {
    title: 'Heartspace',
    description: `A close friend was planning to start his own start-up company with the aim of helping couples develop healthier relationships. While he, himself had a lot of experience with mobile development, he was not confident with web. I volunteered to develop their website, Heartspace. The aim at the start was to just create a brochure website with good SEO and performance, but it turned out to be something much more than that. We added an interactive chat-based relationship test, which was then decided to become the MVP.`,
    img: heartspaceImg,
    websiteUrl: 'https://www.findheartspace.com/',
    githubUrl: 'https://github.com/ozcanonur/Heartspace',
    skills: [
      {
        name: 'JavaScript',
        img: JavascriptIcon,
      },
      {
        name: 'React.js',
        img: ReactIcon,
      },
      {
        name: 'Gatsby.js',
        img: GatsbyIcon,
      },
      {
        name: 'SASS',
        img: SassIcon,
      },
      {
        name: 'Node.js',
        img: NodeIcon,
      },
      {
        name: 'Heroku',
        img: HerokuIcon,
      },
      {
        name: 'Netlify',
        img: NetlifyIcon,
      },
    ],
  },
];
