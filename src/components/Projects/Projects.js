import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import { useMediaQuery } from 'react-responsive';

import Sphere from '../../assets/svg/sphere.svg';
import SphereContainer from '../../assets/svg/sphere_container.svg';
import SphereWithContainer from '../../assets/svg/sphere_with_container.svg';
import WavyLines from '../../assets/svg/wavy_lines.svg';

import UrlIcon from '../../assets/svg/url_icon.svg';
import GitHubIcon from '../../assets/svg/github_icon.svg';

import pitdbImg from '../../assets/img/pitdb.png';
import chemphoprologImg from '../../assets/img/chemphoprolog.png';
import discordImg from '../../assets/img/discord.png';
import heartspaceImg from '../../assets/img/heartspace.png';

import classes from './projects.module.scss';

const Projects = () => {
  const [progressDone, setProgressDone] = useState(false);

  const deviceIsBelow800Width = useMediaQuery({ query: '(max-width: 800px)' });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const projects = [
    {
      title: 'PITDB',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dicta nemo necessitatibus labore, impedit in
              maxime, sapiente nihil dolore quis sint quaerat nostrum voluptate inventore ab quam, eum mollitia cumque
              porro nesciunt possimus architecto sed expedita. Non consectetur maiores qui? Maxime a dolor autem quidem
              repellat explicabo quam recusandae, velit nulla accusantium alias eum quas aperiam ab earum perferendis
              veniam dicta at. Vel quae id eveniet tempore ex omnis eaque.`,
      img: pitdbImg,
      websiteUrl: 'http://pitdb.herokuapp.com/',
      githubUrl: 'https://github.com/ozcanonur/PITDB',
    },
    {
      title: 'Chemphoprolog',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dicta nemo necessitatibus labore, impedit in
              maxime, sapiente nihil dolore quis sint quaerat nostrum voluptate inventore ab quam, eum mollitia cumque
              porro nesciunt possimus architecto sed expedita. Non consectetur maiores qui? Maxime a dolor autem quidem
              repellat explicabo quam recusandae, velit nulla accusantium alias eum quas aperiam ab earum perferendis
              veniam dicta at. Vel quae id eveniet tempore ex omnis eaque.`,
      img: chemphoprologImg,
      websiteUrl: 'http://chemphoprolog.herokuapp.com/',
      githubUrl: 'https://github.com/ozcanonur/chemphoprolog',
    },
    {
      title: 'Discord',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dicta nemo necessitatibus labore, impedit in
              maxime, sapiente nihil dolore quis sint quaerat nostrum voluptate inventore ab quam, eum mollitia cumque
              porro nesciunt possimus architecto sed expedita. Non consectetur maiores qui? Maxime a dolor autem quidem
              repellat explicabo quam recusandae, velit nulla accusantium alias eum quas aperiam ab earum perferendis
              veniam dicta at. Vel quae id eveniet tempore ex omnis eaque.`,
      img: discordImg,
      websiteUrl: 'http://ozcanonur-discord.herokuapp.com/',
      githubUrl: 'https://github.com/ozcanonur/discord-clone',
    },
    {
      title: 'Heartspace',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dicta nemo necessitatibus labore, impedit in
              maxime, sapiente nihil dolore quis sint quaerat nostrum voluptate inventore ab quam, eum mollitia cumque
              porro nesciunt possimus architecto sed expedita. Non consectetur maiores qui? Maxime a dolor autem quidem
              repellat explicabo quam recusandae, velit nulla accusantium alias eum quas aperiam ab earum perferendis
              veniam dicta at. Vel quae id eveniet tempore ex omnis eaque.`,
      img: heartspaceImg,
      websiteUrl: 'https://www.findheartspace.com/',
      githubUrl: 'https://github.com/ozcanonur/Heartspace',
    },
  ];

  const redirectToGitHub = () => {
    window.open('https://github.com/ozcanonur', '_blank');
  };

  function convertRemToPixels(rem) {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
  }

  const sphereRef = useRef(null);
  const sphereContainerRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const moveSphere = () => {
      if (!sphereRef.current || !sphereContainerRef.current || !sectionRef.current) return;

      const containerPosition = sphereContainerRef.current.offsetTop;
      const startPosition = sectionRef.current.offsetTop - convertRemToPixels(20);

      const rotateAmount = (window.pageYOffset - startPosition) / 4;

      if (window.pageYOffset <= startPosition) {
        setProgressDone(false);
        sphereRef.current.style.display = 'inherit';
        sphereRef.current.style.transform = `translate(-50%, -50%) rotate(0)`;
        sphereRef.current.style.opacity = 1;
      } else if (window.pageYOffset + convertRemToPixels(33) > containerPosition) {
        setProgressDone(true);
        sphereRef.current.style.display = 'none';
      } else {
        setProgressDone(false);
        sphereRef.current.style.display = 'inherit';
        sphereRef.current.style.top = `calc(50% + ${window.pageYOffset - startPosition}px)`;
        sphereRef.current.style.transform = `translate(-50%, -50%) rotate(${rotateAmount}deg)`;
        sphereRef.current.style.opacity = 0.7;
      }
    };

    window.addEventListener('scroll', moveSphere);

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
      {!deviceIsBelow800Width ? (
        <img
          className={progressDone ? classes.sphereWithContainer : classes.sphereContainer}
          src={progressDone ? SphereWithContainer : SphereContainer}
          alt='sphere container'
          ref={sphereContainerRef}
        />
      ) : (
        <img className={classes.wavyLines} src={WavyLines} alt='section separator lines' />
      )}
    </section>
  );
};

export default Projects;
