import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';

import Cube from '../../assets/svg/cube_3d.svg';
import CubeContainer from '../../assets/svg/cube_container.svg';
import CubeWithContainer from '../../assets/svg/cube_with_container.svg';
import HorizontalLines from '../../assets/svg/horizontal_lines.svg';

import classes from './skills.module.scss';

import { getOffset } from '../../utils';
import { leftSkills, rightSkills } from '../../variables/skills';

const Skills = () => {
  const [cubeRotation, setCubeRotation] = useState(0);
  const [progressStarted, setProgressStarted] = useState(false);
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

  // offsetTop > relative to parent
  // getBoundingClientRect() > relative to viewport
  // getBoundingClientRect() + window.pageYOffset > relative to window

  useEffect(() => {
    const cube = cubeRef.current;
    const cubeContainer = cubeContainerRef.current;
    const section = sectionRef.current;

    const moveCube = () => {
      if (!cube || !cubeContainer || !section) return;

      // const aboveSkills = window.pageYOffset < section.getBoundingClientRect().top + window.pageYOffset - window.innerHeight / 2;
      const inSkills =
        window.pageYOffset >
        section.getBoundingClientRect().top + section.offsetHeight / 2 + window.pageYOffset - window.innerHeight / 2;
      const belowSkills =
        window.pageYOffset >
        cubeContainer.getBoundingClientRect().top + window.pageYOffset + cubeContainer.offsetHeight / 2 - window.innerHeight / 2;

      const totalProgressHeight =
        cubeContainer.getBoundingClientRect().top +
        cubeContainer.offsetHeight / 2 -
        window.innerHeight / 2 -
        (section.getBoundingClientRect().top + section.offsetHeight / 2 - window.innerHeight / 2);

      const degreePerPx = 360 / totalProgressHeight;

      // We are done, below the skills
      if (belowSkills) {
        setProgressDone(true);
        setProgressStarted(false);
      } // We are in the skills section, progress is ON
      else if (inSkills) {
        setProgressStarted(true);
        setProgressDone(false);

        const progressSoFar = -section.getBoundingClientRect().top - section.offsetHeight / 2 + window.innerHeight / 2;
        setCubeRotation(`${progressSoFar * degreePerPx}`);
      }
      // We are above the skills section, progress didn't start yet
      else {
        setProgressStarted(false);
        setProgressDone(false);
        setCubeRotation(0);
      }
    };

    window.addEventListener('optimizedScroll', moveCube);

    return () => {
      window.removeEventListener('optimizedScroll', moveCube);
    };
  }, []);

  return (
    <section className={classes.section} id='skills' data-aos='fade-in'>
      <div
        style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        ref={sectionRef}
      >
        {!progressDone ? (
          <img
            className={classes.cube}
            src={Cube}
            alt='cube'
            ref={cubeRef}
            style={{
              position: progressStarted ? 'fixed' : 'absolute',
              transform: `translate(-50%, -50%) rotate(${cubeRotation}deg)`,
            }}
          />
        ) : null}
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
