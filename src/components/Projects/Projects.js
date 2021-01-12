import React from 'react';

import UrlIcon from '../../assets/svg/url_icon.svg';
import GitHubIcon from '../../assets/svg/github_icon.svg';

import classes from './projects.module.scss';

const Projects = () => {
  return (
    <section className={classes.section}>
      <div className={classes.titleContainer}>
        <h1 className={classes.title}>Projects</h1>
      </div>
      <div className={classes.projectsContainer}>
        <div className={classes.project}>
          <div className={classes.projectVisual}>
            <div className={classes.projectImg} />
          </div>
          <div className={classes.projectDescriptionContainer}>
            <h3 className={classes.projectTitle}>PITDB</h3>
            <article className={classes.projectDescription}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dicta nemo necessitatibus labore, impedit in
              maxime, sapiente nihil dolore quis sint quaerat nostrum voluptate inventore ab quam, eum mollitia cumque
              porro nesciunt possimus architecto sed expedita. Non consectetur maiores qui? Maxime a dolor autem quidem
              repellat explicabo quam recusandae, velit nulla accusantium alias eum quas aperiam ab earum perferendis
              veniam dicta at. Vel quae id eveniet tempore ex omnis eaque.
            </article>
            <div className={classes.projectLinksContainer}>
              <div className={classes.projectLink}>
                <p className={classes.projectLinkText}>View website</p>
                <img className={classes.projectLinkIcon} src={UrlIcon} alt='view pitdb website' />
              </div>
              <div className={classes.projectLink}>
                <p className={classes.projectLinkText}>View source</p>
                <img className={classes.projectLinkIcon} src={GitHubIcon} alt='view pitdb source' />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.project}>
          <div className={classes.projectVisual}>
            <div className={classes.projectImg} />
          </div>
          <div className={classes.projectDescriptionContainer}>
            <h3 className={classes.projectTitle}>Chemphopro</h3>
            <article className={classes.projectDescription}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dicta nemo necessitatibus labore, impedit in
              maxime, sapiente nihil dolore quis sint quaerat nostrum voluptate inventore ab quam, eum mollitia cumque
              porro nesciunt possimus architecto sed expedita. Non consectetur maiores qui? Maxime a dolor autem quidem
              repellat explicabo quam recusandae, velit nulla accusantium alias eum quas aperiam ab earum perferendis
              veniam dicta at. Vel quae id eveniet tempore ex omnis eaque.
            </article>
            <div className={classes.projectLinksContainer}>
              <div className={classes.projectLink}>
                <p className={classes.projectLinkText}>View website</p>
                <img className={classes.projectLinkIcon} src={UrlIcon} alt='view pitdb website' />
              </div>
              <div className={classes.projectLink}>
                <p className={classes.projectLinkText}>View source</p>
                <img className={classes.projectLinkIcon} src={GitHubIcon} alt='view pitdb source' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
