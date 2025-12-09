import PageHero from '../components/PageHero';
import Card from '../components/Card';
import './CareerProjects.css';

const CareerProjects = () => {
  return (
    <div className="page">
      <PageHero 
        title="Career & Projects" 
        imageUrl="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070"
      />
      
      <div className="container">
        <section className="cv-section">
          <div className="button-group">
            <a href="/CVEN.pdf" className="btn btn-primary" target="_blank" rel="noopener noreferrer">CV English</a>
            <a href="/CVFR.pdf" className="btn btn-primary" target="_blank" rel="noopener noreferrer">CV Français</a>
            <a href="https://www.linkedin.com/in/adrien-darriet/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">LinkedIn</a>
          </div>
        </section>

        <Card>
          <h2>Work-study program at NXP Semiconductors</h2>
          
          <div className="experience-item">
            <div className="experience-content">
              <div className="experience-header">
                <h3>AMS verification Apprentice</h3>
                <span className="period">2025 - Curent</span>
              </div>
              <p className="company">NXP Semiconductors</p>
              <p>
                I'm currently making my work-study program at NXP Semiconductors in Toulouse.
                Working as an AMS verification apprentice, I am developing some programsto test and verify analog and mixed-signal components in integrated circuits. 
                I'm also developing website aiming to facilitate the learning of new employees in AMS verification.
              </p>
              <div className="tech-tags">
                <span>React</span>
                <span>Node.js</span>
                <span>TypeScript</span>
                <span>Verilog AMS</span>
                <span>Unix</span>
              </div>
            </div>
            <div className="experience-image">
              <img src="./nxp2.png" alt="Apprenticeship" />
            </div>
          </div>
        </Card>

        <Card>
          <h2>Internships at Gamba Group</h2>
          
          <div className="experience-item">
            <div className="experience-content">
              <div className="experience-header">
                <h3>Physical Measurements Technician</h3>
                <span className="period">April 2024 - June 2024</span>
              </div>
              <p className="company">Gamba Group</p>
              <p>
                As part of physical measurements HND, I completed an internship to validate my diploma.
                Assistance to engineers on acoustic and vibration issues. 
                Measurement of railway vibrations and intercom systems in the building sector.
              </p>
              <div className="tech-tags">
                <span>Python</span>
                <span>Office Pack</span>
                <span>Metrology</span>
              </div>
            </div>
            <div className="experience-image">
              <img src="./gamba.png" alt="Internship" />
            </div>
          </div>
        </Card>

        <Card>
          <h2>Academic Projects</h2>
          
          <div className="project-item">
            <div className="project-content">
              <h3>Sound waves in closed environments</h3>
              <p>
                During my second year of physical measurments HDN, I had the opportunity to carry out a project of my own initiative, supervised by one of my professors. 
                The subject was the propagation of waves in closed environments, where we observed that sound did not propagate constantly but rather in peaks and troughs, 
                leading to the same sound being heard at different volumes depending on where you were in the room.
              </p>
              <div className="tech-tags">
                <span>Java</span>
                <span>Docker</span>
                <span>Kubernetes</span>
                <span>Redis</span>
              </div>
            </div>
            <div className="project-image">
              <img src="./conc_stat_grand.gif" alt="Project" />
            </div>
          </div>
        </Card>

        <Card>
          <h2>Personal Projects</h2>
          
          <div className="project-item">
            <div className="project-content">
              <h3>Nadroots</h3>
              <p>
                Nadroots is a project I deployed during the Monad L1 blockchain testnet. The goal of Nadroots is to minimize the negative impact of blockchain through reforestation campaigns. 
                During this project, I created websites and two NFT collections, and I served as founder and community manager.
              </p>
              <div className="tech-tags">
                <span>React</span>
                <span>Vite</span>
                <span>JSON</span>
                <span>Design</span>
                <span>Management</span>
                <span>Ecology</span>
              </div>
              <div className="project-links">
                <a href="https://twitter.com/nadroots" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  𝕏 Twitter
                </a>
              </div>
            </div>
            <div className="project-image">
              <img src="./nadroots.png" alt="Project" />
            </div>
          </div>

          <div className="project-item">
            <div className="project-content">
              <h3>Rocky's Head</h3>
              <p>
                RRocky's Head (Rockyswap) is a project that will be deployed on the testnet on Seismic's L1 blockchain. 
                The goal is to create a secure swap platform with zero fees. 
                As founder and artist, my primary goal is to raise awareness of our team and build a community. 
                Our first community product: The Rocky's Head pfp generator (very addictive). 
                Composed of a team of 8 people, including 3 artists, we are also working on an NFT collection.
              </p>
              <div className="tech-tags">
                <span>GitHub</span>
                <span>Open Source</span>
                <span>React</span>
                <span>Vite</span>
                <span>JSON</span>
                <span>Design</span>
                <span>Management</span>
                <span>Ecology</span>
              </div>
              <div className="project-links">
                <a href="https://rocky-generator.vercel.app" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  🌐 Website
                </a>
                <a href="https://twitter.com/RockySeismic" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  𝕏 Twitter
                </a>
              </div>
            </div>
            <div className="project-image">
              <img src="./rocky.png" alt="Project" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CareerProjects;
