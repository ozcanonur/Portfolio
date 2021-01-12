import React from 'react';

import Triangle from '../../assets/svg/triangle_3d.svg';
import ArrowDown from '../../assets/svg/arrow_down.svg';

import classes from './hero.module.scss';

const Hero = () => {
  return (
    <section className={classes.section}>
      <div className={classes.heroContainer}>
        <h1 className={classes.title}>Fullstack Developer.</h1>
        <img className={classes.triangle} src={Triangle} alt='3d triangle' />
        <div className={classes.triangleBg} />
      </div>
      <img className={classes.downArrow} src={ArrowDown} alt='down arrow' />
    </section>
  );
};

export default Hero;
