import { useState } from 'react';
import PageHero from '../components/PageHero';
import Card from '../components/Card';
import './Home.css';

const Home = () => {
  const [openInspiration, setOpenInspiration] = useState(null);

  const inspirations = [
    {
      id: 1,
      name: "François Forme",
      image: "./francoisf.png",
      description: "During my two years studying for my technical university diploma, François was the person who supported me the most throughout my studies and who always encouraged me to pursue the projects I wanted to do. With his knowledge in a wide range of fields, he is a role model for me."
    },
    {
      id: 2,
      name: "Patrice Michel",
      image: "./Patrice-Michel.png",
      description: "Patrice Michel was one of my teachers during my preparatory year in engineering science. He is also a researcher at the Tésa laboratory. He is a very inspiring person who is very good at mathematics and has an extraordinary ability to think."
    },
    {
      id: 3,
      name: "Grace Hopper",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800",
      description: "Computer science pioneer and United States Navy rear admiral who developed the first compiler and popularized the idea of machine-independent programming languages. Her innovative thinking and determination to make programming more accessible continue to inspire generations of developers."
    }
  ];

  const toggleInspiration = (id) => {
    setOpenInspiration(openInspiration === id ? null : id);
  };

  return (
    <div className="page">
      <PageHero 
        title="ADRIEN DARRIET" 
        subtitle="Engineering Student & Designer"
        buttons={
          <>
            <a href="/CVEN.pdf" className="btn btn-primary" download>Download CV</a>
            <a href="https://www.linkedin.com/in/adrien-darriet/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">LinkedIn</a>
          </>
        }
        lightImage="/bcb.png"
        darkImage="/bcn.png"
      />
      
      <div className="container">
        <section className="who-am-i-section">
          <div className="images-cascade">
            <div className="cascade-image img-1">
              <img src="./blockchain.png" alt="Workspace" />
            </div>
            <div className="cascade-image img-2">
              <img src="./pfp.png" alt="Coding" />
            </div>
            <div className="cascade-image img-3">
              <img src="./electronics.png" alt="Development" />
            </div>
          </div>
          <div className="who-am-i-content">
            <h2>Who am I ?</h2>
            <p>
              Hello, I am Adrien.
            </p>
            <br />
            <p>
              After three years in Toulouse where I was in in a Physical Measurements HND for two years 
              and in undergraduate courses to prepare nationwide competitive exams for one year, I decided
              to enter in the engineering school ENSEEIHT.
            </p>
            <br />
            <p>
              Always preocuped by new technologies and their applications, I am passionate about electronics,
              mathematices, computer science and blockchain. Those elements combined made my way through this 
              school in the Electronic, Electrical Energy, and Automation program.
            </p>
          </div>
        </section>

        <Card>
          <h2>My Inspirations</h2>
          <p>
            I draw inspiration from innovators who push the boundaries of what's possible. From tech pioneers 
            who revolutionized industries to educators who share knowledge freely, I believe in continuous 
            learning and the power of technology to transform lives.
          </p>
          
          <div className="inspirations-list">
            {inspirations.map((person) => (
              <div key={person.id} className="inspiration-item">
                <button 
                  className={`inspiration-header ${openInspiration === person.id ? 'active' : ''}`}
                  onClick={() => toggleInspiration(person.id)}
                >
                  <span>{person.name}</span>
                  <span className="arrow">{openInspiration === person.id ? '▲' : '▼'}</span>
                </button>
                
                {openInspiration === person.id && (
                  <div className="inspiration-content">
                    <h3 className="inspiration-title">{person.name}</h3>
                    <div className="inspiration-body">
                      <div className="inspiration-image">
                        <img src={person.image} alt={person.name} />
                      </div>
                      <div className="inspiration-text">
                        <p>{person.description}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h2>More About Me</h2>

          <div className="video-container">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Home;
