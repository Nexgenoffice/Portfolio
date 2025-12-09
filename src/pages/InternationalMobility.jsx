import { useState } from 'react';
import PageHero from '../components/PageHero';
import Card from '../components/Card';
import './InternationalMobility.css';

const InternationalMobility = () => {
  const [londonIndex, setLondonIndex] = useState(0);
  const [munichIndex, setMunichIndex] = useState(0);
  const [cambrilsIndex, setCambrilsIndex] = useState(0);

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
            During these three years at ENSEEIHT we have to make 12 weeks abroad.
          </p>
          <br />
          <p style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 1rem' }}>
            I am currently thinking about how I am going to spend this period abroad. 
            I have three choices available to me.
          </p>
          <br />
          
          <div className="mobility-grid">
            <div className="mobility-card">
              <h3>Internship Abroad in my Company</h3>
              <p className="mobility-description">
                The first option would be to spend some time abroad at my company, NXP. 
                The destinations on offer are Milan, Chandler, and Seoul. 
                I'm drawn to Seoul because I've never been to Asia and would like to discover new cultures.
              </p>
              <div className="mobility-image">
                <img src="./nxp.png" alt="Exchange Program" />
              </div>
            </div>

            <div className="mobility-card">
              <h3>Internship Abroad in another Company</h3>
              <p className="mobility-description">
                I also have the option of doing my internship abroad in another company. 
                If I had to choose now, I think I would choose a company in the hardware field to discover new things.
                Also, I would like to go to Switzerland.
              </p>
              <div className="mobility-image">
                <img src="./suisse.png" alt="Workshops" />
              </div>
            </div>

            <div className="mobility-card">
              <h3>Semester Abroad</h3>
              <p className="mobility-description">
                We have the opportunity to spend a semester abroad in tirhd year. 
                I would like to do this in the field of mathematical models and statistics related to economics.
                My favorite destinations would be London school of economics or ETH Zurich.  
                I am aware that this differs from electronics, which is my core subject, but it would enable me to move closer to my goal.
              </p>
              <div className="mobility-image">
                <img src="./lse.png" alt="Research" />
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
              <h3>London</h3>
              <p className="travel-description">
                Personal travel alone for new year eve.
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
              <h3>Munich</h3>
              <p className="travel-description">
                Personal travel alone during summer holidays.
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
              <h3>Cambrils</h3>
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
          </div>
        </Card>
      </div>
    </div>
  );
};

export default InternationalMobility;
