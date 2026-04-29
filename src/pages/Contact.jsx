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
    <div className="w-full space-y-10">
      <section className="w-full rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-6 sm:p-8">
        <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">Contact Us</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400">Have feedback or a recipe request? Send us a message and we'll get back to you shortly.</p>
      </section>

      <section className="w-full rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-6 sm:p-8">
        {success ? <div className="mb-6 rounded-3xl bg-emerald-500/10 p-5 text-emerald-200">{success}</div> : null}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="space-y-2 text-sm text-slate-300">
              Name
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-3xl border border-slate-800 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
              />
              {errors.name ? <span className="text-sm text-rose-400">{errors.name}</span> : null}
            </label>

            <label className="space-y-2 text-sm text-slate-300">
              Email
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-3xl border border-slate-800 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
              />
              {errors.email ? <span className="text-sm text-rose-400">{errors.email}</span> : null}
            </label>
          </div>

          <label className="space-y-2 text-sm text-slate-300">
            Subject
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full rounded-3xl border border-slate-800 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
            />
            {errors.subject ? <span className="text-sm text-rose-400">{errors.subject}</span> : null}
          </label>

          <label className="space-y-2 text-sm text-slate-300">
            Message
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="6"
              className="w-full rounded-3xl border border-slate-800 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
            />
            {errors.message ? <span className="text-sm text-rose-400">{errors.message}</span> : null}
          </label>

          <button className="rounded-3xl bg-emerald-500 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
