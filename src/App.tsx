import { useState } from 'react'
import PrismaticBurst from "./components/PrismaticBurst.tsx"
import GlassSurface from "./components/GlassSurface.tsx"
import "./App.css"

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const projects = [
    {
      title: "Face ID Door Lock with ESP32",
      date: "October 2025",
      description: "A sophisticated biometric security system that combines facial recognition with IoT hardware. Built using ESP32-CAM module with a custom-trained neural network for face detection and recognition. Features real-time processing, encrypted communication, and seamless integration with home automation systems.",
      tech: ["ESP32", "TensorFlow Lite", "C++", "Python", "MQTT", "Home Assistant"],
      github: "https://github.com/0xrubberbandz/faceid-lock",
      highlights: [
        "Real-time facial recognition with 99.2% accuracy",
        "Encrypted communication protocol for secure data transmission",
        "Low-power mode with wake-on-detection",
        "Integration with smart home ecosystems"
      ]
    },
    {
      title: "Morse Code Communicator Hidden in Plain Sight",
      date: "September 2025",
      description: "A covert communication device disguised as an everyday object, featuring haptic feedback and LED indicators for Morse code transmission. Built with Arduino and custom PCB design, this gadget enables secure communication in environments where traditional methods might be monitored or restricted.",
      tech: ["Arduino", "C++", "PCB Design", "KiCad", "RF Communication", "Haptic Feedback"],
      github: "https://github.com/0xrubberbandz/morse-gadget",
      highlights: [
        "Dual-mode operation: transmit and receive",
        "Custom encryption layer over Morse code",
        "Battery life: 72+ hours continuous operation",
        "Completely silent operation mode with haptic-only feedback"
      ]
    },
    {
      title: "Crystal Exchange — Decentralized Trading Platform",
      date: "August 2025",
      description: "A fully on-chain decentralized exchange that eliminates intermediaries and maximizes transparency. Built on Ethereum with custom smart contracts for automated market making, liquidity pools, and trustless trading. Crystal Exchange redefines DeFi by ensuring every transaction is verifiable and censorship-resistant.",
      tech: ["Solidity", "Ethereum", "React", "Web3.js", "Hardhat", "The Graph", "IPFS"],
      github: "https://github.com/CrystalExch",
      link: "https://x.com/CrystalExch",
      highlights: [
        "Zero-fee trading with gas-optimized smart contracts",
        "Automated market maker (AMM) with dynamic fee structures",
        "Multi-signature governance for protocol upgrades",
        "Real-time on-chain analytics and transparency dashboard"
      ]
    }
  ]

  const renderNavigation = () => (
    <header className="header">
      <nav>
        <GlassSurface width={80} height={30} borderRadius={24} className="my-custom-class">
          <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }}>home</a>
        </GlassSurface>
        <GlassSurface width={80} height={30} borderRadius={24} className="my-custom-class">
          <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('projects'); }}>projects</a>
        </GlassSurface>
        <GlassSurface width={80} height={30} borderRadius={24} className="my-custom-class">
          <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('about'); }}>about</a>
        </GlassSurface>
      </nav>
    </header>
  )

  const renderHomePage = () => (
    <main>
      <h1 className="portfolio-title">Tristan Jolly — Portfolio</h1>
      <p className="portfolio-description">
        I've been fascinated by security and cryptography ever since watching James Bond outwit entire networks with a single gadget.
        That spark grew into a drive to build systems that make trust and identity verifiable online.
        I'm currently building <a className="hyperlink" href="https://x.com/CrystalExch" target="_blank" rel="noopener noreferrer">@CrystalExch</a> —
        a fully on-chain exchange redefining how transparency and trading work on the blockchain.
        In my spare time, I love building gadgets that come to life — like a Face ID door lock and a hidden Morse code communicator —
        where hardware meets code and creativity turns into control.
      </p>

      <div className="portfolio-posts">
        <p><span className="date">October 2025</span> &nbsp;&nbsp; Building a Face ID Door Lock with ESP32</p>
        <p><span className="date">September 2025</span> &nbsp;&nbsp; Morse Code Communicator Hidden in Plain Sight</p>
        <p><span className="date">August 2025</span> &nbsp;&nbsp; Crystal Exchange — Decentralized, On-Chain, No Middlemen</p>
      </div>

      <div className="portfolio-links">
        <a href="https://github.com/0xrubberbandz" target="_blank" rel="noopener noreferrer">↗ github</a>
        <a href="https://www.linkedin.com/in/tristan-jolly-a8849133b/" target="_blank" rel="noopener noreferrer">↗ linkedin</a>
        <a href="mailto:tristan.jolly@outlook.com" target="_blank" rel="noopener noreferrer">↗ contact</a>
      </div>

      <footer className="portfolio-footer">
        © 2025 Tristan Jolly
      </footer>
    </main>
  )

  const renderProjectsPage = () => (
    <main>
      <h1 className="portfolio-title">Projects</h1>
      <p className="portfolio-description">
        A collection of hardware and software projects at the intersection of security, cryptography, and creative engineering.
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          
          <div key={index} className="project-card">
            <div className="project-image-placeholder">
              <div className="placeholder-content">
                <span className="placeholder-icon">🖼️</span>
                <span className="placeholder-text">Project Image</span>
              </div>
            </div>
            
            <div className="project-content">
              <div className="project-header">
                <h2 className="project-title">{project.title}</h2>
                <span className="project-date">{project.date}</span>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-highlights">
                <h3 className="highlights-title">Key Features</h3>
                <ul className="highlights-list">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  ↗ View on GitHub
                </a>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    ↗ Visit Project
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer className="portfolio-footer">
        © 2025 Tristan Jolly
      </footer>
    </main>
  )

  const renderAboutPage = () => (
    <main>
      <h1 className="portfolio-title">About Me</h1>
      
      <div className="about-image-placeholder">
          <img src="/portfolioicon.png" alt="Profile" />
      </div>

      <div className="about-section">
        <h2 className="section-title">Background</h2>
        <p className="section-text">
          My journey into technology started with a childhood fascination with spy gadgets and James Bond films. 
          Watching Bond bypass security systems with ingenious devices sparked something in me — a curiosity about 
          how systems work and, more importantly, how they can be outsmarted or improved. That curiosity evolved 
          into a deep passion for security, cryptography, and building systems that people can trust.
        </p>
        <p className="section-text">
          Today, I'm focused on creating transparent, decentralized technologies that give users control over their 
          digital identity and assets. I believe the future of the internet lies in verifiable trust, where 
          cryptographic proof replaces blind faith in centralized authorities.
        </p>
      </div>

      <div className="about-section">
        <h2 className="section-title">What I Do</h2>
        <p className="section-text">
          I'm currently building Crystal Exchange, a fully on-chain decentralized exchange that eliminates 
          intermediaries and maximizes transparency in DeFi trading. Every transaction is verifiable on the 
          blockchain, ensuring users have complete visibility into how the platform operates.
        </p>
        <p className="section-text">
          Beyond blockchain, I love working on hardware projects that blend physical security with software 
          intelligence. From biometric door locks to covert communication devices, I enjoy creating gadgets 
          where code meets reality and theoretical concepts become tangible tools.
        </p>
      </div>

      <div className="about-section">
        <h2 className="section-title">Technical Expertise</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3 className="skill-title">Blockchain & Web3</h3>
            <ul className="skill-list">
              <li>Solidity smart contract development</li>
              <li>Ethereum & EVM-compatible chains</li>
              <li>DeFi protocols and tokenomics</li>
              <li>Web3.js, Ethers.js integration</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3 className="skill-title">Security & Cryptography</h3>
            <ul className="skill-list">
              <li>Cryptographic protocols</li>
              <li>Biometric authentication systems</li>
              <li>Network security & penetration testing</li>
              <li>Zero-knowledge proofs</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3 className="skill-title">Hardware & IoT</h3>
            <ul className="skill-list">
              <li>ESP32, Arduino development</li>
              <li>PCB design (KiCad)</li>
              <li>Embedded systems programming</li>
              <li>RF communication protocols</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3 className="skill-title">Software Development</h3>
            <ul className="skill-list">
              <li>React, TypeScript, Node.js</li>
              <li>Python for automation & ML</li>
              <li>C++ for performance-critical code</li>
              <li>System architecture & design</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="about-section">
        <h2 className="section-title">Philosophy</h2>
        <p className="section-text">
          I believe in building with purpose and transparency. Whether it's a smart contract or a hardware device, 
          every system I create should be understandable, verifiable, and respect user privacy. Technology should 
          empower individuals, not consolidate power in the hands of a few.
        </p>
        <p className="section-text">
          I'm driven by the challenge of solving complex problems with elegant solutions. The best systems are 
          those that work seamlessly in the background, providing security and trust without friction or 
          unnecessary complexity.
        </p>
      </div>

      <div className="about-section">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-text">
          I'm always interested in discussing new ideas, collaborating on projects, or just chatting about 
          security, crypto, and cool gadgets. Feel free to reach out!
        </p>
        <div className="contact-links">
          <a href="mailto:tristan.jolly@outlook.com" className="contact-link">
            ✉️ tristan.jolly@outlook.com
          </a>
          <a href="https://github.com/0xrubberbandz" target="_blank" rel="noopener noreferrer" className="contact-link">
            ↗ GitHub
          </a>
          <a href="https://www.linkedin.com/in/tristan-jolly-a8849133b/" target="_blank" rel="noopener noreferrer" className="contact-link">
            ↗ LinkedIn
          </a>
          <a href="https://x.com/CrystalExch" target="_blank" rel="noopener noreferrer" className="contact-link">
            ↗ Twitter/X
          </a>
        </div>
      </div>

      <footer className="portfolio-footer">
        © 2025 Tristan Jolly
      </footer>
    </main>
  )

  return (
    <div className="portfolio-wrapper">
      <PrismaticBurst
        animationType="rotate3d"
        intensity={2}
        speed={0.2}
        distort={5}
        paused={false}
        offset={{ x: 0, y: 0 }}
        hoverDampness={0.25}
        rayCount={24}
        mixBlendMode="lighten"
        colors={['#ffffff', '#aaaecf', '#ffffff']}
      />
      <div className={`relative z-10 portfolio-container ${currentPage === 'projects' || currentPage === 'about' ? 'projects-container' : ''}`}>
        {renderNavigation()}
        {currentPage === 'home' && renderHomePage()}
        {currentPage === 'projects' && renderProjectsPage()}
        {currentPage === 'about' && renderAboutPage()}
      </div>
    </div>
  )
}

export default App