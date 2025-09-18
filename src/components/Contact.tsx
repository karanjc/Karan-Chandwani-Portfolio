import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(formData.subject)
    const body = encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)
    window.location.href = `mailto:karanjchandwani@gmail.com?subject=${subject}&body=${body}`
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'karanjchandwani@gmail.com',
      href: 'mailto:karanjchandwani@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '(+91) 9587311156',
      href: 'tel:+91-9587311156'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hyderabad, India',
      href: '#'
    }
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/karanjc', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/karan-chandwani/', label: 'LinkedIn' }
  ]

  return (
    <section id="contact" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-mono">
            Ready to discuss your next cloud project? Let's build something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-effect p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-cyber-blue">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-white/5 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <info.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 font-mono text-sm">{info.label}</p>
                      <p className="text-white font-mono">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="glass-effect p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-cyber-blue">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 glass-effect rounded-full hover:bg-cyber-blue/20 transition-all duration-300"
                  >
                    <social.icon size={24} className="text-cyber-blue" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-effect p-8 rounded-xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-cyber-blue">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 font-mono text-sm mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-card border border-gray-700 rounded-lg focus:border-cyber-blue focus:outline-none transition-colors duration-300 font-mono"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 font-mono text-sm mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-card border border-gray-700 rounded-lg focus:border-cyber-blue focus:outline-none transition-colors duration-300 font-mono"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-400 font-mono text-sm mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-card border border-gray-700 rounded-lg focus:border-cyber-blue focus:outline-none transition-colors duration-300 font-mono"
                  placeholder="Project Discussion"
                />
              </div>
              
              <div>
                <label className="block text-gray-400 font-mono text-sm mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-card border border-gray-700 rounded-lg focus:border-cyber-blue focus:outline-none transition-colors duration-300 font-mono resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center space-x-2 px-8 py-3 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-lg font-mono font-semibold hover:shadow-lg hover:shadow-cyber-blue/25 transition-all duration-300"
              >
                <Send size={20} />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact