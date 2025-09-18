import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const skillCategories = [
    {
      title: 'Cloud Platforms',
      skills: [
        { name: 'AWS', level: 95 },
        { name: 'Azure', level: 10 },
        { name: 'Google Cloud', level: 20 }
      ]
    },
    {
      title: 'DevOps Tools',
      skills: [
        { name: 'Docker', level: 90 },
        { name: 'Kubernetes', level: 90 },
        { name: 'Jenkins', level: 85 },
        { name: 'GitLab CI', level: 90 }
      ]
    },
    {
      title: 'Infrastructure as Code',
      skills: [
        { name: 'Terraform', level: 95 },
        { name: 'CloudFormation', level: 85 },
        { name: 'Ansible', level: 80 }
      ]
    },
    {
      title: 'Monitoring & Security',
      skills: [
        { name: 'Prometheus', level: 85 },
        { name: 'Grafana', level: 90 },
        { name: 'ELK Stack', level: 80 }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Technical Arsenal</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-mono">
            Mastering the tools and technologies that power modern cloud infrastructure
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="glass-effect p-6 rounded-xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-cyber-blue">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-white">{skill.name}</span>
                      <span className="font-mono text-cyber-blue">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                        className="h-full bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue to-cyber-purple animate-pulse opacity-75"></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="glass-effect p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Certifications & Learning</h3>
            <div className="flex justify-center gap-6">
              {[
                'AWS Solutions Architect',
                'Terraform Associate'
              ].map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  className="p-4 bg-gradient-to-r from-cyber-blue/10 to-cyber-purple/10 rounded-lg border border-cyber-blue/30"
                >
                  <span className="font-mono text-cyber-blue">{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills