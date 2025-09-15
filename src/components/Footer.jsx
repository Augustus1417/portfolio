import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    return (
      <footer className="py-12 px-6 border-t border-gray-800 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            Built with React & TailwindCSS 
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/Augustus1417" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/jed-cruz-6800a3363?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
              <Linkedin size={20} />
            </a>
            <a href="mailto:cruz.jedxyril@gmail.com?subject=Hello&body=Hi there, I found your portfolio and wanted to reach out..." className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    )
}