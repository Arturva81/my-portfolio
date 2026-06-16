import React from 'react'
import nameImg from './assets/Asset 2.png'
import myWorkImg from './assets/Asset 1.png'
import photoImg from './assets/Asset 3.png'
import contactImg from './assets/Asset 4.png'
import blobImg from './assets/Asset 5.png'
import stickerStar from './assets/Asset 7.png'
import stickerBolt from './assets/8.png'
import stickerSplash from './assets/9.png'
import stickerSparkle from './assets/10.png'
import './App.css'
import {
  SiHtml5, SiCss, SiJavascript, SiAstro, SiReact, SiTailwindcss, SiNextdotjs, SiFigma,
} from 'react-icons/si'

// Adobe app badge component — matches Adobe's own branding
const AdobeBadge = ({ letters, colorClass }: { letters: string; colorClass: string }) => (
  <span className={`adobe-badge ${colorClass}`}>{letters}</span>
)

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
    <div className="animated-bg min-h-screen text-black font-sans overflow-x-hidden">

      {/* ── Navbar ── */}
      <nav className="flex justify-between items-start px-10 md:px-24 lg:px-40 py-6">
        <div className="font-bold text-black leading-tight text-base">
          Personal<br />Portfolio
        </div>
        <div className="flex gap-8 text-sm font-medium">
          <a href="#home" className="underline hover:opacity-70 transition-opacity">Home</a>
          <a href="#work" className="underline hover:opacity-70 transition-opacity">My Work</a>
          <a href="#experience" className="underline hover:opacity-70 transition-opacity">Experience</a>
          <a href="#education" className="underline hover:opacity-70 transition-opacity">Education</a>
          <a href="#skills" className="underline hover:opacity-70 transition-opacity">Skills</a>
          <a href="#contact" className="underline hover:opacity-70 transition-opacity">Contact</a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section id="home" className="relative flex flex-col md:flex-row items-center justify-between px-10 md:px-24 lg:px-40 pb-20 gap-10">
        {/* sticker: yellow star top-left */}
        <img src={stickerStar} alt="" aria-hidden="true" className="sticker absolute top-2 left-6 w-14 -rotate-12 pointer-events-none select-none" />
        {/* sticker: orange sparkle bottom-left near text */}
        <img src={stickerSparkle} alt="" aria-hidden="true" className="sticker absolute bottom-10 left-36 w-10 rotate-12 pointer-events-none select-none" />
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
      <section id="work" className="relative px-10 md:px-24 lg:px-40 py-16">
        {/* sticker: green bolt top-left */}
        <img src={stickerBolt} alt="" aria-hidden="true" className="sticker absolute top-6 left-10 w-12 rotate-6 pointer-events-none select-none" />
        {/* sticker: blue splash bottom-right of section */}
        <img src={stickerSplash} alt="" aria-hidden="true" className="sticker absolute bottom-8 right-12 w-16 -rotate-12 pointer-events-none select-none" />
        {/* orange blob decoration – right edge */}
        <div className="absolute right-0 top-8 w-24 md:w-32 overflow-hidden pointer-events-none select-none">
          <img src={blobImg} alt="" className="w-full translate-x-8" />
        </div>

        <div className="flex flex-wrap items-center gap-6 mb-12">
          <img src={myWorkImg} alt="My Work" className="w-52 md:w-64" />
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

      {/* ── Work Experience ── */}
      <section id="experience" className="relative px-10 md:px-24 lg:px-40 py-16">
        {/* sticker: orange sparkle top-right */}
        <img src={stickerSparkle} alt="" aria-hidden="true" className="sticker absolute top-8 right-16 w-14 -rotate-6 pointer-events-none select-none" />
        <h2 className="section-title text-5xl mb-12">WORK EXPERIENCE</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          {[
            {
              role: 'Graphic Designer',
              company: 'Freelancer — Mexico',
              period: '2023 – 2025',
              bullets: [
                'Created ads and social media content for brands including Circle K, Fiesta Market, and Insane Nightclub, driving engagement and brand visibility.',
                'Designed branding and visual identities for international clients, ensuring cohesive design systems across digital and print platforms.',
              ],
            },
            {
              role: 'Social Media Designer',
              company: 'Senso MX — Mexico',
              period: '2024',
              bullets: [
                'Planned social media strategies, sourced and edited images, and created organic content and ads.',
                'Created motion graphics and animated videos to enhance marketing campaigns.',
              ],
            },
            {
              role: 'Educational Graphic Designer',
              company: 'Twinkl Educational Publishing — UK',
              period: '2022 – 2023',
              bullets: [
                'Designed educational resources, interactive PDFs, and PowerPoints for school distribution.',
                'Working remotely, collaborating with a team to create quality products that met project goals.',
              ],
            },
            {
              role: 'Custom Apparel Designer',
              company: 'Awkward Styles — USA',
              period: '2021 – 2022',
              bullets: [
                'Created custom garment designs, stationery for events, and edited images for the company catalog.',
                'Ensured great visuals and brand consistency across printed and digital materials.',
              ],
            },
            {
              role: 'Social Media Designer',
              company: 'Blakken CC — Mexico',
              period: '2021 – 2022',
              bullets: [
                'In charge of creating social media content, sourced and edited photos and videos, and created illustrations for various brands.',
                'Helped enhance brand image and engagement on social media platforms.',
              ],
            },
          ].map((job, i) => (
            <div key={i} className="relative bg-white border-2 border-black rounded-xl p-6 shadow-[5px_5px_0px_0px_rgba(251,146,60,1)] hover:shadow-[2px_2px_0px_0px_rgba(251,146,60,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
              <span className="inline-block text-xs font-semibold text-orange-500 border border-orange-300 rounded-full px-3 py-0.5 mb-3">{job.period}</span>
              <h3 className="text-xl font-bold mb-1">{job.role}</h3>
              <p className="text-blue-600 font-medium mb-4">{job.company}</p>
              <ul className="list-disc list-outside ml-4 space-y-1">
                {job.bullets.map((b, j) => (
                  <li key={j} className="text-gray-600 text-sm leading-relaxed">{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Education ── */}
      <section id="education" className="relative px-10 md:px-24 lg:px-40 py-16">
        {/* sticker: yellow star top-right */}
        <img src={stickerStar} alt="" aria-hidden="true" className="sticker absolute top-6 right-10 w-16 rotate-12 pointer-events-none select-none" />
        {/* sticker: green bolt bottom-left */}
        <img src={stickerBolt} alt="" aria-hidden="true" className="sticker absolute bottom-6 left-16 w-10 -rotate-15 pointer-events-none select-none" />
        <h2 className="section-title text-5xl mb-12">EDUCATION</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {[
            {
              degree: 'Diploma in Web Application Development',
              school: 'Cornerstone International Community College of Canada — Canada',
              period: '2025 – Present',
              bullets: [
                'Hands-on program focused on full stack development, and interactive media tools for real-world digital applications.',
              ],
            },
            {
              degree: 'Degree in Digital Design',
              school: 'Universidad Iberoamericana León — Mexico',
              period: '2019 – 2024',
              bullets: [
                'Comprehensive training in multimedia design, interactive content, and cross-platform visual communication.',
              ],
            },
          ].map((edu, i) => (
            <div key={i} className="relative bg-white border-2 border-black rounded-xl p-6 shadow-[5px_5px_0px_0px_rgba(96,165,250,1)] hover:shadow-[2px_2px_0px_0px_rgba(96,165,250,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
              <span className="inline-block text-xs font-semibold text-blue-500 border border-blue-300 rounded-full px-3 py-0.5 mb-3">{edu.period}</span>
              <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
              <p className="text-orange-500 font-medium mb-4">{edu.school}</p>
              <ul className="list-disc list-outside ml-4 space-y-1">
                {edu.bullets.map((b, j) => (
                  <li key={j} className="text-gray-600 text-sm leading-relaxed">{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Skills ── */}
      <section id="skills" className="relative px-10 md:px-24 lg:px-40 py-16">
        {/* sticker: blue splash left */}
        <img src={stickerSplash} alt="" aria-hidden="true" className="sticker absolute top-10 right-20 w-14 rotate-6 pointer-events-none select-none" />
        <h2 className="section-title text-5xl mb-12">SKILLS</h2>
        <div className="flex flex-wrap gap-4">
          {([
            { label: 'HTML5',         icon: <SiHtml5 className="text-[#E34F26]" /> },
            { label: 'CSS3',          icon: <SiCss className="text-[#1572B6]" /> },
            { label: 'JavaScript',    icon: <SiJavascript className="text-[#F7DF1E]" /> },
            { label: 'Astro',         icon: <SiAstro className="text-[#FF5D01]" /> },
            { label: 'React',         icon: <SiReact className="text-[#61DAFB]" /> },
            { label: 'Tailwind CSS',  icon: <SiTailwindcss className="text-[#06B6D4]" /> },
            { label: 'Next.js',       icon: <SiNextdotjs className="text-black" /> },
            { label: 'Photoshop',     icon: <AdobeBadge letters="Ps" colorClass="adobe-ps" /> },
            { label: 'Illustrator',   icon: <AdobeBadge letters="Ai" colorClass="adobe-ai" /> },
            { label: 'Premiere Pro',  icon: <AdobeBadge letters="Pr" colorClass="adobe-pr" /> },
            { label: 'After Effects', icon: <AdobeBadge letters="Ae" colorClass="adobe-ae" /> },
            { label: 'Figma',         icon: <SiFigma className="text-[#F24E1E]" /> },
          ] as { label: string; icon: React.ReactNode }[]).map(({ label, icon }) => (
            <span
              key={label}
              className="flex items-center gap-2 px-5 py-3 bg-white border-2 border-black rounded-full text-base font-semibold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-default"
            >
              <span className="text-xl">{icon}</span>
              {label}
            </span>
          ))}
        </div>
      </section>

      {/* ── CTA + Contact ── */}
      <section id="contact" className="relative px-10 md:px-24 lg:px-40 pt-16 pb-24">
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
