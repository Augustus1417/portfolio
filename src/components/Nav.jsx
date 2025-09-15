export default function Nav({ activeSection }) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-700/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Jed.dev
          </div>

          <div className="hidden md:flex space-x-8">
            {['About', 'Skills', 'Projects', 'Certificates', 'Setup'].map((item) => (
              <a
                key={item} 
                href={`#${item.toLowerCase()}`}
                className={`transition-colors duration-200 hover:text-cyan-400 ${
                  activeSection === item.toLowerCase() ? 'text-cyan-400' : 'text-gray-300'
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
