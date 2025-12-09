import PageHero from '../components/PageHero';
import Card from '../components/Card';
import './Interests.css';

const Interests = () => {
  return (
    <div className="page">
      <PageHero 
        title="Interests & Other Activities" 
        imageUrl="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070"
      />
      
      <div className="container">
        <Card>
          <h2 style={{ textAlign: 'center' }}>Sports & Physical Activities</h2>
          <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 2rem' }}>
            Maintaining an active lifestyle is essential to me. Sports not only keep me physically fit 
            but also help me develop discipline, teamwork, and mental resilience.
          </p>
          
          <div className="sports-section">
            <div className="sport-item">
              <h3>Tennis</h3>
              <p>
                Tennis is the sport I have played since I was a child. Over the years, I have been able to play and develop my skills at the Save Tennis Club, a club that has supported me and enabled me to win multiple individual tournaments and two team tournaments: Elite and the Patrice Dominguez Trophy.
              </p>
              <div className="sport-images">
                <div className="sport-image">
                  <img src="./tennis3.png" alt="Tennis 3" />
                </div>
                <div className="sport-image">
                  <img src="./tennis2.png" alt="Tennis 2" />
                </div>
                <div className="sport-image">
                  <img src="./tennis1.png" alt="Tennis 1" />
                </div>
              </div>
            </div>

            <div className="sport-item">
              <h3>Football</h3>
              <p>
                I have been playing football for 4 years to help my village team. Playing as a left 
                midfielder, I am as important in defense as in attack.
              </p>
              <div className="football-image">
                <img src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=800" alt="Football" />
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 style={{ textAlign: 'center' }}>Cryptocurrency & Blockchain</h2>
          <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 2rem' }}>
            I'm fascinated by the revolutionary potential of blockchain technology and decentralized systems. 
            I actively follow developments in the crypto space and explore the technical aspects of 
            blockchain protocols.
          </p>
          
          <div className="interest-section">
            <h3 style={{ textAlign: 'center' }}>Areas of Interest</h3>
            <div className="interest-grid">
              <div className="interest-card">
                <h4>DeFi</h4>
                <p>
                  I'm exploring decentralized finance protocols and smart contract development.
                  I'm also learning the fundamentals of blockchain.
                </p>
              </div>
              
              <div className="interest-card">
                <h4>NFTs & Web3</h4>
                <p>
                  I'm following the evolution of digital ownership and the Web3 ecosystem. I'm particularly 
                  interested in the intersection of art, technology, and blockchain, and how NFTs are changing 
                  the way we think about digital assets.
                </p>
              </div>
              
              <div className="interest-card">
                <h4>Blockchain Development</h4>
                <p>
                  I'm learning Solidity and exploring smart contract development. My goal is to 
                  master this programation language to develop this part of my apps.
                </p>
              </div>
              
              <div className="interest-card">
                <h4>Crypto Trading</h4>
                <p>
                  I'm studying market trends, technical analysis, and risk management strategies. I use my 
                  data analysis skills to make informed investment decisions and understand the psychology 
                  behind market movements.
                </p>
              </div>
            </div>
            
            <div className="blockchain-image">
              <img src="./btcf.png" alt="Blockchain Technology" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Interests;
