import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "vijayredde018@gmail.com",
      href: "mailto:vijayredde018@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9000925629",
      href: "tel:+919000925629",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, India",
      href: null,
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-slate-900 mb-6">Let's Connect</h3>
        <p className="text-slate-600 mb-8 leading-relaxed">
          I'm always excited to discuss new opportunities, projects, or just have a chat about technology and innovation.
        </p>
        
        <div className="space-y-4 mb-8">
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.label}
              href__={info.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ x: 5 }}
              className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-100"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <info.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-slate-500 text-sm">{info.label}</p>
                <p className="text-slate-900 font-medium">{info.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
        
        {/* Social Links */}
        <div className="flex gap-4">
          <motion.a
            href__="https://www.linkedin.com/in/vijay-reddy10"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors"
          >
            <Linkedin className="w-5 h-5 text-white" />
          </motion.a>
          <motion.a
            href__="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center hover:bg-slate-700 transition-colors"
          >
            <Github className="w-5 h-5 text-white" />
          </motion.a>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100"
      >
        {submitted ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center py-12"
          >
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Send className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Message Sent!</h3>
            <p className="text-slate-600 mt-2">I'll get back to you soon.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
              <Input
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name"
                required
                className="h-12"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                required
                className="h-12"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
              <Textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Your message..."
                rows={5}
                required
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-700 hover:to-emerald-600 text-white font-medium"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                  />
                  Sending...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Send className="w-5 h-5" />
                  Send Message
                </span>
              )}
            </Button>
          </form>
        )}
      </motion.div>
    </div>
  );
}