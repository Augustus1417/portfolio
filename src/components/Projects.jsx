import { Github, ExternalLink } from 'lucide-react' 

export default function Projects({ projects }) {
  return (
    <section id="projects" className="py-20 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className={`group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 ${project.colors.hover} transition-all duration-300 transform hover:scale-105 hover:-translate-y-2`}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${project.colors.bg} flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300`}>
                {project.icon}
              </div>

              <h3 className={`text-xl font-bold text-white mb-3 transition-colors duration-300 ${project.colors.text}`}>
                {project.name}
              </h3>

              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center ${project.colors.text} transition-colors duration-300`}
              >
                <Github size={16} className="mr-2" />
                <span className="mr-2">View Code</span>
                <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
