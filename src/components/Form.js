import React, { useState } from 'react';
import "./Form.css"
import { useInView } from 'react-intersection-observer';

const EmailForm = () => {

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
  });

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.text())
      .then((data) => console.log(data))
      .catch((error) => console.error('Error:', error));

    setForm({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className={inView ? "formPage formPage--zoom" : "formPage"} ref={ref}>
      <h1 className='emailForm__title'>Contact us by filling out the form below</h1>
      <form onSubmit={handleSubmit} className="emailForm">
        <div className='emailForm__left'>
          <div>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className='emailForm__contact'
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your email"
              className='emailForm__contact'
            />
          </div>
          <button type="submit" className='emailForm__button'>Send</button>
        </div>
        <div className='emailForm__right'>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your message"
            className='emailForm__text'
          />
        </div>
      </form>
    </div>
  );
};

export default EmailForm;