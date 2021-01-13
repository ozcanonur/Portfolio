import React, { useEffect, useRef } from 'react';
import AOS from 'aos';

import Triangle from '../../assets/svg/triangle_3d.svg';
import ArrowDown from '../../assets/svg/arrow_down.svg';
import GithubIcon from '../../assets/svg/github_icon.svg';
import LinkedinIcon from '../../assets/svg/linkedin_icon.svg';
import CVIcon from '../../assets/svg/cv_icon.svg';

import { startWords } from '../../utils';

import classes from './hero.module.scss';

const Hero = () => {
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
    if (triangleRef.current) {
      window.addEventListener('scroll', () => {
        if (window.pageYOffset < 2000) {
          triangleRef.current.style.position = `fixed`;
          triangleRef.current.style.transform = `translate(-50%, -50%) rotate(${window.pageYOffset / 11}deg)`;
        } else {
          triangleRef.current.style.position = `absolute`;
          triangleRef.current.style.transform = `translate(-50%, calc(-50% + 2000px)) rotate(180deg)`;
        }
      });
    }
  }, [triangleRef.current]);

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
      <div className={classes.triangleStopContainer}>
        <hr className={classes.line} />
        <hr className={classes.line} />
        <div className={classes.triangleStopBox} />
      </div>
    </section>
  );
};

export default Hero;
