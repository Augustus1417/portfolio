import ProfilePic from '../assets/me.jpg'

export default function About() {
  return (
    <section id="about" className="py-20 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              My name is Jed Xyril S. Cruz. I'm a passionate computer science student in my junior year at Lyceum of the Philippines University - Cavite. 
              My journey in tech spans across multiple programming languages and frameworks, with a special love for 
              creating seamless user experiences and robust backend systems.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me customizing my Arch Linux setup, fine-tuning my Neovim configuration, 
              or exploring the latest in web and mobile development technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30">
                <span className="text-purple-300">🎓 Junior Year CS Student</span>
              </div>
              <div className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30">
                <span className="text-cyan-300">💻 Full-Stack Developer</span>
              </div>
              <div className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full border border-green-500/30">
                <span className="text-green-300">🐧 Linux Enthusiast</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/30 p-4 flex items-center justify-center">
              <img
                src={ProfilePic}
                alt="Jed Xyril S. Cruz"
                className="rounded-2xl object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
