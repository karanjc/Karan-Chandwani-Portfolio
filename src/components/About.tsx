import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Cloud, Zap, Shield } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const features = [
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Designing scalable, resilient cloud infrastructure on AWS, Azure, and GCP'
    },
    {
      icon: Code,
      title: 'Infrastructure as Code',
      description: 'Terraform, CloudFormation, and Ansible for automated infrastructure management'
    },
    {
      icon: Zap,
      title: 'CI/CD Pipelines',
      description: 'Jenkins, GitLab CI, GitHub Actions for seamless deployment automation'
    },
    {
      icon: Shield,
      title: 'Security & Monitoring',
      description: 'Implementing security best practices and comprehensive monitoring solutions'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-dark-bg to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-mono">
            Passionate about building robust, scalable systems that power modern applications. 
            With expertise in cloud technologies and DevOps practices, I bridge the gap between 
            development and operations to deliver exceptional results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-effect p-6 rounded-xl hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="mb-4">
                <feature.icon 
                  size={48} 
                  className="text-cyber-blue group-hover:text-cyber-purple transition-colors duration-300" 
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyber-blue transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 font-mono text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  )
}

export default About