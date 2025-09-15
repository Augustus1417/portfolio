import { Award, ExternalLink } from 'lucide-react' 

export default function Certificates({ certificates }) {
  return (
    <section id="certificates" className="py-20 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Certificates
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((cert) => (
            <a
              key={cert.name}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-r ${cert.color} flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300`}
                >
                  <Award size={32} className="text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {cert.name}
                </h3>

                <p className="text-gray-400 mb-4">Issued by {cert.issuer}</p>

                <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                  <span className="mr-2">View Certificate</span>
                  <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
