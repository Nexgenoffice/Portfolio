import PageHero from '../components/PageHero';
import Card from '../components/Card';
import './CivicEngagement.css';

const CivicEngagement = () => {
  return (
    <div className="page">
      <PageHero 
        title="Civic Engagement" 
        imageUrl="./reforestation.png"
      />
      
      <div className="container">
        <Card>
          <h2>Engagement at INP-ENSEEIHT</h2>
          <p style={{ textAlign: 'center' }}>
            As students at ENSEIHT, we must participate in a project related to civic engagement.. It can materialise itself 
            by being in an association or taking part in an event or volunteering.
          </p>
          <br />
          <p style={{ textAlign: 'center' }}>
            In our school many clubs exist. The place where I would like to get involved is Teddn7 which brings together students, manufacturers, and teachers with the aim of complying with the Grenoble agreement of COP2 and obtaining the DD&RS label.
          </p>
          <br />
          <p style={{ textAlign: 'center' }}>
            As ecology is important to me, I believe this is where I need to be.
          </p>
          
          <div className="enseeiht-logo">
            <img src="./teddn7-nobackground.png" alt="INP-ENSEEIHT Logo" />
          </div>
        </Card>

        <Card>
          <h2>Engagement at Tree Nation</h2>
          
          <div className="tree-nation-content">
            <div className="tree-nation-text">
              <p>
                I am very concerned about our future, particularly in terms of the environment, 
                which is why I would like to get involved in the cause of ecology.
              </p>
              <br />
              <p>
                Last year, I founded a web3 project called Nadroots, with the aim of reducing the harmful 
                and energy-intensive ecological impact of blockchain through reforestation and awareness campaigns.
              </p>
              <br />
              <p>
                As part of this project, I had the opportunity to partner with Tree-Nation, the association 
                I would like to get involved with.
              </p>
              <br />
              <p>
                To this end, I plan to travel there to participate in a reforestation campaign by the end 
                of the 2025-2026 school year.
              </p>
              <br />
              <p>
                Ecology is a subject close to my heart and a cause I believe is noble to defend. Working 
                in a sector that is moving towards a greener transition but still has a long way to go, I 
                think it is important to strike a balance and contribute to saving our planet.
              </p>
            </div>

            <div className="tree-nation-images">
              <div className="engagement-image">
                <img src="./Tree-Nation-Default.png" alt="Environmental action" />
              </div>
              <div className="engagement-image">
                <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800" alt="Tree planting" />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CivicEngagement;
