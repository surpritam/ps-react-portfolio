import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    Object.keys(form).forEach((field) => {
      if (!form[field].trim()) {
        newErrors[field] = 'This field is required';
      } else if (field === 'email' && !validateEmail(form[field])) {
        newErrors[field] = 'Invalid email address';
      }
    });

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', form);
      setIsSubmitted(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section className="bg-accent p-lg flex flex-col items-center">
      <h2 className="text-2xl font-bold text-primary mb-md">Contact</h2>
      {isSubmitted && <p className="text-green-500 mb-sm">Your message has been sent successfully!</p>}
      <form className="w-full max-w-lg" onSubmit={handleSubmit} noValidate>
        <div className="mb-sm">
          <label htmlFor="name" className="block text-primary font-semibold mb-xs">
            Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full p-sm border ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            } rounded focus:outline-none focus:ring-2 focus:ring-primary`}
            required
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
        </div>

        <div className="mb-sm">
          <label htmlFor="email" className="block text-primary font-semibold mb-xs">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full p-sm border ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            } rounded focus:outline-none focus:ring-2 focus:ring-primary`}
            required
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
        </div>

        <div className="mb-sm">
          <label htmlFor="message" className="block text-primary font-semibold mb-xs">
            Message<span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full p-sm border ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            } rounded focus:outline-none focus:ring-2 focus:ring-primary`}
            required
          ></textarea>
          {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
        </div>

        <button
          type="submit"
          className="bg-secondary text-accent font-bold py-2 px-4 rounded hover:bg-red-700 transition-colors duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;