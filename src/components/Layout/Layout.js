import React from 'react';
import Helmet from 'react-helmet';

import HomeIcon from '../../assets/svg/home.svg';
import GithubIcon from '../../assets/svg/github_icon.svg';
import LinkedinIcon from '../../assets/svg/linkedin_icon.svg';

import classes from './layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={classes.container}>
      <Helmet title='Onur Ozcan' />
      <nav className={`${classes.sidebar} ${classes.sidebarLeft}`}>
        <img className={classes.icon} src={HomeIcon} alt='home' />
        <div className={classes.linksContainer}>
          <p>Skills</p>
          <p>Projects</p>
        </div>
        <p className={classes.copyright}>&copy; Onur Ozcan 2021</p>
      </nav>
      <main className={classes.content}>{children}</main>
      <nav className={`${classes.sidebar} ${classes.sidebarRight}`}>
        <div />
        <p className={classes.contactMeText}>Contact Me</p>
        <div className={classes.socialMedia}>
          <img className={classes.socialMediaIcon} src={GithubIcon} alt='github link' />
          <img className={classes.socialMediaIcon} src={LinkedinIcon} alt='linkedin link' />
        </div>
      </nav>
    </div>
  );
};

export default Layout;
