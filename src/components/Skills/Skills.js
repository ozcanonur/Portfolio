import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import { useMediaQuery } from 'react-responsive';

import Cube from '../../assets/svg/cube_3d.svg';
import CubeContainer from '../../assets/svg/cube_container.svg';
import CubeWithContainer from '../../assets/svg/cube_with_container.svg';
import HorizontalLines from '../../assets/svg/horizontal_lines.svg';

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
  const [progressDone, setProgressDone] = useState(false);

  const deviceIsBelow1200Width = useMediaQuery({ query: '(max-width: 1200px)' });

  const deviceIsBelow800Width = useMediaQuery({ query: '(max-width: 800px)' });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

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
      icon: TypescriptIcon,
      alt: 'typescript',
      name: 'Typescript',
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

  function convertRemToPixels(rem) {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
  }

  const cubeRef = useRef(null);
  const cubeContainerRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const moveCube = () => {
      if (!cubeRef.current || !cubeContainerRef.current || !sectionRef.current || deviceIsBelow800Width) return;

      const containerPosition = cubeContainerRef.current.offsetTop;
      const startPosition = sectionRef.current.offsetTop - convertRemToPixels(20) - 200;

      const rotateAmount = (window.pageYOffset - startPosition) / 4;

      if (window.pageYOffset <= startPosition) {
        setProgressDone(false);
        cubeRef.current.style.display = 'inherit';
        cubeRef.current.style.transform = `translate(-50%, -50%) rotate(0)`;
      } else if (containerPosition + startPosition - 50 < window.pageYOffset) {
        setProgressDone(true);
        cubeRef.current.style.display = 'none';
      } else {
        setProgressDone(false);
        cubeRef.current.style.display = 'inherit';
        cubeRef.current.style.top = `calc(50% + ${window.pageYOffset - startPosition}px)`;
        cubeRef.current.style.transform = `translate(-50%, -50%) rotate(${rotateAmount}deg)`;
      }
    };

    window.addEventListener('scroll', moveCube);

    return () => {
      window.removeEventListener('scroll', moveCube);
    };
  }, []);

  return (
    <section className={classes.section} id='skills' data-aos='fade-in' ref={sectionRef}>
      <div
        style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img className={classes.cube} src={Cube} alt='cube' ref={cubeRef} />
        <div className={classes.titleContainer}>
          <h1 className={classes.title}>Skills</h1>
        </div>
      </div>
      <div className={classes.skillsContainer}>
        <div className={classes.skills}>
          {leftSkills.map(({ icon, alt, name }, index) => (
            <div
              key={name}
              className={classes.skill}
              style={{
                transform: deviceIsBelow1200Width ? 'rotate(0)' : `translateX(${index * 16}px) rotate(-10deg)`,
              }}
            >
              <img className={classes.skillIcon} src={icon} alt={alt} />
              <p className={classes.skillText}>{name}</p>
            </div>
          ))}
        </div>
        <div className={`${classes.skills} ${classes.rightSkills}`}>
          {rightSkills.map(({ icon, alt, name }, index) => (
            <div
              key={name}
              className={classes.skill}
              style={{
                flexDirection: deviceIsBelow800Width ? 'row-reverse' : 'row',
                justifyContent: deviceIsBelow800Width ? 'flex-start' : 'flex-end',
                transform: deviceIsBelow1200Width ? 'rotate(0)' : `translateX(${index * -16}px) rotate(10deg)`,
              }}
            >
              <p>{name}</p>
              <img
                src={icon}
                alt={alt}
                style={{
                  transform: ['Node.js', 'Docker', 'MongoDB'].includes(name) ? 'scale(1.3)' : 'none',
                  marginRight: deviceIsBelow800Width ? '1.4rem' : '0',
                }}
              />
            </div>
          ))}
        </div>
      </div>
      {!deviceIsBelow800Width ? (
        <img
          className={classes.cubeContainer}
          src={progressDone ? CubeWithContainer : CubeContainer}
          alt='cube container'
          ref={cubeContainerRef}
        />
      ) : (
        <img className={classes.horizontalLines} src={HorizontalLines} alt='section seperator lines' />
      )}
    </section>
  );
};

export default Skills;
