import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import { Link } from 'gatsby';

import Sphere from '../../assets/svg/sphere.svg';
import SphereContainer from '../../assets/svg/sphere_container.svg';
import SphereWithContainer from '../../assets/svg/sphere_with_container.svg';
import WavyLines from '../../assets/svg/wavy_lines.svg';
import WhiteSphereLine from '../../assets/svg/white_sphere_line.svg';

import UrlIcon from '../../assets/svg/url_icon.svg';
import GitHubIcon from '../../assets/svg/github_icon.svg';

import { projects } from '../../variables/projects';
import { redirectToGitHub } from '../../utils';

import classes from './projects.module.scss';

const Projects = () => {
  const [sphereRotation, setSphereRotation] = useState(0);
  const [sphereOpacity, setSphereOpacity] = useState(1);
  const [progressStarted, setProgressStarted] = useState(false);
  const [progressDone, setProgressDone] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const sphereRef = useRef(null);
  const sphereContainerRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const sphere = sphereRef.current;
    const sphereContainer = sphereContainerRef.current;
    const section = sectionRef.current;

    const moveSphere = () => {
      if (!sphere || !sphereContainer || !section) return;

      // const aboveSkills = window.pageYOffset < section.getBoundingClientRect().top + window.pageYOffset - window.innerHeight / 2;
      const inProjects =
        window.pageYOffset >
        section.getBoundingClientRect().top + section.offsetHeight / 2 + window.pageYOffset - window.innerHeight / 2;
      const belowProjects =
        window.pageYOffset >
        sphereContainer.getBoundingClientRect().top +
          window.pageYOffset +
          sphereContainer.offsetHeight / 4 -
          window.innerHeight / 2;

      const totalProgressHeight =
        sphereContainer.getBoundingClientRect().top +
        sphereContainer.offsetHeight / 4 -
        window.innerHeight / 2 -
        (section.getBoundingClientRect().top + section.offsetHeight / 4 - window.innerHeight / 2);

      const degreePerPx = 360 / totalProgressHeight;

      // We are done, below the projects
      if (belowProjects) {
        setProgressDone(true);
        setProgressStarted(false);
        setSphereOpacity(1);
      } // We are in the projects section, progress is ON
      else if (inProjects) {
        setProgressStarted(true);
        setProgressDone(false);

        const progressSoFar = -section.getBoundingClientRect().top - section.offsetHeight / 2 + window.innerHeight / 2;
        setSphereRotation(`${progressSoFar * degreePerPx}`);

        setSphereOpacity(0.8);
      }
      // We are above the projects section, progress didn't start yet
      else {
        setProgressStarted(false);
        setProgressDone(false);
        setSphereRotation(0);
        setSphereOpacity(1);
      }
    };

    window.addEventListener('optimizedScroll', moveSphere);

    return () => {
      window.removeEventListener('optimizedScroll', moveSphere);
    };
  }, []);

  return (
    <section className={classes.section} id='projects'>
      <div style={{ position: 'relative' }} ref={sectionRef}>
        {!progressDone ? (
          <img
            className={classes.sphere}
            src={Sphere}
            alt='sphere'
            ref={sphereRef}
            style={{
              position: progressStarted ? 'fixed' : 'absolute',
              transform: `translate(-50%, -50%) rotate(${sphereRotation}deg)`,
              opacity: sphereOpacity,
            }}
          />
        ) : null}
        <div className={classes.titleContainer}>
          <h2 className={classes.title}>Projects</h2>
        </div>
      </div>
      <div className={classes.projectsContainer}>
        {projects.map(({ title, description, img, githubUrl, websiteUrl, skills }) => (
          <div key={title} className={classes.project} data-aos='fade-in'>
            <div className={classes.projectVisual}>
              <img
                className={classes.projectImg}
                src={img}
                alt={title}
                style={{ height: title === 'Chemphoprolog' ? '16vw' : '18vw' }}
              />
            </div>
            <div className={classes.projectDescriptionContainer}>
              <h3 className={classes.projectTitle}>{title}</h3>
              <article className={classes.projectDescription}>{description}</article>
              <div className={classes.skills}>
                {skills.map(({ img, name }) => (
                  <img key={name} className={classes.skill} src={img} alt={name} title={name} />
                ))}
              </div>
              <div className={classes.projectLinksContainer}>
                <div className={classes.projectLink}>
                  <a className={classes.projectLinkText} href={websiteUrl} target='_blank'>
                    View website
                  </a>
                  <img className={classes.projectLinkIcon} src={UrlIcon} alt='view pitdb website' />
                </div>
                <div className={classes.projectLink}>
                  <a className={classes.projectLinkText} href={githubUrl} target='_blank'>
                    View source
                  </a>
                  <img className={classes.projectLinkIcon} src={GitHubIcon} alt='view pitdb source' />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={classes.projectsFooter}>
        <span>And more on</span>
        <a href='https://github.com/ozcanonur' target='_blank'>
          GitHub
        </a>
        <a href='https://github.com/ozcanonur' target='_blank' style={{ border: 'none' }}>
          <img className={classes.footerGitHub} src={GitHubIcon} alt='github link' />
        </a>
      </div>
      <img
        className={progressDone ? classes.sphereWithContainer : classes.sphereContainer}
        src={progressDone ? SphereWithContainer : SphereContainer}
        alt='sphere container'
        ref={sphereContainerRef}
      />
      <img
        className={classes.whiteSphereLine}
        src={WhiteSphereLine}
        alt='sphere mount effect'
        style={{ opacity: progressDone ? 1 : 0 }}
      />
      <img
        className={`${classes.whiteSphereLine} ${classes.whiteSphereLine2}`}
        src={WhiteSphereLine}
        alt='sphere mount effect'
        style={{ opacity: progressDone ? 1 : 0 }}
      />
      <img
        className={`${classes.whiteSphereLine} ${classes.whiteSphereLine3}`}
        src={WhiteSphereLine}
        alt='sphere mount effect'
        style={{ opacity: progressDone ? 1 : 0 }}
      />
      <img className={classes.wavyLines} src={WavyLines} alt='section separator lines' />
    </section>
  );
};

export default Projects;
