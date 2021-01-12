import React from 'react';

import Layout from '../components/Layout/Layout';
import Hero from '../components/Hero/Hero';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';

import classes from './index.module.scss';

import '../normalize.scss';
import '../style.scss';

const Index = () => {
  return (
    <div className={classes.site}>
      <Layout>
        <Hero />
        <Skills />
        <Projects />
      </Layout>
    </div>
  );
};

export default Index;
