import { useState } from 'react';
import PageHero from '../components/PageHero';
import Card from '../components/Card';
import './InternationalMobility.css';

const InternationalMobility = () => {
  const [londonIndex, setLondonIndex] = useState(0);
  const [munichIndex, setMunichIndex] = useState(0);
  const [cambrilsIndex, setCambrilsIndex] = useState(0);
  const [faroIndex, setFaroIndex] = useState(0);

  const londonImages = [
    './london3.png',
    './london2.png',
    './london1.png'
  ];

  const munichImages = [
    './munich1.png',
    './munich2.png',
    './munich3.png'
  ];

  const cambrilsImages = [
    './cambrils1.png',
    './cambrils2.png',
    './cambrils3.png'
  ];

  const faroImages = [
    './portugal1.png',
    './portugal2.png',
    './portugal3.png',
    './portugal4.png'
  ];

  const nextImage = (setter, current, length) => {
    setter((current + 1) % length);
  };

  const prevImage = (setter, current, length) => {
    setter((current - 1 + length) % length);
  };

  return (
    <div className="page">
      <PageHero 
        title="International Mobility" 
        imageUrl="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2035"
      />
      
      <div className="container">
        <Card>
          <h2 style={{ textAlign: 'center' }}>Mobility at ENSEEIHT</h2>
          <p style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 1rem' }}>
            My international mobility is now confirmed: next summer, I will join NXP Semiconductors in Eindhoven, the Netherlands, for an internship in Digital Verification.
          </p>
          <br />
          <p style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 1rem' }}>
            This internship will give me the opportunity to explore digital verification in an international engineering environment. I will deepen my understanding of how digital designs are checked against their specifications, from defining relevant test scenarios to analyzing simulation results and investigating unexpected behavior.
          </p>
          <br />
          <p style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 1rem' }}>
            Building on my current experience in verification at NXP, this new setting and technical focus will help me broaden my skills, take on new challenges and learn from engineers working on digital systems. I am also looking forward to discovering Eindhoven and experiencing life in the Netherlands.
          </p>
          
          <div className="mobility-grid">
            <div className="mobility-card nxp-card">
              <img className="nxp-card-background" src="./nxp.png" alt="" aria-hidden="true" />
              <h3>Digital Verification Internship — NXP Eindhoven</h3>
              <p className="mobility-description">
                Summer 2027 · Eindhoven, the Netherlands
              </p>
              <div className="mobility-document-links">
                <a className="btn btn-primary" href="/CVEN.pdf" download>
                  Download CV · English
                </a>
                <a className="btn btn-primary" href="/CoverLetterEN.pdf" download>
                  Download cover letter · English
                </a>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 style={{ textAlign: 'center' }}>Personal Travels</h2>
          <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem' }}>
            Beyond academic mobility, my personal travels have enriched my understanding of diverse cultures 
            and broadened my worldview, making me a more adaptable and culturally aware engineer.
          </p>
          
          <div className="travel-grid">
            <div className="travel-card">
              <h3>London, England</h3>
              <p className="travel-description">
                Travel for new year eve.
              </p>
              <div className="travel-image-carousel">
                <button 
                  className="carousel-btn prev" 
                  onClick={() => prevImage(setLondonIndex, londonIndex, londonImages.length)}
                >
                  ‹
                </button>
                <div className="travel-image">
                  <img src={londonImages[londonIndex]} alt="London" />
                </div>
                <button 
                  className="carousel-btn next" 
                  onClick={() => nextImage(setLondonIndex, londonIndex, londonImages.length)}
                >
                  ›
                </button>
              </div>
            </div>

            <div className="travel-card">
              <h3>Munich, Germany</h3>
              <p className="travel-description">
                Travel during summer holidays.
              </p>
              <div className="travel-image-carousel">
                <button 
                  className="carousel-btn prev" 
                  onClick={() => prevImage(setMunichIndex, munichIndex, munichImages.length)}
                >
                  ‹
                </button>
                <div className="travel-image">
                  <img src={munichImages[munichIndex]} alt="Munich" />
                </div>
                <button 
                  className="carousel-btn next" 
                  onClick={() => nextImage(setMunichIndex, munichIndex, munichImages.length)}
                >
                  ›
                </button>
              </div>
            </div>

            <div className="travel-card">
              <h3>Cambrils, Spain</h3>
              <p className="travel-description">
                Travel every year during summer holidays with my partner.
              </p>
              <div className="travel-image-carousel">
                <button 
                  className="carousel-btn prev" 
                  onClick={() => prevImage(setCambrilsIndex, cambrilsIndex, cambrilsImages.length)}
                >
                  ‹
                </button>
                <div className="travel-image">
                  <img src={cambrilsImages[cambrilsIndex]} alt="Cambrils" />
                </div>
                <button 
                  className="carousel-btn next" 
                  onClick={() => nextImage(setCambrilsIndex, cambrilsIndex, cambrilsImages.length)}
                >
                  ›
                </button>
              </div>
            </div>

            <div className="travel-card travel-card-faro">
              <h3>Faro</h3>
              <p className="travel-description">
                A trip to Faro in portugal with my school friends.
              </p>
              <div className="travel-image-carousel">
                <button
                  className="carousel-btn prev"
                  onClick={() => prevImage(setFaroIndex, faroIndex, faroImages.length)}
                >
                  ‹
                </button>
                <div className="travel-image">
                  <img src={faroImages[faroIndex]} alt="Faro, Portugal" />
                </div>
                <button
                  className="carousel-btn next"
                  onClick={() => nextImage(setFaroIndex, faroIndex, faroImages.length)}
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default InternationalMobility;
