import { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

  const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
    setSuccess('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = {};

    if (!form.name.trim()) nextErrors.name = 'Name is required.';
    if (!validateEmail(form.email)) nextErrors.email = 'Valid email is required.';
    if (!form.subject.trim()) nextErrors.subject = 'Subject is required.';
    if (!form.message.trim()) nextErrors.message = 'Message is required.';

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    setForm({ name: '', email: '', subject: '', message: '' });
    setErrors({});
    setSuccess('Your message has been submitted successfully.');
  };

  return (
    <div className="w-full space-y-6 sm:space-y-8 lg:space-y-10">
      <section className="w-full border-4 border-black dark:border-white bg-white dark:bg-black p-4 sm:p-6 md:p-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black dark:text-white">CONTACT US</h1>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg font-bold text-black dark:text-white">Have feedback or a recipe request? Send us a message and we'll get back to you shortly.</p>
      </section>

      <section className="w-full border-4 border-black dark:border-white bg-white dark:bg-black p-4 sm:p-6 md:p-8">
        {success ? <div className="mb-4 sm:mb-6 border-4 border-green-600 bg-green-100 dark:bg-green-900 p-3 sm:p-5 text-xs sm:text-sm text-green-700 dark:text-green-200 font-black">{success}</div> : null}

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
            <label className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-black dark:text-white font-bold">
              NAME
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border-4 border-black dark:border-white bg-white dark:bg-black px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-black dark:text-white font-bold outline-none focus:bg-black dark:focus:bg-white focus:text-white dark:focus:text-black"
              />
              {errors.name ? <span className="text-xs sm:text-sm text-red-600 dark:text-red-400 font-black block">{errors.name}</span> : null}
            </label>

            <label className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-black dark:text-white font-bold">
              EMAIL
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border-4 border-black dark:border-white bg-white dark:bg-black px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-black dark:text-white font-bold outline-none focus:bg-black dark:focus:bg-white focus:text-white dark:focus:text-black"
              />
              {errors.email ? <span className="text-xs sm:text-sm text-red-600 dark:text-red-400 font-black block">{errors.email}</span> : null}
            </label>
          </div>

          <label className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-black dark:text-white font-bold">
            SUBJECT
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full border-4 border-black dark:border-white bg-white dark:bg-black px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-black dark:text-white font-bold outline-none focus:bg-black dark:focus:bg-white focus:text-white dark:focus:text-black"
            />
            {errors.subject ? <span className="text-xs sm:text-sm text-red-600 dark:text-red-400 font-black block">{errors.subject}</span> : null}
          </label>

          <label className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-black dark:text-white font-bold">
            MESSAGE
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              className="w-full border-4 border-black dark:border-white bg-white dark:bg-black px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-black dark:text-white font-bold outline-none focus:bg-black dark:focus:bg-white focus:text-white dark:focus:text-black resize-none"
            />
            {errors.message ? <span className="text-xs sm:text-sm text-red-600 dark:text-red-400 font-black block">{errors.message}</span> : null}
          </label>

          <button className="w-full border-4 border-black dark:border-white bg-yellow-300 px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-black text-black transition hover:bg-yellow-400 active:translate-x-1 active:translate-y-1">
            SEND MESSAGE
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
