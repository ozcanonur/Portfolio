import React from 'react';

import classes from './contact.module.scss';

const Contact = () => {
  return (
    <section className={classes.section}>
      <h1 className={classes.title}>Contact me</h1>
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
