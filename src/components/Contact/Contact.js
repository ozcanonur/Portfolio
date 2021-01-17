import React, { useState, useEffect } from 'react';
import AOS from 'aos';

import classes from './contact.module.scss';

const Contact = () => {
  const [subject, setSubject] = useState('');
  const [fromEmail, setFromEmail] = useState('');
  const [body, setBody] = useState('');

  const [messageSent, setMessageSent] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const nameOnChange = (e) => {
    setSubject(e.target.value);
  };

  const emailOnChange = (e) => {
    setFromEmail(e.target.value);
  };

  const messageOnChange = (e) => {
    setBody(e.target.value);
  };

  const sendEmail = async () => {
    const functionURL = 'https://avocado-shrimp-1219.twil.io/send-email';

    const response = await fetch(functionURL, {
      method: 'post',
      header: {
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      body: new URLSearchParams({ fromEmail, subject, body }).toString(),
    });

    if (response.status === 200) {
      setMessageSent(true);
    } else {
      const error = await response.json();
      console.error(error);
    }

    setSubject('');
    setBody('');
    setFromEmail('');
  };

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
            <input className={classes.nameInput} id='contact-name' value={subject} onChange={nameOnChange} />
          </div>
          <div className={classes.emailContainer}>
            <label htmlFor='contact-email'>Your e-mail</label>
            <input className={classes.emailInput} id='contact-email' value={fromEmail} onChange={emailOnChange} />
          </div>
        </div>
        <div className={classes.messageContainer}>
          <label htmlFor='contact-message'>Message</label>
          <textarea className={classes.messageInput} id='contact-message' value={body} onChange={messageOnChange} />
        </div>
        <p className={classes.sendMessage} onClick={sendEmail}>
          Send Message
        </p>
        {messageSent ? <p className={classes.messageSent}>Message sent. I will get back to you as soon as possible.</p> : null}
      </div>
    </section>
  );
};

export default Contact;
