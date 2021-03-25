import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { Portal } from 'react-portal';
import { Transition } from 'react-transition-group';
import { Link } from 'gatsby';

import CV from '../../assets/img/Onur_Ozcan_CV.pdf';
import Email from '../../assets/svg/email.svg';
import Triangle from '../../assets/svg/triangle_3d.svg';
import ArrowDown from '../../assets/svg/arrow_down.svg';
import GithubIcon from '../../assets/svg/github_icon.svg';
import LinkedinIcon from '../../assets/svg/linkedin_icon.svg';
import TriangleContainer from '../../assets/svg/triangleContainer.svg';
import TriangleWithContainer from '../../assets/svg/triangle_3d_with_container.svg';
import CVIcon from '../../assets/svg/cv_icon_2.svg';
import DiagonalLines from '../../assets/svg/diagonal_lines.svg';
import HomeIcon from '../../assets/svg/home.svg';
import MenuIcon from '../../assets/svg/menu_icon.svg';
import CancelIcon from '../../assets/svg/cancel.svg';

import WhiteTriangleLine from '../../assets/svg/white_triangle_line.svg';

import { startWords, redirectToGitHub, redirectToLinkedin, getOffset } from '../../utils';

import classes from './hero.module.scss';

const Hero = () => {
  const [triangleRotation, setTriangleRotation] = useState(0);
  const [progressDone, setProgressDone] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    setTimeout(() => {
      startWords();
    }, 2000);
  }, []);

  const triangleRef = useRef(null);
  const triangleContainerRef = useRef(null);
  const titleContainerRef = useRef(null);

  useEffect(() => {
    (function () {
      const throttle = function (type, name, obj) {
        obj = obj || window;
        let running = false;
        const func = function () {
          if (running) return;

          running = true;
          requestAnimationFrame(function () {
            obj.dispatchEvent(new CustomEvent(name));
            running = false;
          });
        };
        obj.addEventListener(type, func);
      };
      throttle('scroll', 'optimizedScroll');
    })();

    const triangle = triangleRef.current;
    const triangleContainer = triangleContainerRef.current;
    const titleContainer = titleContainerRef.current;

    const triangleInitialOffset = getOffset(triangle, titleContainer);

    const moveTriangle = () => {
      if (!triangle || !triangleContainer) return;

      if (window.pageYOffset > triangleContainer.offsetTop - triangleInitialOffset) {
        setProgressDone(true);
      } else {
        setProgressDone(false);
        setTriangleRotation(window.pageYOffset / 11);
      }
    };

    window.addEventListener('optimizedScroll', moveTriangle);

    return () => {
      window.removeEventListener('optimizedScroll', moveTriangle);
    };
  }, []);

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

  const duration = 300;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
    zIndex: -9999,
  };

  const transitionStyles = {
    entering: { opacity: 1, zIndex: 90 },
    entered: { opacity: 1, zIndex: 90 },
    exiting: { opacity: 0, zIndex: -9999 },
    exited: { opacity: 0, zIndex: -9999 },
  };

  return (
    <section className={classes.section} id='hero'>
      <div className={classes.homeIconContainer} onClick={scrollToHero}>
        <img className={classes.homeIcon} src={HomeIcon} alt='home' />
      </div>
      <div className={classes.titleContainer} ref={titleContainerRef}>
        <p className={classes.copyright}>&copy; Onur Ozcan 2021</p>
        <div className={classes.socialMedia}>
          <img className={classes.socialMediaIcon} src={GithubIcon} alt='github link' onClick={redirectToGitHub} />
          <img className={classes.socialMediaIcon} src={LinkedinIcon} alt='linkedin link' onClick={redirectToLinkedin} />
        </div>
        <div className={classes.triangleBg} />
        {!progressDone ? (
          <img
            className={classes.triangle}
            src={Triangle}
            alt='3d triangle'
            ref={triangleRef}
            style={{ transform: `translate(-50%, -50%)  rotate(${triangleRotation}deg)` }}
          />
        ) : null}
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
            I'm a fullstack developer with an eye for design. I have ~3 years of professional experience developing complex
            products, especially focused on custom visualisations. Excited for future opportunities.
          </article>
          <div className={classes.linksContainer}>
            <div className={classes.link}>
              <img className={classes.linkIcon} src={GithubIcon} alt='github link' target='_blank' />
              <Link className={classes.linkText} to='https://github.com/ozcanonur'>
                GitHub
              </Link>
            </div>
            <div className={classes.link}>
              <img className={classes.linkIcon} src={LinkedinIcon} alt='linkedIn link' />
              <Link className={classes.linkText} to='https://www.linkedin.com/in/onur-ozcan-a5329b76/' target='_blank'>
                LinkedIn
              </Link>
            </div>
            <div className={classes.link}>
              <img className={classes.linkIcon} src={CVIcon} alt='cv link' />
              <a className={classes.linkText} href={CV} download>
                CV
              </a>
            </div>
            <div className={classes.link}>
              <img className={classes.linkIcon} src={Email} alt='email' />
              <a href='mailto:ozcanonur10@gmail.com' className={classes.linkText}>
                ozcanonur10@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        className={classes.triangleContainer}
        src={progressDone ? TriangleWithContainer : TriangleContainer}
        alt='triangle with container'
        ref={triangleContainerRef}
      />
      <img
        className={classes.whiteTriangleLine}
        src={WhiteTriangleLine}
        alt='triangle mount effect'
        style={{ opacity: progressDone ? 1 : 0 }}
      />
      <img
        className={`${classes.whiteTriangleLine} ${classes.whiteTriangleLine2}`}
        src={WhiteTriangleLine}
        alt='triangle mount effect'
        style={{ opacity: progressDone ? 1 : 0 }}
      />
      <img
        className={`${classes.whiteTriangleLine} ${classes.whiteTriangleLine3}`}
        src={WhiteTriangleLine}
        alt='triangle mount effect'
        style={{ opacity: progressDone ? 1 : 0 }}
      />
      <img className={classes.diagonalLines} src={DiagonalLines} alt='section seperator lines' />
      <>
        <div className={classes.mobileMenuContainer} onClick={toggleMobileMenu}>
          {mobileMenuOpen ? (
            <img className={classes.menuIcon} src={CancelIcon} alt='close menu' />
          ) : (
            <img className={classes.menuIcon} src={MenuIcon} alt='menu' />
          )}
        </div>
        <Portal>
          <Transition in={mobileMenuOpen} timeout={duration}>
            {(state) => (
              <nav style={{ ...defaultStyle, ...transitionStyles[state] }} className={classes.mobileNavContainer}>
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
            )}
          </Transition>
        </Portal>
      </>
    </section>
  );
};

export default Hero;
