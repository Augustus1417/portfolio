import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export default function Hero(){
    return (
      <section id="hero" className="relative min-h-screen flex items-center mt-15 justify-center px-6">
        <div className="max-w-4xl mx-auto text-center z-10">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              Jed
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Computer Science Student & Full-Stack Developer
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Junior at Lyceum of the Philippines University - Cavite, passionate about creating 
            innovative solutions and exploring cutting-edge technologies
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com/Augustus1417" className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/jed-cruz-6800a3363?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="mailto:cruz.jedxyril@gmail.com?subject=Hello&body=Hi there, I found your portfolio and wanted to reach out..." className="p-3 rounded-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-110">
              <Mail size={24} />
            </a>
          </div>
          <div className="animate-bounce">
            <ChevronDown size={32} className="text-cyan-400 mx-auto" />
          </div>
        </div>
      </section>
    )
}
