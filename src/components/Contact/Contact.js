import React, { useEffect } from 'react';
import AOS from 'aos';

import classes from './contact.module.scss';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className={classes.section} id='contact' data-aos='fade-in'>
      <h1 className={classes.title}>Contact me</h1>
      <div className={classes.subTitleContainer}>
        <h2 className={classes.subTitle}>You can either use the form below or send me an email directly.</h2>
        <a className={classes.email}>ozcanonur10@gmail.com</a>
      </div>
      <div className={classes.contactForm}>
        <div className={classes.topRow}>
          <div className={classes.nameContainer}>
            <p>Your name</p>
            <input className={classes.nameInput} />
          </div>
          <div className={classes.emailContainer}>
            <p>Your e-mail</p>
            <input className={classes.emailInput} />
          </div>
        </div>
        <div className={classes.messageContainer}>
          <p>Message</p>
          <textarea className={classes.messageInput} />
        </div>
        <p className={classes.sendMessage}>Send Message</p>
      </div>
    </section>
  );
};

export default Contact;
