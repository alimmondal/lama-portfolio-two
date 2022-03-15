import React, { useRef, useState } from 'react';
import './contact.css';
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import Address from '../../img/address.png';
import emailjs from '@emailjs/browser';

function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_j89t657',
        'template_0io7ptb',
        formRef.current,
        'WUGb_0Ul1O_j8hcf2'
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss our projects</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +8801860060068
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              italimbd@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              245 King Street, Touterie Victoria 8520 Australia
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's your story? </b> Get in touch. Always available for
            freelancing if the right projects come along me.{' '}
            <form ref={formRef} onSubmit={handleSubmit}>
              <input type="text" placeholder="Name" name="user_name" />
              <input type="text" placeholder="subject" name="user_subject" />
              <input type="email" placeholder="Email" name="user_email" />
              <textarea rows={5} placeholder="Message" name="message" />
              <button>Submit</button>
              <div className="c-reply">
                {done && 'Thank you, we will reply you soon.'}
              </div>
            </form>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
