import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail, FileText } from 'lucide-react'

const Hero = () => {
  const [text, setText] = useState('')
  const fullText = 'DevOps Engineer'

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, i))
      i++
      if (i > fullText.length) {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-gray-900 to-dark-bg"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyber-blue rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            <span className="gradient-text">Hello,</span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-mono mb-6">
            I'm <span className="text-cyber-blue">Karan Chandwani</span>
          </h2>
          <div className="text-xl md:text-2xl font-mono text-gray-300 h-8">
            <span className="terminal-cursor">{text}</span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
        >
          Architecting scalable cloud infrastructure and automating deployment pipelines 
          with cutting-edge DevOps practices. Transforming ideas into robust, secure systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="flex justify-center space-x-6 mb-12"
        >
          {[
            { icon: Github, href: 'https://github.com/karanjc', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/karan-chandwani/', label: 'LinkedIn' },
            { icon: FileText, href: 'YOUR_RESUME_GDRIVE_LINK', label: 'Resume' },
            { icon: Mail, href: '#contact', label: 'Email' }
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 glass-effect rounded-full hover:bg-cyber-blue/20 transition-all duration-300"
            >
              <Icon size={24} className="text-cyber-blue" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full font-mono font-semibold hover:shadow-lg hover:shadow-cyber-blue/25 transition-all duration-300"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 glass-effect rounded-full font-mono font-semibold border border-cyber-blue hover:bg-cyber-blue/10 transition-all duration-300"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown size={32} className="text-cyber-blue" />
      </motion.div>
    </section>
  )
}

export default Hero