import "./Contact.css";
import { useRef } from 'react';
// import emailjs from '@emailjs/browser';
import { BsWhatsapp } from "react-icons/bs";
import { RiMessageLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    // emailjs.sendForm('YOUR_SERVICE_KEY', 'YOUR_TEMPLATE_KEY', form.current, {publicKey: 'YOUR_PUBLIC_KEY'});
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5 className="contact__h5">Get in Touch</h5>
      <h2 className="contact__h2">Contact</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__icon" />
            <h4>Email</h4>
            <h5>username@business.com</h5>
            <a href="mailto:business@mail.com" target="_blank" rel="noreferrer">send a message</a>
          </article>
          <article className="contact__option">
            <RiMessageLine className="contact__icon" />
            <h4>Messanger</h4>
            <h5>username</h5>
            <a href="https://m.me/zuck" target="_blank" rel="noreferrer">send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__icon" />
            <h4>WhatsApp</h4>
            <h5>(555) 555-1234</h5>
            <a href="https://whatsapp.com" target="_blank" rel="noreferrer">send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="name" placeholder="Your Name" required/>
          <label>Email</label>
          <input type="email" name="email" placeholder="Email" required/>
          <label>Message</label>
          <textarea name="msg" id="msg" rows={7} placeholder="type a message.." required></textarea>
          <button type="submit" className="btn btn-primary">Send {">"}</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;