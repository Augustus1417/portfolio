import desktopImage from '../assets/desktop.png';
import nvimImage from '../assets/nvim.png';
import { Code, Github, ExternalLink, Terminal } from 'lucide-react';

export default function Setup() {
    return (
      <section id="setup" className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Development Setup
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300">
              <div className="flex items-center justify-center mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Terminal size={32} className="text-white" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-white mb-2">Arch Linux + Neovim</h3>
                    <p className="text-gray-400">My customized development environment</p>
                  </div>
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                    <Code size={32} className="text-white" />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-900 rounded-xl p-6 border border-gray-700/30">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center">
                    <Terminal size={20} className="mr-2" />
                    Arch Linux Rice
                  </h4>
                  <div className="aspect-video rounded-lg overflow-hidden mb-4">
                    <img 
                      src={desktopImage} 
                      alt="Arch Linux Desktop Rice" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      WM: Hyprland
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                      Terminal: Kitty
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Shell: Bash & Zsh
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-900 rounded-xl p-6 border border-gray-700/30">
                  <h4 className="text-lg font-semibold text-green-400 mb-4 flex items-center">
                    <Code size={20} className="mr-2" />
                    Neovim Configuration
                  </h4>
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                    <img 
                      src={nvimImage} 
                      alt="Neovim Configuration" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                      Plugin Manager: Lazy
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                      Colorscheme: Catppucin
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <a
                  href="https://github.com/Augustus1417/dotfiles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Github size={20} className="mr-2" />
                  <span className="mr-2">Explore My Dotfiles</span>
                  <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}