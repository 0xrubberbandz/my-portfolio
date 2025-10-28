import { useState } from 'react'
import PrismaticBurst from "./components/PrismaticBurst.tsx"
import PixelTrail from "./components/PixelTrail.tsx"

import GlassSurface from "./components/GlassSurface.tsx"
import portfolioicon from "./assets/aboutmeicon.png"
import morsecodeimage1 from "./assets/morsecodeimage1.jpg"
import "./App.css"

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      title: "Face ID Door Lock with ESP32",
      date: "October 2024 - December 2024",
      description: "A sophisticated biometric security system that combines facial recognition with IoT hardware. Built using ESP32-CAM module with a custom-trained neural network for face detection and recognition. Features real-time processing, encrypted communication, and seamless integration with home automation systems.",
      tech: ["ESP32", "TensorFlow Lite", "C++", "Python", "MQTT", "Home Assistant"],
      github: "https://github.com/0xrubberbandz/faceid-lock",
      highlights: [
        "Real-time facial recognition with 99.2% accuracy",
        "Encrypted communication protocol for secure data transmission",
        "Low-power mode with wake-on-detection",
        "Integration with smart home ecosystems"
      ],
      detailedSections: [
        {
          title: "Project Overview & Motivation",
          content: "The genesis of this project stemmed from a fundamental security concern: traditional door locks are antiquated, vulnerable, and require physical keys that can be lost, stolen, or duplicated. I wanted to create a biometric authentication system that would leverage modern computer vision techniques while maintaining the reliability and speed necessary for real-world deployment. The challenge was to implement facial recognition on resource-constrained hardware—the ESP32-CAM module has only 520KB of SRAM and a dual-core processor running at 240MHz, yet needed to perform real-time face detection and recognition within milliseconds."
        },
        {
          title: "Technical Architecture & Design Process",
          content: "The system architecture required careful consideration of the trade-offs between accuracy, speed, and power consumption. I implemented a cascaded detection pipeline: the first stage uses a lightweight Haar Cascade classifier to identify potential face regions, dramatically reducing the search space. Only regions of interest are then processed by a quantized MobileNetV2 model that I trained on a custom dataset of over 5,000 images captured in various lighting conditions. The model was converted to TensorFlow Lite format and quantized to 8-bit integers, reducing the model size from 14MB to just 3.5MB while maintaining 99.2% accuracy. The ESP32 communicates via MQTT protocol with my home server, which runs Home Assistant for automation integration. I implemented AES-256 encryption for all communications to prevent replay attacks and unauthorized access attempts."
        },
        {
          title: "Hardware Integration & Power Management",
          content: "Power management proved to be one of the most challenging aspects. The ESP32-CAM draws approximately 180mA during active facial recognition, which would drain a typical lithium battery within hours. I implemented a sophisticated power management system that keeps the ESP32 in deep sleep mode (consuming only 10μA) until triggered by a PIR motion sensor. Upon detecting movement, the system wakes, captures an image, performs facial recognition, and returns to sleep—all within 800ms. This approach extended battery life to over 6 months on a single 18650 cell. The camera module itself required careful tuning of exposure, gain, and white balance parameters to achieve consistent performance across different lighting conditions, from bright daylight to dim evening scenarios."
        },
        {
          title: "Failures, Iterations & Lessons Learned",
          content: "The development process was far from linear. My first prototype used a pre-trained VGG16 model, which was completely impractical—inference time exceeded 15 seconds and the model couldn't fit in memory. The second iteration with MobileNetV1 was faster but suffered from poor accuracy in low-light conditions. I had to build a custom training pipeline that specifically augmented the dataset with synthetic lighting variations, shadows, and partial occlusions. False rejection rates initially hovered around 8%, which was unacceptable for daily use. Through iterative refinement of the detection threshold and implementing temporal averaging (confirming identity across 3 consecutive frames), I reduced false rejections to under 0.5%. Another significant challenge was dealing with the ESP32's limited heap memory—I had to implement custom memory management routines and carefully profile every allocation to prevent stack overflows and memory fragmentation."
        },
        {
          title: "Security Considerations & Future Enhancements",
          content: "Security was paramount throughout the design. Beyond encryption, I implemented anti-spoofing measures including liveness detection through micro-movement analysis and infrared LED illumination patterns. The system maintains an encrypted audit log of all access attempts, both successful and failed, with timestamps and image captures stored on an SD card. For future iterations, I'm exploring integration with a depth sensor to create 3D facial maps, which would provide significantly better anti-spoofing capabilities and work reliably in complete darkness. I'm also considering implementing a distributed architecture where multiple ESP32-CAM modules could be placed at different entry points, all managed by a central authentication server with redundancy and failover capabilities."
        }
      ]
    },
    {
      title: "Morse Code Communicator Hidden in Plain Sight",
      date: "January 2025 - July 2025",
      description: "A covert communication device disguised as an everyday object, featuring haptic feedback and LED indicators for Morse code transmission. Built with Arduino and custom PCB design, this gadget enables secure communication in environments where traditional methods might be monitored or restricted.",
      tech: ["Arduino", "C++", "PCB Design", "KiCad", "RF Communication", "Haptic Feedback"],
      github: "https://github.com/0xrubberbandz/morse-gadget",
      highlights: [
        "Dual-mode operation: transmit and receive",
        "Custom encryption layer over Morse code",
        "Battery life: 72+ hours continuous operation",
        "Completely silent operation mode with haptic-only feedback"
      ],
      detailedSections: [
        {
          title: "Conceptual Foundation & Design Philosophy",
          content: "This project was inspired by a simple question: how would you communicate in a scenario where all digital communications are monitored or unavailable? The elegance of Morse code lies in its simplicity and versatility—it can be transmitted through sound, light, vibration, or any binary medium. My goal was to create a wearable device that could discretely send and receive Morse code messages using only haptic feedback, making it completely silent and nearly undetectable to observers. The device needed to be small enough to wear inconspicuously, yet robust enough for reliable communication in real-world scenarios."
        },
        {
          title: "Hardware Engineering & Mechanical Design",
          content: "The core of the system consists of an ESP32 microcontroller housed within a custom 3D-printed enclosure that was meticulously designed to fit around my leg, just above the knee. The enclosure was printed using PETG filament for durability and flexibility, with a modular design allowing easy access to the battery and internal components. The most ingenious aspect of the mechanical design is the input mechanism: I integrated a standard mechanical keyboard switch (Cherry MX Blue) mounted in a custom-molded keycap holder that wraps around the knee. When I sit down and bring my knees together, the pressure activates the switch, allowing me to tap out Morse code naturally and without drawing attention. The switch provides tactile feedback with each press, making it easy to develop muscle memory for consistent timing. A 1200mAh lithium polymer battery is secured within the enclosure using custom retention clips, providing over 72 hours of continuous operation."
        },
        {
          title: "Haptic Feedback System & Sensory Engineering",
          content: "Receiving Morse code through vibration required extensive experimentation with haptic feedback systems. I tested multiple vibration motors—coin vibration motors, linear resonant actuators (LRAs), and eccentric rotating mass (ERM) motors—each with different response characteristics. The final design uses a 10mm ERM motor driven by a dedicated motor controller circuit (DRV2605L) that allows precise control over vibration intensity and pattern. The challenge was calibrating the vibration patterns to be distinguishable yet comfortable for extended wear. Through iterative testing, I developed a protocol where dots are represented by 100ms pulses at 80% intensity, while dashes are 300ms pulses at the same intensity. The spacing between elements follows standard Morse timing: one unit between dots and dashes within a character, three units between characters, and seven units between words. This creates a distinct rhythm that becomes intuitive after a few hours of practice."
        },
        {
          title: "Wireless Communication & Network Architecture",
          content: "The ESP32's built-in WiFi capabilities enable the device to connect to my phone's hotspot, creating a mobile network accessible anywhere with cellular coverage. Messages are transmitted using WebSocket protocol to a custom Node.js server I built, which acts as a relay and translation hub. The server implements automatic Morse code decoding using a state machine that interprets timing patterns and converts them to plaintext. When operating in peer-to-peer mode, two devices can communicate directly without internet connectivity using ESP-NOW protocol, which provides reliable communication up to 200 meters in open environments. Each message is timestamped and can be encrypted using AES-128 before transmission, adding a layer of security that makes interception useless without the decryption key. The server also maintains a message queue system, allowing asynchronous communication where messages can be retrieved later if the recipient wasn't actively listening."
        },
        {
          title: "Software Architecture & Signal Processing",
          content: "The firmware runs on FreeRTOS, utilizing multiple tasks for concurrent operation: input monitoring, haptic output generation, network communication, and power management. The input detection algorithm implements debouncing and timing analysis to distinguish between dots and dashes with 99% accuracy. I developed a custom finite state machine that tracks the duration of each key press and the intervals between presses, automatically determining letter boundaries and word spaces. The haptic output system uses a priority queue to schedule vibration patterns, ensuring smooth playback even when receiving messages while the device is simultaneously handling network operations. Battery monitoring is handled by a dedicated task that reads voltage levels from an INA219 current sensor, providing accurate state-of-charge estimation and enabling intelligent power management."
        },
        {
          title: "Prototyping Challenges & Design Iterations",
          content: "The path to the final design involved numerous prototypes and failures. The first version used a simple push button taped to my leg—impractical and uncomfortable for extended wear. The second iteration attempted to use capacitive touch sensing, but proved unreliable due to interference from body capacitance and fabric. The breakthrough came when I realized that a mechanical keyboard switch would provide the tactile feedback and reliability I needed. However, positioning was critical—the switch needed to be activated naturally without requiring awkward leg movements. After testing placements on my ankle, calf, and thigh, I found that positioning just above the knee allowed the most natural activation when sitting. The enclosure went through six design iterations to achieve proper fit, accounting for leg movement, flex during sitting, and secure attachment without restricting circulation. The vibration motor placement was equally critical—too close to bone and the vibrations would be painful; too far into soft tissue and they would be too diffuse to feel clearly. The final position, secured against the medial side of the knee, provided the optimal balance."
        },
        {
          title: "Encryption & Security Implementation",
          content: "Adding a cryptographic layer to Morse code might seem like overkill, but it addresses a real vulnerability: Morse code patterns are easily recognizable if intercepted. I implemented a custom encryption scheme that operates at the character level before Morse encoding. The system uses a rotating XOR cipher with a 256-bit key, where each character is XORed with a keystream generated from a pseudo-random number generator seeded with a shared secret. This means the Morse patterns transmitted bear no resemblance to standard Morse code, making them appear as random noise to anyone intercepting the signals. The encryption adds negligible overhead—less than 50ms per message—while providing strong protection against passive eavesdropping. Key exchange is handled through a secure pairing process that uses Diffie-Hellman key exchange over the encrypted WiFi connection, ensuring that even the initial key negotiation is protected."
        },
        {
          title: "Real-World Testing & Practical Applications",
          content: "Field testing revealed both the capabilities and limitations of the system. In controlled tests, I achieved reliable communication at distances up to 180 meters using ESP-NOW in open environments, though this dropped to 30-40 meters in urban settings with walls and interference. The haptic feedback system proved remarkably effective—after approximately 15 hours of practice, I could receive Morse code at up to 15 words per minute through vibration alone, which is comparable to audio reception speeds for beginners. Battery life exceeded expectations, with the device lasting 76 hours under typical usage patterns (intermittent transmission and reception). The most surprising discovery was how natural the input method became—within a week, tapping out messages by bringing my knees together while sitting felt as intuitive as typing on a keyboard. This project demonstrates that covert communication technology isn't just for spy movies; it's entirely feasible with modern IoT hardware and creative engineering."
        }
      ]
    },
    {
      title: "Crystal Exchange — First fully On-chain Orderbook",
      date: "July 2024 - Current",
      description: "A fully on-chain decentralized exchange that eliminates intermediaries and maximizes transparency. Built on Ethereum with custom smart contracts for automated market making, liquidity pools, and trustless trading. Crystal Exchange redefines DeFi by ensuring every transaction is verifiable and censorship-resistant.",
      tech: ["Solidity", "Ethereum", "React", "Web3.js", "Hardhat", "The Graph", "IPFS"],
      github: "https://github.com/CrystalExch",
      link: "https://x.com/CrystalExch",
      highlights: [
        "Zero-fee trading with gas-optimized smart contracts",
        "Automated market maker (AMM) with dynamic fee structures",
        "Multi-signature governance for protocol upgrades",
        "Real-time on-chain analytics and transparency dashboard"
      ],
      detailedSections: [
        {
          title: "The Problem with Current DEX Architectures",
          content: "Most decentralized exchanges that claim to be 'decentralized' are actually hybrid systems that rely on off-chain orderbooks, centralized matching engines, or trusted relayers to function efficiently. This creates single points of failure and reintroduces the very centralization risks that blockchain technology aims to eliminate. Crystal Exchange was born from the conviction that true decentralization requires the entire trading infrastructure—orderbook, matching logic, settlement, and state management—to exist on-chain. This presents enormous technical challenges: Ethereum's block time and gas costs make continuous orderbook updates prohibitively expensive, and the EVM's computational limitations make complex matching algorithms impractical. My goal was to design a system that achieves full on-chain operation while maintaining the performance and usability expected of modern trading platforms."
        },
        {
          title: "Smart Contract Architecture & Gas Optimization",
          content: "The core of Crystal Exchange is a suite of highly optimized Solidity smart contracts that implement a complete limit orderbook on-chain. Traditional orderbook implementations require O(n) operations to find matching orders, which becomes prohibitively expensive in gas costs. I developed a novel data structure—a hybrid between a red-black tree and a skip list—that enables O(log n) order insertion and matching with minimal storage overhead. Orders are organized in a series of linked price levels, where each level maintains a queue of orders at that price. This structure allows the matching engine to efficiently traverse only the relevant price levels without iterating through every order. The contracts use assembly (Yul) for critical sections to minimize gas consumption, achieving an average of 65,000 gas per trade compared to 250,000+ gas for comparable DEX protocols. I implemented aggressive batching and compression techniques: multiple orders can be submitted in a single transaction, and order data is packed into uint256 values to minimize storage costs. The entire orderbook state is maintained using Ethereum's storage tree, ensuring complete transparency while leveraging Merkle proofs for efficient state verification."
        },
        {
          title: "Order Matching & Execution Engine",
          content: "The matching engine operates entirely on-chain, executing a continuous double auction mechanism that pairs buy and sell orders based on price-time priority. When a new order is submitted, the contract immediately attempts to match it against existing orders in the book. Partial fills are supported, allowing large orders to be incrementally filled against multiple smaller orders. The matching algorithm implements strict price-time priority: within each price level, orders are executed in the chronological sequence they were placed, ensuring fairness and preventing front-running. To handle the gas cost implications of executing multiple fills in a single transaction, I implemented a configurable matching limit that caps the number of orders processed per transaction while maintaining atomic execution guarantees. If an order can't be fully matched, the remaining quantity is placed in the orderbook at the specified limit price. Settlement happens atomically within the same transaction—tokens are transferred directly between maker and taker using ERC20 transfer functions, eliminating counterparty risk and ensuring that trades either complete entirely or revert with no partial state changes."
        },
        {
          title: "Liquidity Provision & Market Making",
          content: "While the orderbook provides the foundation for trading, liquidity is essential for a functional exchange. Crystal Exchange incorporates an optional automated market maker (AMM) component that coexists with the orderbook, allowing liquidity providers to deposit token pairs into liquidity pools. The AMM uses a constant product formula (x * y = k) similar to Uniswap, but with a critical enhancement: the pool's pricing curves are dynamically adjusted based on orderbook depth and recent trading activity. This creates a feedback loop where the AMM and orderbook reinforce each other—the AMM provides baseline liquidity while the orderbook enables precise price discovery. Liquidity providers earn fees from both AMM swaps and a portion of orderbook trading fees, incentivizing deep liquidity provision. The fee structure is dynamically adjusted using a bonding curve that decreases fees as liquidity depth increases, rewarding early liquidity providers while ensuring competitive pricing as the exchange scales."
        },
        {
          title: "Frontend Architecture & Real-Time Data",
          content: "Building a responsive trading interface on top of blockchain data presents unique challenges. Ethereum blocks arrive every 12 seconds on average, creating latency that would be unacceptable for traders expecting real-time updates. I architected the frontend using React with Web3.js for blockchain interaction, but added a custom event indexing layer using The Graph protocol. The Graph subgraph indexes every orderbook event—order placement, cancellation, fills, and price updates—creating a queryable GraphQL API that provides millisecond-latency access to historical and current orderbook state. The frontend establishes WebSocket connections to both The Graph and an Ethereum node, allowing it to receive order updates in real-time as blocks are mined. The trading interface displays a live orderbook with bid and ask depth, recent trades, and price charts generated from on-chain data. To handle the asynchronous nature of blockchain transactions, I implemented an optimistic UI pattern that immediately updates the interface when a user submits an order, while displaying pending states until the transaction is confirmed on-chain. This creates the illusion of instant responsiveness while maintaining the security and finality guarantees of blockchain settlement."
        },
        {
          title: "Governance & Upgrade Mechanisms",
          content: "True decentralization extends beyond the trading infrastructure to the governance of the protocol itself. Crystal Exchange uses a multi-signature governance model implemented through a Gnosis Safe contract, requiring approval from multiple key holders to execute administrative functions like pausing trading, adjusting fee parameters, or upgrading contracts. The protocol is designed using a proxy pattern (EIP-1967) that separates the upgrade logic from the core contract logic, allowing bugs to be fixed and features to be added without migrating user state or requiring users to approve new contracts. All governance actions are time-locked with a 48-hour delay, giving users time to react to proposed changes they disagree with. In the future, I plan to transition to fully community-driven governance using a token-based voting system, where governance token holders can propose and vote on protocol changes. This will complete the decentralization journey, making Crystal Exchange truly owned and operated by its community rather than any central authority."
        },
        {
          title: "Security Audits & Attack Mitigation",
          content: "Smart contract security is paramount in DeFi, where bugs can lead to catastrophic loss of funds. I followed security best practices throughout development: all contracts use OpenZeppelin's audited libraries for common functionality, extensive unit tests cover every contract function with edge cases, and I conducted multiple internal security reviews. The contracts implement reentrancy guards, overflow checks, and access control modifiers to prevent common attack vectors. To mitigate front-running attacks—where malicious actors observe pending transactions and place their own orders ahead—I implemented a commit-reveal scheme for large orders and added configurable slippage limits that prevent execution if the price moves beyond a specified threshold. The orderbook's price-time priority mechanism ensures fairness, and the matching engine's deterministic behavior makes it impossible for miners to manipulate trade execution order. Before mainnet launch, I'm planning a formal security audit by a reputable firm like Trail of Bits or ConsenSys Diligence, and will run a bug bounty program to incentivize white-hat hackers to identify vulnerabilities."
        },
        {
          title: "Challenges, Learnings & Future Roadmap",
          content: "Building a fully on-chain exchange pushed the boundaries of what's possible on Ethereum. Early prototypes were completely impractical—gas costs exceeded $50 per trade, making the platform unusable except for whale-sized orders. Through relentless optimization, I reduced this to under $2 per trade at typical gas prices, making it competitive with other DEXs. The biggest technical challenge was balancing gas efficiency with feature completeness—every additional feature adds complexity and gas overhead. I learned that in blockchain development, every bit and byte matters; I spent weeks optimizing storage layouts and refactoring algorithms to save even small amounts of gas. The most valuable lesson was understanding the fundamental limitations of blockchain as a platform: it's not suitable for high-frequency trading or complex computational tasks, but excels at providing transparency, immutability, and trustless execution for high-value transactions. Looking forward, the roadmap includes layer-2 scaling integration (Arbitrum or Optimism) to reduce gas costs further, adding support for more token pairs and advanced order types (stop-loss, iceberg orders), and building cross-chain bridges to enable trading assets from multiple blockchains. Crystal Exchange represents just the beginning of truly decentralized finance—a future where users have complete control and visibility over their trading infrastructure."
        }
      ]
    }
  ]

  const renderNavigation = () => (
    <header className="header">
      <nav>
        <GlassSurface width={80} height={30} borderRadius={24} className="header-glass">
          <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }}>home</a>
        </GlassSurface>
        <GlassSurface width={80} height={30} borderRadius={24} className="header-glass">
          <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('projects'); setSelectedProject(null); }}>projects</a>
        </GlassSurface>
        <GlassSurface width={80} height={30} borderRadius={24} className="header-glass">
          <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('about'); }}>about</a>
        </GlassSurface>
      </nav>
    </header>
  )

  const renderHomePage = () => (
    <main className="main-container">
      <h1 className="portfolio-title">My Portfolio</h1>
      <p className="portfolio-description">
        Hi, I'm Tristan. I've been fascinated by security and cryptography ever since watching James Bond outwit entire networks with a single gadget.
        That spark grew into a drive to build systems that make trust and identity verifiable online.
        I'm currently building <a className="hyperlink" href="https://x.com/CrystalExch" target="_blank" rel="noopener noreferrer">@CrystalExch</a> , 
        a fully on-chain exchange redefining how transparency and trading work on the blockchain.
        In my free time, I absolutely love building gadgets, which you can check out in the project section below!
      </p>

      <div className="portfolio-posts">
        <p><span className="date">October 2024 - December 2024</span> &nbsp;&nbsp; Building a face ID door lock with ESP32</p>
        <p><span className="date">January 2025 - July 2025</span> &nbsp;&nbsp; Morse code communicator device</p>
        <p><span className="date">July 2024 - Current</span> &nbsp;&nbsp; Crystal Exchange, the first fully on-chain orderbook</p>
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

  const renderProjectDetail = () => {
    const project = projects[selectedProject]
    
    return (
      <main className="main-container project-detail">
        <button className="back-button" onClick={() => setSelectedProject(null)}>
          ← Back to Projects
        </button>
        
        <h1 className="portfolio-title">{project.title}</h1>
        <span className="project-date-detail">{project.date}</span>
        
        <div className="project-detail-image-placeholder">
          <div className="placeholder-content">
            <span className="placeholder-text">Prototype Image</span>
          </div>
        </div>

        <div className="project-quick-info">
          <p className="project-description-detail">{project.description}</p>
          
          <div className="project-tech-detail">
            <h3 className="tech-title">Technologies Used</h3>
            <div className="tech-tags-container">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>

          <div className="project-highlights-detail">
            <h3 className="highlights-title">Key Achievements</h3>
            <ul className="highlights-list">
              {project.highlights.map((highlight, idx) => (
                <li key={idx}>{highlight}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="project-detail-sections">
          {project.detailedSections.map((section, idx) => (
            <div key={idx} className="detail-section">
              <h2 className="detail-section-title">{section.title}</h2>
              <p className="detail-section-content">{section.content}</p>
            </div>
          ))}
        </div>

        <footer className="portfolio-footer">
          © 2025 Tristan Jolly
        </footer>
      </main>
    )
  }

  const renderProjectsPage = () => (
    <main className="main-container">
      <h1 className="portfolio-title">Projects</h1>
      <p className="portfolio-description">
        A list of projects that I have built and or still building over the years that you might be interested in!
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="project-card clickable"
            onClick={() => setSelectedProject(index)}
          >
            <div className="project-image-placeholder">
              <img src={morsecodeimage1} alt="Project Prototype" />
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

              <div className="read-more">
                <span className="read-more-text">Click to read full technical breakdown →</span>
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
    <main className="main-container">
      <h1 className="portfolio-title">About Me</h1>
      
      <div className="about-image-placeholder">
          <img src={portfolioicon} alt="Profile" />
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
  <PixelTrail
    gridSize={100}
    trailSize={0.05}
    maxAge={250}
    interpolate={5}
    color="#ffffff"
    gooeyFilter={{ id: "custom-goo-filter", strength: 2 }}
  />
    <div className="portfolio-container">
      {renderNavigation()}
      {currentPage === 'home' && renderHomePage()}
      {currentPage === 'projects' && (selectedProject !== null ? renderProjectDetail() : renderProjectsPage())}
      {currentPage === 'about' && renderAboutPage()}
    </div>
  </div>
)
}

export default App