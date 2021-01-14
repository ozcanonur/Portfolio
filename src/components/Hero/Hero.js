import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import { Portal } from 'react-portal';

import Triangle from '../../assets/svg/triangle_3d.svg';
import ArrowDown from '../../assets/svg/arrow_down.svg';
import GithubIcon from '../../assets/svg/github_icon.svg';
import LinkedinIcon from '../../assets/svg/linkedin_icon.svg';
import TriangleContainer from '../../assets/svg/triangleContainer.svg';
import TriangleWithContainer from '../../assets/svg/triangle_3d_with_container.svg';
import CVIcon from '../../assets/svg/cv_icon.svg';

import { startWords } from '../../utils';

import classes from './hero.module.scss';

const Hero = () => {
  const [progressDone, setProgressDone] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    setTimeout(() => {
      startWords();
    }, 2000);
  }, []);

  const redirectToGitHub = () => {
    window.open('https://github.com/ozcanonur', '_blank');
  };

  const redirectToLinkedin = () => {
    window.open('https://www.linkedin.com/in/onur-ozcan-a5329b76/', '_blank');
  };

  const triangleRef = useRef(null);

  useEffect(() => {
    if (!triangleRef.current) return;

    const moveTriangle = () => {
      if (window.pageYOffset < 1950) {
        setProgressDone(false);
        triangleRef.current.style.display = 'inherit';
        triangleRef.current.style.position = `fixed`;
        triangleRef.current.style.transform = `translate(-50%, -50%) rotate(${window.pageYOffset / 11}deg)`;
      } else {
        setProgressDone(true);
        triangleRef.current.style.display = 'none';
        triangleRef.current.style.transform = `translate(-50%, calc(-50% + 2000px)) rotate(180deg)`;
      }
    };

    window.addEventListener('scroll', moveTriangle);

    return () => {
      window.removeEventListener('scroll', moveTriangle);
    };
  }, []);

  return (
    <section className={classes.section} id='hero'>
      <div className={classes.titleContainer}>
        <div className={classes.triangleBg} />
        <img className={classes.triangle} src={Triangle} alt='3d triangle' ref={triangleRef} />
        <h1 className={classes.title}>
          <span className='word' style={{ opacity: 1 }}>
            Fullstack&nbsp;Developer
          </span>
          <span className='word' style={{ opacity: 0 }}>
            Web&nbsp;Designer
          </span>
          <span className='word' style={{ opacity: 0 }}>
            Bioinformatician
          </span>
        </h1>
        <img className={classes.downArrow} src={ArrowDown} alt='down arrow' />
      </div>
      <div className={classes.introContainer} data-aos='fade-in'>
        <div className={classes.intro}>
          <h2 className={classes.introTitle}>Hello, I am Onur</h2>
          <article className={classes.introArticle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nostrum ratione aliquam voluptatem sed nobis
            nemo vero maxime ad necessitatibus non iure soluta dolorem fugit, illo obcaecati ipsa at impedit corrupti
            velit commodi quo laboriosam harum quaerat! Quisquam, eveniet excepturi.
          </article>
          <div className={classes.linksContainer}>
            <div className={classes.link}>
              <img className={classes.linkIcon} src={GithubIcon} alt='github link' />
              <p className={classes.linkText} onClick={redirectToGitHub}>
                GitHub
              </p>
            </div>
            <div className={classes.link}>
              <img className={classes.linkIcon} src={LinkedinIcon} alt='linkedIn link' />
              <p className={classes.linkText} onClick={redirectToLinkedin}>
                LinkedIn
              </p>
            </div>
            <div className={classes.link}>
              <img className={classes.linkIcon} src={CVIcon} alt='cv link' />
              <p className={classes.linkText}>CV</p>
            </div>
          </div>
        </div>
      </div>
      <Portal>
        {progressDone ? (
          <img className={classes.triangleContainer} src={TriangleWithContainer} alt='triangle with container' />
        ) : (
          <img className={classes.triangleContainer} src={TriangleContainer} alt='triangle container' />
        )}
      </Portal>
    </section>
  );
};

export default Hero;
