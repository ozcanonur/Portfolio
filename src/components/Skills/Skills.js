import React from 'react';

import ReactIcon from '../../assets/svg/react_icon.svg';
import ReduxIcon from '../../assets/svg/redux_icon.svg';
import HTMLCSSIcon from '../../assets/svg/htmlcss_icon.svg';
import SassIcon from '../../assets/svg/sass_icon.svg';
import MuiIcon from '../../assets/svg/mui_icon.svg';
import GatsbyIcon from '../../assets/svg/gatsby_icon.svg';
import IllustratorIcon from '../../assets/svg/ai_icon.svg';

import NodeIcon from '../../assets/svg/node_icon.svg';
import MongoIcon from '../../assets/svg/mongo_icon.svg';
import PostgresIcon from '../../assets/svg/postgres_icon.svg';
import DockerIcon from '../../assets/svg/docker_icon.svg';
import TypescriptIcon from '../../assets/svg/ts_icon.svg';
import SocketIcon from '../../assets/svg/socket_icon.svg';
import JestIcon from '../../assets/svg/jest_icon.svg';

import classes from './skills.module.scss';

const Skills = () => {
  const leftSkills = [
    {
      icon: ReactIcon,
      alt: 'react.js',
      name: 'React.js',
    },
    {
      icon: ReduxIcon,
      alt: 'redux',
      name: 'Redux',
    },
    {
      icon: HTMLCSSIcon,
      alt: 'html5 and css3',
      name: 'HTML5 / CSS3',
    },
    {
      icon: SassIcon,
      alt: 'sass',
      name: 'Sass',
    },
    {
      icon: MuiIcon,
      alt: 'material UI',
      name: 'Material UI',
    },
    {
      icon: GatsbyIcon,
      alt: 'gatsby.js',
      name: 'Gatsby.js',
    },
    {
      icon: IllustratorIcon,
      alt: 'adobe illustrator',
      name: 'Illustrator',
    },
  ];

  const rightSkills = [
    {
      icon: NodeIcon,
      alt: 'node.js',
      name: 'Node.js',
    },
    {
      icon: MongoIcon,
      alt: 'mongoDB',
      name: 'MongoDB',
    },
    {
      icon: PostgresIcon,
      alt: 'postgreSQL',
      name: 'PostgreSQL',
    },
    {
      icon: DockerIcon,
      alt: 'docker',
      name: 'Docker',
    },
    {
      icon: TypescriptIcon,
      alt: 'typescript',
      name: 'Typescript',
    },
    {
      icon: SocketIcon,
      alt: 'socket.io',
      name: 'Socket.io',
    },
    {
      icon: JestIcon,
      alt: 'jest',
      name: 'Jest',
    },
  ];

  return (
    <section className={classes.section}>
      <div className={classes.titleContainer}>
        <h1 className={classes.title}>Skills</h1>
      </div>
      <div className={classes.skillsContainer}>
        <div className={classes.leftSkillsContainer}>
          {leftSkills.map(({ icon, alt, name }, index) => (
            <div
              key={name}
              className={classes.leftSkill}
              style={{ transform: `translateX(${index * 16}px) rotate(-10deg)` }}
            >
              <img className={classes.skillIcon} src={icon} alt={alt} />
              <p className={classes.skillText}>{name}</p>
            </div>
          ))}
        </div>
        <div className={classes.rightSkillsContainer}>
          {rightSkills.map(({ icon, alt, name }, index) => (
            <div
              key={name}
              className={classes.rightSkill}
              style={{ transform: `translateX(-${index * 16}px) rotate(10deg)` }}
            >
              <p className={classes.skillText}>{name}</p>
              <img className={classes.skillIcon} src={icon} alt={alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
