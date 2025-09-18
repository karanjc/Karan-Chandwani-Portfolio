import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, Server, Cloud, Zap } from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const projects = [
    {
      title: 'Multi-Cloud Kubernetes Platform',
      description: 'Architected a multi-cloud Kubernetes platform with automated failover, monitoring, and cost optimization across AWS.',
      tech: ['Kubernetes', 'Terraform', 'Prometheus', 'Grafana', 'ArgoCD'],
      icon: Cloud,
      gradient: 'from-blue-500 to-purple-600',
      features: ['99.9% Uptime', 'Auto-scaling', 'Cost Optimized', 'Multi-region']
    },
    {
      title: 'Serverless CI/CD Pipeline',
      description: 'Built a serverless CI/CD pipeline using AWS Lambda, reducing deployment time by 70% and infrastructure costs by 60%.',
      tech: ['AWS Lambda', 'CodePipeline', 'CloudFormation', 'Docker', 'Python'],
      icon: Zap,
      gradient: 'from-green-500 to-teal-600',
      features: ['70% Faster', 'Serverless', 'Cost Effective', 'Auto-scaling']
    },
    {
      title: 'Infrastructure Automation Suite',
      description: 'Developed comprehensive infrastructure automation using Terraform modules, Ansible playbooks, and custom monitoring solutions.',
      tech: ['Terraform', 'Ansible', 'Python', 'Bash', 'Prometheus'],
      icon: Server,
      gradient: 'from-orange-500 to-red-600',
      features: ['100% Automated', 'Self-healing', 'Scalable', 'Monitored']
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-mono">
            Real-world solutions that demonstrate expertise in cloud architecture and DevOps automation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-effect rounded-xl overflow-hidden group hover:scale-105 transition-all duration-300"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} mr-4`}>
                    <project.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyber-blue transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-400 font-mono text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-cyber-blue/10 text-cyber-blue rounded-full text-xs font-mono border border-cyber-blue/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center text-xs font-mono text-gray-400">
                        <div className="w-2 h-2 bg-cyber-green rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-lg font-mono text-sm hover:shadow-lg hover:shadow-cyber-blue/25 transition-all duration-300"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="https://github.com/karanjc"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-8 py-3 glass-effect rounded-full font-mono font-semibold border border-cyber-blue hover:bg-cyber-blue/10 transition-all duration-300"
          >
            <Github size={20} />
            <span>View All Projects</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects