import PageHero from '../components/PageHero';
import Card from '../components/Card';
import './EngineeringCourse.css';

const EngineeringCourse = () => {
  return (
    <div className="page">
      <PageHero 
        title="Engineering Course" 
        imageUrl="./N7.png"
      />
      
      <div className="container">
        <Card>
          <h2>Academic Progress</h2>
          <div className="school-section">
            <h3>INP-ENSEEIHT</h3>
            <p className="period">2025 - Present</p>
            <p>
            I am currently pursuing an engineering degree in the EEEA program at INP-ENSEEIHT, 
            which covers electronics, electrical engineering and automation. This technical background 
            is helping me develop a structured approach to problem-solving and verification. My main 
            interests lie in financial markets, data analysis and quantitative methods. I am 
            particularly interested in how mathematical and computational tools can be used to study 
            market behaviour. This page presents selected coursework and projects from my degree.
            </p>
            <div className="academic-images">
              <div className="academic-image">
                <img src="./elec.png" alt="Campus" />
              </div>
              <div className="academic-image">
                <img src="./quant.png" alt="Studies" />
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 style={{ textAlign: 'center' }}>Practical Progress</h2>
          <div className="practical-section">
            <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 2rem' }}>
              Since the beginning of the year at ENSEIHT, we have had the opportunity to carry out a series of practical work on “basic electronic functions,” in which we built a device for measuring real and complex impedance using operational amplifiers, multipliers, and filters.
              The project ended with a report and presentation of our product to our teachers.
            </p>
            
            <div className="practical-images">
              <div className="practical-image-large">
                <img src="./electp.png" alt="Practical Work" />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default EngineeringCourse;
