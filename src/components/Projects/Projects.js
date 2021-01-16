import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';

import Sphere from '../../assets/svg/sphere.svg';
import SphereContainer from '../../assets/svg/sphere_container.svg';
import SphereWithContainer from '../../assets/svg/sphere_with_container.svg';
import WavyLines from '../../assets/svg/wavy_lines.svg';

import UrlIcon from '../../assets/svg/url_icon.svg';
import GitHubIcon from '../../assets/svg/github_icon.svg';

import { projects } from '../../variables/projects';
import { redirectToGitHub, convertRemToPixels } from '../../utils';

import classes from './projects.module.scss';

const Projects = () => {
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
    let last_known_scroll_position = 0;
    let ticking = false;

    const moveSphere = (scroll_pos) => {
      if (!sphereRef.current || !sphereContainerRef.current || !sectionRef.current) return;

      const containerPosition = sphereContainerRef.current.offsetTop;
      const startPosition = sectionRef.current.offsetTop - convertRemToPixels(20);

      const rotateAmount = (scroll_pos - startPosition) / 4;

      if (scroll_pos <= startPosition) {
        setProgressDone(false);
        sphereRef.current.style.display = 'inherit';
        sphereRef.current.style.transform = `translate(-50%, -50%) rotate(0)`;
        sphereRef.current.style.opacity = 1;
      } else if (scroll_pos + convertRemToPixels(33) > containerPosition) {
        setProgressDone(true);
        sphereRef.current.style.display = 'none';
      } else {
        setProgressDone(false);
        sphereRef.current.style.display = 'inherit';
        sphereRef.current.style.top = `calc(50% + ${scroll_pos - startPosition}px)`;
        sphereRef.current.style.transform = `translate(-50%, -50%) rotate(${rotateAmount}deg)`;
        sphereRef.current.style.opacity = 0.7;
      }
    };

    window.addEventListener('scroll', () => {
      last_known_scroll_position = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          moveSphere(last_known_scroll_position);
          ticking = false;
        });

        ticking = true;
      }
    });

    return () => {
      window.removeEventListener('scroll', moveSphere);
    };
  }, []);

  return (
    <section className={classes.section} id='projects' ref={sectionRef}>
      <div style={{ position: 'relative' }}>
        <div className={classes.titleContainer}>
          <img className={classes.sphere} src={Sphere} alt='sphere' ref={sphereRef} />
          <h1 className={classes.title}>Projects</h1>
        </div>
      </div>
      <div className={classes.projectsContainer}>
        {projects.map(({ title, description, img, githubUrl, websiteUrl }) => (
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
              <div className={classes.projectLinksContainer}>
                <div className={classes.projectLink}>
                  <button
                    className={classes.projectLinkText}
                    onClick={() => {
                      window.open(websiteUrl, '_blank');
                    }}
                  >
                    View website
                  </button>
                  <img className={classes.projectLinkIcon} src={UrlIcon} alt='view pitdb website' />
                </div>
                <div className={classes.projectLink}>
                  <button
                    className={classes.projectLinkText}
                    onClick={() => {
                      window.open(githubUrl, '_blank');
                    }}
                  >
                    View source
                  </button>
                  <img className={classes.projectLinkIcon} src={GitHubIcon} alt='view pitdb source' />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={classes.projectsFooter}>
        <button onClick={redirectToGitHub}>And more on GitHub</button>
        <img className={classes.footerGitHub} src={GitHubIcon} alt='github link' />
      </div>
      <img
        className={progressDone ? classes.sphereWithContainer : classes.sphereContainer}
        src={progressDone ? SphereWithContainer : SphereContainer}
        alt='sphere container'
        ref={sphereContainerRef}
      />
      <img className={classes.wavyLines} src={WavyLines} alt='section separator lines' />
    </section>
  );
};

export default Projects;
