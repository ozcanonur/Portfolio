import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';

import Cube from '../../assets/svg/cube_3d.svg';
import CubeContainer from '../../assets/svg/cube_container.svg';
import CubeWithContainer from '../../assets/svg/cube_with_container.svg';
import HorizontalLines from '../../assets/svg/horizontal_lines.svg';

import classes from './skills.module.scss';

import { convertRemToPixels } from '../../utils';
import { leftSkills, rightSkills } from '../../variables/skills';

const Skills = () => {
  const [progressDone, setProgressDone] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const cubeRef = useRef(null);
  const cubeContainerRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const moveCube = () => {
      if (!cubeRef.current || !cubeContainerRef.current || !sectionRef.current) return;

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
            <div key={name} className={classes.skill}>
              <img className={classes.skillIcon} src={icon} alt={alt} />
              <p className={classes.skillText}>{name}</p>
            </div>
          ))}
        </div>
        <div className={`${classes.skills} ${classes.rightSkills}`}>
          {rightSkills.map(({ icon, alt, name }, index) => (
            <div key={name} className={`${classes.skill} ${classes.rightSkill}`}>
              <p>{name}</p>
              <img
                src={icon}
                alt={alt}
                style={{
                  transform: ['Node.js', 'Docker', 'MongoDB'].includes(name) ? 'scale(1.3)' : 'none',
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <img
        className={classes.cubeContainer}
        src={progressDone ? CubeWithContainer : CubeContainer}
        alt='cube container'
        ref={cubeContainerRef}
      />
      <img className={classes.horizontalLines} src={HorizontalLines} alt='section seperator lines' />
    </section>
  );
};

export default Skills;
