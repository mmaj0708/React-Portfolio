import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'

import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l8vc0om', 'template_b0h5pzf', form.current, 'dELJKhG5SWWE_Ir_U')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()

      // ADD NOTIF ON SUCCESS/FAILURE
  };

  return (
    <section id='contact'>
      <h5>Assez Scrollé</h5>
      <h2>Contactez-moi</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>melchiormajpro@gmail.com</h5>
            <a href="mailto:melchiormajpro@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <AiFillLinkedin className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <a href="https://www.linkedin.com/in/melchior-maj-470325193/" target="_blank" rel="noreferrer">Voir mon profil</a>
          </article>
          <article className="contact__option">
            <AiOutlineWhatsApp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+33651387626</h5>
            <a href="https://api.whatsapp.com/send?phone=33651387626" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" placeholder='Your Message' rows="7" required></textarea>
        <button type='submit' className='btn btn-primary'>send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact