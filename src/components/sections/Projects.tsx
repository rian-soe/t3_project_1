import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  category: 'web' | 'mobile' | 'fullstack' | 'other';
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce application built with Next.js, featuring user authentication, product management, shopping cart, and payment integration.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Stripe"],
    image: "/images/project-ecommerce.jpg",
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.vercel.app",
    category: "fullstack"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    image: "/images/project-taskmanager.jpg",
    githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://task-manager-demo.vercel.app",
    category: "web"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A weather application that displays current weather conditions and forecasts using OpenWeatherMap API with beautiful visualizations.",
    technologies: ["React", "TypeScript", "Chart.js", "OpenWeatherMap API", "Tailwind CSS"],
    image: "/images/project-weather.jpg",
    githubUrl: "https://github.com/yourusername/weather-dashboard",
    liveUrl: "https://weather-dashboard-demo.vercel.app",
    category: "web"
  },
  {
    id: 4,
    title: "Mobile Fitness Tracker",
    description: "A React Native mobile app for tracking workouts, setting fitness goals, and monitoring progress with intuitive charts and statistics.",
    technologies: ["React Native", "Expo", "TypeScript", "AsyncStorage", "React Navigation"],
    image: "/images/project-fitness.jpg",
    githubUrl: "https://github.com/yourusername/fitness-tracker",
    category: "mobile"
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring smooth animations and optimal performance.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    image: "/images/project-portfolio.jpg",
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://your-portfolio.vercel.app",
    category: "web"
  },
  {
    id: 6,
    title: "API Gateway Service",
    description: "A microservices API gateway built with Node.js and Express, featuring rate limiting, authentication, and request routing.",
    technologies: ["Node.js", "Express", "Redis", "JWT", "Docker", "Kubernetes"],
    image: "/images/project-api.jpg",
    githubUrl: "https://github.com/yourusername/api-gateway",
    category: "other"
  }
];

const categories = [
  { id: 'all', name: 'All Projects', count: projects.length, icon: '🎯' },
  { id: 'web', name: 'Web Apps', count: projects.filter(p => p.category === 'web').length, icon: '🌐' },
  { id: 'mobile', name: 'Mobile Apps', count: projects.filter(p => p.category === 'mobile').length, icon: '📱' },
  { id: 'fullstack', name: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length, icon: '⚡' },
  { id: 'other', name: 'Other', count: projects.filter(p => p.category === 'other').length, icon: '🔧' }
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-6">
        {/* Header with enhanced design */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6">
            My Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Here are some of the projects I've worked on. Each project represents a unique challenge 
            and showcases different technologies and problem-solving approaches.
          </p>
        </div>

        {/* Enhanced Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`group relative px-6 py-4 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-lg hover:shadow-xl'
              }`}
            >
              <span className="flex items-center space-x-3">
                <span className="text-2xl">{category.icon}</span>
                <span>{category.name}</span>
                <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                  selectedCategory === category.id
                    ? 'bg-white bg-opacity-20 text-white'
                    : 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                }`}>
                  {category.count}
                </span>
              </span>
              
              {/* Hover effect */}
              {selectedCategory !== category.id && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              )}
            </button>
          ))}
        </div>

        {/* Enhanced Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 dark:border-gray-700"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Enhanced Project Image */}
              <div className="relative h-56 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 dark:from-blue-400/20 dark:via-purple-400/20 dark:to-pink-400/20 flex items-center justify-center">
                  <div className="text-center text-gray-700 dark:text-gray-300">
                    <div className="w-20 h-20 mx-auto mb-3 bg-white/20 dark:bg-gray-800/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                      <svg className="w-10 h-10 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium">Project Preview</p>
                  </div>
                </div>
                
                {/* Enhanced Hover Overlay */}
                {hoveredProject === project.id && (
                  <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-purple-900/80 backdrop-blur-sm flex items-center justify-center space-x-6 transition-all duration-500">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link w-14 h-14 bg-white rounded-2xl flex items-center justify-center hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 hover:rotate-3 shadow-lg"
                      >
                        <svg className="w-7 h-7 text-gray-800 group-hover/link:text-blue-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link w-14 h-14 bg-white rounded-2xl flex items-center justify-center hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 hover:-rotate-3 shadow-lg"
                      >
                        <svg className="w-7 h-7 text-gray-800 group-hover/link:text-green-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                )}
              </div>

              {/* Enhanced Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                {/* Enhanced Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-xl border border-blue-200 dark:border-blue-700 hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-800/50 dark:hover:to-purple-800/50 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Enhanced Project Links */}
                <div className="flex space-x-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-700 dark:to-gray-800 text-white text-center rounded-xl hover:from-gray-800 hover:to-gray-700 dark:hover:from-gray-600 dark:hover:to-gray-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <span className="flex items-center justify-center space-x-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span>View Code</span>
                      </span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <span className="flex items-center justify-center space-x-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        <span>Live Demo</span>
                      </span>
                    </a>
                  )}
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 opacity-10 group-hover:opacity-20 transition-opacity duration-300 rounded-bl-full" />
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mt-20">
          <div className="inline-block p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl shadow-xl border border-blue-100 dark:border-gray-600">
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
              Interested in working together or have a project in mind?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span className="mr-3">Let's Discuss Your Project</span>
              <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
