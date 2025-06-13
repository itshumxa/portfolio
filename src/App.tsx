import React, { useEffect, useState } from 'react';
import { Award, BookOpen, Code, Database, Globe, Mail, Phone, MapPin, Calendar, ExternalLink, Github, Linkedin, Download, Send, User, Briefcase, GraduationCap, Target, Zap, Shield, Cpu } from 'lucide-react';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Loading animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    // Scroll progress
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -10px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all elements with animation classes
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [isLoaded]);

  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      description: "HTML, CSS, JavaScript, React",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Python & Automation",
      description: "Data Processing, File Handling, Scripting",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Machine Learning & Security",
      description: "Scikit-learn, XGBoost, Cybersecurity, Vulnerability Detection",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Networking & Systems",
      description: "OSI Model, Network Protocols, Switching & Routing",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "IoT & Embedded Systems",
      description: "Sensor Integration, Real-time Data Processing, Smart Systems",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const projects = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Web Vulnerability Detection",
      description: "Security-focused project detecting website vulnerabilities (SQLi, XSS) using Burp Suite, OWASP ZAP, and XGBoost with 92% accuracy.",
      tech: ["Python", "XGBoost", "Security Tools"],
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Malware File & Link Detection",
      description: "ML-based system scanning files and URLs for malware patterns using entropy analysis and domain features. Achieved 90%+ accuracy.",
      tech: ["Machine Learning", "Python", "Cybersecurity"],
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: <Cpu className="w-12 h-12" />,
      title: "Plant Disease Detection using IoT",
      description: "IoT sensors gather real-time plant health data with ML model predictions for disease detection and automated alerts.",
      tech: ["IoT", "Machine Learning", "Sensors"],
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Creative Portfolio Site",
      description: "Responsive portfolio website with advanced animations and interactive elements built with modern web technologies.",
      tech: ["React", "CSS3", "JavaScript"],
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const certificates = [
    {
      title: "Internet of Things (IoT)",
      issuer: "NAVTAC",
      date: "2024",
      description: "Comprehensive certification covering IoT fundamentals, sensor integration, data processing, and smart system development.",
      skills: ["IoT Architecture", "Sensor Networks", "Data Analytics", "Embedded Systems"],
      verificationLink: "https://www.linkedin.com/posts/muhammad-hamza-140663243_officially-certified-in-iot-by-navtac-activity-7188580404965109760-CbKU?utm_source=share&utm_medium=member_desktop&rcm=ACoAADxucwAB5uaYB1HYycv2WdN4CZ5qcwVSDW8",
      icon: <Cpu className="w-8 h-8" />
    }
  ];

  const research = [
    {
      title: "Sindhi Text Classification using Modified TF-IDF",
      venue: "MDSRIC 2024",
      description: "Presented research on enhancing natural language processing for low-resource languages through improved text classification techniques.",
      link: "https://uow.edu.pk/ORIC/MDSRIC/Publications/8th%20MDSRIC-152.pdf",
      icon: <BookOpen className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Loading Screen */}
      <div className={`fixed inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-500 z-50 flex items-center justify-center transition-all duration-1000 ${isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="relative">
          <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-cyan-300 rounded-full animate-spin" style={{ animationDelay: '0.3s' }}></div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-white/20 z-40">
        <div 
          className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-36 h-36 bg-gradient-to-br from-green-400/20 to-teal-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-lg z-30 border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Certifications', 'Projects', 'Research', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-cyan-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-500">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-white rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Muhammad Hamza
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto leading-relaxed">
              Telecommunication Engineer | AI-ML & Cybersecurity Enthusiast
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#about"
                className="px-8 py-4 bg-white/20 backdrop-blur-lg border border-white/30 rounded-full hover:bg-white/30 transition-all duration-300 font-semibold hover:scale-105 hover:shadow-xl"
              >
                Discover My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-semibold hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Get In Touch
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
<section id="about" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
        About Me
      </h2>
    </div>

    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Text Side */}
      <div className="animate-on-scroll opacity-0 translate-x-[-50px] transition-all duration-1000 delay-300">
        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
          <p>
            I'm Muhammad Hamza, a final-year Telecommunication Engineering student with a passion for machine learning, cybersecurity, and IoT systems. I enjoy building intelligent, real-world tools from detecting website vulnerabilities to malware prediction systems.
          </p>
          <p>
            With a strong academic background (GPA 3.71) and hands-on experience through internships at PIA, Pakistan Radio Broadcasting, and Alternative Education, I've worked on telecom systems, live broadcasting signals, and Python-based automation tools.
          </p>
          <p>
            I'm actively involved in research and have presented work on Sindhi text classification using Modified TF-IDF at MDSRIC. Currently developing smart security tools using machine learning to solve critical problems in web vulnerability detection and malware classification.
          </p>
        </div>
      </div>
      {/* Image Side */}
      <div className="animate-on-scroll opacity-0 translate-x-[50px] transition-all duration-1000 delay-500">
        <div className="relative">
          <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 p-2 hover:scale-105 transition-transform duration-500">
            <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
              <img
                src="public\user.png"
                alt="Muhammad Hamza"
                className="object-cover w-full h-full rounded-full"
              />
            </div>
          </div>

          <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center animate-pulse">
            <GraduationCap className="w-10 h-10 text-white" />
          </div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center animate-pulse" style={{ animationDelay: '1s' }}>
            <Briefcase className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
              My Skills
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className={`animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-white rounded-2xl p-8 h-full hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">{skill.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
              Certifications
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {certificates.map((cert, index) => (
              <div
                key={cert.title}
                className={`animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-cyan-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-indigo-100">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white flex-shrink-0">
                      {cert.icon}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800 mb-2">{cert.title}</h3>
                          <div className="flex items-center gap-4 text-gray-600">
                            <span className="flex items-center gap-2">
                              <Award className="w-4 h-4" />
                              {cert.issuer}
                            </span>
                            <span className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              {cert.date}
                            </span>
                          </div>
                        </div>
                        <a
                          href={cert.verificationLink}
                          className="mt-4 md:mt-0 px-6 py-2 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white rounded-full hover:from-indigo-600 hover:to-cyan-600 transition-all duration-300 flex items-center gap-2 w-fit"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Verify
                        </a>
                      </div>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">{cert.description}</p>
                      
                      <div className="flex flex-wrap gap-3">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-4 py-2 bg-white rounded-full text-sm font-medium text-indigo-600 border border-indigo-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
              My Projects
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group h-full">
                  <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center text-white relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative z-10 group-hover:scale-110 transition-transform duration-500">
                      {project.icon}
                    </div>
                    <div className="absolute top-4 right-4 w-3 h-3 bg-white rounded-full animate-ping"></div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-xl font-bold mb-4 text-gray-800">{project.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white rounded-full hover:from-indigo-600 hover:to-cyan-600 transition-all duration-300 font-semibold flex items-center justify-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
              Research Work
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {research.map((item, index) => (
              <div
                key={item.title}
                className={`animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-cyan-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-purple-100">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white flex-shrink-0">
                      {item.icon}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-indigo-600 font-semibold mb-4">{item.venue}</p>
                      <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                      
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-semibold"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Read Paper
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-500 text-white relative">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Get In Touch
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="animate-on-scroll opacity-0 translate-x-[-50px] transition-all duration-1000 delay-300">
                <h3 className="text-2xl font-bold mb-6">Let's Work Together</h3>
                <p className="text-lg mb-8 text-white/90 leading-relaxed">
                  Ready to start your next project? I'd love to hear about your ideas and discuss how we can bring them to life.
                </p>
                
                <div className="space-y-4">
                  <a
                    href="mailto:hamzaalee111@gmail.com"
                    className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-lg rounded-xl hover:bg-white/20 transition-all duration-300"
                  >
                    <Mail className="w-6 h-6" />
                    <span>hamzaalee111@gmail.com</span>
                  </a>
                  
                  <a
                    href="https://www.linkedin.com/in/muhammad-hamza-140663243"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-lg rounded-xl hover:bg-white/20 transition-all duration-300"
                  >
                    <Linkedin className="w-6 h-6" />
                    <span>LinkedIn Profile</span>
                  </a>
                  
                  <a
                    href="https://github.com/itshumxa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-lg rounded-xl hover:bg-white/20 transition-all duration-300"
                  >
                    <Github className="w-6 h-6" />
                    <span>GitHub Profile</span>
                  </a>
                </div>
              </div>
              
              <div className="animate-on-scroll opacity-0 translate-x-[50px] transition-all duration-1000 delay-500">
                <form className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-6 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/70"
                      required
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-6 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/70"
                      required
                    />
                  </div>
                  
                  <div>
                    <textarea
                      rows={5}
                      placeholder="Your Message"
                      className="w-full px-6 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/70 resize-none"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-white text-indigo-600 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold flex items-center justify-center gap-2 hover:scale-105"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="mailto:hamzaalee111@gmail.com"
              className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-hamza-140663243"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/itshumxa"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
          
          <p className="text-gray-400">
            &copy; 2025 Muhammad Hamza. All rights reserved.
          </p>
        </div>
      </footer>

      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) translateX(0) !important;
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}

export default App;