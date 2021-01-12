import React from 'react';

import Layout from '../components/Layout/Layout';
import Hero from '../components/Hero/Hero';
import Skills from '../components/Skills/Skills';

import classes from './index.module.scss';

import '../normalize.scss';
import '../style.scss';

const Index = () => {
  return (
    <div className={classes.site}>
      <Layout>
        <Hero />
        <Skills />
      </Layout>
    </div>
  );
};

export default Index;
