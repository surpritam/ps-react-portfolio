import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email) => {
    // Simple email regex
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let newErrors = { ...errors };

    if (!value.trim()) {
      newErrors[name] = 'This field is required';
    } else {
      delete newErrors[name];
      if (name === 'email' && !validateEmail(value)) {
        newErrors[name] = 'Invalid email address';
      }
    }

    setErrors(newErrors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // Optionally, validate on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Final validation before submission
    let newErrors = {};
    Object.keys(form).forEach((field) => {
      if (!form[field].trim()) {
        newErrors[field] = 'This field is required';
      } else if (field === 'email' && !validateEmail(form[field])) {
        newErrors[field] = 'Invalid email address';
      }
    });

    if (Object.keys(newErrors).length === 0) {
      // Handle form submission (e.g., send email, API call)
      console.log('Form submitted:', form);
      setIsSubmitted(true);
      // Reset form
      setForm({ name: '', email: '', message: '' });
      // Hide the success message after a delay
      setTimeout(() => setIsSubmitted(false), 5000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section className="contact">
      <h2>Contact</h2>
      {isSubmitted && <p className="success">Your message has been sent successfully!</p>}
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="name">
            Name<span>*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">
            Email<span>*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="message">
            Message<span>*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          ></textarea>
          {errors.message && <span className="error">{errors.message}</span>}
        </div>

        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;