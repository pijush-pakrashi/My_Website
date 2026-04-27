import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch("https://formsubmit.co/ajax/fed6909edd761f1d43469e84942b9795", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          "User Email": formData.email,
          message: formData.message,
          _replyto: formData.email,
          _subject: `New Message from ${formData.name} (Portfolio)`
        })
      });

      if (response.ok) {
        setStatus('Message sent successfully! I will contact you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again later.');
    }

    // Clear status after 5 seconds
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <section id="contact" className="py-16 px-6 lg:px-16">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-mono font-bold text-white mb-8 tracking-wide">
          Let's <span className="text-primary">Talk</span>
        </h2>

        <form onSubmit={handleSubmit} className="w-full max-w-lg service-card p-8 flex flex-col gap-6 relative">
          {status && (
            <div className="absolute -top-12 left-0 w-full p-2 bg-primary/20 text-primary border border-primary text-center rounded font-mono text-sm">
              {status}
            </div>
          )}

          <div className="flex flex-col gap-2">
            <label className="text-gray-400 font-mono text-sm">Your Name</label>
            <input
              required
              type="text"
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
              placeholder="John Doe"
              className="bg-[#0a0a0a] border border-[#262626] text-white p-3 rounded-lg focus:outline-none focus:border-primary font-sans"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-400 font-mono text-sm">Your Email</label>
            <input
              required
              type="email"
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
              placeholder="john@example.com"
              className="bg-[#0a0a0a] border border-[#262626] text-white p-3 rounded-lg focus:outline-none focus:border-primary font-sans"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-400 font-mono text-sm">Message</label>
            <textarea
              required
              rows="4"
              value={formData.message}
              onChange={e => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell me about your project..."
              className="bg-[#0a0a0a] border border-[#262626] text-white p-3 rounded-lg focus:outline-none focus:border-primary font-sans resize-none"
            ></textarea>
          </div>

          <button type="submit" className="w-full py-3 bg-primary text-black font-bold font-mono rounded-lg hover:scale-[1.02] transition-transform duration-300 mt-2">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
