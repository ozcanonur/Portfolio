import React from 'react';

import UrlIcon from '../../assets/svg/url_icon.svg';
import GitHubIcon from '../../assets/svg/github_icon.svg';

import pitdbImg from '../../assets/img/pitdb.png';
import chemphoprologImg from '../../assets/img/chemphoprolog.png';
import discordImg from '../../assets/img/discord.png';
import heartspaceImg from '../../assets/img/heartspace.png';

import classes from './projects.module.scss';

const Projects = () => {
  const projects = [
    {
      title: 'PITDB',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dicta nemo necessitatibus labore, impedit in
              maxime, sapiente nihil dolore quis sint quaerat nostrum voluptate inventore ab quam, eum mollitia cumque
              porro nesciunt possimus architecto sed expedita. Non consectetur maiores qui? Maxime a dolor autem quidem
              repellat explicabo quam recusandae, velit nulla accusantium alias eum quas aperiam ab earum perferendis
              veniam dicta at. Vel quae id eveniet tempore ex omnis eaque.`,
      img: pitdbImg,
      websiteUrl: 'http://pitdb.herokuapp.com/',
      githubUrl: 'https://github.com/ozcanonur/PITDB',
    },
    {
      title: 'Chemphoprolog',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dicta nemo necessitatibus labore, impedit in
              maxime, sapiente nihil dolore quis sint quaerat nostrum voluptate inventore ab quam, eum mollitia cumque
              porro nesciunt possimus architecto sed expedita. Non consectetur maiores qui? Maxime a dolor autem quidem
              repellat explicabo quam recusandae, velit nulla accusantium alias eum quas aperiam ab earum perferendis
              veniam dicta at. Vel quae id eveniet tempore ex omnis eaque.`,
      img: chemphoprologImg,
      websiteUrl: 'http://chemphoprolog.herokuapp.com/',
      githubUrl: 'https://github.com/ozcanonur/chemphoprolog',
    },
    {
      title: 'Discord',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dicta nemo necessitatibus labore, impedit in
              maxime, sapiente nihil dolore quis sint quaerat nostrum voluptate inventore ab quam, eum mollitia cumque
              porro nesciunt possimus architecto sed expedita. Non consectetur maiores qui? Maxime a dolor autem quidem
              repellat explicabo quam recusandae, velit nulla accusantium alias eum quas aperiam ab earum perferendis
              veniam dicta at. Vel quae id eveniet tempore ex omnis eaque.`,
      img: discordImg,
      websiteUrl: 'http://ozcanonur-discord.herokuapp.com/',
      githubUrl: 'https://github.com/ozcanonur/discord-clone',
    },
    {
      title: 'Heartspace',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dicta nemo necessitatibus labore, impedit in
              maxime, sapiente nihil dolore quis sint quaerat nostrum voluptate inventore ab quam, eum mollitia cumque
              porro nesciunt possimus architecto sed expedita. Non consectetur maiores qui? Maxime a dolor autem quidem
              repellat explicabo quam recusandae, velit nulla accusantium alias eum quas aperiam ab earum perferendis
              veniam dicta at. Vel quae id eveniet tempore ex omnis eaque.`,
      img: heartspaceImg,
      websiteUrl: 'https://www.findheartspace.com/',
      githubUrl: 'https://github.com/ozcanonur/Heartspace',
    },
  ];

  return (
    <section className={classes.section} id='projects'>
      <div className={classes.titleContainer}>
        <h1 className={classes.title}>Projects</h1>
      </div>
      <div className={classes.projectsContainer}>
        {projects.map(({ title, description, img, githubUrl, websiteUrl }) => (
          <div key={title} className={classes.project}>
            <div className={classes.projectVisual}>
              <img
                className={classes.projectImg}
                src={img}
                alt={title}
                style={{ height: title === 'Chemphoprolog' ? '16vw' : '18vw' }}
              />
            </div>
            <div className={classes.projectDescriptionContainer}>
              <h3 className={classes.projectTitle}>{title}</h3>
              <article className={classes.projectDescription}>{description}</article>
              <div className={classes.projectLinksContainer}>
                <div className={classes.projectLink}>
                  <p
                    className={classes.projectLinkText}
                    onClick={() => {
                      window.open(websiteUrl, '_blank');
                    }}
                  >
                    View website
                  </p>
                  <img className={classes.projectLinkIcon} src={UrlIcon} alt='view pitdb website' />
                </div>
                <div className={classes.projectLink}>
                  <p
                    className={classes.projectLinkText}
                    onClick={() => {
                      window.open(githubUrl, '_blank');
                    }}
                  >
                    View source
                  </p>
                  <img className={classes.projectLinkIcon} src={GitHubIcon} alt='view pitdb source' />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={classes.projectsFooter}>
        <p>And more on GitHub</p>
        <img className={classes.footerGitHub} src={GitHubIcon} alt='github link' />
      </div>
    </section>
  );
};

export default Projects;
