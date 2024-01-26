import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Form(){
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
console.log('send email')
   emailjs.sendForm('service_wrmhvz3', 'template_4balais', form.current, 'k0CzpyikJBkRiUD4M')
     .then((result) => {
         console.log(result.text);
         console.log('message sent')
     }, (error) => {
         console.log(error.text);
         console.log('failed')
     });
 };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default Form;