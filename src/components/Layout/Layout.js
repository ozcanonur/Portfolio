import React from 'react';
import Helmet from 'react-helmet';
import scrollTo from 'gatsby-plugin-smoothscroll';

import HomeIcon from '../../assets/svg/home.svg';
import GithubIcon from '../../assets/svg/github_icon.svg';
import LinkedinIcon from '../../assets/svg/linkedin_icon.svg';

import classes from './layout.module.scss';

const Layout = ({ children }) => {
  const scrollToHero = () => {
    scrollTo('#hero');
  };

  const scrollToSkills = () => {
    scrollTo('#skills');
  };

  const scrollToProjects = () => {
    scrollTo('#projects');
  };

  const scrollToContact = () => {
    scrollTo('#contact');
  };

  const redirectToGitHub = () => {
    window.open('https://github.com/ozcanonur', '_blank');
  };

  const redirectToLinkedin = () => {
    window.open('https://www.linkedin.com/in/onur-ozcan-a5329b76/', '_blank');
  };

  return (
    <div className={classes.container}>
      <Helmet title='Onur Ozcan' />
      <nav className={`${classes.sidebar} ${classes.sidebarLeft}`}>
        <img className={classes.icon} src={HomeIcon} alt='home' onClick={scrollToHero} />
        <div className={classes.linksContainer}>
          <button onClick={scrollToSkills}>Skills</button>
          <button onClick={scrollToProjects}>Projects</button>
        </div>
        <p className={classes.copyright}>&copy; Onur Ozcan 2021</p>
      </nav>
      <main className={classes.content}>{children}</main>
      <nav className={`${classes.sidebar} ${classes.sidebarRight}`}>
        <div />
        <button className={classes.contactMeText} onClick={scrollToContact}>
          Contact Me
        </button>
        <div className={classes.socialMedia}>
          <img className={classes.socialMediaIcon} src={GithubIcon} alt='github link' onClick={redirectToGitHub} />
          <img
            className={classes.socialMediaIcon}
            src={LinkedinIcon}
            alt='linkedin link'
            onClick={redirectToLinkedin}
          />
        </div>
      </nav>
    </div>
  );
};

export default Layout;
