import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import axios from 'axios';

import classes from './contact.module.scss';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [messageSent, setMessageSent] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const nameOnChange = (e) => {
    setName(e.target.value);
  };

  const emailOnChange = (e) => {
    setEmail(e.target.value);
  };

  const messageOnChange = (e) => {
    setMessage(e.target.value);
  };

  const sendEmail = async () => {
    try {
      await axios.post('https://boiling-atoll-88308.herokuapp.com/send-email', { name, email, message });
      setMessageSent(true);
    } catch (error) {
      console.error(error);
    }

    setName('');
    setEmail('');
    setMessage('');
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
            <input className={classes.nameInput} id='contact-name' value={name} onChange={nameOnChange} />
          </div>
          <div className={classes.emailContainer}>
            <label htmlFor='contact-email'>Your e-mail</label>
            <input className={classes.emailInput} id='contact-email' value={email} onChange={emailOnChange} />
          </div>
        </div>
        <div className={classes.messageContainer}>
          <label htmlFor='contact-message'>Message</label>
          <textarea className={classes.messageInput} id='contact-message' value={message} onChange={messageOnChange} />
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
