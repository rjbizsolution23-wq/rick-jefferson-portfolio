'use client'

import { motion } from 'framer-motion'
import { 
  Brain, 
  Code, 
  Cloud, 
  Cpu, 
  Database, 
  Lock, 
  Zap,
  TrendingUp,
  DollarSign,
  Shield,
  CreditCard,
  Building2,
  GraduationCap,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Star,
  Award
} from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-xl z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-display font-bold"
            >
              <span className="gradient-text">Rick Jefferson</span>
            </motion.div>
            <div className="hidden md:flex space-x-8">
              <Link href="#tech" className="text-gray-300 hover:text-primary-400 transition">Technology</Link>
              <Link href="#credit" className="text-gray-300 hover:text-primary-400 transition">Credit & Finance</Link>
              <Link href="#portfolio" className="text-gray-300 hover:text-primary-400 transition">Portfolio</Link>
              <Link href="#contact" className="text-gray-300 hover:text-primary-400 transition">Contact</Link>
            </div>
            <motion.a
              href="tel:8667524618"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-500 to-accent-500 px-6 py-2 rounded-full font-semibold"
            >
              (866) 752-4618
            </motion.a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-primary-950 to-accent-950 animate-gradient" />
        
        {/* Floating particles */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary-400 rounded-full"
              animate={{
                x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
                y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
                opacity: [0.2, 0.8, 0.2]
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-display font-black mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              AI Architect.<br />
              <span className="gradient-text">Credit Master.</span><br />
              Empire Builder.
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Transforming businesses through cutting-edge AI automation while empowering financial freedom through elite credit strategies.
            </motion.p>

            <motion.p
              className="text-lg text-gray-400 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              500+ Businesses Automated • $50M+ Generated • AWS Certified Solutions Architect
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="#tech"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 px-8 py-4 rounded-full font-bold text-lg inline-flex items-center justify-center group"
              >
                Explore Tech Solutions
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a
                href="#credit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-accent-500 text-accent-400 hover:bg-accent-500 hover:text-white px-8 py-4 rounded-full font-bold text-lg inline-flex items-center justify-center group"
              >
                Credit & Finance Services
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { value: "500+", label: "Businesses Automated" },
              { value: "$50M+", label: "Revenue Generated" },
              { value: "52", label: "Industries Served" },
              { value: "85%", label: "Avg. Efficiency Gain" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + i * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6"
              >
                <div className="text-4xl font-black gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-400 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Technology & AI Section */}
      <section id="tech" className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-display font-black mb-6">
              <span className="gradient-text">Technology & AI</span> Expertise
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Enterprise-grade AI systems and cloud infrastructure that transform business operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI & Machine Learning",
                description: "Custom AI models, NLP, computer vision, and LLM integration",
                tech: ["TensorFlow", "PyTorch", "LangChain", "OpenAI"]
              },
              {
                icon: Cloud,
                title: "Cloud Infrastructure",
                description: "AWS Certified Solutions Architect - scalable, secure deployments",
                tech: ["AWS", "GCP", "Azure", "Kubernetes"]
              },
              {
                icon: Code,
                title: "Full-Stack Development",
                description: "Enterprise applications from frontend to backend",
                tech: ["Python", "TypeScript", "React", "FastAPI"]
              },
              {
                icon: Zap,
                title: "Automation Systems",
                description: "Workflow automation and RPA solutions",
                tech: ["n8n", "Zapier", "Apache Airflow", "Celery"]
              },
              {
                icon: Database,
                title: "Data Engineering",
                description: "ETL pipelines, data warehousing, and analytics",
                tech: ["PostgreSQL", "MongoDB", "Redis", "Pinecone"]
              },
              {
                icon: Lock,
                title: "Cybersecurity",
                description: "Zero Trust architecture and compliance",
                tech: ["OWASP", "SOC 2", "HIPAA", "GDPR"]
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-gray-950 border border-gray-800 rounded-2xl p-8 hover:border-primary-500/50 transition-all group"
              >
                <service.icon className="w-12 h-12 text-primary-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tech.map((tech, j) => (
                    <span key={j} className="text-xs bg-primary-500/10 text-primary-400 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link 
              href="#contact"
              className="inline-flex items-center text-primary-400 hover:text-primary-300 font-semibold text-lg group"
            >
              Get a Free AI Assessment
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Credit & Finance Section */}
      <section id="credit" className="py-24 bg-gradient-to-br from-gray-950 to-accent-950/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-display font-black mb-6">
              Credit & <span className="gradient-text">Financial Mastery</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Elite credit strategies and financial systems that build wealth and unlock funding
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: CreditCard,
                title: "Credit Repair & Optimization",
                description: "100+ point score increases in 60 days with AI-powered dispute systems",
                features: ["FCRA Compliance", "Metro 2 Audits", "Automated Disputes", "Legal Enforcement"]
              },
              {
                icon: Building2,
                title: "Business Credit Building",
                description: "Establish and scale business credit for funding and growth",
                features: ["Entity Setup", "Credit Profiles", "Trade Lines", "Vendor Accounts"]
              },
              {
                icon: DollarSign,
                title: "Business Funding",
                description: "Unlock $50K-$250K+ in business funding and capital",
                features: ["SBA Loans", "Business Lines", "Equipment Financing", "Investor Ready"]
              },
              {
                icon: Shield,
                title: "Asset Protection",
                description: "Legal structures to protect wealth and minimize liability",
                features: ["Trust Setup", "LLC Formation", "Privacy Strategies", "Tax Optimization"]
              },
              {
                icon: GraduationCap,
                title: "Financial Literacy",
                description: "Education and mentorship for long-term wealth building",
                features: ["1-on-1 Coaching", "Video Courses", "Community Access", "Tools & Templates"]
              },
              {
                icon: Cpu,
                title: "Supreme Credit Master AGI",
                description: "AI-powered credit enforcement and automation platform",
                features: ["12 Departments", "Legal Automation", "Case Management", "Settlement Engine"]
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-accent-500/30 rounded-2xl p-8 hover:border-accent-500 transition-all group"
              >
                <service.icon className="w-12 h-12 text-accent-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-start text-sm text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-accent-400 mr-2 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Supreme Credit Master AGI Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-accent-500/10 to-primary-500/10 border-2 border-accent-500/50 rounded-3xl p-12 text-center"
          >
            <Award className="w-16 h-16 text-accent-400 mx-auto mb-6" />
            <h3 className="text-4xl font-display font-black mb-4">
              Supreme Credit Master AGI II™
            </h3>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
              The world's first fully automated, AI-powered, compliance-backed credit repair system with 12 integrated departments
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {["AI Federal Audit", "Certified Disputes", "Legal Enforcement", "Case Management", "Settlement Engine"].map((feature, i) => (
                <span key={i} className="bg-accent-500/20 text-accent-300 px-4 py-2 rounded-full text-sm font-semibold">
                  {feature}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://members.rickjefferson.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-accent-500 to-accent-600 px-8 py-4 rounded-full font-bold inline-flex items-center justify-center"
              >
                Access Members Portal
                <ArrowRight className="ml-2" />
              </motion.a>
              <motion.a
                href="tel:8667524618"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-accent-500 text-accent-400 hover:bg-accent-500 hover:text-white px-8 py-4 rounded-full font-bold"
              >
                Schedule Consultation
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-display font-black mb-6">
              Credentials & <span className="gradient-text">Certifications</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "AWS Certified",
                subtitle: "Solutions Architect Professional",
                icon: Award
              },
              {
                title: "Credit Certified",
                subtitle: "CCC, CCSS, CCRS™, CCRR®, DCCS™",
                icon: Star
              },
              {
                title: "AI Specializations",
                subtitle: "Computer Vision, NLP, ML Engineering",
                icon: Brain
              },
              {
                title: "Compliance Expert",
                subtitle: "HIPAA, SOC 2, GDPR, FCRA",
                icon: Shield
              }
            ].map((cred, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center hover:border-primary-500/50 transition-all"
              >
                <cred.icon className="w-12 h-12 text-primary-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{cred.title}</h3>
                <p className="text-gray-400 text-sm">{cred.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-primary-950 to-accent-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-display font-black mb-6">
              Let's Build Your <span className="gradient-text">Empire</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Whether you need cutting-edge AI automation or elite credit strategies, let's transform your vision into reality.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
                <div className="text-primary-400 font-bold mb-2">Phone</div>
                <a href="tel:8667524618" className="text-xl hover:text-primary-400 transition">
                  (866) 752-4618
                </a>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
                <div className="text-primary-400 font-bold mb-2">Email</div>
                <a href="mailto:info@rickjeffersonsolutions.com" className="text-xl hover:text-primary-400 transition break-all">
                  info@rickjeffersonsolutions.com
                </a>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
                <div className="text-primary-400 font-bold mb-2">Location</div>
                <div className="text-xl">Frisco, Texas</div>
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
              <p className="text-gray-400 mb-4">
                <strong className="text-white">Rick Jefferson Solutions</strong><br />
                5 Cowboys Way, Ste 300<br />
                Frisco, Texas 75034
              </p>
              <div className="flex justify-center space-x-6 mt-8">
                <a href="https://www.linkedin.com/in/rick-jefferson-314998235" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="https://www.instagram.com/rickjeffsolutions/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://twitter.com/ricksolutions1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="https://github.com/rickjeffsolutions" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition">
                  <span className="sr-only">GitHub</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p className="mb-4">
              <strong className="text-white gradient-text">Rick Jefferson Solutions</strong> • 
              <strong className="text-white"> NeuronEdge Labs™</strong> • 
              <strong className="text-white"> Supreme Credit Master AGI™</strong>
            </p>
            <p className="mb-4">
              5 Cowboys Way, Ste 300, Frisco, Texas 75034
            </p>
            <p className="text-sm">
              © {new Date().getFullYear()} Rick Jefferson. All rights reserved.
            </p>
            <p className="text-xs mt-4 italic">
              "If we do not teach our youth technology, someone else will teach them dependency." — Rick Jefferson
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
