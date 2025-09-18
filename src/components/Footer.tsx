import { motion } from 'framer-motion'
import { Heart, Terminal } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-dark-bg to-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 mb-4"
            >
              <Terminal className="w-8 h-8 text-cyber-blue" />
              <span className="text-xl font-bold gradient-text">DevOps.exe</span>
            </motion.div>
            <p className="text-gray-400 font-mono text-sm">
              Building the future of cloud infrastructure, one deployment at a time.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-cyber-blue mb-4">Quick Links</h3>
            <div className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  whileHover={{ x: 5 }}
                  className="block text-gray-400 hover:text-cyber-blue transition-colors duration-300 font-mono text-sm"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-cyber-blue mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {['AWS', 'Kubernetes', 'Docker', 'Terraform', 'Python'].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-cyber-blue/10 text-cyber-blue rounded text-xs font-mono border border-cyber-blue/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 font-mono text-sm flex items-center"
            >
              Made with <Heart size={16} className="text-red-500 mx-1" /> and lots of ☕
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-gray-400 font-mono text-sm mt-4 md:mt-0"
            >
              © 2025 Karan Chandwani | DevOps Engineer. All rights reserved.
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer