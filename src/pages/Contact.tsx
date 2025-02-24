import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div className="min-h-screen bg-primary text-white page-transition">
      {/* Hero Section */}
      <section className="bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000"
            alt="Contact Hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 py-24 relative">
          <h1 className="text-5xl font-bold mb-6 text-center">Get in Touch</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center">
            Have a question or ready to start your digital transformation journey? 
            We're here to help you succeed.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
                <p className="text-gray-300 mb-8">
                  Ready to start your digital transformation journey? Reach out to us through any of 
                  these channels, and we'll get back to you within 24 hours.
                </p>
              </div>

              <div className="grid gap-8">
                <div className="bg-secondary p-6 rounded-lg flex items-start space-x-4">
                  <div className="bg-primary p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-300">Main: (514) 555-0123</p>
                    <p className="text-gray-300">Support: (514) 555-0124</p>
                  </div>
                </div>

                <div className="bg-secondary p-6 rounded-lg flex items-start space-x-4">
                  <div className="bg-primary p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-300">General: contact@twsolutions.com</p>
                    <p className="text-gray-300">Support: support@twsolutions.com</p>
                  </div>
                </div>

                <div className="bg-secondary p-6 rounded-lg flex items-start space-x-4">
                  <div className="bg-primary p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Office Location</h3>
                    <p className="text-gray-300">212-353 Rue Querbes</p>
                    <p className="text-gray-300">Vaudreuil-Dorion, QC</p>
                  </div>
                </div>

                <div className="bg-secondary p-6 rounded-lg flex items-start space-x-4">
                  <div className="bg-primary p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-300">Weekend: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-secondary p-8 rounded-lg shadow-xl">
              <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="hidden">
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-primary border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-accent transition-colors duration-200"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-primary border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-accent transition-colors duration-200"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-primary border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-accent transition-colors duration-200"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-primary border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-accent transition-colors duration-200"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent-light px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors duration-200 disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;