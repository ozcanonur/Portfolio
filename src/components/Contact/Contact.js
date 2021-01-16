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
        <h2 className={classes.subTitle}>You can either use the form below or send me an e-mail directly.</h2>
        <a href='mailto:ozcanonur10@gmail.com' className={classes.email}>
          ozcanonur10@gmail.com
        </a>
      </div>
      <div className={classes.contactForm}>
        <div className={classes.topRow}>
          <div className={classes.nameContainer}>
            <label htmlFor='contact-name'>Name</label>
            <input className={classes.nameInput} id='contact-name' />
          </div>
          <div className={classes.emailContainer}>
            <label htmlFor='contact-email'>Your e-mail</label>
            <input className={classes.emailInput} id='contact-email' />
          </div>
        </div>
        <div className={classes.messageContainer}>
          <label htmlFor='contact-message'>Message</label>
          <textarea className={classes.messageInput} id='contact-message' />
        </div>
        <p className={classes.sendMessage}>Send Message</p>
      </div>
    </section>
  );
};

export default Contact;
