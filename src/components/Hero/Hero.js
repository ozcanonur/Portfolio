import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import { useMediaQuery } from 'react-responsive';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { Portal } from 'react-portal';

import Triangle from '../../assets/svg/triangle_3d.svg';
import ArrowDown from '../../assets/svg/arrow_down.svg';
import GithubIcon from '../../assets/svg/github_icon.svg';
import LinkedinIcon from '../../assets/svg/linkedin_icon.svg';
import TriangleContainer from '../../assets/svg/triangleContainer.svg';
import TriangleWithContainer from '../../assets/svg/triangle_3d_with_container.svg';
import CVIcon from '../../assets/svg/cv_icon.svg';
import DiagonalLines from '../../assets/svg/diagonal_lines.svg';
import HomeIcon from '../../assets/svg/home.svg';
import MenuIcon from '../../assets/svg/menu_icon.svg';
import CancelIcon from '../../assets/svg/cancel.svg';

import { useWindowSize, startWords } from '../../utils';

import classes from './hero.module.scss';

const Hero = () => {
  const [progressDone, setProgressDone] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const windowSize = useWindowSize();
  const deviceIsBelow800Width = useMediaQuery({ query: '(max-width: 800px)' });

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
  const triangleContainerRef = useRef(null);

  useEffect(() => {
    const moveTriangle = () => {
      if (!triangleRef.current || !triangleContainerRef.current || deviceIsBelow800Width) return;

      const containerPosition = triangleContainerRef.current.offsetTop;

      if (containerPosition - window.pageYOffset < 500) {
        setProgressDone(true);
        triangleRef.current.style.display = 'none';
      } else {
        setProgressDone(false);
        triangleRef.current.style.display = 'inherit';
        triangleRef.current.style.top = `calc(50% + ${window.pageYOffset}px)`;
        triangleRef.current.style.transform = `translate(-50%, -50%) rotate(${window.pageYOffset / 11}deg)`;
      }
    };

    window.addEventListener('scroll', moveTriangle);

    return () => {
      window.removeEventListener('scroll', moveTriangle);
    };
  }, [windowSize]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToHero = () => {
    scrollTo('#hero');
  };

  const scrollToSkills = () => {
    scrollTo('#skills');
    setMobileMenuOpen(false);
  };

  const scrollToProjects = () => {
    scrollTo('#projects');
    setMobileMenuOpen(false);
  };

  const scrollToContact = () => {
    scrollTo('#contact');
    setMobileMenuOpen(false);
  };

  console.log(mobileMenuOpen);
  return (
    <section className={classes.section} id='hero'>
      {deviceIsBelow800Width ? (
        <div className={classes.homeIconContainer} onClick={scrollToHero}>
          <img className={classes.homeIcon} src={HomeIcon} alt='home' />
        </div>
      ) : null}
      <div className={classes.titleContainer}>
        {deviceIsBelow800Width ? <p className={classes.copyright}>&copy; Onur Ozcan 2021</p> : null}
        {deviceIsBelow800Width ? (
          <div className={classes.socialMedia}>
            <img className={classes.socialMediaIcon} src={GithubIcon} alt='github link' onClick={redirectToGitHub} />
            <img className={classes.socialMediaIcon} src={LinkedinIcon} alt='linkedin link' onClick={redirectToLinkedin} />
          </div>
        ) : null}
        <div className={classes.triangleBg} />
        <img className={classes.triangle} src={Triangle} alt='3d triangle' ref={triangleRef} />
        <h1 className={classes.title}>
          <span className='word' style={{ opacity: 1 }}>
            Fullstack&nbsp;Developer.
          </span>
          <span className='word' style={{ opacity: 0 }}>
            Web&nbsp;Designer.
          </span>
          <span className='word' style={{ opacity: 0 }}>
            Avid&nbsp;Gamer.
          </span>
        </h1>
        <img className={classes.downArrow} src={ArrowDown} alt='down arrow' />
      </div>
      <div className={classes.introContainer} data-aos='fade-in'>
        <div className={classes.intro}>
          <h2 className={classes.introTitle}>Hello, I am Onur</h2>
          <article className={classes.introArticle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nostrum ratione aliquam voluptatem sed nobis nemo vero
            maxime ad necessitatibus non iure soluta dolorem fugit, illo obcaecati ipsa at impedit corruptin.necessitatibus non
            iure soluta dolorem fugit, illo obcaecati ipsa at impedit corruptin.
          </article>
          <div className={classes.linksContainer}>
            <div className={classes.link}>
              <img className={classes.linkIcon} src={GithubIcon} alt='github link' />
              <button className={classes.linkText} onClick={redirectToGitHub}>
                GitHub
              </button>
            </div>
            <div className={classes.link}>
              <img className={classes.linkIcon} src={LinkedinIcon} alt='linkedIn link' />
              <button className={classes.linkText} onClick={redirectToLinkedin}>
                LinkedIn
              </button>
            </div>
            <div className={classes.link}>
              <img className={classes.linkIcon} src={CVIcon} alt='cv link' />
              <button className={classes.linkText}>CV</button>
            </div>
          </div>
        </div>
      </div>
      {!deviceIsBelow800Width ? (
        <img
          className={classes.triangleContainer}
          src={progressDone ? TriangleWithContainer : TriangleContainer}
          alt='triangle with container'
          ref={triangleContainerRef}
        />
      ) : (
        <img className={classes.diagonalLines} src={DiagonalLines} alt='section seperator lines' />
      )}
      {deviceIsBelow800Width ? (
        <>
          <div className={classes.mobileMenuContainer} onClick={toggleMobileMenu}>
            {mobileMenuOpen ? (
              <img className={classes.menuIcon} src={CancelIcon} alt='close menu' />
            ) : (
              <img className={classes.menuIcon} src={MenuIcon} alt='menu' />
            )}
          </div>
          <Portal>
            <nav
              className={classes.mobileNavContainer}
              style={{
                width: mobileMenuOpen ? '100%' : '0',
                display: mobileMenuOpen ? 'inherit' : 'none',
              }}
            >
              <div className={classes.navTitle}>Navigation</div>
              <div
                className={classes.mobileNavItem}
                onClick={() => {
                  scrollToHero();
                  setMobileMenuOpen(false);
                }}
              >
                Home
              </div>
              <div className={classes.mobileNavItem} onClick={scrollToSkills}>
                Skills
              </div>
              <div className={classes.mobileNavItem} onClick={scrollToProjects}>
                Projects
              </div>
              <div className={classes.mobileNavItem} onClick={scrollToContact}>
                Contact me
              </div>
            </nav>
          </Portal>
        </>
      ) : null}
    </section>
  );
};

export default Hero;
