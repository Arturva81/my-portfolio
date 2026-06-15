import nameImg from './assets/Asset 2.png'
import myWorkImg from './assets/Asset 1.png'
import photoImg from './assets/Asset 3.png'
import contactImg from './assets/Asset 4.png'
import blobImg from './assets/Asset 5.png'
import './App.css'

const projects = [
  { id: 1, href: 'https://www.behance.net/arturovzquez2', label: 'Project 1' },
  { id: 2, href: 'https://www.behance.net/arturovzquez2', label: 'Project 2' },
  { id: 3, href: 'https://www.behance.net/arturovzquez2', label: 'Project 3' },
  { id: 4, href: 'https://github.com/Arturva81', label: 'Project 4' },
  { id: 5, href: 'https://github.com/Arturva81', label: 'Project 5' },
  { id: 6, href: 'https://github.com/Arturva81', label: 'Project 6' },
  { id: 7, href: 'https://github.com/Arturva81', label: 'Project 7' },
  { id: 8, href: 'https://github.com/Arturva81', label: 'Project 8' },
]

function App() {
  return (
    <div className="min-h-screen bg-white text-black font-sans overflow-x-hidden">

      {/* ── Navbar ── */}
      <nav className="flex justify-between items-start px-10 py-6">
        <div className="font-bold text-black leading-tight text-base">
          Personal<br />Portfolio
        </div>
        <div className="flex gap-8 text-sm font-medium">
          <a href="#home" className="underline hover:opacity-70 transition-opacity">Home</a>
          <a href="#work" className="underline hover:opacity-70 transition-opacity">My Work</a>
          <a href="#contact" className="underline hover:opacity-70 transition-opacity">Contact</a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section id="home" className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 pb-20 gap-10">
        <div className="flex-1 max-w-xl">
          <img src={nameImg} alt="Arturo Vazquez" className="w-full max-w-md mb-8" />
          <p className="text-gray-700 text-base leading-relaxed mb-6">
            Graphic designer with experience in social media, branding, and digital
            content creation. Skilled in crafting visuals for diverse industries,
            with great teamwork experience, creativity, and delivering engaging and
            successful designs.
          </p>
          <div className="text-gray-500 text-sm space-y-1">
            <p>Vancouver BC</p>
            <p>
              <a href="mailto:arturva.81@gmail.com" className="hover:underline">
                arturva.81@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:+16727622853" className="hover:underline">
                (672) 762 2853
              </a>
            </p>
          </div>
        </div>
        <div className="flex-shrink-0 relative">
          <img src={photoImg} alt="Arturo Vazquez" className="w-72 md:w-80 drop-shadow-xl" />
          {/* oval shadow */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-56 h-6 bg-gray-400/40 rounded-full blur-md -z-10" />
        </div>
      </section>

      {/* ── My Work ── */}
      <section id="work" className="relative px-10 md:px-20 py-16">
        {/* orange blob decoration – right edge */}
        <div className="absolute right-0 top-8 w-24 md:w-32 overflow-hidden pointer-events-none select-none">
          <img src={blobImg} alt="" className="w-full translate-x-8" />
        </div>

        <div className="flex flex-wrap items-center gap-6 mb-12">
          <img src={myWorkImg} alt="My Work" className="w-52 md:w-64" />
          <p className="text-gray-500 text-base">
            Github Projects &amp; Behance
          </p>
        </div>

        {/* 4 × 2 project card grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {projects.map((project, idx) => {
            const tilt = ['-rotate-2', 'rotate-1', '-rotate-1', 'rotate-2']
            return (
              <a
                key={project.id}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={project.label}
                className={`polaroid-card group ${tilt[idx % 4]}`}
              >
                {/* blue offset shadow card */}
                <div className="absolute inset-0 translate-x-2 translate-y-2 bg-blue-600 border-2 border-black rounded-xl -z-10" />
                {/* white polaroid frame */}
                <div className="relative bg-white border-2 border-black p-3 pb-10 rounded-xl shadow-md aspect-[3/4] transition-transform group-hover:scale-105" />
              </a>
            )
          })}
        </div>
      </section>

      {/* ── CTA + Contact ── */}
      <section id="contact" className="relative px-10 md:px-20 pt-16 pb-24">
        {/* "Let's work together!" heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-right mb-16">
          Let&apos;s work together!
        </h2>

        {/* orange blob – left edge */}
        <div className="absolute left-0 bottom-20 w-24 md:w-32 overflow-hidden pointer-events-none select-none">
          <img src={blobImg} alt="" className="w-full -translate-x-8 scale-x-[-1]" />
        </div>

        {/* social links */}
        <div className="flex justify-center gap-10 mb-16">
          <a
            href="https://github.com/Arturva81"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex flex-col items-center gap-2 text-gray-700 hover:text-black transition-colors"
          >
            <i className="fa-brands fa-github text-4xl" />
            <span className="text-sm">GitHub</span>
          </a>
          <a
            href="https://www.behance.net/arturovzquez2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Behance"
            className="flex flex-col items-center gap-2 text-gray-700 hover:text-black transition-colors"
          >
            <i className="fa-brands fa-behance text-4xl" />
            <span className="text-sm">Behance</span>
          </a>
          <a
            href="https://www.linkedin.com/in/arturovzquez/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex flex-col items-center gap-2 text-gray-700 hover:text-black transition-colors"
          >
            <i className="fa-brands fa-linkedin text-4xl" />
            <span className="text-sm">LinkedIn</span>
          </a>
        </div>

        {/* "Contact me" button */}
        <div className="flex justify-center">
          <a
            href="mailto:arturva.81@gmail.com"
            className="inline-block hover:opacity-80 active:scale-95 transition-all"
          >
            <img src={contactImg} alt="Contact me" className="w-56 md:w-72" />
          </a>
        </div>
      </section>

    </div>
  )
}

export default App
