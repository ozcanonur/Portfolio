import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
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

import { startWords, redirectToGitHub, redirectToLinkedin } from '../../utils';

import classes from './hero.module.scss';

const Hero = () => {
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

  useEffect(() => {
    let last_known_scroll_position = 0;
    let ticking = false;

    const moveTriangle = (scroll_pos) => {
      if (!triangleRef.current || !triangleContainerRef.current) return;

      const containerPosition = triangleContainerRef.current.offsetTop;

      if (containerPosition - scroll_pos < 400) {
        setProgressDone(true);

        triangleRef.current.style.display = 'none';
      } else {
        setProgressDone(false);
        triangleRef.current.style.display = 'inherit';
        triangleRef.current.style.top = `calc(50% + ${scroll_pos}px)`;
        triangleRef.current.style.transform = `translate(-50%, -50%) rotate(${scroll_pos / 11}deg)`;
      }
    };

    window.addEventListener('scroll', () => {
      last_known_scroll_position = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          moveTriangle(last_known_scroll_position);
          ticking = false;
        });

        ticking = true;
      }
    });

    return () => {
      window.removeEventListener('scroll', moveTriangle);
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

  return (
    <section className={classes.section} id='hero'>
      <div className={classes.homeIconContainer} onClick={scrollToHero}>
        <img className={classes.homeIcon} src={HomeIcon} alt='home' />
      </div>
      <div className={classes.titleContainer}>
        <p className={classes.copyright}>&copy; Onur Ozcan 2021</p>
        <div className={classes.socialMedia}>
          <img className={classes.socialMediaIcon} src={GithubIcon} alt='github link' onClick={redirectToGitHub} />
          <img className={classes.socialMediaIcon} src={LinkedinIcon} alt='linkedin link' onClick={redirectToLinkedin} />
        </div>
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
      <img
        className={classes.triangleContainer}
        src={progressDone ? TriangleWithContainer : TriangleContainer}
        alt='triangle with container'
        ref={triangleContainerRef}
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
    </section>
  );
};

export default Hero;
